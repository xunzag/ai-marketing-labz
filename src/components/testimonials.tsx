"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Photo } from "./photo";
import { SectionTitle } from "./ui";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  const [start, setStart] = useState(0);
  const [perView, setPerView] = useState(2);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setPerView(query.matches ? 2 : 1);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const count = testimonials.length;
  const visible = Array.from({ length: perView }, (_, i) => testimonials[(start + i) % count]);
  const move = (step: number) => setStart((current) => (current + step + count) % count);

  return (
    <section id="testimonials" className="scroll-mt-10 py-16 md:py-24">
      <div className="mx-auto max-w-[95.5rem] px-4 sm:px-6">
        <div className="mx-auto max-w-[40.4375rem] text-center">
          <p className="text-lg font-semibold text-brand md:text-xl">What Our Clients Say</p>
          <SectionTitle className="mt-1">
            Hear From <span className="text-brand">Our Clients</span>
          </SectionTitle>
          <p className="mt-3 text-lg font-semibold md:text-xl">
            Clients share their experiences, highlighting the impact of our tailored strategies and dedicated support.
          </p>
        </div>

        <div className="mt-12 flex items-center gap-2 md:mt-16 md:gap-6">
          <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial" className="shrink-0 transition hover:text-brand">
            <ChevronLeft className="size-10 md:size-[4.5rem]" strokeWidth={2.5} />
          </button>
          <div className="grid flex-1 gap-6 lg:grid-cols-2 lg:gap-16" aria-live="polite">
            {visible.map((item, i) => (
              <article key={`${start}-${i}`} className="flex flex-col gap-8 rounded-3xl border border-line bg-white p-6 text-ink md:p-8">
                <div className="flex gap-1 text-brand-dark" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star key={s} className="size-5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold leading-tight md:text-[1.5625rem]">{item.title}</h3>
                  <p className="text-sm leading-[1.375rem] text-body">{item.body}</p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-4 rounded-[0.875rem] bg-brand px-4 py-3 shadow-[24px_24px_24px_rgba(150,37,231,0.15)] md:px-6">
                  <div className="flex min-w-0 items-center gap-3">
                    <Photo src={item.avatar} alt="" width={64} height={64} className="size-12 rounded-[1.125rem] object-cover md:size-16" />
                    <p className="flex flex-wrap gap-x-2 text-base font-semibold md:text-xl">
                      <span className="text-white">{item.name}</span>
                      <span className="text-[#333]">{item.role}</span>
                    </p>
                  </div>
                  <Quote className="size-7 shrink-0 fill-white text-white" />
                </div>
              </article>
            ))}
          </div>
          <button type="button" onClick={() => move(1)} aria-label="Next testimonial" className="shrink-0 transition hover:text-brand">
            <ChevronRight className="size-10 md:size-[4.5rem]" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
