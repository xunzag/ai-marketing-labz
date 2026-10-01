import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { LogoStrip } from "@/components/logo-strip";
import { Photo } from "@/components/photo";
import { SolutionBlock } from "@/components/solution-block";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { ContactSection } from "@/components/contact-section";
import { DiscussButton, OutlineButton } from "@/components/ui";
import { getIndustry, industries } from "@/lib/industries";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const industry = getIndustry((await params).slug);
  if (!industry) return {};
  return { title: industry.cardTitle, description: industry.hero.body };
}

export default async function IndustryPage({ params }: PageProps<"/solutions/[slug]">) {
  const industry = getIndustry((await params).slug);
  if (!industry) notFound();
  const { hero, overview, slug } = industry;

  return (
    <>
      <PageHero image={`/images/hero-${slug}.jpg`} dim={0.8}>
        <h1 className="mx-auto max-w-[79.3125rem] text-4xl font-semibold uppercase leading-tight sm:text-5xl xl:text-[3.875rem]">
          {hero.before} <span className="text-brand-dark">{hero.highlight}</span> {hero.after}
        </h1>
        <p className="mx-auto mt-6 max-w-[79.75rem] text-lg md:text-[2rem] md:leading-snug">{hero.body}</p>
        <div className="mt-8">
          <DiscussButton />
        </div>
      </PageHero>

      <LogoStrip />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[82.5rem] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,710px)_minmax(0,508px)] lg:justify-between">
          <div className="relative aspect-[710/408] overflow-hidden rounded-[0.875rem] border-[5px] border-white">
            <Photo src={`/images/overview-${slug}.jpg`} alt="" fill sizes="(min-width: 1024px) 710px, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-xl">Overview</p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight md:text-[2.5rem]">{overview.title}</h2>
            <p className="mt-4 text-lg md:text-[1.5625rem] md:leading-snug">{overview.body}</p>
            <div className="mt-8">
              <OutlineButton href="/contact">Learn More</OutlineButton>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-brand py-6 text-center">
        <h2 className="px-4 text-3xl font-semibold md:text-[2.8125rem]">Our {industry.name} Solutions</h2>
      </div>

      {industry.solutions.map((block, i) => (
        <SolutionBlock key={block.title} block={block} image={`/images/${slug}-${i + 1}.jpg`} reversed={i % 2 === 1} />
      ))}

      <Stats />
      <Testimonials />
      <ContactSection />
    </>
  );
}
