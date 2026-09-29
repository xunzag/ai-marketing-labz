import Link from "next/link";
import type { ReactNode } from "react";

// Heading with one phrase in the brand colour, e.g. "Who <We Are>".
export function Accent({ text, highlight, className = "text-brand" }: { text: string; highlight: string; className?: string }) {
  const at = text.indexOf(highlight);
  if (at === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <span className={className}>{highlight}</span>
      {text.slice(at + highlight.length)}
    </>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-3xl font-semibold leading-tight md:text-4xl xl:text-[45px] ${className}`}>{children}</h2>;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

// "Let's Discuss" button: white outline, white label, a dot on a long line.
export function DiscussButton({ href = "/contact", label = "Let’s Discuss" }: { href?: string; label?: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex h-12 items-center gap-3 rounded-[5px] border-[1.5px] border-white px-3 text-lg font-semibold text-white shadow-[0_6px_0_-2px_#0082a8] transition hover:bg-white/10 md:h-[57px] md:text-2xl"
    >
      {label}
      <span className="flex w-20 items-center md:w-28" aria-hidden>
        <span className="size-2 shrink-0 rounded-full bg-white transition-transform group-hover:translate-x-2" />
        <span className="h-px flex-1 bg-white" />
      </span>
    </Link>
  );
}

// Outline button with a cyan label ("Learn More", "Get A Quote").
export function OutlineButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-[4px] border-[1.5px] border-white px-8 text-lg font-semibold text-brand shadow-[0_6px_0_-2px_#0082a8] transition hover:bg-white hover:text-brand-dark md:h-[57px] md:min-w-[248px] md:text-2xl"
    >
      {children}
    </Link>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" className={`size-[18px] shrink-0 ${className}`} aria-hidden>
      <rect width="18" height="18" rx="2" fill="#07afca" />
      <path d="M4.5 9.2l3 3 6-6.4" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
