import type { ReactNode } from "react";
import { HeroScroll } from "./hero-scroll";
import { Photo } from "./photo";

// Full-screen hero, a little shorter than the window on desktop so the top of the
// next section (the logo strip) peeks in below it.
export function PageHero({ image, dim = 0.6, children }: { image: string; dim?: number; children: ReactNode }) {
  return (
    <section className="relative isolate flex min-h-[35rem] items-center overflow-hidden pt-28 pb-20 lg:h-[max(34rem,calc(100svh-7.5rem))] lg:min-h-0 lg:pb-12">
      <HeroScroll dim={dim}>
        <Photo src={image} alt="" fill priority sizes="100vw" className="animate-hero-zoom object-cover" />
      </HeroScroll>
      <div className="mx-auto w-full max-w-[82.5rem] px-4 text-center sm:px-6">{children}</div>
    </section>
  );
}
