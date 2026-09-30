"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Fades sections up as they scroll into view. Content is visible by default and only
// hidden once this script has marked it, so a browser that can't run it still shows
// the whole page.
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = [...document.querySelectorAll<HTMLElement>("main section > :not(.absolute, img, .animate-marquee)")].filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    for (const el of targets) {
      el.classList.add("reveal");
      observer.observe(el);
    }
    return () => {
      observer.disconnect();
      for (const el of targets) el.classList.remove("reveal", "is-visible");
    };
  }, [pathname]);

  return null;
}
