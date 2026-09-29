import { PenTool, Rocket } from "lucide-react";
import { Photo } from "../photo";
import { OutlineButton, SectionTitle } from "../ui";

export function WhoWeAre() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,671px)_minmax(0,497px)] lg:justify-between lg:gap-10">
        <ImageStack src="/images/who-we-are.jpg" alt="AI-powered marketing dashboards over a laptop" />
        <div>
          <SectionTitle>
            Who <span className="text-brand">We Are</span>
          </SectionTitle>
          <div className="mt-6 space-y-0 text-lg leading-normal md:text-[25px]">
            <p>
              AI Digital Marketing LABZ is a next‑generation digital marketing agency based in the UAE. We combine artificial
              intelligence, creative strategy, and performance marketing to help brands grow smarter, faster, and stronger in the
              digital world.
            </p>
            <p>From startups to established businesses, we create scalable marketing systems that deliver measurable results.</p>
          </div>
          <div className="mt-8">
            <OutlineButton href="/about">Learn More</OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// Photo on a cyan block, with two floating icon tiles (used on Home and About).
export function ImageStack({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[671px] pb-10 pl-6 sm:pl-10">
      <div className="absolute bottom-0 left-0 h-[88%] w-[42%] rounded-[18px] bg-brand-dark" />
      <div className="relative aspect-[631/510] overflow-hidden rounded-[18px] bg-[#bdbdbd]">
        <Photo src={src} alt={alt} fill sizes="(min-width: 1024px) 631px, 100vw" className="object-cover" />
      </div>
      <span className="absolute top-[16%] left-2 flex size-12 -rotate-9 items-center justify-center rounded-[20px] bg-brand shadow-[12px_12px_12px_#84e3ff] sm:left-4 sm:size-16">
        <Rocket className="size-6 sm:size-8" />
      </span>
      <span className="absolute right-0 bottom-2 flex size-16 rotate-7 items-center justify-center rounded-[24px] bg-brand shadow-[12px_12px_12px_rgba(132,227,255,0.4)] sm:right-[-4%] sm:size-20">
        <PenTool className="size-8 sm:size-10" />
      </span>
    </div>
  );
}
