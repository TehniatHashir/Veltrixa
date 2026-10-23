import { Counter } from "@/components/Counter";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { stats } from "@/data/site";

const FOUNDED_YEAR = 2016;

export function Stats() {
  const years = new Date().getFullYear() - FOUNDED_YEAR;

  const items = [
    { value: stats[0]?.value ?? 120, suffix: "+", label: "Projects Delivered" },
    { value: stats[1]?.value ?? 60, suffix: "+", label: "Happy Clients" },
    { value: years, suffix: "+", label: "Years of Experience" },
    { value: 24, suffix: "/7", label: "Support Availability" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Achievements" title="Numbers that" highlight="speak for us" />
      <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {items.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.08} direction={index % 2 === 0 ? "scale" : "rotate"}>
            <div className="rounded-lg border border-border bg-card p-7 text-left shadow-brand-soft">
              <Counter value={item.value} suffix={item.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
