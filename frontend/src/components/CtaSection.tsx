import { ArrowRight, Phone, ShieldCheck, Users, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/data/site";
import ctaArt from "@/assets/cta-illustration.png";



const CTA_ART: string | undefined = ctaArt;

const perks = [
  { icon: Zap, label: "Fast Response", color: "text-orange" },
  { icon: ShieldCheck, label: "Secure & Reliable", color: "text-magenta" },
  { icon: Users, label: "Dedicated Support", color: "text-violet" },
];

function LaptopIllustration() {
  if (CTA_ART) return <img src={CTA_ART} alt="" loading="lazy" className="h-full w-full object-contain" />;

  return (
    <div className="relative h-full w-full">
      {/* dotted grid */}
      <div
        aria-hidden
        className="absolute left-[6%] top-[4%] h-24 w-32 bg-[radial-gradient(var(--muted-foreground)_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-40"
      />
      {/* brand color blobs */}
      <div aria-hidden className="absolute left-[24%] top-[2%] size-[62%] rounded-full bg-gradient-brand" />
      <div aria-hidden className="absolute right-[6%] top-[26%] size-[42%] rounded-full bg-gradient-to-br from-blue-dark to-blue" />

      {/* sparks */}
      <span aria-hidden className="absolute right-[4%] top-[4%] h-8 w-1 rotate-[20deg] rounded bg-magenta" />
      <span aria-hidden className="absolute right-[0%] top-[12%] h-1 w-9 -rotate-[20deg] rounded bg-blue" />

      {/* plant */}
      <div aria-hidden className="absolute bottom-[26%] left-[6%] flex flex-col items-center">
        <div className="flex h-14 items-end gap-0.5">
          <span className="h-10 w-3 -rotate-[25deg] rounded-full bg-blue-dark" />
          <span className="h-14 w-3 rounded-full bg-blue" />
          <span className="h-11 w-3 rotate-[25deg] rounded-full bg-blue-dark" />
        </div>
        <div className="-mt-1 h-14 w-14 rounded-b-xl rounded-t-md bg-gradient-to-b from-border to-muted-foreground" />
      </div>

      {/* laptop */}
      <div className="absolute bottom-[10%] left-[22%] w-[62%] [perspective:900px]">
        <div className="[transform:rotateY(-14deg)_rotateX(4deg)]">
          <div className="rounded-xl border-[5px] border-ink-soft bg-ink p-2 shadow-2xl">
            <div className="flex gap-2">
              <div className="w-[16%] space-y-1.5 rounded-md bg-ink-soft p-1.5">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-violet" />
                    <span className="h-0.5 flex-1 rounded bg-ink" />
                  </div>
                ))}
              </div>
              <div className="grid flex-1 grid-cols-5 gap-1.5">
                <div className="col-span-3 rounded-md bg-ink-soft p-1.5">
                  <svg viewBox="0 0 120 50" className="h-full w-full">
                    <defs>
                      <linearGradient id="ctaLine" x1="0" x2="1">
                        <stop offset="0" stopColor="var(--brand-magenta)" />
                        <stop offset="1" stopColor="var(--brand-orange)" />
                      </linearGradient>
                    </defs>
                    <path d="M2 40 C 20 20, 30 44, 50 28 S 85 30, 118 6" fill="none" stroke="url(#ctaLine)" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="col-span-2 flex items-center justify-center rounded-md bg-ink-soft p-1.5">
                  <div className="h-full w-full rounded bg-gradient-to-br from-blue to-violet" />
                </div>
                <div className="col-span-3 space-y-1 rounded-md bg-ink-soft p-1.5">
                  <span className="block h-1 w-1/2 rounded bg-violet" />
                  <span className="block h-1 w-2/3 rounded bg-orange" />
                  <span className="block h-1 w-1/3 rounded bg-ink" />
                </div>
                <div className="col-span-2 space-y-1 rounded-md bg-ink-soft p-1.5">
                  <span className="block h-1 w-full rounded bg-ink" />
                  <span className="block h-1 w-3/4 rounded bg-blue" />
                </div>
              </div>
            </div>
          </div>
            <div className="mx-auto -mt-0.5 h-3 w-[108%] -translate-x-[4%] rounded-b-2xl bg-gradient-to-b from-muted-foreground to-ink-soft" />
        </div>
      </div>

      {/* growth card */}
      <div className="absolute bottom-[14%] right-0 w-[26%] min-w-[110px] rounded-xl border border-primary-foreground/10 bg-ink-soft p-3 text-center shadow-xl">
        <div className="mx-auto flex h-8 items-end justify-center gap-1">
          <span className="h-3 w-2 rounded-sm bg-magenta" />
          <span className="h-5 w-2 rounded-sm bg-violet" />
          <span className="h-8 w-2 rounded-sm bg-blue" />
        </div>
        <p className="mt-2 text-[11px] leading-tight text-primary-foreground/90">
          Your Growth
          <br />
          Our Priority
        </p>
      </div>
    </div>
  );
}

export function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-10 text-primary-foreground shadow-brand-glow sm:px-10 lg:px-14 lg:py-12">
          {/* soft glow */}
          <div aria-hidden className="pointer-events-none absolute -right-20 top-0 size-[360px] rounded-full bg-violet/10 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-primary-foreground/70">
                <span className="size-1.5 rounded-full bg-magenta" />
                Let's Work Together
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
                Building Digital Solutions
                <br />
                That{" "}
                <span className="text-gradient-brand">
                  Drive Real Results.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/65 sm:text-base">
                We help businesses transform ideas into powerful digital experiences that drive growth, engage audiences
                and create lasting impact.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-blue px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-blue-dark"
                >
                  Contact Us
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-primary-foreground/20 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/5"
                >
                  <Phone className="size-4 text-primary-foreground/70" />
                  Call Now: {contact.phone}
                </a>
              </div>

              <ul className="mt-7 flex flex-wrap items-center gap-y-2.5 text-xs text-primary-foreground/85">
                {perks.map((perk, i) => (
                  <li
                    key={perk.label}
                    className={`flex items-center gap-2 ${i > 0 ? "ml-4 border-l border-primary-foreground/15 pl-4" : ""}`}
                  >
                    <perk.icon className={`size-4 ${perk.color}`} />
                    {perk.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto hidden h-[320px] w-full max-w-[440px] lg:block">
              <LaptopIllustration />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}