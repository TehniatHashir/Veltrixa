import { useState } from "react";
import { createFileRoute, redirect, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, ChevronDown, Users } from "lucide-react";
import { GradientButton } from "@/components/GradientButton";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { getServiceBySlug, processSteps } from "@/data/services";

export const Route = createFileRoute("/services_/$slug")({
  beforeLoad: ({ params }) => {
    if (!getServiceBySlug(params.slug)) {
      throw redirect({ to: "/services" });
    }
  },
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) {
      return { meta: [{ title: "Service | Veltrixa" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${service.title} — Veltrixa`;
    return {
      meta: [
        { title },
        { name: "description", content: service.shortDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: service.shortDescription },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  if (!service) return null;
  const Icon = service.icon;
  const related = service.relatedSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((item) => item !== undefined);

  return (
    <>
      <section className="relative overflow-hidden bg-surface">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-magenta opacity-15 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.16, 0.26, 0.16] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 text-center sm:py-24">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex size-14 items-center justify-center rounded-md border border-blue/30 bg-blue/5 text-blue shadow-brand-glow"
          >
            <Icon className="size-6" />
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground"
          >
            {service.shortDescription}
          </motion.p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <GradientButton to="/contact">
              Get a Quote <ArrowRight className="size-4" />
            </GradientButton>
            <GradientButton to="/services" variant="outline">
              All Services
            </GradientButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">
            About this <span className="text-magenta">service</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {service.fullDescription}
          </p>
        </Reveal>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Deliverables" title="What's" highlight="Included" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {service.bulletPoints.map((point, index) => (
              <Reveal key={point} delay={index * 0.08} direction={index % 2 === 0 ? "left" : "right"}>
                <motion.div
                  whileHover={{ x: index % 2 === 0 ? 3 : -3 }}
                  className="flex h-full items-center gap-3 rounded-lg border border-border bg-card p-7 shadow-brand-soft"
                >
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-magenta/30 bg-magenta/5 text-magenta">
                    <Check className="size-4" />
                  </span>
                  <p className="text-sm font-semibold leading-relaxed">{point}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="How We Work"
          title="Our"
          highlight="Process"
          description="A simple, transparent path from first conversation to launch."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.09} direction={index % 2 === 0 ? "scale" : "rotate"}>
              <motion.div
                whileHover={{ y: -3 }}
                className="h-full rounded-lg border border-border bg-card p-7 shadow-brand-soft"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Why It Matters" title="Key" highlight="Benefits" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {service.benefits.map((benefit, index) => (
              <Reveal key={benefit} delay={index * 0.08} direction={index % 2 === 0 ? "left" : "right"} className={index === 0 || index === 3 ? "lg:col-span-4" : "lg:col-span-2"}>
                <motion.div
                  whileHover={{ x: index % 2 === 0 ? 3 : -3 }}
                  className="flex h-full items-center gap-3 rounded-lg border border-border bg-card p-7 shadow-brand-soft"
                >
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-blue/30 bg-blue/5 text-blue">
                    <Check className="size-4" />
                  </span>
                  <p className="text-sm font-semibold leading-relaxed">{benefit}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg border border-border bg-surface p-8 shadow-brand-soft sm:p-12">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-magenta" />
            <span className="inline-flex size-11 items-center justify-center rounded-md border border-magenta/30 bg-magenta/5 text-magenta">
              <Users className="size-5 stroke-[1.7]" />
            </span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Who it's <span className="text-magenta">for</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {service.whoItsFor}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl px-5">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked"
            highlight="Questions"
          />
          <div className="mt-12 space-y-4">
            {service.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={faq.question} delay={index * 0.06}>
                  <div className="overflow-hidden rounded-lg border border-border bg-card shadow-brand-soft">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-sm font-bold sm:text-base">{faq.question}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-blue/30 bg-blue/5 text-blue"
                      >
                        <ChevronDown className="size-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading eyebrow="Keep Exploring" title="Related" highlight="Services" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {related.map((item, index) => {
              const RelatedIcon = item.icon;
              return (
                <Reveal key={item.slug} delay={index * 0.08} direction={index === 0 ? "left" : "right"}>
                  <motion.div
                    whileHover={{ x: index === 0 ? 3 : -3 }}
                    className="flex h-full flex-col rounded-lg border border-border bg-card p-7 shadow-brand-soft"
                  >
                    <span className="inline-flex size-11 items-center justify-center rounded-md border border-blue/30 bg-blue/5 text-blue">
                      <RelatedIcon className="size-5 stroke-[1.7]" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.shortDescription}
                    </p>
                    <Link
                      to="/services/$slug"
                      params={{ slug: item.slug }}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue underline-offset-4 hover:underline"
                    >
                      Learn more <ArrowRight className="size-4" />
                    </Link>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg bg-ink px-6 py-14 text-center text-primary-foreground sm:px-12">
            <div className="absolute inset-x-0 top-0 h-1 bg-blue" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
                Ready to get started with{" "}
                <span className="text-magenta">{service.title}?</span>
              </h2>
              <div className="mt-8 flex justify-center">
                <GradientButton to="/contact">Contact Us</GradientButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
