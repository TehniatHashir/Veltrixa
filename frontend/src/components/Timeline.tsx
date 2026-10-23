import { motion } from "motion/react";
import { BarChart3, Rocket, Settings, Trophy, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";

type Milestone = {
  year: string;
  title: string;
  text: string;
  icon: LucideIcon;
};

const milestones: Milestone[] = [
  {
    year: "2018",
    title: "Founded",
    text: "Started with a simple vision to deliver smart and reliable IT solutions.",
    icon: Rocket,
  },
  {
    year: "2019",
    title: "Expansion",
    text: "Grew our team and expanded our services to support more businesses.",
    icon: BarChart3,
  },
  {
    year: "2023",
    title: "Automation Era",
    text: "Introduced AI-powered solutions to help clients work smarter and faster.",
    icon: Settings,
  },
  {
    year: "2026",
    title: "Today",
    text: "A trusted technology partner delivering innovative solutions to businesses worldwide.",
    icon: Trophy,
  },
];

export function Timeline() {
  return (
    <section className="overflow-hidden bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="text-center">
            <span className="inline-flex items-center gap-3 rounded-full bg-surface px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-0.5 w-6 rounded bg-gradient-brand" />
            Timeline
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Our{" "}
            <span className="text-gradient-brand">
              Journey
            </span>
          </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
  From a small idea to a trusted name in full-service technology solutions.
</p>
        </div>

        {/* Timeline */}
        <ol className="mt-12 grid gap-10 sm:mt-14 md:grid-cols-4 md:gap-6">
          {milestones.map((item, index) => {
            const next = milestones[index + 1];
            const Icon = item.icon;
            return (
              <li
                key={item.year}
                className="relative pl-[4.75rem] md:flex md:flex-col md:items-center md:pl-0"
              >
                {/* Mobile vertical connector */}
                {next && (
                  <motion.span
                    aria-hidden
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.8, delay: index * 0.15, ease: "easeInOut" }}
                    className="absolute left-[27px] top-7 h-[calc(100%+2.5rem)] w-0.5 origin-top bg-gradient-brand md:hidden"
                  />
                )}

                {/* Desktop horizontal connector (center of this icon -> center of next) */}
                {next && (
                  <motion.span
                    aria-hidden
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.8, delay: index * 0.2, ease: "easeInOut" }}
                    className="absolute left-1/2 top-8 hidden h-0.5 w-[calc(100%+1.5rem)] origin-left bg-gradient-brand md:block"
                  />
                )}

                {/* Icon circle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="absolute left-0 top-0 z-10 flex size-14 items-center justify-center rounded-full border-4 border-background bg-background text-blue shadow-brand-glow md:static md:size-16"
                >
                  <Icon className="size-6 stroke-[1.8] md:size-7" />
                </motion.div>

                {/* Dotted stem + dot (desktop only) */}
                <div aria-hidden className="hidden flex-col items-center md:flex">
                  <span
                    className="h-6 w-0 border-l border-dashed border-blue"
                  />
                  <span className="size-2.5 rounded-full bg-blue" />
                </div>

                {/* Card */}
                <Reveal
                  delay={index * 0.12}
                  direction={index % 2 === 0 ? "left" : "right"}
                  className="w-full md:mt-1"
                >
                  <div className="relative h-full overflow-hidden rounded-xl border border-border bg-card p-6 shadow-brand-soft sm:p-7">
                    <span
                      aria-hidden
                      className="absolute right-0 top-0 size-20 rounded-bl-[100%] bg-blue/10"
                    />
                    <span
                      className="relative text-2xl font-extrabold text-blue"
                    >
                      {item.year}
                    </span>
                    <h3 className="relative mt-2 text-lg font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}