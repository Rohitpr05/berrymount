import type { Metadata } from "next";
import Image from "next/image";
import { Sprout, SearchCheck, ShieldCheck, Snowflake, Package, Truck } from "lucide-react";
import { PageHero } from "@/components/sections/shared/PageHero";
import { FinalCta } from "@/components/sections/shared/FinalCta";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Quality & Sourcing",
  description:
    "From sourcing to delivery, Berrymount handles every berry with care — bright, naturally occurring, highly nutritious and 100% pure.",
};

const steps = [
  { icon: Sprout, title: "Source", description: "We work with growers who let fruit ripen properly." },
  { icon: SearchCheck, title: "Select", description: "Only berries that meet our standard for freshness move forward." },
  { icon: ShieldCheck, title: "Inspect", description: "Checked for colour, firmness and ripeness." },
  { icon: Snowflake, title: "Cold Chain", description: "Kept cool to lock in flavour and shelf life." },
  { icon: Package, title: "Pack", description: "Packed with care to protect every berry in transit." },
  { icon: Truck, title: "Deliver", description: "Delivered fresh across the UAE." },
];

const claims = [
  { title: "Bright & Colourful", description: "Vivid, naturally ripened berries — never dulled by early picking." },
  { title: "Highly Nutritious", description: "Packed with the vitamins and antioxidants nature intended." },
  { title: "Naturally Occurring", description: "No shortcuts — just fruit, grown and ripened naturally." },
  { title: "100% Pure", description: "Fresh berries, exactly as they should be." },
  { title: "Sweet & Juicy", description: "Full flavour, from properly ripened fruit." },
  { title: "Fresh-Pick Berries", description: "Handled with care from harvest to delivery." },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality, Sustainability, Trust"
        heading="Excellence in"
        highlight="every step."
        description="Freshness isn't an accident — it's the result of careful sourcing, handling and cold-chain discipline at every stage."
        image={images.blueberryHarvestHands}
      />

      <section className="bg-cream-50 py-24 md:py-32">
        <Container>
          <Reveal>
            <Eyebrow tone="dark">Source to Table</Eyebrow>
            <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight text-plum-950 text-balance md:text-5xl">
              Our quality process.
            </h2>
          </Reveal>
          <ol className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <li>
                  <div className="flex size-12 items-center justify-center rounded-full border border-gold-600/30 text-gold-700">
                    <step.icon className="size-5" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-plum-950">
                    <span className="mr-1 text-gold-600">{String(i + 1).padStart(2, "0")}</span> {step.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-plum-950/50">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-plum-950 py-24 md:py-32">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl sm:aspect-16/10">
              <Image src={images.strawberryPlants.src} alt={images.strawberryPlants.alt} fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
            </div>
          </Reveal>
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow tone="light">What Quality Means to Us</Eyebrow>
              <h2 className="mt-4 max-w-lg font-serif text-3xl leading-tight text-cream-50 text-balance md:text-4xl">
                Six standards, every single berry.
              </h2>
            </Reveal>
            <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {claims.map((claim, i) => (
                <Reveal key={claim.title} delay={i * 0.06}>
                  <p className="text-sm font-semibold text-cream-50">{claim.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-cream-50/50">{claim.description}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <FinalCta
        heading="Taste the Berrymount difference."
        description="Explore our range or get in touch to discuss quality and supply for your business."
        ctaLabel="Explore Our Berries"
        ctaHref="/berries"
      />
    </>
  );
}
