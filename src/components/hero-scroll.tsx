"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Hero backdrop that darkens and eases out of its zoom as you scroll past it, like the
// Figma hero's darker "Frame 4" state. `dim` is the overlay opacity at rest.
export function HeroScroll({ dim, children }: { dim: number; children: ReactNode }) {
  const photo = useRef<HTMLDivElement>(null);
  const shade = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = photo.current?.parentElement;
      if (!hero || !photo.current || !shade.current) return;
      const progress = Math.min(Math.max(window.scrollY / (hero.offsetHeight * 0.8), 0), 1);
      shade.current.style.opacity = String(dim + (0.85 - dim) * progress);
      if (!reduce) photo.current.style.transform = `scale(${1 + 0.08 * progress})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [dim]);

  return (
    <>
      <div ref={photo} className="absolute inset-0 -z-20 will-change-transform">
        {children}
      </div>
      <div ref={shade} className="absolute inset-0 -z-10 bg-black" style={{ opacity: dim }} />
    </>
  );
}
