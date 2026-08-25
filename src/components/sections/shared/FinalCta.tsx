"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/data/images";

export function FinalCta({
  heading = "Let's grow something fresh together.",
  description = "Whether you're a household, a restaurant or a retailer — Berrymount is ready to be your trusted berry partner.",
  ctaLabel = "Start a Partnership",
  ctaHref = "/contact",
}: {
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const layerA = useRef<HTMLDivElement>(null);
  const layerB = useRef<HTMLDivElement>(null);
  const layerC = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const p = (v - 0.5) * 2; // -1 .. 1 across the section's viewport transit
    if (layerA.current) layerA.current.style.transform = `translateY(${p * -40}px)`;
    if (layerB.current) layerB.current.style.transform = `translateY(${p * 60}px)`;
    if (layerC.current) layerC.current.style.transform = `translateY(${p * -25}px) rotate(${p * 4}deg)`;
  });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-plum-950 py-32 md:py-40">
      <div ref={layerA} className="absolute inset-0 will-change-transform">
        <Image src={images.blackberryStack.src} alt="" fill aria-hidden="true" sizes="100vw" className="object-cover opacity-25" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-plum-950 via-plum-950/90 to-plum-950/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-transparent to-plum-950/70" />

      <div
        ref={layerB}
        aria-hidden="true"
        className="absolute top-16 -right-10 hidden aspect-square w-56 overflow-hidden rounded-3xl shadow-2xl shadow-plum-950/80 will-change-transform md:block lg:w-72"
      >
        <Image src={images.strawberryMoody.src} alt="" fill sizes="18rem" className="object-cover" />
      </div>
      <div
        ref={layerC}
        aria-hidden="true"
        className="absolute -bottom-6 right-24 hidden aspect-square w-40 overflow-hidden rounded-2xl border-4 border-plum-950 shadow-xl will-change-transform lg:block"
      >
        <Image src={images.raspberryMoody.src} alt="" fill sizes="10rem" className="object-cover" />
      </div>

      <Container className="relative">
        <div className="max-w-xl">
          <Reveal>
            <span className="text-xs font-medium tracking-[0.3em] text-gold-400 uppercase">Let&rsquo;s Grow Together</span>
          </Reveal>
          <SplitReveal as="h2" type="words" className="mt-5 font-serif text-4xl leading-tight text-cream-50 text-balance md:text-6xl">
            {heading}
          </SplitReveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream-50/65 md:text-base">{description}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <Magnetic className="mt-10 block w-fit">
              <Button href={ctaHref} variant="gold">
                {ctaLabel}
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
