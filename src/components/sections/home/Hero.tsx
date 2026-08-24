"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { images } from "@/data/images";

const easing = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-plum-950 pt-36 pb-20 md:pt-44 md:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-125 rounded-full bg-plum-700/40 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-full bg-gradient-to-t from-plum-950 to-transparent"
      />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing }}
          >
            <Eyebrow tone="light">From our farms to your table</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: easing }}
            className="mt-6 max-w-xl font-serif text-5xl leading-[1.05] text-cream-50 text-balance sm:text-6xl md:text-7xl"
          >
            Fresh. Fine.
            <br />
            <span className="text-gold-400 italic">Flavourful.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: easing }}
            className="mt-6 max-w-md text-base leading-relaxed text-cream-50/70"
          >
            Premium strawberries, blueberries, raspberries and blackberries — sourced with
            care and delivered fresh across the UAE.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: easing }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/berries" variant="gold">
              Explore Our Berries
            </Button>
            <Button href="/wholesale" variant="outline-light" showArrow={false}>
              Partner With Us
            </Button>
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easing }}
            className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-[2rem] shadow-2xl shadow-plum-950/60"
          >
            <Image
              src={images.blackberryStack.src}
              alt={images.blackberryStack.alt}
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 80vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum-950/50 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easing }}
            {...(!reduceMotion && {
              whileInView: { y: [0, -10, 0] },
              viewport: { once: false },
            })}
            className="absolute -bottom-8 -left-8 hidden aspect-square w-32 overflow-hidden rounded-2xl border-4 border-plum-950 shadow-xl sm:block"
          >
            <Image src={images.strawberryBowl.src} alt={images.strawberryBowl.alt} fill sizes="8rem" className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.62, ease: easing }}
            {...(!reduceMotion && {
              whileInView: { y: [0, 10, 0] },
              viewport: { once: false },
            })}
            className="absolute -top-6 -right-4 hidden aspect-square w-28 overflow-hidden rounded-2xl border-4 border-plum-950 shadow-xl sm:block"
          >
            <Image src={images.blueberryBowl.src} alt={images.blueberryBowl.alt} fill sizes="7rem" className="object-cover" />
          </motion.div>
        </div>
      </Container>

      <Container className="relative mt-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream-50/10 bg-cream-50/10 md:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.title} className="bg-plum-900/60 px-6 py-5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-cream-50">{point.title}</p>
              <p className="mt-1 text-xs text-cream-50/55">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const trustPoints = [
  { title: "Handpicked Quality", description: "Carefully selected for size, taste and freshness." },
  { title: "Cold-Chain Care", description: "Kept fresh from the source to your door." },
  { title: "UAE-Wide Delivery", description: "Reliable supply across the Emirates." },
  { title: "100% Pure", description: "No shortcuts — just fresh, natural berries." },
];
