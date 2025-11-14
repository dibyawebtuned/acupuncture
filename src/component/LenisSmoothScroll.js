"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3), // Webflow-like ease-out cubic
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
