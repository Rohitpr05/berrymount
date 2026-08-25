"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { images } from "@/data/images";

const stages = [
  { label: "Source", title: "Rooted in trust.", description: "Selected from growers who let fruit ripen properly.", image: images.greenhouse },
  { label: "Select", title: "Handpicked, not machine-sorted.", description: "Only berries that meet our standard for freshness move forward.", image: images.blueberryHarvestHands },
  { label: "Protect", title: "Cared for at every stage.", description: "Kept cool and handled gently to protect flavour and shelf life.", image: images.raspberryMoody },
  { label: "Deliver", title: "Fresh, right on time.", description: "Delivered across the UAE without compromise.", image: images.refrigeratedTruck },
];

export function FarmToTable() {
  const reduced = usePrefersReducedMotion();

  return reduced ? <StaticJourney /> : <PinnedJourney />;
}

function PinnedJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Sibling sections above this one (e.g. the berry showcase) swap into a
    // taller pinned layout via their own post-paint effect. Creating this
    // trigger in the same tick can measure the DOM before that swap lands,
    // baking in a stale "top top" start that ScrollTrigger.refresh() alone
    // doesn't correct. Deferring one tick settles against the final layout.
    let ctx: gsap.Context | undefined;
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const layers = layerRefs.current.filter(Boolean) as HTMLDivElement[];
        gsap.set(layers, { opacity: 0 });
        gsap.set(layers[0], { opacity: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=300%",
            scrub: 0.6,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        layers.forEach((layer, i) => {
          if (i === 0) return;
          tl.to(layers[i - 1], { opacity: 0, duration: 0.5 }, i - 0.5).to(
            layer,
            { opacity: 1, duration: 0.5 },
            i - 0.5,
          );
        });

        if (lineRef.current) {
          tl.to(lineRef.current, { scaleX: 1, ease: "none", duration: layers.length }, 0);
        }
      }, section);
    }, 100);

    return () => {
      clearTimeout(timer);
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 h-screen overflow-hidden bg-plum-950">
      {stages.map((stage, i) => (
        <div
          key={stage.label}
          ref={(el) => {
            layerRefs.current[i] = el;
          }}
          className="absolute inset-0"
        >
          <Image src={stage.image.src} alt={stage.image.alt} fill priority={i === 0} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/50 to-plum-950/30" />
          <Container className="relative flex h-full flex-col justify-end pb-28">
            <span className="text-xs font-medium tracking-[0.3em] text-gold-400 uppercase">
              Step {String(i + 1).padStart(2, "0")} — {stage.label}
            </span>
            <h3 className="mt-4 max-w-lg font-serif text-4xl text-cream-50 text-balance md:text-5xl">{stage.title}</h3>
            <p className="mt-4 max-w-md text-sm text-cream-50/70 md:text-base">{stage.description}</p>
          </Container>
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-10">
        <Container>
          <div className="h-px w-full overflow-hidden bg-cream-50/15">
            <div ref={lineRef} className="h-full w-full origin-left scale-x-0 bg-gold-500" />
          </div>
          <div className="mt-3 flex justify-between text-[10px] font-medium tracking-[0.2em] text-cream-50/40 uppercase">
            {stages.map((s) => (
              <span key={s.label}>{s.label}</span>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

function StaticJourney() {
  return (
    <section className="bg-plum-950 py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow tone="light">From Farm to Table</Eyebrow>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-cream-50 text-balance md:text-5xl">
            Quality you can see, taste and trust.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {stages.map((stage, i) => (
            <Reveal key={stage.label} delay={i * 0.08}>
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                <Image src={stage.image.src} alt={stage.image.alt} fill sizes="(min-width: 640px) 45vw, 90vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs font-medium tracking-[0.3em] text-gold-400 uppercase">
                    Step {String(i + 1).padStart(2, "0")} — {stage.label}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-cream-50">{stage.title}</h3>
                  <p className="mt-2 text-sm text-cream-50/65">{stage.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
