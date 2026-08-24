import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern your use of the Berrymount website.",
};

export default function TermsPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms & Conditions" updated="24 August 2026">
      <p>
        These terms govern your use of the {site.name} website. By using this website, you agree
        to the following terms.
      </p>

      <div>
        <h2 className="font-serif text-xl text-plum-950">Website Content</h2>
        <p className="mt-2">
          Product information on this website is provided for general reference. Availability,
          packaging and specifications may vary — please confirm details with our team before
          placing an order.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-xl text-plum-950">Enquiries & Orders</h2>
        <p className="mt-2">
          Submitting an enquiry or wholesale request through this website does not constitute a
          binding order. All orders and supply agreements are confirmed directly with our team.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-xl text-plum-950">Intellectual Property</h2>
        <p className="mt-2">
          The {site.name} name and logo are the property of {site.legalName}. Other content on
          this site is used for illustrative purposes.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-xl text-plum-950">Contact Us</h2>
        <p className="mt-2">
          For questions about these terms, contact us at{" "}
          <a href={site.emailHref} className="text-gold-700 underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      </div>
    </LegalLayout>
  );
}
