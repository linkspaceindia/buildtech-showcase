import { PageHero } from "@/components/PageHero";
import { IMAGES } from "@/lib/content";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            A consultancy built around{" "}
            <span className="italic text-[color:var(--color-brass-deep)]">
              robust, context-responsive engineering.
            </span>
          </>
        }
        intro="Build Tech Studios is a multidisciplinary Structural and Environmental Engineering Consultancy delivering high-performance solutions across buildings, infrastructure, industrial facilities, WASH systems, and special structures."
        image={IMAGES.hero}
      />

      <section className="container-x py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">Our Story</span>
          <span className="rule mt-4 mb-6" />
        </div>
        <div className="lg:col-span-7 space-y-6 text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
          <p>
            With strong expertise in structural design, environmental engineering, and
            sustainable development, we partner with government departments, private
            developers, and international organisations to deliver technically robust and
            context-responsive engineering.
          </p>
          <p>
            Optimising the balance between safety and economy, BuildTech Studios has been
            serving the construction industry for the past six years. Our team takes up
            challenges and consistently delivers unique solutions — making us a dynamic and
            credible identity in the consulting landscape.
          </p>
          <p>
            We have delivered more than 100 projects pan-India and abroad. These projects
            are versatile in nature — ranging from public buildings, commercial hubs,
            mid-rise structures, auditoriums, bridges, sheds, overhead and underground
            water tanks, aqueducts and drains. We are proficient in pre-cast, cast-in-situ
            concrete, and steel.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--color-bg-alt)] border-y border-[color:var(--color-line)]">
        <div className="container-x py-20 grid md:grid-cols-3 gap-12">
          {[
            {
              t: "Multidisciplinary",
              d: "Structural, environmental, and BIM expertise under a single roof — coordinated by senior leads.",
            },
            {
              t: "Government-Trusted",
              d: "Engaged by ministries, state governments, and bodies like NHAI, SAI, BPCL and Forest Departments.",
            },
            {
              t: "International Scope",
              d: "Project experience across India, the Middle East, Europe, and three continents of detailing.",
            },
          ].map((c) => (
            <div key={c.t}>
              <div className="rule mb-5" />
              <h3 className="font-display text-2xl mb-3">{c.t}</h3>
              <p className="text-[color:var(--color-ink-soft)] leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
