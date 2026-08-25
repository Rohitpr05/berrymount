"use client";

import { useRef } from "react";
import { BerryScene } from "./BerryScene";
import { useActiveWhenVisible } from "@/hooks/useActiveWhenVisible";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function BerryCanvas({ scrollProgress }: { scrollProgress: React.RefObject<number> }) {
  const { ref, active } = useActiveWhenVisible<HTMLDivElement>();
  const reducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);

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
