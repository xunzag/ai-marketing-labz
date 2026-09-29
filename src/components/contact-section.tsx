import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./contact-form";
import { contact } from "@/lib/site";

export function ContactSection({ id = "contact", formTitle = "Send a Message" }: { id?: string; formTitle?: string }) {
  return (
    <section id={id} className="scroll-mt-10 bg-[#101010] py-16 md:py-[72px]">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-4 sm:px-6 lg:grid-cols-[400px_1fr] lg:gap-[80px]">
        <div className="font-poppins">
          <h2 className="font-sans text-3xl font-extrabold uppercase leading-snug md:text-[35px]">
            Ready to help
            <br />
            you, call now!
          </h2>
          <p className="mt-6 max-w-[384px] text-base leading-normal text-muted md:text-[16.5px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <ul className="mt-8 space-y-6">
            <ContactItem icon={<MapPin className="size-6" />} label="Address">
              {contact.address}
            </ContactItem>
            <ContactItem icon={<Phone className="size-6" />} label="Phone">
              <a href={contact.phoneHref} className="hover:text-brand">
                {contact.phone}
              </a>
            </ContactItem>
            <ContactItem icon={<Mail className="size-6" />} label="Email">
              <a href={`mailto:${contact.email}`} className="hover:text-brand">
                {contact.email}
              </a>
            </ContactItem>
          </ul>
        </div>

        <div className="rounded-[20px] border-[1.5px] border-white/50 bg-black/25 p-6 md:px-10 md:py-8">
          <h3 className="text-2xl font-medium text-brand md:text-[29px]">{formTitle}</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-5">
      <span className="flex size-[51px] shrink-0 items-center justify-center rounded-full bg-brand">{icon}</span>
      <div className="max-w-[240px]">
        <p className="font-sans text-xl font-semibold">{label}</p>
        <div className="mt-1 text-base font-medium text-muted md:text-[17px]">{children}</div>
      </div>
    </li>
  );
}
