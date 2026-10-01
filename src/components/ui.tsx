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
  return <h2 className={`text-3xl font-semibold leading-tight md:text-4xl xl:text-[2.8125rem] ${className}`}>{children}</h2>;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[80rem] px-4 sm:px-6 ${className}`}>{children}</div>;
}

// "Let's Discuss" button: white outline, white label, a dot on a long line.
export function DiscussButton({ href = "/contact", label = "Let’s Discuss" }: { href?: string; label?: string }) {
  return (
    <Link
      href={href}
      className="btn-fill inline-flex h-12 items-center gap-3 rounded-[0.3125rem] border-[1.5px] border-white px-3 text-lg font-semibold text-white md:h-[3.5625rem] md:text-2xl"
    >
      {label}
      <span className="relative flex h-2 w-20 items-center md:w-28" aria-hidden>
        <span className="h-px w-full bg-white" />
        <span className="absolute top-0 left-0 size-2 animate-dot-slide rounded-full bg-white" />
      </span>
    </Link>
  );
}

// Outline button with a cyan label ("Learn More", "Get A Quote").
export function OutlineButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="btn-fill inline-flex h-12 min-w-[12.5rem] items-center justify-center rounded-[0.25rem] border-[1.5px] border-white px-8 text-lg font-semibold text-brand transition-colors duration-500 hover:text-white md:h-[3.5625rem] md:min-w-[15.5rem] md:text-2xl"
    >
      {children}
    </Link>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" className={`size-[1.125rem] shrink-0 ${className}`} aria-hidden>
      <rect width="18" height="18" rx="2" fill="#07afca" />
      <path d="M4.5 9.2l3 3 6-6.4" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
