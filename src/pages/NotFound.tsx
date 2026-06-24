import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <span className="eyebrow">404</span>
      <h1 className="font-display text-6xl mt-6">Page not found.</h1>
      <p className="text-[color:var(--color-ink-soft)] mt-4 max-w-md mx-auto">
        The page you are looking for has been moved or no longer exists.
      </p>
      <Link
        to="/"
        className="inline-block mt-8 bg-[color:var(--color-ink)] text-[color:var(--color-bg)] px-7 py-3.5 text-sm font-medium"
      >
        Back to Home
      </Link>
    </section>
  );
}
