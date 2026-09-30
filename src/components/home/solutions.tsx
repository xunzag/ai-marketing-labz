import Link from "next/link";
import { Photo } from "../photo";
import { CheckIcon, SectionTitle } from "../ui";
import { industries } from "@/lib/industries";

export function Solutions() {
  return (
    <section id="solutions" className="relative scroll-mt-10 overflow-hidden py-16 md:py-24">
      <Decor />
      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6">
        <div className="mx-auto max-w-[690px] text-center">
          <SectionTitle>
            Our <span className="text-brand">Solutions</span>
          </SectionTitle>
          <p className="mt-4 text-lg font-semibold md:text-[25px]">
            Tailored digital solutions designed for businesses across multiple industries.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 xl:mt-20 xl:grid-cols-4 xl:gap-10">
          {industries.map((industry) => {
            return (
              <li key={industry.slug} className="flex flex-col rounded-[8.5px] bg-white px-6 pt-8 pb-6 font-poppins text-[#101010] shadow-[-1px_4px_4px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(7,175,202,0.35)]">
                <Photo src={`/images/icon-${industry.slug}.png`} alt="" width={112} height={83} className="mx-auto h-[83px] w-auto" />
                <h3 className="mt-6 text-center font-sans text-xl font-semibold leading-tight">{industry.cardTitle}</h3>
                <p className="mt-1 text-center text-[12.7px] font-semibold">{industry.tagline}</p>
                <ol className="mt-5 space-y-2.5 text-[12.7px] font-semibold">
                  {industry.solutions.map((solution, i) => (
                    <li key={solution.title} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 size-3" />
                      {i + 1}. {solution.title}
                    </li>
                  ))}
                </ol>
                <Link
                  href={`/solutions/${industry.slug}`}
                  className="mx-auto mt-auto block w-[143px] translate-y-0 rounded-[3px] border-[0.3px] border-brand-dark bg-brand py-1.5 text-center text-[12.7px] font-semibold text-white transition hover:bg-brand-dark"
                >
                  <span className="sr-only">{industry.cardTitle}: </span>Explore Solution
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// Dashed flight paths and floating tiles at the section edges (desktop only).
function Decor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden xl:block">
      <svg className="absolute top-0 left-0 h-full w-[320px]" viewBox="0 0 320 950" fill="none">
        <path d="M-20 60 C 220 160, 60 420, 140 560 S 40 820, 160 940" stroke="#fff" strokeWidth="2" strokeDasharray="10 12" />
      </svg>
      <svg className="absolute top-0 right-0 h-full w-[320px]" viewBox="0 0 320 950" fill="none">
        <path d="M340 30 C 120 120, 200 300, 250 380 S 120 700, 330 940" stroke="#fff" strokeWidth="2" strokeDasharray="10 12" />
      </svg>
      <span className="absolute top-[36%] left-[4%] size-14 -rotate-9 rounded-[18px] bg-brand shadow-[10px_10px_12px_rgba(132,227,255,0.5)]" />
      <span className="absolute top-[20%] right-[6%] size-16 rotate-7 rounded-[20px] bg-brand shadow-[10px_10px_12px_rgba(132,227,255,0.5)]" />
    </div>
  );
}
