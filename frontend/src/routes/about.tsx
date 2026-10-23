import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Rocket, ShieldCheck, Sparkles, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { CtaSection } from "@/components/CtaSection";
import { GradientButton } from "@/components/GradientButton";
import { MissionVision } from "@/components/MissionVision";
import { Timeline } from "@/components/Timeline";
import { Stats } from "@/components/Stats";
import { stats, team } from "@/data/site";
import { Team } from "@/components/Team";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Veltrixa — Innovate, Build, Grow, Succeed" },
      {
        name: "description",
        content:
          "Veltrixa empowers innovation, delivering modern IT solutions tailored to your business needs. Meet the team behind the work.",
      },
      { property: "og:title", content: "About | Veltrixa" },
      {
        property: "og:description",
        content: "Our story, our values and the team delivering modern IT solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Sparkles,
    title: "Innovate",
    text: "We explore new ideas and technology so your product stays a step ahead.",
  },
  {
    icon: Rocket,
    title: "Build",
    text: "Clean, fast and scalable builds designed around real business goals.",
  },
  {
    icon: Users,
    title: "Grow",
    text: "SEO, automation and analytics that keep leads and revenue climbing.",
  },
  {
    icon: ShieldCheck,
    title: "Succeed",
    text: "Dedicated support available 24/7 so nothing slows your momentum.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our solutions will"
        highlight="transform your business"
        description="Veltrixa empowers innovation, delivering modern IT solutions tailored to your business needs."
      >
        <GradientButton to="/contact">Work With Us</GradientButton>
      </PageHero>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Transforming Ideas into <span className="text-magenta">Results</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Our solutions enable software teams to simplify processes, improve decision-making, and
            increase efficiency, all while creating outstanding experiences. Drive innovation and
            bring your projects to market faster than ever before.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Teams partner with Veltrixa to streamline development workflows, uncover useful
            insights, and accelerate innovation while delivering exceptional user experiences.
            Launch faster and stay ahead of the competition.
          </p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08} direction={index % 2 === 0 ? "scale" : "rotate"}>
              <div className="rounded-lg border border-border bg-card p-7 text-left shadow-brand-soft">
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <MissionVision />

      <Timeline />

      <Stats />

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Our Values" title="Innovate · Build · Grow ·" highlight="Succeed" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08} direction={index % 2 === 0 ? "left" : "right"} className={index === 0 || index === 3 ? "lg:col-span-4" : "lg:col-span-2"}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="h-full rounded-lg border border-border bg-card p-7 shadow-brand-soft"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-md border border-magenta/30 bg-magenta/5 text-magenta">
                    <value.icon className="size-5 stroke-[1.7]" />
                  </span>
                  <span aria-hidden className="mt-4 block h-0.5 w-12 bg-blue" />
                  <h3 className="mt-4 text-lg font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Team />

      <CtaSection />
    </>
  );
}
