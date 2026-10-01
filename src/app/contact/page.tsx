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
      <PageHero image="/images/hero-contact.jpg" dim={0.7}>
        <p className="text-2xl font-semibold text-brand md:text-3xl">Contact us</p>
        <h1 className="mx-auto mt-4 max-w-[47.375rem] text-4xl font-semibold uppercase leading-tight sm:text-5xl xl:text-[3.875rem]">
          Let’s Start <span className="text-brand">Your Growth</span> Journey
        </h1>
        <p className="mx-auto mt-6 max-w-[65.4375rem] text-lg md:text-[1.75rem] md:leading-snug">
          Have a project in mind? Looking to scale your business?
          <br className="hidden md:block" /> Our team is ready to create a strategy that delivers real results.
        </p>
        <div className="mt-8">
          <DiscussButton href="#contact" />
        </div>
      </PageHero>

      <section className="relative isolate overflow-hidden py-16 md:py-24">
        <div className="mx-auto grid max-w-[82.5rem] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[541px_minmax(0,698px)] lg:justify-between">
          <FramedPhoto src="/images/contact-why.jpg" alt="Consultation with our team" aspect="aspect-[541/381]" />
          <div>
            <SectionTitle>
              Why Contact <span className="text-brand">AI Marketing Labz?</span>
            </SectionTitle>
            <ul className="mt-8 space-y-6">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-4 text-2xl font-semibold md:text-[2.1875rem]">
                  <CheckIcon />
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection formTitle="Get in Touch" />

      <CtaBanner image="/images/banner-contact.jpg">
        <h2 className="text-3xl font-extrabold uppercase leading-tight md:text-[2.8125rem]">
          Ready to Grow <span className="text-brand">Your Brand?</span>
        </h2>
        <p className="max-w-[60.25rem] text-lg font-semibold md:text-[1.875rem] md:leading-snug">
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
