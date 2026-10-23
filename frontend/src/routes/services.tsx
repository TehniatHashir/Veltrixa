import { createFileRoute } from "@tanstack/react-router";
import { GradientButton } from "@/components/GradientButton";
import { PageHero } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaSection } from "@/components/CtaSection";
import { features, services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web Development, SEO & AI Automation | Veltrixa" },
      {
        name: "description",
        content:
          "Local SEO, lead generation, review integration, custom development, UI/UX, e-commerce and AI automation services from Veltrixa.",
      },
      { property: "og:title", content: "Services | Veltrixa" },
      {
        property: "og:description",
        content: "Seven focused services that help service businesses rank, convert and scale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our Development"
        highlight="Services"
        description="From city-specific landing pages to AI-powered automation, every service is built to bring measurable growth."
      >
        <GradientButton to="/contact">Contact Us</GradientButton>
        <GradientButton to="/portfolio" variant="outline">
          View Portfolio
        </GradientButton>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Our Powerful Features"
            title="What every project"
            highlight="includes"
            description="Development teams rely on our software to streamline workflows, gain actionable insights, and accelerate delivery while providing exceptional user experiences."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-6">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.09} direction={index === 0 ? "left" : index === 1 ? "scale" : "right"} className={index === 0 ? "md:col-span-4" : "md:col-span-2"}>
                <div className="h-full rounded-lg border border-border bg-card p-7 shadow-brand-soft">
                  <span className="text-magenta text-xs font-bold uppercase tracking-[0.2em]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
