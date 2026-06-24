import { Link } from "react-router-dom";
import { ArrowRight, Building2, Layers, Droplets, ShieldCheck, Boxes, Compass } from "lucide-react";
import { IMAGES, PROJECTS, SERVICES, COMPANY } from "@/lib/content";

const ICONS = [Building2, ShieldCheck, Droplets, Compass, Layers, Boxes];

export default function Home() {
  const featured = PROJECTS.filter((p) => p.image).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-x grid lg:grid-cols-12 gap-10 pt-16 lg:pt-24 pb-20 lg:pb-32 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">Est. 2019 · Gandhinagar · Chandigarh</span>
            <span className="rule mt-5 mb-8" />
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Engineering the structures that{" "}
              <span className="italic text-[color:var(--color-brass-deep)]">shape India.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
              A multidisciplinary structural and environmental engineering consultancy
              delivering high-performance solutions across buildings, infrastructure,
              industrial facilities, WASH systems, and special structures.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 bg-[color:var(--color-ink)] text-[color:var(--color-bg)] px-7 py-4 text-sm font-medium tracking-wide hover:bg-[color:var(--color-brass-deep)] transition-colors"
              >
                View Our Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-[color:var(--color-ink)] px-7 py-4 text-sm font-medium hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-bg)] transition-colors"
              >
                Discuss an Enquiry
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden bg-[color:var(--color-bg-alt)]">
              <img
                src={IMAGES.hero}
                alt="Construction project by BuildTech Studios"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[color:var(--color-bg)] p-6 border border-[color:var(--color-line)] max-w-[220px] hidden md:block">
              <div className="font-display text-4xl text-[color:var(--color-brass-deep)]">
                {COMPANY.projectsDelivered}
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)] mt-1">
                Projects Delivered Pan India
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-[color:var(--color-line)] bg-[color:var(--color-bg-alt)]">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 divide-x divide-[color:var(--color-line)]">
          {[
            ["6+", "Years of Practice"],
            ["100+", "Projects Delivered"],
            ["3", "Continents Served"],
            ["5", "Engineering Verticals"],
          ].map(([n, l]) => (
            <div key={l} className="py-10 px-6 text-center">
              <div className="font-display text-4xl text-[color:var(--color-ink)]">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro / values */}
      <section className="container-x py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">Our Practice</span>
          <span className="rule mt-4 mb-6" />
          <h2 className="font-display text-3xl lg:text-4xl leading-tight">
            Optimising the balance between safety and economy.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-[color:var(--color-ink-soft)] text-lg leading-relaxed">
          <p>
            Build Tech Studios has been serving the construction industry for the past six
            years. We partner with government departments, private developers, and
            international organisations to deliver technically robust and context-responsive
            engineering.
          </p>
          <p>
            Our projects span public buildings, commercial hubs, mid-rise structures,
            auditoriums, bridges, sheds, overhead and underground water tanks, aqueducts and
            drains — proficient in pre-cast, cast-in-situ concrete, and steel.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            {["RCC", "Precast", "Steel", "Composite"].map((t) => (
              <div
                key={t}
                className="border border-[color:var(--color-line)] py-4 text-center text-sm font-medium tracking-wider uppercase"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-bg)]">
        <div className="container-x py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="eyebrow" style={{ color: "var(--color-brass)" }}>
                Expertise
              </span>
              <span className="rule mt-4 mb-6" />
              <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                Five engineering verticals, one integrated practice.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Link
                to="/expertise"
                className="inline-flex items-center gap-2 text-sm text-[color:var(--color-brass)] hover:text-white"
              >
                Explore all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <div
                  key={s.title}
                  className="bg-[color:var(--color-ink)] p-8 hover:bg-[#222] transition-colors group"
                >
                  <Icon className="h-7 w-7 text-[color:var(--color-brass)] mb-6" />
                  <h3 className="font-display text-xl text-white mb-3">{s.title}</h3>
                  <ul className="space-y-1.5 text-sm text-white/65">
                    {s.items.slice(0, 3).map((it) => (
                      <li key={it}>— {it}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-x py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="eyebrow">Selected Work</span>
            <span className="rule mt-4 mb-6" />
            <h2 className="font-display text-4xl lg:text-5xl leading-tight">
              From hill-state townships to long-span space frames.
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-[color:var(--color-brass-deep)]"
          >
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {featured.map((p, i) => (
            <article
              key={p.name}
              className={`group ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div
                className={`overflow-hidden bg-[color:var(--color-bg-alt)] ${
                  i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-5 flex items-start justify-between gap-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-brass-deep)] mb-2">
                    {p.category}
                  </div>
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  {p.location && (
                    <p className="text-sm text-[color:var(--color-muted)] mt-1">
                      {p.location}{p.client ? ` · ${p.client}` : ""}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x mb-24">
        <div className="bg-[color:var(--color-bg-alt)] border border-[color:var(--color-line)] p-10 lg:p-16 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="eyebrow">Start a Project</span>
            <h2 className="font-display text-3xl lg:text-4xl leading-tight mt-4">
              Have a structure, retrofit, or WASH programme in mind?
            </h2>
            <p className="mt-4 text-[color:var(--color-ink-soft)] max-w-xl">
              Tell us about your project. We respond to every enquiry within two working days.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[color:var(--color-ink)] text-[color:var(--color-bg)] px-8 py-4 text-sm font-medium hover:bg-[color:var(--color-brass-deep)] transition-colors"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
