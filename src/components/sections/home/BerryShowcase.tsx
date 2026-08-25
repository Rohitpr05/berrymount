"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { berries } from "@/data/berries";

export function BerryShowcase() {
  const [immersive, setImmersive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setImmersive(mq.matches && !reduce.matches);
    update();
    mq.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  return immersive ? <PinnedShowcase /> : <StackedShowcase />;
}

function PinnedShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + distance(),
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 overflow-hidden bg-plum-950">
      <div className="border-b border-cream-50/10 pt-16 pb-10">
        <Container>
          <Eyebrow tone="light">The Berries</Eyebrow>
          <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight text-cream-50 text-balance md:text-5xl">
            Four berries. One standard of excellence.
          </h2>
        </Container>
      </div>

      <div ref={trackRef} className="flex h-[calc(100vh-13rem)] w-max will-change-transform">
        {berries.map((berry) => (
          <BerryPanel key={berry.slug} berry={berry} />
        ))}
      </div>
    </section>
  );
}

function BerryPanel({ berry }: { berry: (typeof berries)[number] }) {
  return (
    <div className="relative flex h-full w-screen shrink-0 items-center overflow-hidden px-6 md:px-10 lg:px-14">
      <Image
        src={berry.moodyImage.src}
        alt={berry.moodyImage.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-plum-950 via-plum-950/70 to-plum-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-transparent to-plum-950/40" />

      <div className="relative z-10 max-w-md">
        <span className="font-serif text-8xl text-gold-500/70">{berry.index}</span>
        <h3 className="mt-2 font-serif text-5xl text-cream-50 md:text-6xl">{berry.name}</h3>
        <p className="mt-5 text-sm leading-relaxed text-cream-50/70 md:text-base">{berry.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {berry.uses.slice(0, 3).map((use) => (
            <span key={use} className="rounded-full border border-cream-50/20 px-3.5 py-1.5 text-xs font-medium text-cream-50/70">
              {use}
            </span>
          ))}
        </div>
        <Link
          href={`/berries/${berry.slug}`}
          className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold-300 hover:text-gold-200"
        >
          View {berry.name}
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function StackedShowcase() {
  return (
    <section className="bg-plum-950 py-20 md:py-28">
      <Container>
        <Reveal>
          <Eyebrow tone="light">The Berries</Eyebrow>
          <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight text-cream-50 text-balance md:text-5xl">
            Four berries. One standard of excellence.
          </h2>
        </Reveal>
      </Container>

      <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:px-10 lg:px-14">
        {berries.map((berry, i) => (
          <Reveal key={berry.slug} delay={i * 0.08} className="w-[85vw] shrink-0 snap-center sm:w-[420px]">
            <Link href={`/berries/${berry.slug}`} className="group relative block aspect-3/4 overflow-hidden rounded-2xl">
              <Image
                src={berry.moodyImage.src}
                alt={berry.moodyImage.alt}
                fill
                sizes="85vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="font-serif text-3xl text-gold-500/70">{berry.index}</span>
                <h3 className="mt-1 font-serif text-3xl text-cream-50">{berry.name}</h3>
                <p className="mt-2 text-sm text-cream-50/65">{berry.tagline}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
