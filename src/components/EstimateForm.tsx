"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { serviceCategories } from "@/config/services";
import { FORMSUBMIT_ENDPOINT } from "@/config/delivery";

/** Browser-side delivery via FormSubmit (their API blocks server calls). */
async function forwardToFormSubmit(data: FormData, subject: string) {
  const fields: Record<string, string> = {};
  let attachments = 0;
  data.forEach((value, key) => {
    if (value instanceof File) {
      if (value.size > 0) attachments += 1;
      return;
    }
    if (key.startsWith("_")) return;
    const text = String(value).trim();
    if (text) fields[key] = text;
  });
  fields._subject = subject;
  fields._template = "table";
  if (attachments > 0) {
    fields.attachments_note = `${attachments} photo(s) attached on the site (not forwarded by email — ask the client to text them, or configure Resend).`;
  }
  const res = await fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(fields),
  });
  if (!res.ok) throw new Error(`FormSubmit ${res.status}`);
}

const MAX_FILES = 8;
const MAX_FILE_MB = 10;
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "video/mp4",
  "video/quicktime",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function EstimateForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fileError, setFileError] = useState("");
  const [fileNames, setFileNames] = useState<string[]>([]);
  const startedAt = useRef(Date.now());

  function validateFiles(files: FileList | null) {
    setFileError("");
    if (!files || files.length === 0) {
      setFileNames([]);
      return;
    }
    if (files.length > MAX_FILES) {
      setFileError(`Please attach up to ${MAX_FILES} files.`);
      return;
    }
    for (const file of Array.from(files)) {
      if (file.size > MAX_FILE_MB * 1024 * 1024) {
        setFileError(`"${file.name}" is larger than ${MAX_FILE_MB} MB.`);
        return;
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        setFileError(`"${file.name}" is not a supported format (photos or short videos only).`);
        return;
      }
    }
    setFileNames(Array.from(files).map((f) => f.name));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (fileError) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    // Simple time-based bot check alongside the honeypot field
    data.set("_elapsed", String(Date.now() - startedAt.current));

    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/estimate", { method: "POST", body: data });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong.");
      }
      if (json.forward) {
        try {
          await forwardToFormSubmit(
            data,
            `New project request from ${String(data.get("name") || "website")}`
          );
        } catch (err) {
          // The lead is already logged server-side; don't block the user.
          console.error("FormSubmit delivery failed:", err);
        }
      }
      setStatus("success");
      form.reset();
      setFileNames([]);
      window.scrollTo({ top: 0 });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error && err.message
          ? err.message
          : "We couldn't send your request. Please try again, or reach us directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="card border-amber/40 bg-white text-center" role="status">
        <svg viewBox="0 0 24 24" className="mx-auto h-12 w-12 text-amber-dark" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="m8.5 12.5 2.5 2.5 4.5-5" />
        </svg>
        <h2 className="mt-4 text-2xl font-bold">Request Received</h2>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          Thank you for contacting Home Hero Service. Your project request has
          been received. We will review the details and contact you to discuss
          the next steps.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-dark">
            Back to Home
          </Link>
          <button type="button" className="btn-outline" onClick={() => setStatus("idle")}>
            Send Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="card space-y-6">
      {/* Honeypot — hidden from real users, bots tend to fill it */}
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="_company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Full name *
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className="field-input" />
        </div>
        <div>
          <label htmlFor="phone" className="field-label">
            Phone number *
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className="field-input" />
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            Email *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field-input" />
        </div>
        <div>
          <label htmlFor="address" className="field-label">
            Project address or ZIP code *
          </label>
          <input id="address" name="address" type="text" required autoComplete="postal-code" className="field-input" />
        </div>
        <div>
          <label htmlFor="propertyType" className="field-label">
            Property type *
          </label>
          <select id="propertyType" name="propertyType" required className="field-input" defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>House</option>
            <option>Apartment</option>
            <option>Condo</option>
            <option>Rental property</option>
            <option>Commercial property</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="serviceCategory" className="field-label">
            Service category *
          </label>
          <select id="serviceCategory" name="serviceCategory" required className="field-input" defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {serviceCategories.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
            <option>Multiple categories / not sure</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="field-label">
          Project description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className="field-input"
          placeholder="Describe what needs to be repaired, installed or improved. A simple list works great."
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="taskCount" className="field-label">
            Number of tasks
          </label>
          <select id="taskCount" name="taskCount" className="field-input" defaultValue="1 task">
            <option>1 task</option>
            <option>2–3 tasks</option>
            <option>4–6 tasks</option>
            <option>7+ tasks</option>
          </select>
        </div>
        <div>
          <label htmlFor="urgency" className="field-label">
            Estimated urgency
          </label>
          <select id="urgency" name="urgency" className="field-input" defaultValue="Flexible">
            <option>Flexible</option>
            <option>Within a few days</option>
            <option>Within one week</option>
            <option>Specific deadline</option>
          </select>
        </div>
        <div>
          <label htmlFor="preferredDate" className="field-label">
            Preferred date
          </label>
          <input id="preferredDate" name="preferredDate" type="date" className="field-input" />
        </div>
        <div>
          <label htmlFor="preferredTime" className="field-label">
            Preferred time
          </label>
          <select id="preferredTime" name="preferredTime" className="field-input" defaultValue="Flexible">
            <option>Flexible</option>
            <option>Morning (8am–12pm)</option>
            <option>Afternoon (12pm–4pm)</option>
            <option>Late afternoon (4pm–6pm)</option>
          </select>
        </div>
        <div>
          <label htmlFor="contactMethod" className="field-label">
            Preferred contact method
          </label>
          <select id="contactMethod" name="contactMethod" className="field-input" defaultValue="Phone call">
            <option>Phone call</option>
            <option>Text message</option>
            <option>Email</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="files" className="field-label">
          Photos or a short video of the project area
        </label>
        <input
          id="files"
          name="files"
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp,image/heic,image/heif,video/mp4,video/quicktime"
          onChange={(e) => validateFiles(e.target.files)}
          className="field-input cursor-pointer py-2 file:mr-3 file:rounded-btn file:border-0 file:bg-stone file:px-3 file:py-2 file:text-sm file:font-medium file:text-charcoal"
          aria-describedby="files-hint"
        />
        <p id="files-hint" className="mt-1.5 text-xs text-ink-soft">
          Up to {MAX_FILES} files, {MAX_FILE_MB} MB each. JPG, PNG, WebP, HEIC photos or MP4/MOV video.
        </p>
        {fileError && (
          <p className="mt-1.5 text-sm font-medium text-red-700" role="alert">
            {fileError}
          </p>
        )}
        {fileNames.length > 0 && !fileError && (
          <p className="mt-1.5 text-xs text-ink-soft">Attached: {fileNames.join(", ")}</p>
        )}
      </div>

      <div className="space-y-3">
        <label className="flex items-start gap-3 text-sm text-ink">
          <input type="checkbox" name="isPropertyManager" value="yes" className="mt-0.5 h-5 w-5 accent-amber" />
          I&apos;m a landlord or property manager contacting about a rental property.
        </label>
        <label className="flex items-start gap-3 text-sm text-ink">
          <input type="checkbox" name="privacyAgree" value="yes" required className="mt-0.5 h-5 w-5 accent-amber" />
          <span>
            I agree to the{" "}
            <Link href="/privacy-policy" className="font-semibold text-amber-dark underline hover:text-charcoal">
              Privacy Policy
            </Link>{" "}
            and consent to being contacted about my request. *
          </span>
        </label>
      </div>

      {status === "error" && (
        <p className="rounded-btn bg-red-50 px-4 py-3 text-sm font-medium text-red-800" role="alert">
          {errorMsg}
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto disabled:opacity-60">
        {status === "submitting" ? "Sending…" : "Request an Estimate"}
      </button>
    </form>
  );
}
