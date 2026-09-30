import type { ReactNode } from "react";
import { Photo } from "./photo";

export function PageHero({ image, overlay = "bg-black/60", children }: { image: string; overlay?: string; children: ReactNode }) {
  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden pt-28 pb-20 md:min-h-[794px]">
      <Photo src={image} alt="" fill priority sizes="100vw" className="-z-20 animate-hero-zoom object-cover" />
      <div className={`absolute inset-0 -z-10 ${overlay}`} />
      <div className="mx-auto w-full max-w-[1320px] px-4 text-center sm:px-6">{children}</div>
    </section>
  );
}
