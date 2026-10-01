"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/site";

type Status = { kind: "idle" | "sending" | "sent" } | { kind: "error"; message: string };

const field =
  "w-full rounded-sm bg-field px-6 py-5 font-poppins text-base text-ink placeholder:text-grey-01 outline-none ring-brand focus:ring-2 md:px-10";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ kind: "sending" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error ?? "Something went wrong.");
      form.reset();
      setStatus({ kind: "sent" });
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Something went wrong." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-7">
      <label className="block">
        <span className="sr-only">Name</span>
        <input name="name" required autoComplete="name" placeholder="Name" className={field} />
      </label>
      <label className="block">
        <span className="sr-only">Email address</span>
        <input name="email" type="email" required autoComplete="email" placeholder="EMail Address" className={field} />
      </label>
      <label className="block">
        <span className="sr-only">Message</span>
        <textarea name="message" required rows={1} placeholder="Message" className={`${field} min-h-[4.75rem] resize-y`} />
      </label>

      <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p role="status" className="text-sm">
          {status.kind === "sent" && <span className="text-brand">Thanks! We’ll be in touch shortly.</span>}
          {status.kind === "error" && (
            <span className="text-red-400">
              {status.message} You can also email{" "}
              <a href={`mailto:${contact.email}`} className="underline">
                {contact.email}
              </a>
              .
            </span>
          )}
        </p>
        <button
          type="submit"
          disabled={status.kind === "sending"}
          className="btn-fill h-[3.25rem] w-[14rem] shrink-0 rounded-[0.25rem] border-[1.4px] border-white text-[1.3438rem] font-semibold text-brand transition-colors duration-500 hover:text-white disabled:opacity-60 sm:ml-auto"
        >
          {status.kind === "sending" ? "Sending…" : "Get A Touch"}
        </button>
      </div>
    </form>
  );
}
