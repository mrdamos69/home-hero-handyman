import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { business } from "@/config/business";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Home Hero Handyman LLC collects, uses and protects your information.",
  alternates: { canonical: "/privacy-policy" },
};

/**
 * Privacy Policy TEMPLATE. Review and adapt before launch — this is a starting
 * point, not legal advice. Consider having an attorney review it, especially
 * regarding California privacy requirements.
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Privacy Policy", path: "/privacy-policy" },
            ])
          ),
        }}
      />

      <PageHeader title="Privacy Policy" intro="Last updated: check and set a date before publishing." />

      <section className="py-14 sm:py-16">
        <div className="wrap max-w-3xl space-y-8 leading-relaxed text-ink">
          <div>
            <h2 className="text-xl font-semibold">Who we are</h2>
            <p className="mt-2 text-ink-soft">
              This website is operated by {business.legalName} (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;), a handyman and property maintenance service
              based in Los Angeles, California.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Information we collect</h2>
            <p className="mt-2 text-ink-soft">
              When you submit a request through our forms, we collect the
              information you provide: your name, phone number, email address,
              project address or ZIP code, project details, preferences and any
              photos or videos you upload. We may also collect basic technical
              information (such as IP address) for spam protection and security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">How we use your information</h2>
            <p className="mt-2 text-ink-soft">
              We use the information you send solely to review your request,
              contact you about your project, prepare estimates, schedule and
              complete work, and keep records of completed projects. We do not
              sell your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Photos and uploads</h2>
            <p className="mt-2 text-ink-soft">
              Photos and videos you upload are used only to understand the
              scope of your project. We do not publish photos of your property
              without your permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Sharing</h2>
            <p className="mt-2 text-ink-soft">
              Form submissions are delivered to us through an email service
              provider acting on our behalf. We do not share your information
              with third parties for their own marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Data retention</h2>
            <p className="mt-2 text-ink-soft">
              We keep project-related communications for as long as reasonably
              needed for business and legal record-keeping, then delete them.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Your choices</h2>
            <p className="mt-2 text-ink-soft">
              You may contact us at any time to ask what information we hold
              about you, request a correction or ask us to delete it. California
              residents may have additional rights under applicable state law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-2 text-ink-soft">
              Questions about this policy? Reach us through the contact page
              {business.email ? ` or by email at ${business.email}` : ""}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
