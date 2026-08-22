"use client";

/**
 * What: Four-step circular offering — ink fields, copper coins, live book, stained glass, wax seal.
 * Why: A white card form would fail the brief on sight.
 * Business rule: Book of Honor name is the critical field. Payment goes to /api/donate (KUNFU Pay).
 */

import { useState, type Dispatch, type SetStateAction } from "react";
import { site } from "@/content/site";
import { WaxSealMark } from "@/components/svg/icons";
import { ImpactSidebar } from "./ImpactSidebar";

const STEPS = ["Your Identity", "Your Gift", "Your Legacy", "Your Method"] as const;
const METHODS = [
  { id: "card", label: "Credit / Debit", glass: "#4A7C6F", region: "Global" },
  { id: "pix", label: "PIX", glass: "#2E7A4F", region: "Brazil" },
  { id: "multibanco", label: "Multibanco", glass: "#8B0000", region: "Portugal" },
  { id: "mobile_money", label: "Mobile Money", glass: "#B08A2E", region: "Africa" },
] as const;

type FormState = {
  name: string;
  email: string;
  amount: number | "other";
  customAmount: string;
  honorName: string;
  method: (typeof METHODS)[number]["id"];
};

export function OfferingWizard() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "press" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    amount: 100,
    customAmount: "",
    honorName: "",
    method: "card",
  });

  const amountValue = form.amount === "other" ? Number(form.customAmount) : form.amount;

  const next = () => {
    if (step === 0 && (!form.name.trim() || !form.email.includes("@"))) {
      setStatus("error");
      setMessage("Please write your name and a valid email before continuing.");
      return;
    }
    if (step === 1 && !amountValue) {
      setStatus("error");
      setMessage("Choose an amount — even a small stone helps.");
      return;
    }
    if (step === 2 && !form.honorName.trim()) {
      setStatus("error");
      setMessage("The Book of Honor needs a name to inscribe.");
      return;
    }
    setStatus("idle");
    setMessage("");
    setStep((s) => Math.min(3, s + 1));
  };
  const back = () => {
    setStatus("idle");
    setMessage("");
    setStep((s) => Math.max(0, s - 1));
  };

  const submit = async () => {
    if (!form.name || !form.email || !amountValue || !form.honorName) {
      setMessage("Please complete each sacred step before pressing the seal.");
      setStatus("error");
      return;
    }
    setStatus("press");
    window.setTimeout(() => setStatus("loading"), 350);
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          amount: Math.round(amountValue * 100),
          honorName: form.honorName,
          method: form.method,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "The offering could not be sealed.");
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
        return;
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "The offering could not be sealed.");
    }
  };

  if (status === "success") {
    return (
      <section className="parchment-grain px-3 py-18 text-center">
        <p className="font-display text-4xl tracking-liturgical text-verdigris">Thank You</p>
        <p className="mx-auto mt-3 max-w-editorial font-accent italic text-cocoa-bean">
          Your name will be written with the others who refused to let this chapel disappear.
        </p>
      </section>
    );
  }

  return (
    <section className="parchment-grain px-3 py-18">
      <div className="mx-auto flex max-w-sanctuary justify-center gap-12">
        <div className="w-full max-w-offering">
          <p className="mb-3 text-center font-display text-xl tracking-liturgical text-cocoa-bean">
            {STEPS[step]}
          </p>
          <ol className="relative mx-auto mb-8 flex w-full max-w-[480px] justify-between">
            {STEPS.map((label, i) => {
              const done = i < step;
              const current = i === step;
              return (
                <li key={label} className="flex w-16 flex-col items-center text-center">
                  <button
                    type="button"
                    onClick={() => i <= step && setStep(i)}
                    aria-current={current ? "step" : undefined}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border font-mono text-xs ${
                      current || done
                        ? "border-verdigris bg-verdigris text-limestone-ivory"
                        : "border-volcanic-obsidian bg-transparent text-volcanic-obsidian"
                    }`}
                  >
                    {done ? "✓" : i + 1}
                  </button>
                  <span className="mt-1 hidden font-mono text-[10px] text-moss-stone sm:block">{label}</span>
                </li>
              );
            })}
          </ol>

          <div key={step} className="step-in">
            {step === 0 && <IdentityStep form={form} setForm={setForm} />}
            {step === 1 && <GiftStep form={form} setForm={setForm} />}
            {step === 3 && <MethodStep form={form} setForm={setForm} />}
            {step === 2 && <LegacyStep form={form} setForm={setForm} />}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="font-mono text-xs text-moss-stone disabled:opacity-30"
            >
              Back
            </button>
            {step < 3 ? (
              <button
                type="button"
                onClick={next}
                className="rounded-button bg-verdigris px-4 py-2 font-body text-limestone-ivory hover:bg-copper-raw"
              >
                Continue to {STEPS[step + 1]}
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                disabled={status === "loading"}
                className={`flex flex-col items-center origin-bottom ${status === "press" ? "translate-y-[5px] scale-y-90" : ""}`}
              >
                <WaxSealMark size={96} />
                <span className="mt-2 font-body text-sm text-cocoa-bean">
                  {status === "loading" ? "Processing…" : "Send offering"}
                </span>
              </button>
            )}
          </div>
          {status === "loading" && (
            <p className="mt-3 text-center font-mono text-xs text-verdigris">Processing…</p>
          )}
          {status === "error" && <p className="mt-3 text-center font-mono text-xs text-terracotta-dust">{message}</p>}
        </div>
        <ImpactSidebar />
      </div>
    </section>
  );
}

function InkField({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="mb-6 block">
      <span className="mb-1 block font-mono text-xs text-verdigris">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-0 bg-transparent py-2 font-body text-cocoa-bean outline-none"
        autoComplete={type === "email" ? "email" : "name"}
      />
      <span className="block h-px bg-terracotta-dust/60" />
      <span className="block h-px -translate-y-px origin-center scale-x-0 bg-verdigris transition duration-300 group-focus-within:scale-x-100" />
    </label>
  );
}

function IdentityStep({
  form,
  setForm,
}: {
  form: FormState;
  setForm: Dispatch<SetStateAction<FormState>>;
}) {
  return (
    <div>
      <InkField label="Full Name" value={form.name} onChange={(name) => setForm((f) => ({ ...f, name }))} />
      <InkField
        label="Email"
        type="email"
        value={form.email}
        onChange={(email) => setForm((f) => ({ ...f, email }))}
      />
    </div>
  );
}

function GiftStep({
  form,
  setForm,
}: {
  form: FormState;
  setForm: Dispatch<SetStateAction<FormState>>;
}) {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {site.donate.amounts.map((coin) => {
          const selected = form.amount === coin.value;
          return (
            <li key={coin.value}>
              <button
                type="button"
                onClick={() => setForm((f) => ({ ...f, amount: coin.value }))}
                className={`flex h-16 w-16 items-center justify-center rounded-full border-[1.5px] font-mono text-sm transition [transform-style:preserve-3d] hover:-translate-y-0.5 hover:border-verdigris ${
                  selected
                    ? "translate-y-0.5 border-verdigris bg-verdigris text-limestone-ivory shadow-[0_8px_0_rgba(26,22,20,0.2)]"
                    : "border-terracotta-dust bg-transparent text-cocoa-bean"
                }`}
              >
                ${coin.value}
              </button>
              <p className="mt-1 font-mono text-[11px] leading-snug text-moss-stone">{coin.impact}</p>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            onClick={() => setForm((f) => ({ ...f, amount: "other" }))}
            className={`flex h-16 w-16 items-center justify-center rounded-full border-[1.5px] font-mono text-xs ${
              form.amount === "other" ? "border-verdigris bg-verdigris text-limestone-ivory" : "border-terracotta-dust"
            }`}
          >
            Other
          </button>
        </li>
      </ul>
      {form.amount === "other" && (
        <InkField
          label="Custom amount (USD)"
          value={form.customAmount}
          onChange={(customAmount) => setForm((f) => ({ ...f, customAmount }))}
        />
      )}
    </div>
  );
}

function LegacyStep({
  form,
  setForm,
}: {
  form: FormState;
  setForm: Dispatch<SetStateAction<FormState>>;
}) {
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <div className="flex-1 border-l-[3px] border-verdigris pl-3">
        <InkField
          label="Name for the Book of Honor"
          value={form.honorName}
          onChange={(honorName) => setForm((f) => ({ ...f, honorName }))}
        />
        <p className="font-accent text-sm italic text-terracotta-dust">
          e.g., your name, “Silva Family,” or your company. This name will be inscribed in the Book of Honor displayed
          in the chapel.
        </p>
      </div>
      <div className="mx-auto h-[160px] w-[120px] bg-cocoa-bean p-2 shadow-lg [transform:perspective(600px)_rotateY(-12deg)]">
        <div className="h-full bg-parchment-warm p-2">
          <p className="font-mono text-[10px] text-moss-stone">LIVRO DE HONRA</p>
          <p className="mt-3 font-mono text-xs text-verdigris">{form.honorName || "…"}</p>
        </div>
      </div>
    </div>
  );
}

function MethodStep({
  form,
  setForm,
}: {
  form: FormState;
  setForm: Dispatch<SetStateAction<FormState>>;
}) {
  return (
    <ul className="grid grid-cols-2 gap-3">
      {METHODS.map((m) => (
        <li key={m.id}>
          <button
            type="button"
            onClick={() => setForm((f) => ({ ...f, method: m.id }))}
            className="relative h-24 w-full overflow-hidden border-2 border-copper-raw"
            style={{ background: `${m.glass}99` }}
          >
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
            <span className="relative block font-display text-sm text-limestone-ivory">{m.label}</span>
            <span className="relative font-mono text-[10px] text-limestone-ivory/80">{m.region}</span>
            {form.method === m.id && <span className="relative mt-1 block font-mono text-[10px] text-limestone-ivory">Selected</span>}
          </button>
        </li>
      ))}
    </ul>
  );
}
