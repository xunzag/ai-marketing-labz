import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Photo } from "./photo";
import { SocialLinks } from "./social";
import { contact } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#solutions" },
  { label: "Portfolio", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-black font-poppins">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-4 pt-16 pb-12 sm:px-6 md:grid-cols-2 xl:grid-cols-[1.4fr_0.9fr_1.3fr_0.8fr] xl:gap-8">
        <div className="flex flex-col items-center text-center md:items-start md:text-left xl:pl-10">
          <Photo src="/images/logo.svg" alt="AI Marketing LABZ" width={219} height={194} className="h-auto w-44 md:w-[219px]" />
          <p className="mt-6 max-w-[384px] text-lg md:text-[21.5px]">
            Learn more about our mission, values, and the team dedicated to driving your digital success.
          </p>
          <p className="mt-8 font-sans text-2xl font-extrabold uppercase">Follow us</p>
          <SocialLinks className="mt-4" />
        </div>

        <FooterColumn title="Quick Link">
          {quickLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="hover:text-brand">
                {link.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact Detail">
          <li className="flex gap-4">
            <Phone className="mt-1 size-6 shrink-0" />
            <a href={contact.phoneHref} className="hover:text-brand">
              {contact.phone}
            </a>
          </li>
          <li className="flex gap-4">
            <Mail className="mt-1 size-6 shrink-0" />
            <a href={`mailto:${contact.email}`} className="break-all hover:text-brand">
              {contact.email}
            </a>
          </li>
          <li className="flex gap-4">
            <MapPin className="mt-1 size-6 shrink-0" />
            <span className="max-w-[304px]">{contact.address}</span>
          </li>
        </FooterColumn>

        <FooterColumn title="Legal">
          <li>
            <Link href="#" className="hover:text-brand">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-brand">
              Terms of Service
            </Link>
          </li>
        </FooterColumn>
      </div>

      <div className="px-4 pb-12">
        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="mx-auto flex max-w-[681px] items-center justify-between gap-4 rounded-[4px] border-2 border-white px-4 py-5 font-sans text-base font-bold uppercase transition hover:border-brand hover:text-brand sm:text-[21.5px]"
        >
          <span>Get in touch</span>
          <span className="flex items-center gap-2">
            <ArrowLeft className="size-5" /> Chat on <ArrowRight className="size-5" />
          </span>
          <span>WhatsApp</span>
        </a>
      </div>

      <div className="bg-brand px-4 py-8 text-center font-sans text-lg font-medium md:text-[25px]">
        {new Date().getFullYear()} © Aimarketinglabz. All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-sans text-3xl font-semibold md:text-[35px]">{title}</h3>
      <ul className="mt-8 space-y-8 text-lg font-medium md:text-[21.5px]">{children}</ul>
    </div>
  );
}
