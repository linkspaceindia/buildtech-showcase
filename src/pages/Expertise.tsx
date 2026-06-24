import { PageHero } from "@/components/PageHero";
import { SERVICES, IMAGES } from "@/lib/content";

export default function Expertise() {
  return (
    <>
      <PageHero
        eyebrow="Expertise & Services"
        title={<>What we do, end to end.</>}
        intro="From structural design and seismic retrofitting to WASH infrastructure and BIM coordination — five engineering verticals delivered with the same standard of rigour."
        image={IMAGES.spaceFrame}
      />

      <section className="container-x py-20 lg:py-28">
        <div className="space-y-px bg-[color:var(--color-line)]">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="bg-[color:var(--color-bg)] grid lg:grid-cols-12 gap-8 py-12 lg:py-14"
            >
              <div className="lg:col-span-1">
                <span className="font-display text-2xl text-[color:var(--color-brass-deep)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-display text-2xl lg:text-3xl leading-tight">
                  {s.title}
                </h3>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[color:var(--color-ink-soft)]">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="flex gap-3 text-[15px] leading-relaxed border-b border-[color:var(--color-line)]/60 pb-3"
                    >
                      <span className="text-[color:var(--color-brass)] mt-1">▮</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-bg)]">
        <div className="container-x py-20 grid md:grid-cols-4 gap-px bg-white/10">
          {["RCC", "Precast", "Steel", "Composite"].map((t) => (
            <div key={t} className="bg-[color:var(--color-ink)] py-10 text-center">
              <div className="font-display text-3xl text-[color:var(--color-brass)]">{t}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/50 mt-2">
                Material Proficiency
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
