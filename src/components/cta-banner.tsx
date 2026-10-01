import type { ReactNode } from "react";
import { Photo } from "./photo";

export function CtaBanner({ image, children }: { image: string; children: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/60">
      <Photo src={image} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-black/80" />
      <div className="mx-auto flex min-h-[30rem] max-w-[62.5rem] flex-col items-center justify-center gap-6 px-4 py-20 text-center md:min-h-[38.625rem]">
        {children}
      </div>
    </section>
  );
}
