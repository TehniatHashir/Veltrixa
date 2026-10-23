import { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Play, CodeXml, BarChart3, Zap, Users, ShieldCheck, TrendingUp, Headphones, LayoutDashboard, Code2, Quote, Star } from "lucide-react";
import { GradientButton } from "@/components/GradientButton";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { Bot, MapPin, PenLine, ShoppingBag, FileText, type LucideIcon } from "lucide-react";
import { ProjectGrid } from "@/components/ProjectGrid";
import { CtaSection } from "@/components/CtaSection";
import { Counter } from "@/components/Counter";
import { HeroTechVisual } from "@/components/HeroTechVisual";
import { features, services, stats } from "@/data/site";
import aiRobot from "@/assets/services/ai-robot.png";
import codeWindow from "@/assets/services/code-window.png";
import uiCards from "@/assets/services/ui-cards.png";
import shoppingBag from "@/assets/services/shopping-bag.png";
import mapPin from "@/assets/services/map-pin.png";
import leadForm from "@/assets/services/lead-form.png";
import michaelPhoto from "@/assets/reviews/michael.jpg";
import emilyPhoto from "@/assets/reviews/emily.jpg";
import sarahPhoto from "@/assets/reviews/sarah.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veltrixa — Transform With Smart Software" },
      {
        name: "description",
        content:
          "Veltrixa builds modern web, SEO, e-commerce and AI automation solutions that drive real business growth.",
      },
      { property: "og:title", content: "Veltrixa — Transform With Smart Software" },
      {
        property: "og:description",
        content:
          "Expert web development, UI/UX design and AI automation for businesses ready to grow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const featureIcons = [Code2, LayoutDashboard, Headphones];
const heroFeatures = [
  { icon: Zap, title: "Modern", subtitle: "Solutions" },
  { icon: Users, title: "Client", subtitle: "Focused" },
  { icon: ShieldCheck, title: "Reliable", subtitle: "& Secure" },
  { icon: TrendingUp, title: "Built for", subtitle: "Growth" },
];
type Accent = {
  icon: LucideIcon;
  badge: string;
  blob: string;
  tile: string;
  short: string;
  art?: string;
};

const serviceAccents: Record<string, Accent> = {
  "ai-automation": {
    icon: Bot,
    badge: "bg-orange/10 text-orange",
    blob: "from-orange/20 to-magenta/20",
    tile: "from-violet to-blue",
    short: "Smart AI-powered systems that reduce manual work and improve efficiency.",
    art: aiRobot,
  },
  "custom-development": {
    icon: Code2,
    badge: "bg-violet/10 text-violet",
    blob: "from-violet/20 to-magenta/20",
    tile: "from-violet to-magenta",
    short: "Tailored web solutions for contractors and service businesses.",
    art: codeWindow,
  },
  "ui-ux-design": {
    icon: PenLine,
    badge: "bg-blue/10 text-blue",
    blob: "from-blue/20 to-violet/20",
    tile: "from-blue to-violet",
    short: "Creative, user-centric designs that enhance digital experiences and drive engagement.",
    art: uiCards,
  },
  "ecommerce-solutions": {
    icon: ShoppingBag,
    badge: "bg-magenta/10 text-magenta",
    blob: "from-magenta/20 to-orange/20",
    tile: "from-magenta to-orange",
    short: "Custom e-commerce platforms to boost sales and engagement.",
    art: shoppingBag,
  },
  "local-seo-optimization": {
    icon: MapPin,
    badge: "bg-orange/10 text-orange",
    blob: "from-orange/20 to-blue/20",
    tile: "from-magenta to-orange",
    short: "Target local customers and grow your business in your area.",
    art: mapPin,
  },
  "lead-generation-system": {
    icon: FileText,
    badge: "bg-blue/10 text-blue",
    blob: "from-blue/20 to-blue/10",
    tile: "from-magenta to-blue",
    short: "Advanced forms with intelligent routing and follow-up automation.",
    art: leadForm,
  },
};

const fallbackAccent: Accent = {
  icon: Code2,
  badge: "bg-violet/10 text-violet",
  blob: "from-violet/20 to-magenta/20",
  tile: "from-violet to-magenta",
  short: "Tailored web solutions for contractors and service businesses.",
  art: codeWindow,
};

function ServiceIllustration({ accent }: { accent: Accent }) {
  const Icon = accent.icon;

  if (accent.art) {
    return (
      <img
        src={accent.art}
        alt=""
        loading="lazy"
        className="h-full w-full object-contain drop-shadow-[0_18px_30px_color-mix(in_srgb,var(--brand-violet)_25%,transparent)]"
      />
    );
  }

  return (
    <div className="relative h-full w-full">
      <div className={`absolute inset-0 rounded-[45%_55%_50%_50%] bg-gradient-to-br ${accent.blob}`} />
      <div className={`absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] items-center justify-center rounded-3xl bg-gradient-to-br ${accent.tile} shadow-brand-glow`}>
        <Icon className="size-11 text-primary-foreground" strokeWidth={1.75} />
      </div>
      <div className="absolute bottom-3 right-2 flex items-center gap-0.5 rounded-lg bg-card px-2.5 py-1.5 shadow-md">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="size-3 fill-star text-star" />
        ))}
      </div>
    </div>
  );
}
type Review = {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
  badge: string;
  gradient: string;
};

const reviews: Review[] = [
  {
    name: "Michael Chen",
    role: "Business Owner",
    quote: "Veltrixa understood our vision perfectly and delivered a modern website beyond our expectations.",
    badge: "bg-blue/10 text-blue",
    gradient: "from-blue to-blue-dark",
    avatar: michaelPhoto,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    quote: "The team is professional, creative, and super responsive. Our e-commerce sales have grown significantly!",
    badge: "bg-violet/10 text-violet",
    gradient: "from-violet to-magenta",
    avatar: emilyPhoto,
  },
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    quote: "They delivered exactly what we needed on time and with great attention to detail. Highly recommended!",
    badge: "bg-blue/10 text-blue",
    gradient: "from-blue to-blue-dark",
    avatar: sarahPhoto,
  },
];

function ReviewAvatar({ review }: { review: Review }) {
  if (review.avatar) {
    return <img src={review.avatar} alt={review.name} loading="lazy" className="size-11 rounded-full object-cover" />;
  }
  const initials = review.name
    .split(" ")
    .map((w) => w[0])
    .join("");
  return (
    <span
      className={`flex size-11 items-center justify-center rounded-full bg-gradient-to-br ${review.gradient} text-sm font-bold text-primary-foreground`}
    >
      {initials}
    </span>
  );
}
function ReviewCard({ review, active }: { review: Review; active: boolean }) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl bg-card p-5 transition-all duration-500 ${
        active
          ? "scale-[1.03] border border-violet/30 shadow-brand-glow"
          : "border border-border shadow-brand-soft"
      }`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`flex size-9 items-center justify-center rounded-lg ${review.badge}`}
        >
          <Quote className="size-4 fill-current" />
        </span>
        <div className="flex gap-0.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="size-3.5 fill-star text-star" />
          ))}
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">“{review.quote}”</p>

      <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
        <ReviewAvatar review={review} />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-foreground">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.role}</p>
        </div>
        <span
          className={`hidden shrink-0 items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-medium sm:inline-flex ${review.badge}`}
        >
          <CheckCircle2 className="size-3.5" />
          Verified client
        </span>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(1);
  const n = reviews.length;
  const wrap = (i: number) => (i + n) % n;

  const left = reviews[wrap(active - 1)]!;
  const center = reviews[active]!;
  const right = reviews[wrap(active + 1)]!;

  const arrowClass =
    "flex size-10 items-center justify-center rounded-full bg-card text-blue shadow-brand-soft transition-transform hover:scale-105";

  return (
    <section className="relative overflow-hidden bg-background py-14">
      {/* decorations */}
      <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 size-80 rounded-full bg-gradient-to-br from-violet/30 via-magenta/20 to-magenta/10 blur-sm" />
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 size-[420px] rounded-full border border-violet/20" />
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-[300px] rounded-full border border-violet/20" />
      <span aria-hidden className="pointer-events-none absolute right-14 top-16 size-6 rounded-full bg-gradient-to-br from-blue to-violet" />
      <span aria-hidden className="pointer-events-none absolute right-8 top-28 size-3 rounded-full bg-magenta" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="inline-flex items-center gap-3 rounded-full bg-violet/5 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground">
            <span className="h-0.5 w-7 rounded bg-gradient-brand" />
            Client Reviews
            <span className="h-0.5 w-7 rounded bg-gradient-brand" />
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            What Our{" "}
            <span className="text-gradient-brand">
              Clients
            </span>{" "}
            Say
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">Real feedback from people we’ve helped.</p>
        </div>

        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
          <motion.div key={`l-${left.name}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="hidden md:block">
            <ReviewCard review={left} active={false} />
          </motion.div>
          <motion.div key={`c-${center.name}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <ReviewCard review={center} active />
          </motion.div>
          <motion.div key={`r-${right.name}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="hidden md:block">
            <ReviewCard review={right} active={false} />
          </motion.div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          <button type="button" aria-label="Previous review" onClick={() => setActive(wrap(active - 1))} className={arrowClass}>
            <ChevronLeft className="size-4" />
          </button>
          <div className="flex items-center gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                type="button"
                aria-label={`Show review ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-5 bg-gradient-brand" : "w-2 bg-border hover:bg-blue/30"
                }`}
              />
            ))}
          </div>
          <button type="button" aria-label="Next review" onClick={() => setActive(wrap(active + 1))} className={arrowClass}>
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div className="mt-6 text-center">
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-medium text-blue hover:underline">
            View all testimonials <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
function HomePage() {
  return (
    <>
                       <section className="relative overflow-hidden bg-background">
        {/* Soft background glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 size-96 rounded-full bg-magenta opacity-10 blur-3xl"
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-6xl px-5 py-5 lg:py-7">
          {/* MAIN 2-COLUMN GRID */}
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            {/* LEFT COLUMN: everything on the left */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground"
              >
                <span className="h-[2px] w-7 bg-magenta" />
                We Build Digital Solutions
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="mt-3 text-[1.75rem] font-extrabold leading-[1.08] text-foreground sm:text-[2.1rem] lg:text-[2.65rem]"
              >
                Transform Ideas <br />
                into{" "}
                <span className="text-magenta">
                  Smart Solutions
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16 }}
                className="mt-3 max-w-lg text-[0.9rem] leading-relaxed text-muted-foreground"
              >
                We build modern websites, powerful web applications and digital solutions that help businesses grow, innovate and make a real impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.24 }}
                className="mt-5 flex flex-wrap items-center gap-3"
              >
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-[0.8rem] font-semibold text-primary-foreground transition-all hover:bg-ink/90"
                >
                  Our Services
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-2.5 rounded-md border border-border bg-background px-5 py-2.5 text-[0.8rem] font-semibold text-foreground transition-all hover:bg-accent"
                >
                  <span className="flex size-5 items-center justify-center rounded-full bg-magenta/10 text-magenta">
                    <Play className="size-2.5 fill-magenta" />
                  </span>
                  Watch Our Work
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.32 }}
                className="mt-5 flex max-w-sm items-center gap-8"
              >
                <div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[2rem] font-extrabold text-magenta">120</span>
                    <span className="text-[1.4rem] font-bold text-magenta">+</span>
                  </div>
                  <p className="mt-0.5 text-[0.8rem] font-medium text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="h-10 w-px bg-border"></div>
                <div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[2rem] font-extrabold text-magenta">60</span>
                    <span className="text-[1.4rem] font-bold text-magenta">+</span>
                  </div>
                  <p className="mt-0.5 text-[0.8rem] font-medium text-muted-foreground">Happy Clients</p>
                </div>
              </motion.div>

              {/* Feature strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-5 sm:grid-cols-4"
              >
                {heroFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-violet/10 text-violet">
                      <feature.icon className="size-[1.1rem]" />
                    </div>
                    <div className="leading-tight">
                      <p className="text-[12px] font-bold text-foreground">{feature.title}</p>
                      <p className="text-[11px] text-muted-foreground">{feature.subtitle}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Technology / Creativity / Real Impact strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground"
              >
                <span className="h-[2px] w-10 bg-gradient-brand" />
                Technology / Creativity / Real Impact
              </motion.div>
            </div>

            {/* RIGHT COLUMN: hero image only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-0 lg:-mt-8 lg:-ml-16"
            >
              <HeroTechVisual />
            </motion.div>
          </div>
        </div>
      </section>
    <section className="relative overflow-hidden bg-background py-20">
 
  <div className="relative mx-auto max-w-7xl px-5">
    <div className="text-center">
      <span className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
        <span className="h-0.5 w-8 rounded bg-gradient-brand" />
        Services
        <span className="h-0.5 w-8 rounded bg-gradient-brand" />
      </span>
      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
        Our Development{" "}
        <span className="text-gradient-brand">
          Services
        </span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
        Everything you need to launch, rank and scale — designed and built in one place.
      </p>
      <div className="mx-auto mt-5 h-0.5 w-16 rounded bg-gradient-brand" />
    </div>

    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.slice(0, 6).map((service, index) => {
       const accent: Accent = serviceAccents[service.slug] ?? fallbackAccent;
        const Icon = accent.icon;
        return (
          <motion.article
            key={service.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            className="group relative flex min-h-[290px] overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-brand-soft transition-shadow hover:shadow-brand-glow"
          >
            <div className="relative z-10 flex w-[68%] flex-col sm:w-[58%]">
              <div className="flex items-center gap-3">
                <span className={`flex size-12 items-center justify-center rounded-xl text-lg font-bold ${accent.badge}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`flex size-12 items-center justify-center rounded-xl ${accent.badge}`}>
                  <Icon className="size-5" />
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{accent.short}</p>

              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="mt-auto inline-flex items-center gap-3 pt-6 text-sm font-semibold text-foreground"
              >
                Learn more
                <span className={`flex size-11 items-center justify-center rounded-full transition-transform group-hover:translate-x-1 ${accent.badge}`}>
                  <ArrowRight className="size-5" />
                </span>
              </Link>
            </div>

            <div className="pointer-events-none absolute -right-3 top-4 h-[210px] w-[46%] max-w-[220px]">
              <ServiceIllustration accent={accent} />
            </div>
          </motion.article>
        );
      })}
    </div>

    <div className="mt-12 flex justify-center">
      <Link
        to="/services"
        className="group inline-flex items-center gap-5 rounded-full bg-ink py-2 pl-10 pr-2 text-base font-semibold text-primary-foreground shadow-brand-soft transition-transform hover:-translate-y-0.5"
      >
        View All Services
        <span className="flex size-12 items-center justify-center rounded-full bg-gradient-brand">
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    </div>
  </div>
</section>

      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Transforming Ideas into <span className="text-magenta">Results</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Our solutions enable software teams to simplify processes, improve decision-making,
              and increase efficiency, all while creating outstanding experiences. Drive innovation
              and bring your projects to market faster than ever before.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Teams partner with Veltrixa to streamline development workflows, uncover useful
              insights, and accelerate innovation while delivering exceptional user experiences.
              Launch faster and stay ahead of the competition.
            </p>
            <div className="mt-8">
              <GradientButton to="/about">
                About Us <ArrowRight className="size-4" />
              </GradientButton>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08} direction={index % 2 === 0 ? "left" : "scale"}>
                <div className="rounded-lg border border-border bg-card p-7 text-left shadow-brand-soft">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Our Powerful Features"
          title="Our innovative tools will help"
          highlight="elevate your business."
          description="Development teams rely on our software to streamline workflows, gain actionable insights, and accelerate delivery while providing exceptional user experiences. Get your projects up and running faster to stay ahead of the competition."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-6">
          {features.map((feature, index) => {
            const Icon = featureIcons[index] ?? Code2;
            return (
              <Reveal key={feature.title} delay={index * 0.09} direction={index === 0 ? "left" : index === 1 ? "scale" : "right"} className={index === 0 ? "md:col-span-4" : "md:col-span-2"}>
                <motion.div
                  whileHover={{ x: index === 0 ? 3 : 0, y: index === 0 ? 0 : -3 }}
                  className="h-full rounded-lg border border-border bg-card p-7 shadow-brand-soft"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-md border border-blue/30 bg-blue/5 text-blue">
                    <Icon className="size-5 stroke-[1.7]" />
                  </span>
                  <span aria-hidden className="mt-4 block h-0.5 w-12 bg-blue" />
                  <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="All Project Portfolio"
            title="Work we're"
            highlight="proud of"
            description="Veltrixa connects your tools for faster results — here's a look at what we've shipped."
          />
          <div className="mt-12">
            <ProjectGrid withFilters={false} />
          </div>
          <Reveal className="mt-10 text-center" delay={0.1}>
            <GradientButton to="/portfolio" variant="dark">
              See Full Portfolio <ArrowRight className="size-4" />
            </GradientButton>
          </Reveal>
        </div>
      </section>

      <TestimonialsSection />

      <CtaSection />

      <section className="border-t border-border bg-surface py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
          <h2 className="text-2xl font-bold">
            Transform Your <span className="text-magenta">Workflow</span>
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Eliminate manual data entry and empower your team to deliver projects faster and more
            efficiently by connecting with the tools you already rely on.
          </p>
          <Link
            to="/services"
            className="text-sm font-semibold text-blue underline-offset-4 hover:underline"
          >
            All integrations
          </Link>
        </div>
      </section>
    </>
  );
}
