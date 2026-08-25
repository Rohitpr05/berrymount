"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Multiple pinned sections can be created before earlier ones' pin-spacers
  // finish settling, leaving later triggers measured against stale layout.
  // invalidateOnRefresh + a couple of deferred refreshes after everything has
  // mounted (and once more after full page load) irons this out reliably.
  const refresh = () => ScrollTrigger.refresh();
  const settle = () => requestAnimationFrame(() => requestAnimationFrame(refresh));

  if (document.readyState === "complete") {
    settle();
  } else {
    window.addEventListener("load", settle);
  }
  setTimeout(refresh, 400);

  let resizeTimer: ReturnType<typeof setTimeout>;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(refresh, 200);
  });
}

export { gsap, ScrollTrigger };
