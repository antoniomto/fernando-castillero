"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "../Logo";
import { nav, whatsappLink } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        dark
          ? "bg-brand-teal shadow-lg"
          : "bg-white/90 backdrop-blur border-b border-ink/[0.06]"
      }`}
      style={{ transform: "translateZ(0)", willChange: "background-color" }}
    >
      <div className="container flex items-center justify-between gap-4 py-4">
        <Link href="/" aria-label="Ir al inicio" className="shrink-0">
          <Logo variant={dark ? "light" : "dark"} />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                dark ? "text-white/85 hover:text-brand-gold" : "text-ink/80 hover:text-brand-teal"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappLink("Hola Fernando, quería consultarte sobre una sesión de fisioterapia para mi mascota.")}
            target="_blank"
            rel="noopener noreferrer"
            className={dark ? "btn-gold text-sm py-2.5 px-5" : "btn-primary text-sm py-2.5 px-5"}
          >
            Agendar
          </a>
        </nav>

        <button
          type="button"
          className={`lg:hidden p-2 ${dark ? "text-white" : "text-ink"}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className={`lg:hidden border-t ${
            dark ? "border-white/15 bg-brand-teal-dark" : "border-ink/10 bg-white"
          }`}
        >
          <div className="container flex flex-col py-4 gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-2 transition ${dark ? "text-white/90 hover:text-brand-gold" : "text-ink hover:text-brand-teal"}`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink("Hola Fernando, quería agendar una consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className={dark ? "btn-gold mt-3 self-start text-sm py-2 px-4" : "btn-primary mt-3 self-start text-sm py-2 px-4"}
              onClick={() => setOpen(false)}
            >
              Agendar por WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
