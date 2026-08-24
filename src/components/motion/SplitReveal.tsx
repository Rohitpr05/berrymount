"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { SplitText } from "gsap/SplitText";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

export function SplitReveal({
  children,
  as: Tag = "h2",
  className,
  type = "words",
  delay = 0,
  trigger = "inView",
}: {
  children: string;
  as?: Tag;
  className?: string;
  type?: "words" | "chars" | "lines";
  delay?: number;
  trigger?: "inView" | "immediate";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    gsap.registerPlugin(SplitText);

    let split: SplitText;
    const ctx = gsap.context(() => {
      split = new SplitText(el, { type, wordsClass: "split-word", charsClass: "split-char" });
      const targets = type === "chars" ? split.chars : type === "lines" ? split.lines : split.words;

      gsap.set(targets, { opacity: 0, yPercent: 100, filter: "blur(8px)" });

      const anim = () =>
        gsap.to(targets, {
          opacity: 1,
          yPercent: 0,
          filter: "blur(0px)",
          duration: 0.9,
          delay,
          stagger: type === "chars" ? 0.015 : 0.06,
          ease: "power3.out",
        });

      if (trigger === "immediate") {
        anim();
      } else {
        gsap.to(targets, {
          opacity: 1,
          yPercent: 0,
          filter: "blur(0px)",
          duration: 0.9,
          delay,
          stagger: type === "chars" ? 0.015 : 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      }
    }, el);

    return () => {
      ctx.revert();
      split?.revert();
    };
  }, [type, delay, trigger]);

  return (
    <Tag ref={ref as never} className={className} style={{ overflow: "hidden" }}>
      {children}
    </Tag>
  );
}
