import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { GradientButton } from "@/components/GradientButton";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
       <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
  <span className="text-2xl font-extrabold">
           Veltrixa
  </span>
</Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                       className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-blue"
                    />
                  ) : null}
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <GradientButton to="/contact">Get Started</GradientButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="rounded-md border border-border p-2 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
            id="mobile-navigation"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-surface"
                  activeProps={{ className: "text-foreground bg-surface" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              ))}
              <GradientButton to="/contact" className="mt-2 w-full">
                Get Started
              </GradientButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
