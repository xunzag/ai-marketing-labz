import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { Testimonials } from "@/components/testimonials";
import { ContactSection } from "@/components/contact-section";
import { CheckIcon, DiscussButton, OutlineButton, SectionTitle } from "@/components/ui";
import { FramedPhoto } from "@/components/home/why-choose-us";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Have a project in mind? Talk to AI Marketing Labz about a marketing strategy that delivers real results.",
};

const reasons = ["Free Initial Consultation", "Customized Marketing Strategy", "Transparent Pricing", "Dedicated Support Team"];

export default function ContactPage() {
  return (
    <>
      <PageHero image="/images/hero-contact.svg" overlay="bg-black/70">
        <p className="text-2xl font-semibold text-brand md:text-3xl">Contact us</p>
        <h1 className="mx-auto mt-4 max-w-[758px] text-4xl font-semibold uppercase leading-tight sm:text-5xl xl:text-[62px]">
          Let’s Start <span className="text-brand">Your Growth</span> Journey
        </h1>
        <p className="mx-auto mt-6 max-w-[1047px] text-lg md:text-[28px] md:leading-snug">
          Have a project in mind? Looking to scale your business?
          <br className="hidden md:block" /> Our team is ready to create a strategy that delivers real results.
        </p>
        <div className="mt-8">
          <DiscussButton href="#contact" />
        </div>
      </PageHero>

      <section className="relative isolate overflow-hidden py-16 md:py-24">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[541px_minmax(0,698px)] lg:justify-between">
          <FramedPhoto src="/images/contact-why.svg" alt="Consultation with our team" aspect="aspect-[541/381]" />
          <div>
            <SectionTitle>
              Why Contact <span className="text-brand">AI Marketing Labz?</span>
            </SectionTitle>
            <ul className="mt-8 space-y-6">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-4 text-2xl font-semibold md:text-[35px]">
                  <CheckIcon />
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection formTitle="Get in Touch" />

      <CtaBanner image="/images/banner-contact.svg">
        <h2 className="text-3xl font-extrabold uppercase leading-tight md:text-[45px]">
          Ready to Grow <span className="text-brand">Your Brand?</span>
        </h2>
        <p className="max-w-[964px] text-lg font-semibold md:text-[30px] md:leading-snug">
          Let’s build a powerful marketing strategy tailored to your business goals.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <DiscussButton href="#contact" />
          <OutlineButton href="#contact">Get A Quote</OutlineButton>
        </div>
      </CtaBanner>

      <Testimonials />
    </>
  );
}
