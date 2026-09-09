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
          ? "bg-brand-marine/95 backdrop-blur-md shadow-lg shadow-brand-marine/10 py-3"
          : "bg-white/85 backdrop-blur-md border-b border-slate-200/70 py-4"
      }`}
      style={{ transform: "translateZ(0)", willChange: "background-color" }}
    >
      <div className="container flex items-center justify-between gap-4">
        <Link href="/" aria-label="Ir al inicio" className="shrink-0">
          <Logo variant={dark ? "light" : "dark"} />
        </Link>

        <nav className="hidden xl:flex items-center gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                dark ? "text-slate-100 hover:text-white" : "text-slate-600 hover:text-brand-marine"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={whatsappLink("Hola Dr. Fernando, me gustaría agendar una valoración para mi mascota.")}
            target="_blank"
            rel="noopener noreferrer"
            className={dark ? "btn-gold text-xs px-5 py-2.5" : "btn-primary text-xs px-5 py-2.5"}
          >
            <span>Agendar Valoración</span>
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <button
          type="button"
          className={`xl:hidden p-2 rounded-xl transition ${dark ? "text-white hover:bg-white/10" : "text-ink hover:bg-slate-100"}`}
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
          className={`xl:hidden border-t px-6 py-5 shadow-2xl transition-all ${
            dark ? "border-white/10 bg-brand-marine-2 text-white" : "border-slate-100 bg-white text-ink"
          }`}
        >
          <div className="flex flex-col gap-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm font-medium transition ${
                  dark ? "text-slate-200 hover:text-white" : "text-slate-700 hover:text-brand-marine"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink("Hola Dr. Fernando, me gustaría agendar una consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 self-start text-xs py-3 px-6 w-full text-center"
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
