"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { images } from "@/data/images";

const easing = [0.16, 1, 0.3, 1] as const;

export function PageHero({
  eyebrow,
  heading,
  highlight,
  description,
  image,
  cta,
}: {
  eyebrow: string;
  heading: string;
  highlight?: string;
  description: string;
  image: (typeof images)[keyof typeof images];
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-plum-950 pt-36 pb-20 md:pt-44 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 size-100 rounded-full bg-plum-700/40 blur-[120px]"
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easing }}>
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: easing }}
            className="mt-6 max-w-xl font-serif text-5xl leading-[1.08] text-cream-50 text-balance md:text-6xl"
          >
            {heading} {highlight && <span className="text-gold-400 italic">{highlight}</span>}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: easing }}
            className="mt-6 max-w-md text-base leading-relaxed text-cream-50/70"
          >
            {description}
          </motion.p>
          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease: easing }}
              className="mt-9"
            >
              <Button href={cta.href} variant="gold">
                {cta.label}
              </Button>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: easing }}
          className="relative aspect-4/5 w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-plum-950/60 lg:col-span-5"
        >
          <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 32rem, 90vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-950/40 via-transparent to-transparent" />
        </motion.div>
      </Container>
    </section>
  );
}
