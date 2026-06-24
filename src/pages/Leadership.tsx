import { PageHero } from "@/components/PageHero";
import { LEADERSHIP, IMAGES } from "@/lib/content";

export default function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title={<>The engineers behind the practice.</>}
        intro="A senior team with multidisciplinary depth across structural design, BIM, precast systems, and heavy industrial works — across India, Europe, and the Middle East."
        image={IMAGES.cityscape}
      />

      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-px bg-[color:var(--color-line)]">
          {LEADERSHIP.map((l, i) => (
            <article
              key={l.name}
              className="bg-[color:var(--color-bg)] py-12 lg:py-16 grid lg:grid-cols-12 gap-8"
            >
              <div className="lg:col-span-2">
                <div className="font-display text-2xl text-[color:var(--color-brass-deep)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl lg:text-4xl leading-tight">
                  {l.name}
                </h2>
                <div className="mt-3 text-xs uppercase tracking-[0.2em] text-[color:var(--color-brass-deep)]">
                  {l.role}
                </div>
                {l.qualifications && (
                  <div className="mt-3 text-sm text-[color:var(--color-muted)]">
                    {l.qualifications}
                  </div>
                )}
              </div>
              <div className="lg:col-span-6 text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
                {l.bio}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
