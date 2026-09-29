"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Photo } from "./photo";
import { navLinks } from "@/lib/site";
import { industries } from "@/lib/industries";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-[1594px] items-center justify-between gap-6 px-4 pt-6 sm:px-6 md:pt-8">
        <Link href="/" aria-label="AI Marketing LABZ home" className="shrink-0">
          <Photo src="/images/logo.svg" alt="AI Marketing LABZ" width={69} height={61} priority />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-xl font-semibold">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6 md:gap-9">
          <button type="button" className="hidden items-center gap-2 text-xl sm:flex" lang="ar" dir="rtl" title="Arabic version coming soon">
            <Photo src="/images/flag-kw.svg" alt="" width={48} height={26} />
            العربية
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="rounded p-1 transition hover:text-brand"
          >
            <Menu className="size-10 md:size-12" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="flex h-full w-full max-w-sm flex-col gap-8 overflow-y-auto bg-[#0b0b0b] p-6 shadow-2xl"
            onClick={(event) => {
              event.stopPropagation();
              if ((event.target as HTMLElement).closest("a")) setOpen(false);
            }}
          >
            <div className="flex items-center justify-between">
              <Photo src="/images/logo.svg" alt="AI Marketing LABZ" width={69} height={61} />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="p-1 hover:text-brand">
                <X className="size-9" />
              </button>
            </div>
            <ul className="space-y-4 text-2xl font-semibold">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">Solutions</p>
              <ul className="space-y-3 text-lg">
                {industries.map((industry) => (
                  <li key={industry.slug}>
                    <Link href={`/solutions/${industry.slug}`} className="hover:text-brand">
                      {industry.cardTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
