"use client"
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

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
      lenisRef.current?.raf(time);
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