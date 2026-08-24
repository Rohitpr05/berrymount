import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Handshake, Sparkles, HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Testimonials } from "@/components/sections/shared/Testimonials";
import { FinalCta } from "@/components/sections/shared/FinalCta";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Berrymount was built around a simple idea: fruit should be as fresh as the day it was picked. Learn about our mission, vision and approach to sourcing premium berries.",
};

const values = [
  { icon: Sparkles, title: "Genuine Freshness", description: "We work against the industry norm of early-harvested, artificially ripened fruit — choosing properly ripened, naturally fresh berries instead." },
  { icon: Leaf, title: "Naturally Occurring", description: "Bright, colourful and nutrient-rich — our berries are as close to nature as possible." },
  { icon: Handshake, title: "Reliable Partnership", description: "From households to hotels, we aim to be a berry partner our customers can depend on." },
  { icon: HeartHandshake, title: "Care in Every Step", description: "From sourcing to delivery, every berry is handled with care to preserve its flavour." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        heading="Rooted in Passion."
        highlight="Grown for Perfection."
        description="Berrymount was born from a simple observation: too much fruit on supermarket shelves is picked early and ripened artificially, losing the freshness that makes berries worth eating. We set out to change that."
        image={images.blackberryStack}
      />

      <section className="bg-cream-50 py-24 md:py-32">
        <Container className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.2em] text-gold-700 uppercase">Our Mission</p>
            <p className="mt-4 font-serif text-2xl leading-snug text-plum-950 text-balance">
              We strive daily to bring joy to every doorstep by cultivating, promoting and
              distributing delicious, healthy, fresh and nutrient-packed berries.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-xs font-medium tracking-[0.2em] text-gold-700 uppercase">Our Vision</p>
            <p className="mt-4 font-serif text-2xl leading-snug text-plum-950 text-balance">
              To deliver the freshest, highest-quality produce to every home — promoting
              well-being and healthier lives, today and for future generations.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream-100 py-24 md:py-32">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="order-2 lg:order-1 lg:col-span-6">
            <Eyebrow tone="dark">Crafted by Nature, Perfected by Us</Eyebrow>
            <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight text-plum-950 text-balance md:text-5xl">
              Our sourcing philosophy.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-plum-950/65">
              We believe great berries begin at the source. That&rsquo;s why we work with
              growers who share our commitment to quality, letting fruit ripen naturally
              before it ever reaches you.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="order-1 lg:order-2 lg:col-span-6">
            <div className="relative aspect-16/11 overflow-hidden rounded-2xl">
              <Image src={images.greenhouse.src} alt={images.greenhouse.alt} fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-plum-950 py-24 md:py-32">
        <Container>
          <Reveal>
            <Eyebrow tone="light">Our Values in Action</Eyebrow>
            <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight text-cream-50 text-balance md:text-5xl">
              What we stand for.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-cream-50/10 bg-plum-900/50 p-7">
                  <v.icon className="size-6 text-gold-400" aria-hidden="true" />
                  <h3 className="mt-5 text-sm font-semibold text-cream-50">{v.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-cream-50/50">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />
      <FinalCta
        heading="Let's create something fresh together."
        description="Join hands with Berrymount for a partnership built on quality, trust and a shared passion for the finest berries."
        ctaLabel="Partner With Us Today"
        ctaHref="/wholesale"
      />
    </>
  );
}
