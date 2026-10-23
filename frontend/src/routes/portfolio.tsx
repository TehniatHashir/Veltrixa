import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { CtaSection } from "@/components/CtaSection";
import { GradientButton } from "@/components/GradientButton";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Websites & Platforms by Veltrixa" },
      {
        name: "description",
        content:
          "Browse Veltrixa projects across web platforms, cashback products and local service businesses.",
      },
      { property: "og:title", content: "Portfolio | Veltrixa" },
      {
        property: "og:description",
        content: "Selected work: Tag Peak, Elite Auto Claims, Mena Cashback and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="All Project Portfolio"
        title="Projects that deliver"
        highlight="real results"
        description="Filter through our recent work across web platforms, cashback products and local service businesses."
      >
        <GradientButton to="/contact">Start Your Project</GradientButton>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <ProjectGrid />
      </section>

      <CtaSection />
    </>
  );
}
