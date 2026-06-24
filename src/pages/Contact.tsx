import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/PageHero";
import { COMPANY } from "@/lib/content";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  subject: z.string().trim().min(3, "Subject is required").max(150),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
  "bot-field": z.string().optional(),
});

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k] ?? "")}`)
    .join("&");
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;

    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }

    setStatus("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...raw }),
      });
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Start a conversation about your project.</>}
        intro="Share a brief about your structure, retrofit, or WASH programme. We respond to every enquiry within two working days."
      />

      <section className="container-x py-20 lg:py-28 grid lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-4 space-y-10">
          <div>
            <span className="eyebrow">Offices</span>
            <span className="rule mt-4 mb-6" />
            <ul className="space-y-5">
              {COMPANY.addresses.map((a) => (
                <li key={a} className="flex gap-3 text-[color:var(--color-ink-soft)]">
                  <MapPin className="h-5 w-5 mt-1 text-[color:var(--color-brass-deep)] flex-none" />
                  <span className="leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow">Direct</span>
            <span className="rule mt-4 mb-6" />
            <ul className="space-y-3">
              <li className="flex gap-3 text-[color:var(--color-ink-soft)]">
                <Phone className="h-5 w-5 mt-0.5 text-[color:var(--color-brass-deep)]" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
              </li>
              {COMPANY.emails.map((e) => (
                <li key={e} className="flex gap-3 text-[color:var(--color-ink-soft)]">
                  <Mail className="h-5 w-5 mt-0.5 text-[color:var(--color-brass-deep)]" />
                  <a href={`mailto:${e}`}>{e}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-8">
          {status === "ok" ? (
            <div className="border border-[color:var(--color-line)] bg-[color:var(--color-bg-alt)] p-10 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-[color:var(--color-brass-deep)]" />
              <h2 className="font-display text-3xl mt-4">Thank you.</h2>
              <p className="text-[color:var(--color-ink-soft)] mt-3 max-w-md mx-auto">
                Your enquiry has been received. A member of our team will be in touch
                shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm underline text-[color:var(--color-brass-deep)]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Name" name="name" error={errors.name} required />
                <Field label="Email" name="email" type="email" error={errors.email} required />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Company / Organisation" name="company" error={errors.company} />
                <Field label="Phone" name="phone" type="tel" error={errors.phone} />
              </div>
              <Field label="Subject" name="subject" error={errors.subject} required />

              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)] block mb-2">
                  Project Brief <span className="text-[color:var(--color-brass-deep)]">*</span>
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full border border-[color:var(--color-line)] bg-transparent p-4 text-[color:var(--color-ink)] focus:outline-none focus:border-[color:var(--color-ink)] transition-colors"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-700">{errors.message}</p>
                )}
              </div>

              <div className="flex items-center gap-6 pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-[color:var(--color-ink)] text-[color:var(--color-bg)] px-8 py-4 text-sm font-medium tracking-wide hover:bg-[color:var(--color-brass-deep)] transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? "Sending…" : "Send Enquiry"}
                </button>
                {status === "error" && (
                  <span className="text-sm text-red-700">
                    Something went wrong. Please try again or email us directly.
                  </span>
                )}
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)] block mb-2">
        {label} {required && <span className="text-[color:var(--color-brass-deep)]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-[color:var(--color-line)] bg-transparent p-3.5 text-[color:var(--color-ink)] focus:outline-none focus:border-[color:var(--color-ink)] transition-colors"
      />
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}
