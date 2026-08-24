import Image from "next/image";
import { Sprout, ShieldCheck, Snowflake, Package, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/data/images";

const steps = [
  { icon: Sprout, title: "Sourcing", description: "Selected from trusted growers." },
  { icon: ShieldCheck, title: "Quality Control", description: "Checked for freshness and ripeness." },
  { icon: Snowflake, title: "Cold Chain", description: "Kept cool from harvest onward." },
  { icon: Package, title: "Packaging", description: "Packed with care to lock in flavour." },
  { icon: Truck, title: "Delivery", description: "Delivered fresh across the UAE." },
];

export function FarmToTable() {
  return (
    <section className="bg-plum-950 py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow tone="light">From Farm to Table</Eyebrow>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-cream-50 text-balance md:text-5xl">
            Quality you can see, taste and trust.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ol className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08}>
                  <li>
                    <div className="flex size-12 items-center justify-center rounded-full border border-gold-500/30 text-gold-400">
                      <step.icon className="size-5" aria-hidden="true" />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-cream-50">
                      <span className="mr-1 text-gold-500">{String(i + 1).padStart(2, "0")}</span>{" "}
                      {step.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-cream-50/50">{step.description}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-5">
            <Reveal delay={0.1} className="col-span-2">
              <div className="relative aspect-16/9 overflow-hidden rounded-2xl">
                <Image
                  src={images.greenhouse.src}
                  alt={images.greenhouse.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={images.blueberryHarvestHands.src}
                  alt={images.blueberryHarvestHands.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={images.refrigeratedTruck.src}
                  alt={images.refrigeratedTruck.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
