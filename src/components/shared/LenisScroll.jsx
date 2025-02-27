"use client"
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

// Global flag to control pausing
export let isLenisPaused = false;

// Helper to update the paused state
export const setLenisPaused = (paused) => {
  isLenisPaused = paused;
};

const LenisScroll = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const newLenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true, 
      gesture: true,
    });

    lenisRef.current = newLenis;

    function raf(time) {
      // Only update Lenis if not paused
      if (!isLenisPaused) {
        lenisRef.current?.raf(time);
      }
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return null;
};

export default LenisScroll;
