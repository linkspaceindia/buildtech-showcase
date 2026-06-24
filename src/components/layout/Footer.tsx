import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-32 bg-[color:var(--color-ink)] text-[color:var(--color-bg)]">
      <div className="container-x py-20 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <div className="flex items-center gap-3 mb-5">
            <span className="grid h-9 w-9 place-items-center bg-[color:var(--color-brass)] text-[color:var(--color-ink)] font-display text-lg font-semibold">
              B
            </span>
            <span className="font-display text-xl">BuildTech Studios</span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            A multidisciplinary structural and environmental engineering consultancy
            delivering high-performance solutions across buildings, infrastructure,
            industrial facilities, WASH systems, and special structures.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-brass)] mb-4">
            Navigate
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-[color:var(--color-brass)]">About</Link></li>
            <li><Link to="/expertise" className="hover:text-[color:var(--color-brass)]">Expertise</Link></li>
            <li><Link to="/projects" className="hover:text-[color:var(--color-brass)]">Projects</Link></li>
            <li><Link to="/leadership" className="hover:text-[color:var(--color-brass)]">Leadership</Link></li>
            <li><Link to="/contact" className="hover:text-[color:var(--color-brass)]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-brass)] mb-4">
            Reach Us
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            {COMPANY.addresses.map((a) => (
              <li key={a} className="flex gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-none text-[color:var(--color-brass)]" />
                <span>{a}</span>
              </li>
            ))}
            <li className="flex gap-2">
              <Phone className="h-4 w-4 mt-0.5 flex-none text-[color:var(--color-brass)]" />
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 mt-0.5 flex-none text-[color:var(--color-brass)]" />
              <a href={`mailto:${COMPANY.emails[0]}`}>{COMPANY.emails[0]}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row gap-2 justify-between text-xs text-white/50">
          <span>© {new Date().getFullYear()} BuildTech Studios. All rights reserved.</span>
          <span>Structural · Environmental · Retrofitting · BIM</span>
        </div>
      </div>
    </footer>
  );
}
