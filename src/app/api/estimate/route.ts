import { NextRequest, NextResponse } from "next/server";

/**
 * Estimate/contact form handler.
 *
 * - With RESEND_API_KEY set (see .env.example), submissions are emailed via
 *   Resend to ESTIMATE_TO_EMAIL, with uploaded photos as attachments.
 * - Without a key, the route runs in DEMO MODE: it validates the submission,
 *   logs it to the server console and returns success, so the site works
 *   end-to-end before email is configured.
 */

const MAX_FILES = 8;
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "video/mp4",
  "video/quicktime",
  "application/pdf",
]);

// Simple in-memory rate limit: max 5 submissions / 10 minutes per IP.
// Good enough for a single-instance deployment (Vercel serverless resets
// occasionally, which only makes it more permissive, never blocking).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function esc(value: string): string {
  return value.replace(/[<>&"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    const data = await req.formData();

    // --- Spam checks -------------------------------------------------------
    // Honeypot: hidden field real users never fill.
    if (String(data.get("_company_website") || "").trim() !== "") {
      // Pretend success so bots don't learn anything.
      return NextResponse.json({ ok: true });
    }
    // Time check: humans need more than 3 seconds to fill the form.
    const elapsed = Number(data.get("_elapsed") || 0);
    if (elapsed > 0 && elapsed < 3000) {
      return NextResponse.json({ ok: true });
    }

    // --- Server-side validation -------------------------------------------
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const description = String(data.get("description") || "").trim();
    const privacyAgree = String(data.get("privacyAgree") || "");

    if (!name || name.length > 200) {
      return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
    }
    if (!phone || phone.length < 7 || phone.length > 30) {
      return NextResponse.json({ ok: false, error: "Please enter a valid phone number." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!description || description.length > 5000) {
      return NextResponse.json({ ok: false, error: "Please describe your project." }, { status: 400 });
    }
    if (privacyAgree !== "yes") {
      return NextResponse.json({ ok: false, error: "Please agree to the Privacy Policy." }, { status: 400 });
    }

    // --- File validation ----------------------------------------------------
    const files = data.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
    if (files.length > MAX_FILES) {
      return NextResponse.json({ ok: false, error: `Please attach up to ${MAX_FILES} files.` }, { status: 400 });
    }
    for (const file of files) {
      if (file.size > MAX_FILE_BYTES) {
        return NextResponse.json(
          { ok: false, error: `"${file.name}" is larger than 10 MB.` },
          { status: 400 }
        );
      }
      if (file.type && !ALLOWED_TYPES.has(file.type)) {
        return NextResponse.json(
          { ok: false, error: `"${file.name}" is not a supported file format.` },
          { status: 400 }
        );
      }
    }

    // --- Build the message ---------------------------------------------------
    const skip = new Set(["files", "_company_website", "_elapsed", "privacyAgree"]);
    const rows: string[] = [];
    data.forEach((value, key) => {
      if (skip.has(key) || value instanceof File) return;
      const text = String(value).trim();
      if (!text) return;
      rows.push(
        `<tr><td style="padding:6px 12px 6px 0;color:#6B675F;vertical-align:top">${esc(key)}</td><td style="padding:6px 0"><strong>${esc(text)}</strong></td></tr>`
      );
    });
    const html = `<h2 style="font-family:sans-serif">New project request</h2><table style="font-family:sans-serif;font-size:14px">${rows.join("")}</table><p style="font-family:sans-serif;font-size:12px;color:#6B675F">Attachments: ${files.length}</p>`;

    // --- Send or demo mode ----------------------------------------------------
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.log("[estimate] DEMO MODE — configure RESEND_API_KEY to receive emails.");
      console.log("[estimate] Submission:", Object.fromEntries(
        Array.from(data.entries()).filter(([k, v]) => !(v instanceof File) && !skip.has(k))
      ), `attachments: ${files.length}`);
      return NextResponse.json({ ok: true, demo: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );

    const { error } = await resend.emails.send({
      from: process.env.ESTIMATE_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.ESTIMATE_TO_EMAIL || email,
      replyTo: email,
      subject: `New project request from ${name}`,
      html,
      attachments,
    });

    if (error) {
      console.error("[estimate] Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your request right now. Please try again or contact us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[estimate] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
