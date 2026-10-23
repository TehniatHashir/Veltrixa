import { Rocket, Target } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const cards = [
  {
    icon: Target,
    title: "Our",
    highlight: "Mission",
    highlightClass: "text-magenta",
    text: "To empower businesses with smart, scalable software solutions that drive real growth — combining clean development, thoughtful design, and automation to turn ideas into measurable results.",
    badge: "bg-violet/10 text-violet",
    bar: "bg-blue",
    art: (
      <>
        <div className="absolute -bottom-20 -right-14 size-56 rounded-full bg-gradient-to-tl from-magenta/20 via-magenta/10 to-transparent" />
      </>
    ),
  },
  {
    icon: Rocket,
    title: "Our",
    highlight: "Vision",
    highlightClass: "text-violet",
    text: "To be a trusted technology partner for businesses worldwide, known for innovation, reliability, and delivering digital experiences that create lasting impact.",
    badge: "bg-magenta/10 text-magenta",
    bar: "bg-magenta",
    art: (
      <>
        <div className="absolute -bottom-24 -right-10 h-52 w-[70%] rounded-[60%_40%_0_0] bg-gradient-to-tr from-blue/20 via-violet/10 to-transparent" />
        <div className="absolute -bottom-8 -right-8 size-32 rounded-full bg-gradient-to-br from-violet/20 to-blue/10" />
      </>
    ),
  },
];

export function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-16">
      {/* background decorations */}
      <div aria-hidden className="pointer-events-none absolute -left-20 top-20 size-52 rounded-full bg-gradient-to-br from-magenta/20 to-orange/10 sm:size-64" />
      <div aria-hidden className="pointer-events-none absolute -left-8 top-8 hidden size-60 rounded-full border border-magenta/30 md:block" />
      <span aria-hidden className="pointer-events-none absolute left-[18%] top-14 hidden size-3 rounded-full bg-magenta md:block" />
      <div aria-hidden className="pointer-events-none absolute -right-28 top-14 hidden size-72 rounded-full border border-blue/20 bg-gradient-to-br from-blue/5 to-transparent md:block" />
      <span aria-hidden className="pointer-events-none absolute right-[10%] top-12 hidden size-3 rounded-full bg-violet md:block" />
      <div aria-hidden className="pointer-events-none absolute -right-14 bottom-14 hidden size-40 rounded-full bg-gradient-to-br from-violet/20 to-blue/10 md:block" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-0.5 w-5 rounded bg-gradient-brand" />
            Purpose
          </span>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Mission &amp;{" "}
            <span className="text-gradient-brand">
              Vision
            </span>
          </h2>
          <p className="mx-auto mt-2.5 max-w-lg text-xs text-muted-foreground sm:text-sm">
            What drives us forward and where we’re heading next.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
          {cards.map((card, index) => (
            <Reveal key={card.highlight} delay={index * 0.1} direction={index === 0 ? "left" : "right"} className="h-full">
              <div className="relative h-full overflow-hidden rounded-xl border border-border bg-card p-5 shadow-brand-glow sm:p-6">
                {card.art}
                <div className="relative">
                  <span className={`flex size-10 items-center justify-center rounded-lg sm:size-12 ${card.badge}`}>
                    <card.icon className="size-5 sm:size-6" strokeWidth={1.8} />
                  </span>
                  <span aria-hidden className={`mt-4 block h-[3px] w-8 rounded-full ${card.bar}`} />
                  <h3 className="mt-3 text-xl font-extrabold text-foreground sm:text-2xl">
                    {card.title} <span className={card.highlightClass}>{card.highlight}</span>
                  </h3>
                  <p className="mt-2.5 max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {card.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}