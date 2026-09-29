import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { CtaBanner } from "@/components/cta-banner";
import { Testimonials } from "@/components/testimonials";
import { ContactSection } from "@/components/contact-section";
import { CheckIcon, DiscussButton, OutlineButton, SectionTitle } from "@/components/ui";
import { ImageStack } from "@/components/home/who-we-are";
import { FramedPhoto } from "@/components/home/why-choose-us";

export const metadata: Metadata = {
  title: "About us",
  description:
    "AI Marketing Labz is a UAE-based full-service marketing agency helping businesses grow through intelligent digital strategies, powerful branding, and impactful traditional marketing.",
};

const services = [
  { title: "Digital Marketing", body: "Performance campaigns, paid ads, SEO, and lead generation strategies that drive growth." },
  { title: "Traditional Marketing", body: "Billboards, print media, radio, and offline campaigns that build strong brand authority." },
  { title: "Website Design & Development", body: "Modern, responsive, and conversion-focused websites designed to turn visitors into customers." },
  { title: "Branding", body: "Logo design, brand identity systems, and visual storytelling that creates lasting impressions." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero image="/images/hero-about.jpg" overlay="bg-black/70">
        <p className="text-2xl font-semibold text-brand md:text-3xl">About us</p>
        <h1 className="mx-auto mt-4 max-w-[929px] text-4xl font-semibold uppercase leading-tight sm:text-5xl xl:text-[62px]">
          Transforming Brands <span className="text-brand">with Strategy</span> &amp; Creativity
        </h1>
        <p className="mx-auto mt-6 max-w-[1047px] text-lg md:text-[28px] md:leading-snug">
          AI Marketing Labz is a UAE-based full-service marketing agency helping businesses grow through intelligent digital strategies,
          powerful branding, and impactful traditional marketing.
        </p>
        <div className="mt-8">
          <DiscussButton />
        </div>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,671px)_minmax(0,497px)] lg:justify-between lg:gap-10">
          <ImageStack src="/images/about-main.jpg" alt="The AI Marketing Labz team" />
          <div>
            <SectionTitle>
              About <span className="text-brand">us</span>
            </SectionTitle>
            <div className="mt-6 space-y-4 text-lg md:text-[25px] md:leading-snug">
              <p>AI Marketing Labz is a modern marketing agency built to bridge the gap between creativity and performance.</p>
              <p>
                Based in the UAE, we work with startups, growing businesses, and established enterprises to create marketing systems
                that deliver measurable results.
              </p>
              <p>We combine AI-driven insights, strategic planning, and creative excellence to help brands stand out in competitive markets.</p>
            </div>
          </div>
        </div>
      </section>

      <Statement
        title="Our Mission"
        body="To empower businesses in the UAE and beyond with innovative marketing solutions that drive sustainable growth and long-term brand success."
        image="/images/about-mission.jpg"
      />
      <Statement
        title="Our Vision"
        body="To become a leading marketing partner known for creativity, transparency, and results-driven performance across the Middle East and global markets."
        image="/images/about-vision.jpg"
        reversed
      />

      <CtaBanner image="/images/banner-about.jpg">
        <h2 className="text-3xl font-extrabold uppercase leading-tight md:text-[45px]">
          Let’s Build Something
          <br />
          <span className="text-brand">Powerful</span> Together
        </h2>
        <p className="max-w-[964px] text-lg font-semibold md:text-[30px] md:leading-snug">
          Whether you&apos;re launching a new brand or scaling an existing business, AI Marketing Labz is your trusted marketing partner
          in the UAE.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <DiscussButton />
          <OutlineButton href="/contact">Get A Quote</OutlineButton>
        </div>
      </CtaBanner>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[541px_minmax(0,698px)] lg:justify-between">
          <FramedPhoto src="/images/about-approach.jpg" alt="Our team planning a campaign" />
          <div>
            <SectionTitle>
              What We Do <span className="text-brand">Best</span>
            </SectionTitle>
            <p className="mt-3 text-lg md:text-xl">We offer complete 360° marketing solutions under one roof:</p>
            <ul className="mt-6 space-y-4">
              {services.map((service, i) => (
                <li
                  key={service.title}
                  className={`flex gap-4 px-4 py-2 ${i === 0 ? "rounded-tl-[20px] rounded-br-[20px] border-2 border-white bg-brand/20" : ""}`}
                >
                  <CheckIcon className="mt-3" />
                  <div>
                    <h3 className="text-2xl font-semibold md:text-[35px] md:leading-tight">{service.title}</h3>
                    <p className="mt-1 text-base md:text-xl">{service.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactSection />
    </>
  );
}

function Statement({ title, body, image, reversed = false }: { title: string; body: string; image: string; reversed?: boolean }) {
  return (
    <section className="pb-16 md:pb-24">
      <div
        className={`mx-auto flex max-w-[1320px] flex-col items-center gap-10 px-4 sm:px-6 lg:justify-between ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      >
        <div className="relative aspect-[710/305] w-full max-w-[710px] overflow-hidden rounded-[14px] border-[5px] border-white">
          <Photo src={image} alt="" fill sizes="(min-width: 1024px) 710px, 100vw" className="object-cover" />
        </div>
        <div className="w-full max-w-[497px]">
          <SectionTitle className="text-brand">{title}</SectionTitle>
          <p className="mt-4 text-lg md:text-[25px] md:leading-snug">{body}</p>
          <div className="mt-8">
            <OutlineButton href="/contact">Get A Quote</OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}
