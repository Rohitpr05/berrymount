import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/data/images";

const claims = [
  "Bright & colourful",
  "Highly nutritious",
  "Naturally occurring",
  "100% pure",
  "Sweet & juicy",
  "Fresh-pick berries",
];

export function Quality() {
  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow tone="dark">Quality, Sustainability, Trust</Eyebrow>
            <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight text-plum-950 text-balance md:text-5xl">
              Excellence in every step.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-plum-950/65">
              Every berry is produced with care and handled to preserve its natural freshness —
              so what arrives at your door is exactly as nature intended.
            </p>
          </Reveal>

          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4">
            {claims.map((claim, i) => (
              <Reveal key={claim} delay={i * 0.05}>
                <li className="flex items-center gap-2.5 text-sm text-plum-950/80">
                  <span className="size-1.5 shrink-0 rounded-full bg-gold-600" />
                  {claim}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.15} className="lg:col-span-6">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl sm:aspect-16/10">
            <Image
              src={images.blueberryBowl.src}
              alt={images.blueberryBowl.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
