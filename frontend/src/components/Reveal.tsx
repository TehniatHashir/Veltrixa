import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "scale" | "rotate";
};

export function Reveal({ children, delay = 0, y = 28, className, direction = "up" }: RevealProps) {
  const initial =
    direction === "left"
      ? { opacity: 0, x: -32 }
      : direction === "right"
        ? { opacity: 0, x: 32 }
        : direction === "scale"
          ? { opacity: 0, scale: 0.96 }
          : direction === "rotate"
            ? { opacity: 0, y: 18, rotate: -1.5 }
            : { opacity: 0, y };
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal direction="left" className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-0.5 w-5 bg-blue" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
        {title} {highlight ? <span className="text-magenta">{highlight}</span> : null}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  );
}
