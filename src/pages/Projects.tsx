import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { PROJECTS, IMAGES, type ProjectCategory } from "@/lib/content";
import { cn } from "@/lib/utils";

const CATEGORIES: (ProjectCategory | "All")[] = [
  "All",
  "Steel & Space Frames",
  "Precast",
  "Water & Environmental",
  "Bridges & Special Structures",
  "Energy",
  "RCC Buildings & Infrastructure",
  "Healthcare",
  "Smart City",
];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Project Portfolio"
        title={<>100+ projects, pan-India and abroad.</>}
        intro="A snapshot of structures and systems we have engineered — from steel space frames and precast towers to irrigation networks and smart-city programmes."
        image={IMAGES.smartCity}
      />

      <section className="container-x py-16">
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "px-4 py-2 text-xs uppercase tracking-[0.14em] border transition-colors",
                filter === c
                  ? "bg-[color:var(--color-ink)] text-[color:var(--color-bg)] border-[color:var(--color-ink)]"
                  : "border-[color:var(--color-line)] text-[color:var(--color-ink-soft)] hover:border-[color:var(--color-ink)]",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {filtered.map((p) => (
            <article key={p.name} className="group flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-[color:var(--color-bg-alt)] border border-[color:var(--color-line)]">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full grid place-items-center text-[color:var(--color-muted)] font-display text-5xl opacity-40">
                    {p.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="pt-5">
                <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-brass-deep)] mb-2">
                  {p.category}
                </div>
                <h3 className="font-display text-xl leading-snug">{p.name}</h3>
                {(p.location || p.client) && (
                  <p className="text-sm text-[color:var(--color-muted)] mt-1">
                    {[p.location, p.client].filter(Boolean).join(" · ")}
                  </p>
                )}
                <p className="text-sm text-[color:var(--color-ink-soft)] mt-3 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
