import type { ReactNode } from "react";
import { Photo } from "./photo";

export function CtaBanner({ image, children }: { image: string; children: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/60">
      <Photo src={image} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-black/80" />
      <div className="mx-auto flex min-h-[480px] max-w-[1000px] flex-col items-center justify-center gap-6 px-4 py-20 text-center md:min-h-[618px]">
        {children}
      </div>
    </section>
  );
}
