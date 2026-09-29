import { Photo } from "../photo";
import { CheckIcon, SectionTitle } from "../ui";

const reasons = [
  {
    title: "Industry-Focused Expertise",
    body: "We understand the unique challenges of different industries and create solutions tailored to your business goals.",
  },
  {
    title: "Customized Solutions",
    body: "Every business is different. We design and develop strategies that align with your requirements instead of using one-size-fits-all approaches.",
  },
  {
    title: "Quality & Innovation",
    body: "Our team leverages modern technologies and creative thinking to deliver high-performing, future-ready digital solutions.",
  },
  {
    title: "Dedicated Support",
    body: "From planning to deployment and beyond, we provide reliable support to ensure your business continues to grow successfully.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/60 py-16 md:py-20">
      <Photo src="/images/why-bg.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-15" />
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="mx-auto max-w-[1158px] text-center">
          <SectionTitle>
            Why <span className="text-brand">Choose Us</span>
          </SectionTitle>
          <p className="mt-4 text-lg font-semibold md:text-[25px]">
            We combine strategy, creativity, and technology to deliver tailored digital solutions that help businesses grow, improve
            efficiency, and achieve measurable results.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[626px_541px] lg:justify-between">
          <ul className="space-y-6">
            {reasons.map((reason, i) => (
              <li
                key={reason.title}
                className={`flex gap-4 px-4 py-2 ${i === 0 ? "rounded-tl-[20px] rounded-br-[20px] border-2 border-white bg-brand/20" : ""}`}
              >
                <CheckIcon className="mt-3" />
                <div>
                  <h3 className="text-2xl font-semibold md:text-[35px] md:leading-tight">{reason.title}</h3>
                  <p className="mt-1 text-base md:text-xl">{reason.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <FramedPhoto src="/images/why-photo.jpg" alt="Team collaborating around laptops" />
        </div>
      </div>
    </section>
  );
}

// Photo with a thick dark border and a white card peeking out top-right.
export function FramedPhoto({ src, alt, aspect = "aspect-[541/603]" }: { src: string; alt: string; aspect?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[541px] pt-3 pr-3">
      <div className="absolute top-0 right-0 h-full w-[96%] rounded-tr-[14px] bg-white" />
      <div className={`relative ${aspect} overflow-hidden rounded-[14px] border-[7px] border-black bg-[#d9d9d9]`}>
        <Photo src={src} alt={alt} fill sizes="(min-width: 1024px) 541px, 100vw" className="object-cover" />
      </div>
    </div>
  );
}
