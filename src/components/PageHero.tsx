import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image?: string;
}) {
  return (
    <section className="relative border-b border-[color:var(--color-line)] bg-[color:var(--color-bg-alt)]">
      <div className="container-x py-24 lg:py-32 grid gap-10 lg:grid-cols-12 items-end">
        <div className="lg:col-span-7">
          <span className="eyebrow">{eyebrow}</span>
          <span className="rule mt-4 mb-6" />
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
              {intro}
            </p>
          )}
        </div>
        {image && (
          <div className="lg:col-span-5 aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover grayscale-[15%]"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
}
