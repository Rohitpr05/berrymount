"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Magnetic } from "@/components/motion/Magnetic";
import { SplitReveal } from "@/components/motion/SplitReveal";

const BerryCanvas = dynamic(() => import("@/components/three/BerryCanvas").then((m) => m.BerryCanvas), {
  ssr: false,
});

const easing = [0.16, 1, 0.3, 1] as const;

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

export function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useRef(0);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    scrollProgress.current = v;

    const fade = 1 - clamp01(v / 0.3);
    const y = -clamp01(v / 0.4) * 80;
    if (contentRef.current) {
      contentRef.current.style.opacity = String(fade);
      contentRef.current.style.transform = `translateY(${y}px)`;
    }
    if (glowRef.current) {
      glowRef.current.style.opacity = String(0.5 * (1 - clamp01(v / 0.6)));
    }
  });

  return (
    <div ref={wrapperRef} className="relative h-[170vh] bg-plum-950">
      <div className="sticky top-0 h-screen overflow-hidden bg-plum-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_65%_35%,rgba(89,50,104,0.55),transparent_60%)]"
        />
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-40 size-125 rounded-full bg-plum-700/40 blur-[120px]"
        />

        <BerryCanvas scrollProgress={scrollProgress} />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-plum-950/10 via-transparent to-plum-950"
        />

        <div
          ref={contentRef}
          data-hero-content
          className="relative flex h-full flex-col justify-center pt-16"
        >
          <Container className="relative">
            <div className="max-w-xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easing }}>
                <Eyebrow tone="light">From our farms to your table</Eyebrow>
              </motion.div>

              <SplitReveal
                as="h1"
                type="words"
                trigger="immediate"
                delay={0.15}
                className="mt-6 font-serif text-5xl leading-[1.05] text-cream-50 text-balance sm:text-6xl md:text-7xl"
              >
                Fresh. Fine. Flavourful.
              </SplitReveal>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: easing }}
                className="mt-6 max-w-md text-base leading-relaxed text-cream-50/70"
              >
                Premium strawberries, blueberries, raspberries and blackberries — sourced with
                care and delivered fresh across the UAE.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.62, ease: easing }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Magnetic>
                  <Button href="/berries" variant="gold">
                    Explore Our Berries
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button href="/wholesale" variant="outline-light" showArrow={false}>
                    Partner With Us
                  </Button>
                </Magnetic>
              </motion.div>
            </div>
          </Container>

          <Container className="relative mt-auto pb-14">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream-50/10 bg-cream-50/10 md:grid-cols-4">
              {trustPoints.map((point) => (
                <div key={point.title} className="bg-plum-900/60 px-6 py-5 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-cream-50">{point.title}</p>
                  <p className="mt-1 text-xs text-cream-50/55">{point.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

const trustPoints = [
  { title: "Handpicked Quality", description: "Carefully selected for size, taste and freshness." },
  { title: "Cold-Chain Care", description: "Kept fresh from the source to your door." },
  { title: "UAE-Wide Delivery", description: "Reliable supply across the Emirates." },
  { title: "100% Pure", description: "No shortcuts — just fresh, natural berries." },
];
