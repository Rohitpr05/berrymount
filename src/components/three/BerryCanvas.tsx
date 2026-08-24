"use client";

import { useEffect, useRef, useState } from "react";
import { BerryScene } from "./BerryScene";
import { useActiveWhenVisible } from "@/hooks/useActiveWhenVisible";

export function BerryCanvas({ scrollProgress }: { scrollProgress: React.RefObject<number> }) {
  const { ref, active } = useActiveWhenVisible<HTMLDivElement>();
  const [reducedMotion, setReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div
      ref={(node) => {
        ref.current = node;
        containerRef.current = node;
      }}
      className="absolute inset-0"
      aria-hidden="true"
    >
      {!reducedMotion && <BerryScene scrollProgress={scrollProgress} active={active} />}
    </div>
  );
}
