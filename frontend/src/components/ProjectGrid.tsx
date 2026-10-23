import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { projectCategories, projects } from "@/data/site";

export function ProjectGrid({ withFilters = true }: { withFilters?: boolean }) {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {withFilters ? (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`relative rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === category ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === category ? (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-md bg-blue"
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                />
              ) : null}
              <span className="relative">{category}</span>
            </button>
          ))}
        </div>
      ) : null}

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.015 }}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-brand-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={project.image}
                  alt={`${project.title} project by Veltrixa`}
                  loading="lazy"
                  className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-magenta opacity-0 transition-opacity duration-500 group-hover:opacity-25" />
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <div>
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {project.category}
                  </p>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-blue hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  View Project
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
