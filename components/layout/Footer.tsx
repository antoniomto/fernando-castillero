import Link from "next/link";
import { Logo } from "../Logo";
import { siteConfig, nav } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-teal text-white mt-0 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-20">
        <div className="deco-blob bg-white w-[400px] h-[400px] -top-24 -right-24" />
        <div className="deco-blob bg-brand-teal-dark w-[400px] h-[400px] -bottom-32 -left-32" style={{ animationDelay: "-8s" }} />
      </div>

      <div className="container relative py-16 grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Logo variant="light" />
          <p className="mt-5 text-white/85 max-w-sm leading-relaxed">
            Fisioterapia y rehabilitación veterinaria por Fernando Castillero. Atención especializada
            para perros y gatos, en colaboración con Mundo à Parte.
          </p>
        </div>

        <div>
          <h5 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 opacity-80">
            Navegación
          </h5>
          <ul className="space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 opacity-80">
            Contacto
          </h5>
          <ul className="space-y-2.5 text-sm text-white/85">
            <li>{siteConfig.contact.telefono}</li>
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.direccion}</li>
            <li>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                {siteConfig.social.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 relative">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <p>
            Fernando Castillero atiende en las instalaciones de{" "}
            <span className="text-white/90 font-medium">Mundo à Parte</span>.
          </p>
          <p>
            © {year} · Diseñado por{" "}
            <a
              href={siteConfig.design.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-white/85 transition"
            >
              {siteConfig.design.by}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
