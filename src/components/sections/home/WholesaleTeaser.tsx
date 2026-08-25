import Image from "next/image";
import { Store, UtensilsCrossed, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { images } from "@/data/images";

const segments = [
  { icon: UtensilsCrossed, title: "Hospitality & Food Service", description: "Consistent quality for chefs, restaurants and hotels." },
  { icon: Store, title: "Retail & Supermarkets", description: "Attractive, ready-to-sell packs that consumers love." },
  { icon: Truck, title: "Distributors & Wholesalers", description: "Bulk supply with reliability you can count on." },
];

export function WholesaleTeaser() {
  return (
    <section className="relative overflow-hidden bg-plum-900 py-24 md:py-32">
      <div className="absolute inset-0 opacity-25">
        <Image src={images.refrigeratedTruck.src} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-plum-900 via-plum-900/95 to-plum-900" />

      <Container className="relative">
        <Reveal>
          <Eyebrow tone="light">Business & Wholesale</Eyebrow>
        </Reveal>
        <SplitReveal
          as="h2"
          type="words"
          className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] text-cream-50 text-balance md:text-7xl"
        >
          Built for scale.
        </SplitReveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream-50/60 md:text-base">
            From single restaurants to nationwide retail chains, Berrymount supplies premium
            berries with the consistency your business depends on.
          </p>
          <Button href="/wholesale" variant="gold" className="mt-8">
            Partner With Us
          </Button>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {segments.map((seg, i) => (
            <Reveal key={seg.title} delay={0.2 + i * 0.1}>
              <TiltCard className="h-full rounded-2xl border border-cream-50/10 bg-plum-800/50 p-6 backdrop-blur-sm">
                <seg.icon className="size-6 text-gold-400" aria-hidden="true" />
                <h3 className="mt-5 text-sm font-semibold text-cream-50">{seg.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-cream-50/50">{seg.description}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
