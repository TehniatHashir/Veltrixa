import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { GradientButton } from "@/components/GradientButton";
import { contact } from "@/data/site";
import { sendContactForm } from "@/lib/sendContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Veltrixa — Gulberg Islamabad" },
      {
        name: "description",
        content:
          "Get in touch with Veltrixa in Gulberg Islamabad, Pakistan. Call Tehniat Hashir at +92 336 0925493 or email info@veltrixa.com.",
      },
      { property: "og:title", content: "Contact | Veltrixa" },
      {
        property: "og:description",
        content: "We answer all enquiries within 24 hours on business days.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

type FormState = { name: string; email: string; phone: string; message: string };
const empty: FormState = { name: "", email: "", phone: "", message: "" };

function ContactPage() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const update = (key: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const next: Partial<FormState> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) next.message = "Tell us a little more (10+ characters).";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    setSendError(null);
    try {
      await sendContactForm({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        subject: "New message from Veltrixa website",
      });
      setSent(true);
      setForm(empty);
    } catch (error) {
      setSendError(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

  const details = [
    { icon: MapPin, label: "Visit Our Location", value: contact.location },
    { icon: Mail, label: "Send Us Email", value: contact.email, href: `mailto:${contact.email}` },
    {
      icon: Phone,
      label: `Phone · ${contact.personName}`,
      value: contact.phone,
      href: `tel:${contact.phoneHref}`,
    },
    { icon: Clock, label: "Open Hours", value: contact.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's build something"
        highlight="together"
        description="Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:gap-10 sm:px-5 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          {details.map((detail, index) => (
            <Reveal key={detail.label} delay={index * 0.07} direction={index % 2 === 0 ? "left" : "scale"}>
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-brand-soft sm:gap-4 sm:p-6"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-blue/30 bg-blue/5 text-blue">
                  <detail.icon className="size-5 stroke-[1.7]" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="mt-1 block break-words font-semibold transition-colors hover:text-blue"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="mt-1 break-words font-semibold">{detail.value}</p>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-lg border border-border bg-card p-5 shadow-brand-glow sm:p-9">
            <h2 className="text-2xl font-bold">
              Send Us A <span className="text-magenta">Message</span>
            </h2>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 flex items-start gap-3 rounded-lg bg-surface p-6"
              >
                <CheckCircle2 className="mt-0.5 size-5 text-blue" />
                <div>
                  <p className="font-semibold">Thanks! We'll get back to you soon.</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Your message is on its way to our inbox. For anything urgent, reach us at{" "}
                    {contact.email} or {contact.phone}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-4 text-sm font-semibold text-blue underline-offset-4 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form className="mt-6 space-y-5" onSubmit={submit} noValidate>
                <Field label="Your Name" error={errors.name}>
                  <input
                    value={form.name}
                    onChange={update("name")}
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-blue"
                    placeholder="Jane Doe"
                  />
                </Field>
                <Field label="Email Address" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-blue"
                    placeholder="you@company.com"
                  />
                </Field>
                <Field label="Phone (optional)">
                  <input
                    value={form.phone}
                    onChange={update("phone")}
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-blue"
                    placeholder="+92 300 0000000"
                  />
                </Field>
                <Field label="Your Message" error={errors.message}>
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    rows={5}
                    className="w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-blue"
                    placeholder="Tell us about your project…"
                  />
                </Field>
                {sendError ? (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive"
                  >
                    {sendError}
                  </motion.p>
                ) : null}
                <GradientButton
                  type="submit"
                  className={sending ? "w-full opacity-70" : "w-full"}
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </GradientButton>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      {children}
      {error ? <span className="mt-2 block text-xs text-destructive">{error}</span> : null}
    </label>
  );
}
