import type { Metadata } from "next";
import { Store, UtensilsCrossed, Truck, MessageSquare, ClipboardCheck, PackageCheck, RefreshCcw } from "lucide-react";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Testimonials } from "@/components/sections/shared/Testimonials";
import { FinalCta } from "@/components/sections/shared/FinalCta";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Wholesale & Business",
  description:
    "Berrymount supplies premium berries to retailers, hotels, restaurants, food service operators and distributors across the UAE. Partner with us for reliable, quality supply.",
};

const segments = [
  { icon: UtensilsCrossed, title: "Hospitality & Food Service", description: "Consistent quality berries for chefs, restaurants, cafés and hotels." },
  { icon: Store, title: "Retail & Supermarkets", description: "Attractive, ready-to-sell packs that customers reach for." },
  { icon: Truck, title: "Distributors & Wholesalers", description: "Bulk supply with the reliability your business depends on." },
];

const steps = [
  { icon: MessageSquare, title: "Get in Touch", description: "Tell us about your business and berry requirements." },
  { icon: ClipboardCheck, title: "We Discuss Your Needs", description: "Our team works with you on volumes and delivery schedule." },
  { icon: PackageCheck, title: "Supply Begins", description: "Fresh berries, sourced and delivered to your specification." },
  { icon: RefreshCcw, title: "Ongoing Partnership", description: "Reliable, consistent supply for the long term." },
];

export default function WholesalePage() {
  return (
    <>
      <PageHero
        eyebrow="Business & Wholesale"
        heading="Your Trusted"
        highlight="Berry Partner."
        description="Whether you run a restaurant, a supermarket or a distribution network, Berrymount delivers premium berries with the consistency your business needs."
        image={images.refrigeratedTruck}
        cta={{ label: "Start a Partnership", href: "/contact" }}
      />

      <section className="bg-cream-50 py-24 md:py-32">
        <Container>
          <Reveal>
            <Eyebrow tone="dark">Who We Serve</Eyebrow>
            <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight text-plum-950 text-balance md:text-5xl">
              Perfect for every business need.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {segments.map((seg, i) => (
              <Reveal key={seg.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-plum-950/10 bg-cream-100 p-7">
                  <seg.icon className="size-6 text-gold-700" aria-hidden="true" />
                  <h3 className="mt-5 text-sm font-semibold text-plum-950">{seg.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-plum-950/55">{seg.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-plum-950 py-24 md:py-32">
        <Container>
          <Reveal>
            <Eyebrow tone="light">How It Works</Eyebrow>
            <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight text-cream-50 text-balance md:text-5xl">
              Starting a partnership is simple.
            </h2>
          </Reveal>
          <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <li>
                  <div className="flex size-12 items-center justify-center rounded-full border border-gold-500/30 text-gold-400">
                    <step.icon className="size-5" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-cream-50">
                    <span className="mr-1 text-gold-500">{String(i + 1).padStart(2, "0")}</span> {step.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-cream-50/50">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <Testimonials />
      <FinalCta
        heading="Let's grow fresh possibilities together."
        description="Partner with Berrymount for a reliable supply of premium berries, tailored to your business needs."
        ctaLabel="Partner With Us"
        ctaHref="/contact"
      />
    </>
  );
}
