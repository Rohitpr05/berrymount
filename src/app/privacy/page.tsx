import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Berrymount collects, uses and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="24 August 2026">
      <p>
        This Privacy Policy explains how {site.legalName} (&ldquo;Berrymount&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;) collects, uses and protects information you share with us through this
        website.
      </p>

      <div>
        <h2 className="font-serif text-xl text-plum-950">Information We Collect</h2>
        <p className="mt-2">
          When you submit our contact or enquiry forms, we collect the information you provide —
          such as your name, company name, email address, phone number and message. When you
          subscribe to our newsletter, we collect your email address.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-xl text-plum-950">How We Use Your Information</h2>
        <p className="mt-2">
          We use the information you provide solely to respond to your enquiry, to fulfil
          wholesale or partnership requests, and — where you have subscribed — to send occasional
          updates about Berrymount. We do not sell your information to third parties.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-xl text-plum-950">Data Storage</h2>
        <p className="mt-2">
          Enquiries submitted through this website are delivered directly to our team by email
          and are not stored in a public database.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-xl text-plum-950">Contact Us</h2>
        <p className="mt-2">
          If you have questions about this policy or wish to have your information removed,
          contact us at{" "}
          <a href={site.emailHref} className="text-gold-700 underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      </div>
    </LegalLayout>
  );
}
