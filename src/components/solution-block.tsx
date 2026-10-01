import { Check } from "lucide-react";
import { Photo } from "./photo";
import { Accent, CheckIcon } from "./ui";
import type { SolutionBlock as Block } from "@/lib/industries";

export function SolutionBlock({ block, image, reversed }: { block: Block; image: string; reversed: boolean }) {
  return (
    <section className={reversed ? "border-y border-brand/40 bg-[#0d0d0d]" : ""}>
      <div className={`mx-auto flex max-w-[120rem] flex-col items-center gap-10 py-14 lg:gap-12 lg:py-0 ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        <div className="relative aspect-square w-full max-w-[40rem] shrink-0 lg:w-[48%] lg:max-w-[58.125rem]">
          <Photo src={image} alt={block.title} fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
        </div>
        <div className={`w-full max-w-[51.875rem] px-4 sm:px-6 lg:py-10 ${reversed ? "lg:pl-[8%]" : "lg:pr-10"}`}>
          <h2 className="text-3xl font-semibold leading-tight md:text-[2.8125rem]">
            <Accent text={block.title} highlight={block.highlight} />
          </h2>
          <p className="mt-4 text-2xl font-semibold md:text-[2.1875rem] md:leading-tight">{block.subtitle}</p>
          <p className="mt-4 text-lg md:text-[1.875rem] md:leading-snug">{block.body}</p>

          <h3 className="mt-8 text-3xl font-semibold md:text-[2.8125rem]">
            What&apos;s <span className="text-brand">Included</span>
          </h3>
          <ul className="mt-3 space-y-3">
            {block.included.map((item) => (
              <li key={item} className="flex items-center gap-4 text-xl font-semibold md:text-[2.1875rem] md:leading-tight">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-3xl font-semibold text-brand md:text-[2.8125rem]">Outcome</h3>
          <ul className="mt-3 space-y-3">
            {block.outcomes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-xl font-semibold md:text-[2.1875rem] md:leading-tight">
                <Check className="mt-1 size-7 shrink-0 text-green-500 md:size-8" strokeWidth={3.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
