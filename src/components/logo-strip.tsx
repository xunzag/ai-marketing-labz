import { Photo } from "./photo";
import { clientLogos } from "@/lib/site";

export function LogoStrip() {
  const logos = [...clientLogos, ...clientLogos];
  return (
    <section aria-label="Our clients" className="overflow-hidden py-8 md:py-9">
      <ul className="flex w-max animate-marquee items-center will-change-transform">
        {logos.map((src, i) => (
          <li key={i} className="shrink-0 pr-16" aria-hidden={i >= clientLogos.length}>
            <Photo src={src} alt={i < clientLogos.length ? `Client logo ${i + 1}` : ""} width={180} height={50} className="h-12 w-auto max-w-none" />
          </li>
        ))}
      </ul>
    </section>
  );
}
