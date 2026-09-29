import { PageHero } from "@/components/page-hero";
import { LogoStrip } from "@/components/logo-strip";
import { CtaBanner } from "@/components/cta-banner";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { ContactSection } from "@/components/contact-section";
import { DiscussButton, OutlineButton } from "@/components/ui";
import { WhoWeAre } from "@/components/home/who-we-are";
import { Solutions } from "@/components/home/solutions";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <>
      <PageHero image="/images/hero-home.svg" overlay="bg-black/40">
        <p className="inline-block rounded bg-brand px-4 py-1 text-lg font-semibold md:px-5 md:text-[30px] md:leading-[50px]">
          Your All-In-One Marketing Solutions Expert
        </p>
        <h1 className="mt-2 text-[34px] font-semibold uppercase leading-tight sm:text-6xl xl:text-[80px] xl:leading-[1.2]">AI MarketingLABZ</h1>
        <div className="mt-6">
          <DiscussButton />
        </div>
      </PageHero>

      <LogoStrip />
      <WhoWeAre />

      <CtaBanner image="/images/banner-city.svg">
        <h2 className="text-3xl font-extrabold uppercase leading-tight md:text-[45px]">
          AI-Powered <span className="text-brand">Digital Marketing</span>
          <br />
          for Smart Brands
        </h2>
        <p className="max-w-[878px] text-lg font-semibold md:text-[30px] md:leading-snug">
          We help UAE businesses grow faster with data-driven strategies, automation, and high-performance campaigns.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <DiscussButton />
          <OutlineButton href="/contact">Get A Quote</OutlineButton>
        </div>
      </CtaBanner>

      <Solutions />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
    </>
  );
}
