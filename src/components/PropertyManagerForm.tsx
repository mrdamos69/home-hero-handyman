"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { FORMSUBMIT_ENDPOINT } from "@/config/delivery";

/** Browser-side delivery via FormSubmit (their API blocks server calls). */
async function forwardToFormSubmit(data: FormData, subject: string) {
  const fields: Record<string, string> = {};
  data.forEach((value, key) => {
    if (value instanceof File || key.startsWith("_")) return;
    const text = String(value).trim();
    if (text) fields[key] = text;
  });
  fields._subject = subject;
  fields._template = "table";
  const res = await fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(fields),
  });
  if (!res.ok) throw new Error(`FormSubmit ${res.status}`);
}

const MAX_FILES = 8;
const MAX_FILE_MB = 10;

type Status = "idle" | "submitting" | "success" | "error";

export default function PropertyManagerForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const startedAt = useRef(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("_formType", "property-maintenance");
    data.set("_elapsed", String(Date.now() - startedAt.current));

    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/estimate", { method: "POST", body: data });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      if (json.forward) {
        try {
          await forwardToFormSubmit(
            data,
            `Property maintenance inquiry from ${String(data.get("name") || "website")}`
          );
        } catch (err) {
          console.error("FormSubmit delivery failed:", err);
        }
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error && err.message
          ? err.message
          : "We couldn't send your request. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="card text-center" role="status">
        <h2 className="text-2xl font-bold">Request Received</h2>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          Thank you for contacting Home Hero Handyman. Your project request has
          been received. We will review the details and contact you to discuss
          the next steps.
        </p>
        <button type="button" className="btn-outline mt-6" onClick={() => setStatus("idle")}>
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-6">
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="_company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="pm-company" className="field-label">Company name</label>
          <input id="pm-company" name="companyName" type="text" autoComplete="organization" className="field-input" />
        </div>
        <div>
          <label htmlFor="pm-name" className="field-label">Contact person *</label>
          <input id="pm-name" name="name" type="text" required autoComplete="name" className="field-input" />
        </div>
        <div>
          <label htmlFor="pm-email" className="field-label">Email *</label>
          <input id="pm-email" name="email" type="email" required autoComplete="email" className="field-input" />
        </div>
        <div>
          <label htmlFor="pm-phone" className="field-label">Phone *</label>
          <input id="pm-phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className="field-input" />
        </div>
        <div>
          <label htmlFor="pm-address" className="field-label">Property address *</label>
          <input id="pm-address" name="address" type="text" required className="field-input" />
        </div>
        <div>
          <label htmlFor="pm-units" className="field-label">Number of units</label>
          <select id="pm-units" name="units" className="field-input" defaultValue="1">
            <option>1</option>
            <option>2–4</option>
            <option>5–20</option>
            <option>21–50</option>
            <option>50+</option>
          </select>
        </div>
        <div>
          <label htmlFor="pm-frequency" className="field-label">One-time or recurring service</label>
          <select id="pm-frequency" name="frequency" className="field-input" defaultValue="One-time project">
            <option>One-time project</option>
            <option>Recurring maintenance</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="pm-contact" className="field-label">Preferred contact method</label>
          <select id="pm-contact" name="contactMethod" className="field-input" defaultValue="Email">
            <option>Email</option>
            <option>Phone call</option>
            <option>Text message</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="pm-description" className="field-label">Type of maintenance needed *</label>
        <textarea
          id="pm-description"
          name="description"
          required
          rows={5}
          className="field-input"
          placeholder="Turnover punch list, tenant repair requests, recurring visits — describe what you need."
        />
      </div>

      <div>
        <label htmlFor="pm-files" className="field-label">Photos or documents</label>
        <input
          id="pm-files"
          name="files"
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp,image/heic,image/heif,application/pdf"
          className="field-input cursor-pointer py-2 file:mr-3 file:rounded-btn file:border-0 file:bg-stone file:px-3 file:py-2 file:text-sm file:font-medium file:text-charcoal"
          aria-describedby="pm-files-hint"
        />
        <p id="pm-files-hint" className="mt-1.5 text-xs text-ink-soft">
          Up to {MAX_FILES} files, {MAX_FILE_MB} MB each. Photos or PDF punch lists.
        </p>
      </div>

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

      {status === "error" && (
        <p className="rounded-btn bg-red-50 px-4 py-3 text-sm font-medium text-red-800" role="alert">
          {errorMsg}
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto disabled:opacity-60">
        {status === "submitting" ? "Sending…" : "Discuss Property Maintenance"}
      </button>
    </form>
  );
}
