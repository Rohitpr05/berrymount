"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element is both on-screen (IntersectionObserver) and the
 * tab is foregrounded (visibilitychange). Used to pause expensive render
 * loops (WebGL) when neither is true.
 */
export function useActiveWhenVisible<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.1,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibility = () => setTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return { ref, active: inView && tabVisible };
}
