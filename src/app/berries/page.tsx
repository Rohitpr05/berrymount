import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/shared/PageHero";
import { FinalCta } from "@/components/sections/shared/FinalCta";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { berries } from "@/data/berries";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Berries",
  description:
    "Explore Berrymount's range of premium strawberries, blueberries, raspberries and blackberries — sourced with care and delivered fresh across the UAE.",
};

export default function BerriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Collection"
        heading="Exceptional Berries."
        highlight="Every Season."
        description="Sourced with care and delivered with uncompromising freshness — discover our premium berry range."
        image={images.raspberryPunnets}
      />

      <section className="bg-cream-50">
        {berries.map((berry, i) => {
          const reversed = i % 2 === 1;
          return (
            <div key={berry.slug} className={cn(i % 2 === 0 ? "bg-cream-50" : "bg-plum-950")}>
              <Container className="grid grid-cols-1 items-center gap-10 py-20 lg:grid-cols-12 lg:gap-8 md:py-24">
                <Reveal
                  className={cn("lg:col-span-6", reversed ? "lg:order-2" : "lg:order-1")}
                >
                  <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                    <Image
                      src={berry.image.src}
                      alt={berry.image.alt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>

                <div className={cn("lg:col-span-6", reversed ? "lg:order-1" : "lg:order-2")}>
                  <Reveal delay={0.1}>
                    <p className={cn("text-xs font-medium tracking-[0.2em] uppercase", i % 2 === 0 ? "text-gold-700" : "text-gold-400")}>
                      {berry.index} &middot; {berry.tagline}
                    </p>
                    <h2 className={cn("mt-4 font-serif text-4xl md:text-5xl", i % 2 === 0 ? "text-plum-950" : "text-cream-50")}>
                      {berry.name}
                    </h2>
                    <p className={cn("mt-5 max-w-md text-sm leading-relaxed", i % 2 === 0 ? "text-plum-950/65" : "text-cream-50/65")}>
                      {berry.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {berry.uses.map((use) => (
                        <span
                          key={use}
                          className={cn(
                            "rounded-full border px-3.5 py-1.5 text-xs font-medium",
                            i % 2 === 0
                              ? "border-plum-950/15 text-plum-950/70"
                              : "border-cream-50/20 text-cream-50/70",
                          )}
                        >
                          {use}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/berries/${berry.slug}`}
                      className={cn(
                        "group mt-8 inline-flex items-center gap-2 text-sm font-medium",
                        i % 2 === 0 ? "text-plum-950 hover:text-gold-700" : "text-cream-50 hover:text-gold-300",
                      )}
                    >
                      View Details
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </Link>
                  </Reveal>
                </div>
              </Container>
            </div>
          );
        })}
      </section>

      <FinalCta />
    </>
  );
}
