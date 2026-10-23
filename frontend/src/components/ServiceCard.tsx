import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Service } from "@/data/site";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const span =
    index === 0 ? "lg:col-span-4" : index === 1 ? "lg:col-span-2" : index < 5 ? "lg:col-span-2" : "lg:col-span-3";
  const direction = index % 3 === 0 ? -28 : index % 3 === 1 ? 28 : 0;
  return (
    <motion.article
      initial={{ opacity: 0, x: direction, y: direction === 0 ? 18 : 0, rotate: index % 3 === 2 ? -1 : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -3 }}
      className={`group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card p-7 shadow-brand-soft ${span}`}
    >
      <span className="text-blue inline-flex size-10 items-center justify-center rounded-md border border-border bg-surface text-sm font-bold">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      <ul className="mt-5 space-y-2.5">
        {service.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm text-foreground/80">
            <Check className="mt-0.5 size-4 shrink-0 text-magenta" />
            {point}
          </li>
        ))}
      </ul>
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue underline-offset-4 hover:underline"
      >
        Learn more <ArrowRight className="size-4" />
      </Link>
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-magenta opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.article>
  );
}
