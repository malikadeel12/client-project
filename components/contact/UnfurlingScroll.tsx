"use client";

/**
 * What: Contact letter — readable fields on parchment, one clear send button.
 * Why: The old “scroll” had invisible lines, a muddy wash, and a wax stamp
 *      that did not look like a form. People need to know where to type.
 */

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

export function UnfurlingScroll() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: site.contact.subjects[0] as string,
    message: "",
  });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSending(false);
    setSent(true);
  };

  if (sent) {
    return (
      <section className="bg-parchment-warm px-3 py-16">
        <p className="mx-auto max-w-editorial text-center font-accent text-xl italic text-cocoa-bean">
          {site.contact.success}
        </p>
      </section>
    );
  }

  return (
    <section className="bg-parchment-warm px-3 py-12 md:py-16">
      <form
        onSubmit={submit}
        className="mx-auto max-w-scroll border border-terracotta-dust/35 bg-limestone-ivory px-4 py-8 md:px-8"
      >
        <p className="font-mono text-xs tracking-widest text-verdigris">YOUR MESSAGE</p>
        <p className="mt-1 font-display text-2xl tracking-liturgical text-cocoa-bean">Write to us</p>
        <p className="mt-2 font-body text-sm text-moss-stone">{site.contact.note}</p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Field
            label="Name"
            value={form.name}
            onChange={(name) => setForm((f) => ({ ...f, name }))}
            autoComplete="name"
            placeholder="Your name"
          />
          <Field
            label="Email"
            type="email"
            value={form.email}
            onChange={(email) => setForm((f) => ({ ...f, email }))}
            autoComplete="email"
            placeholder="you@email.com"
          />
        </div>

        <label className="mt-5 block">
          <span className="mb-1 block font-mono text-xs text-verdigris">Subject</span>
          <select
            value={form.subject}
            onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
            className="w-full rounded-field border border-terracotta-dust/50 bg-parchment-warm px-3 py-2.5 font-body text-cocoa-bean outline-none focus:border-verdigris"
          >
            {site.contact.subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label className="mt-5 block">
          <span className="mb-1 block font-mono text-xs text-verdigris">Message</span>
          <textarea
            required
            minLength={8}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            placeholder="Write your message here"
            className="min-h-[160px] w-full resize-y rounded-field border border-terracotta-dust/50 bg-parchment-warm px-3 py-2.5 font-body text-cocoa-bean outline-none focus:border-verdigris"
          />
        </label>

        <button
          type="submit"
          disabled={sending}
          className="mt-7 rounded-button bg-verdigris px-5 py-2.5 font-body text-limestone-ivory transition hover:bg-copper-raw disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send message"}
        </button>
      </form>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-xs text-verdigris">{label}</span>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-field border border-terracotta-dust/50 bg-parchment-warm px-3 py-2.5 font-body text-cocoa-bean outline-none focus:border-verdigris"
      />
    </label>
  );
}
