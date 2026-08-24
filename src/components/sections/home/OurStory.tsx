import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/data/images";

export function OurStory() {
  return (
    <section className="bg-cream-50 pb-24 md:pb-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
              <Image
                src={images.strawberryPlants.src}
                alt={images.strawberryPlants.alt}
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pl-8">
            <Reveal>
              <Eyebrow tone="dark">Our Story</Eyebrow>
              <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-plum-950 text-balance md:text-5xl">
                Rooted in passion, grown for perfection.
              </h2>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Reveal delay={0.1}>
                <p className="text-xs font-medium tracking-[0.2em] text-gold-700 uppercase">Our Mission</p>
                <p className="mt-3 text-sm leading-relaxed text-plum-950/70">
                  We strive daily to bring joy to every doorstep by cultivating, promoting and
                  distributing delicious, healthy, fresh and nutrient-packed berries.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-xs font-medium tracking-[0.2em] text-gold-700 uppercase">Our Vision</p>
                <p className="mt-3 text-sm leading-relaxed text-plum-950/70">
                  To deliver the freshest, highest-quality produce to every home in the UAE —
                  promoting well-being and healthier lives, today and for future generations.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
