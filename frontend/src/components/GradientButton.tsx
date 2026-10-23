import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors";

export function GradientButton({
  to,
  href,
  children,
  variant = "solid",
  className,
  type,
  onClick,
  disabled,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "dark";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const styles = cn(
    base,
    variant === "solid" && "bg-blue text-primary-foreground shadow-brand-glow hover:bg-blue-dark",
    variant === "outline" &&
      "border border-border bg-background text-foreground hover:bg-surface",
    variant === "dark" && "bg-ink text-primary-foreground hover:bg-ink-soft",
    className,
  );

  const motionProps = {
    whileHover: { scale: 1.04, y: -2 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 320, damping: 20 },
  };

  if (to) {
    return (
      <motion.span {...motionProps} className="inline-block">
        <Link to={to} className={styles}>
          {children}
        </Link>
      </motion.span>
    );
  }

  if (href) {
    return (
      <motion.a {...motionProps} href={href} className={styles}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </motion.button>
  );
}
