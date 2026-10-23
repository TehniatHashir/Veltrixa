import { motion } from "motion/react";
import { Code2, Globe, Lightbulb, Mail, PenLine, Search, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { contact, team } from "@/data/site";

type Extra = {
  skill: string;
  icon: LucideIcon;
  linkedin: string;
  email: string;
  website: string;
};

// Extra card details, keyed by member name (photo, name and role come from data/site)
const extras: Record<string, Extra> = {
  "Hassan Alam": {
    skill: "Business Strategy",
    icon: Lightbulb,
    linkedin: "#",
    email: `mailto:${contact.email}`,
    website: "#",
  },
  "Ayesha Khan": {
    skill: "UI/UX Design",
    icon: PenLine,
    linkedin: "#",
    email: `mailto:${contact.email}`,
    website: "#",
  },
  "Bilal Ahmed": {
    skill: "Web Development",
    icon: Code2,
    linkedin: "#",
    email: `mailto:${contact.email}`,
    website: "#",
  },
  "Sana Malik": {
    skill: "Search Optimization",
    icon: Search,
    linkedin: "#",
    email: `mailto:${contact.email}`,
    website: "#",
  },
};

const fallback: Extra = {
  skill: "Digital Solutions",
  icon: Code2,
  linkedin: "#",
  email: `mailto:${contact.email}`,
  website: "#",
};

const FEATURED_INDEX = 1; // card shown with the gradient border by default

const socialClass =
  "flex size-8 items-center justify-center rounded-full bg-surface text-ink transition-all hover:-translate-y-0.5 hover:bg-border";

export function Team() {
  return (
    <section className="relative overflow-hidden bg-background py-10 sm:py-12">
      {/* Decorative background (desktop only) */}
      <div aria-hidden className="pointer-events-none absolute -left-24 top-24 hidden size-64 rounded-full bg-blue/10 lg:block" />
      <div aria-hidden className="pointer-events-none absolute -left-6 top-44 hidden size-48 rounded-full bg-blue/10 lg:block" />
      <div aria-hidden className="pointer-events-none absolute -left-16 top-4 hidden size-72 rounded-full border border-border lg:block" />
      <span aria-hidden className="pointer-events-none absolute left-40 top-16 hidden size-3.5 rounded-full bg-blue lg:block" />
      <div aria-hidden className="pointer-events-none absolute -right-24 top-36 hidden size-64 rounded-full bg-blue/10 lg:block" />
      <div aria-hidden className="pointer-events-none absolute -right-10 bottom-6 hidden size-56 rounded-full bg-blue/10 lg:block" />
      <div aria-hidden className="pointer-events-none absolute -right-20 top-20 hidden size-80 rounded-full border border-border lg:block" />
      <span aria-hidden className="pointer-events-none absolute right-24 top-32 hidden size-3.5 rounded-full bg-blue lg:block" />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-surface px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-0.5 w-5 rounded bg-gradient-brand" />
            Team
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl">
            The people behind{" "}
            <span className="text-gradient-brand">
              Veltrixa
            </span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-muted-foreground sm:text-sm">
            A compact, senior team of designers, developers and strategists working directly with
            you.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-8 grid max-w-sm gap-5 sm:mt-10 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => {
            const extra = extras[member.name] ?? fallback;
            const Icon = extra.icon;
            const featured = index === FEATURED_INDEX;

            return (
              <Reveal key={member.name} delay={index * 0.08} direction="scale" className="h-full">
             <motion.div
  whileHover={{ y: -6 }}
  className="group relative flex h-full rounded-2xl p-[1.5px]"
>
  {/* Gradient border layer (always on for featured, on hover for others) */}
  <span
    aria-hidden
    className={`absolute inset-0 rounded-2xl bg-gradient-brand transition-opacity duration-300 ${
      featured ? "opacity-100" : "opacity-0 group-hover:opacity-100"
    }`}
  />
  <div
      className={`relative flex flex-1 flex-col overflow-hidden rounded-[14.5px] bg-background ${
      featured
        ? "shadow-brand-glow"
        : "border border-border shadow-brand-soft group-hover:border-transparent"
    }`}
  >
    {/* Photo */}
    <div
      className="relative aspect-[4/3.2] overflow-hidden bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-blue)_8%,var(--background)),var(--background)_70%)]"
    >
      <span
        aria-hidden
        className="absolute -right-4 bottom-0 size-[78%] rounded-[45%_55%_40%_60%] bg-blue/15 transition-transform duration-700 group-hover:scale-110"
      />
      <img
        src={member.image}
        alt={`${member.name}, ${member.role} at Veltrixa`}
        loading="lazy"
        className="relative z-10 size-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    {/* Details */}
    <div className="flex flex-1 flex-col p-4">
      <h3 className="text-base font-extrabold text-ink sm:text-lg">{member.name}</h3>
      <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {member.role}
      </p>
      <span
        aria-hidden
        className="mt-3 block h-0.5 w-10 rounded-full bg-gradient-brand"
      />

      <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
        <Icon className="size-4 shrink-0 text-blue" strokeWidth={1.7} />
        {extra.skill}
      </div>

      <div className="mt-auto flex items-center gap-2 pt-4">
        <a href={extra.linkedin} aria-label={`${member.name} on LinkedIn`} className={`${socialClass} text-xs font-extrabold`}>
          in
        </a>
        <a href={extra.email} aria-label={`Email ${member.name}`} className={socialClass}>
          <Mail className="size-3.5" />
        </a>
        <a href={extra.website} aria-label={`${member.name} website`} className={socialClass}>
          <Globe className="size-3.5" />
        </a>
      </div>
    </div>
  </div>
</motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}