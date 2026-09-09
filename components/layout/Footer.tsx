import Link from "next/link";
import { Logo } from "../Logo";
import { siteConfig, nav } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white mt-0 relative overflow-hidden border-t border-slate-800">
      <div className="container relative py-16 grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Logo variant="light" />
          <p className="mt-5 text-slate-400 text-sm max-w-sm leading-relaxed">
            Medicina veterinaria integral, cirugía y hospitalización en <strong>CANEM Hospital</strong>,
            junto con fisioterapia de vanguardia en <strong>Mundo Aparte</strong> e innovación en <strong>prótesis ortopédicas</strong>.
          </p>
          <div className="mt-4 text-xs text-emerald-400 font-semibold">
            Aguascalientes, Ags., México
          </div>
        </div>

        <div>
          <h5 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 opacity-80">
            Ecosistema & Enlaces
          </h5>
          <ul className="space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-400 hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 opacity-80">
            Sede & Contacto
          </h5>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li className="text-white font-medium">CANEM Hospital Veterinario</li>
            <li>Av. Convención de 1914 Norte #1506</li>
            <li>Circunvalación Norte, Aguascalientes</li>
            <li>Lunes a Sábado · Urgencias 24/7</li>
            <li className="pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                {siteConfig.social.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 relative">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            Dr. Fernando Castillero · Dirección Médica CANEM & Franquicia Mundo Aparte.
          </p>
          <p>
            © <span suppressHydrationWarning>{year}</span> · Diseñado por{" "}
            <a
              href={siteConfig.design.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 font-semibold hover:text-white transition"
            >
              {siteConfig.design.by}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
