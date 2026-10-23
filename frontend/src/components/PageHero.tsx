import { motion } from "motion/react";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-surface">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-magenta opacity-15 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.16, 0.26, 0.16] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 text-center sm:py-24">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-sm border border-border bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
        >
          <span className="h-0.5 w-5 bg-blue" />
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mx-auto mt-6 max-w-3xl break-words text-3xl font-extrabold leading-tight sm:text-5xl"
        >
          {title} {highlight ? <span className="text-magenta">{highlight}</span> : null}
        </motion.h1>
        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground"
          >
            {description}
          </motion.p>
        ) : null}
        {children ? <div className="mt-9 flex flex-wrap justify-center gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
