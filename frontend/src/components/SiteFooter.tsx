import { Link } from "@tanstack/react-router";
import { Clock, Dribbble, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { contact, navLinks, services } from "@/data/site";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "text-blue" },
  { icon: Facebook, label: "Facebook", href: "#", color: "text-blue" },
  { icon: Instagram, label: "Instagram", href: "#", color: "text-magenta" },
  { icon: Dribbble, label: "Dribbble", href: "#", color: "text-magenta" },
];

const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

function ColumnTitle({ children, bar }: { children: string; bar: string }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-primary-foreground">{children}</h3>
      <span className={`mt-2 block h-[3px] w-7 rounded-full ${bar}`} />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  iconClass,
  bg,
  title,
  sub,
  href,
}: {
  icon: typeof Clock;
  iconClass: string;
  bg: string;
  title: string;
  sub: string;
  href?: string;
}) {
  const body = (
    <>
      <span className={`flex size-9 shrink-0 items-center justify-center rounded-full ${bg}`}>
        <Icon className={`size-4 ${iconClass}`} />
      </span>
      <span className="min-w-0 leading-snug">
        <span className="block break-words text-xs font-medium text-primary-foreground">{title}</span>
        <span className="block text-[11px] text-primary-foreground/55">{sub}</span>
      </span>
    </>
  );
  const cls = "flex items-center gap-2.5";
  return href ? (
    <a href={href} className={`${cls} transition-opacity hover:opacity-80`}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-ink-soft text-primary-foreground">
      {/* decorative shapes, bottom-right */}
      <div aria-hidden className="pointer-events-none absolute -bottom-24 right-0 hidden h-64 w-[420px] sm:block">
        <div className="absolute bottom-0 right-24 h-40 w-64 rounded-[60%_40%_0_0] bg-gradient-brand opacity-70" />
        <div className="absolute -right-16 bottom-0 size-56 rounded-full bg-gradient-brand opacity-80" />
        <span className="absolute right-16 top-8 size-4 rounded-full bg-orange" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-12 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.95fr_1.15fr] lg:gap-0">
          {/* brand + contact */}
          <div className="lg:border-r lg:border-primary-foreground/10 lg:pr-10">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="text-lg font-bold">
                Veltrixa
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-primary-foreground/65">
              Veltrixa empowers innovation, delivering modern IT solutions tailored to your business needs.
            </p>
            <div className="mt-5 space-y-3">
              <ContactRow
                icon={Clock}
                iconClass="text-magenta"
                bg="bg-magenta/15"
                title="Open Hours"
                sub={contact.hours}
              />
              <ContactRow
                icon={MapPin}
                iconClass="text-blue"
                bg="bg-blue/15"
                title={contact.location}
                sub="Pakistan"
              />
              <ContactRow
                icon={Mail}
                iconClass="text-magenta"
                bg="bg-magenta/15"
                title={contact.email}
                sub="We reply within 24 hours"
                href={`mailto:${contact.email}`}
              />
              <ContactRow
                icon={Phone}
                iconClass="text-blue"
                bg="bg-blue/15"
                title={contact.phone}
                sub="Call or WhatsApp"
                href={`tel:${contact.phoneHref}`}
              />
            </div>
          </div>

          {/* quick links */}
          <div className="lg:px-10">
            <ColumnTitle bar="bg-magenta">Quick Links</ColumnTitle>
            <ul className="mt-5 space-y-2.5 text-xs text-primary-foreground/70">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div className="lg:px-6">
            <ColumnTitle bar="bg-blue">Our Services</ColumnTitle>
            <ul className="mt-5 space-y-2.5 text-xs text-primary-foreground/70">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="transition-colors hover:text-primary-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* newsletter */}
          <div className="sm:col-span-2 lg:col-span-1 lg:pl-4">
            <ColumnTitle bar="bg-violet">Stay Updated</ColumnTitle>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-primary-foreground/65">
              Subscribe to our newsletter to get the latest updates, insights and special offers.
            </p>
            <form
              className="relative mt-4 flex max-w-sm items-center gap-2 rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-1.5"
              onSubmit={(event) => {
                event.preventDefault();
                if (!email.includes("@")) return;
                setSent(true);
                setEmail("");
              }}
            >
              <Mail className="ml-2 size-3.5 shrink-0 text-primary-foreground/60" />
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                aria-label="Your email address"
                className="min-w-0 flex-1 bg-transparent px-1.5 py-1.5 text-xs text-primary-foreground placeholder:text-primary-foreground/45 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-magenta text-primary-foreground transition-colors hover:bg-magenta/90"
              >
                <Send className="size-3.5" />
              </button>
            </form>
            {sent ? <p className="mt-2 text-[11px] text-blue">Thanks for subscribing!</p> : null}

            <div className="mt-4 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`flex size-9 items-center justify-center rounded-full border border-primary-foreground/10 bg-primary-foreground/[0.04] transition-colors hover:bg-primary-foreground/10 ${s.color}`}
                >
                  <s.icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar — SOLID dark background, not transparent */}
      <div className="relative border-t border-primary-foreground/10 bg-ink">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2.5 px-5 py-4 text-[11px] text-primary-foreground/55 sm:px-8 md:flex-row md:justify-between">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-primary-foreground">Veltrixa</span>. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-y-2">
            {legal.map((item, i) => (
              <li key={item.label} className={i > 0 ? "ml-3 border-l border-primary-foreground/15 pl-3" : ""}>
                <a href={item.href} className="transition-colors hover:text-primary-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}