"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // 1. Initialize Lenis ONLY once on mount
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Adjusts how "smooth" it is. Lower is smoother/slower.
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      if ((window as any).lenis === lenis) {
        (window as any).lenis = undefined;
      }
    };
  }, []);

  // 2. Smoothly scroll to hash or reset scroll on page transition without double instantiating Lenis
  useEffect(() => {
    if (!lenisRef.current) return;

    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash && lenisRef.current) {
        // Wait slightly for Next.js to render/mount the target page elements
        setTimeout(() => {
          const target = document.querySelector(hash);
          if (target && lenisRef.current) {
            lenisRef.current.scrollTo(target as HTMLElement, { offset: -90 });
          }
        }, 120);
      } else if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    };

    handleHashScroll();

    window.addEventListener("hashchange", handleHashScroll);
    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, [pathname]);

  return <>{children}</>;
}
