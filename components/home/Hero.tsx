import Link from "next/link";
import Image from "next/image";
import { Reveal } from "../Reveal";
import { whatsappLink } from "@/lib/site-config";

export function Hero() {
  return (
    <>
      {/* ─────────── MOBILE HERO ─────────── (< lg) */}
      <section className="lg:hidden relative bg-canvas overflow-hidden">
        <div className="relative h-[calc(100vh-72px)] min-h-[600px] max-h-[820px] w-full">
          {/* Imagen full bleed como fondo */}
          <Image
            src="/images/hero-b.jpg"
            alt="Vínculo humano-mascota: cariño y cuidado"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[65%_25%]"
          />

          {/* Gradientes suaves para asegurar legibilidad del texto */}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/85" />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/90 to-transparent" />

          {/* Contenido overlay — H1 dividida en dos posiciones estilo revista */}
          <div className="relative z-10 h-full grid grid-rows-[auto_1fr_auto_auto] gap-4 p-5 pt-6">
            {/* Row 1: eyebrow badge (top-left) */}
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur text-brand-teal px-4 py-1.5 text-[11px] font-bold tracking-wider shadow-md">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-teal animate-pulse" />
                FISIOTERAPIA VETERINARIA
              </div>
            </Reveal>

            {/* Row 2: Primera línea del H1 — top-left */}
            <div>
              <Reveal delay={1}>
                <h1 className="font-normal text-[3rem] sm:text-[4rem] leading-[0.95] tracking-[-0.02em] text-ink">
                  Movimiento
                  <br />
                  sin{" "}
                  <span className="font-italic italic font-semibold uppercase">dolor</span>
                  <span className="text-brand-teal">,</span>
                </h1>
              </Reveal>
            </div>

            {/* Row 3: Segunda línea del H1 — bottom-right, cerca del CTA */}
            <Reveal delay={2}>
              <h1 className="font-normal text-[3rem] sm:text-[4rem] leading-[0.95] tracking-[-0.02em] text-right text-brand-teal">
                a cualquier
                <br />
                <span className="font-italic italic font-semibold uppercase">edad</span>.
              </h1>
            </Reveal>

            {/* Row 4: CTA + trust */}
            <div className="mt-2">
              <Reveal delay={3}>
                <a
                  href={whatsappLink("Hola Fernando, quería agendar una evaluación de fisioterapia.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-base"
                >
                  Agendar evaluación
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </Reveal>
              <Reveal delay={4}>
                <div className="mt-4 flex items-center justify-center gap-2 text-ink text-sm font-medium">
                  <svg className="h-4 w-4 text-brand-teal shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Respuesta en menos de 1 hora
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda sección mobile: subtítulo + bullets + CTA secundario */}
      <section className="lg:hidden bg-canvas py-12">
        <div className="container">
          <Reveal>
            <p className="text-lg text-ink-soft leading-relaxed">
              Rehabilitación post-quirúrgica, manejo de artrosis y recuperación de movilidad
              para perros y gatos, con planes personalizados.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-6 space-y-3 text-ink-soft text-sm">
              {[
                "Primera consulta sin compromiso",
                "Coordinación con tu veterinario",
                "Planes adaptados a cada mascota",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 text-brand-teal shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={2}>
            <Link href="/servicios" className="btn-outline mt-8 w-full text-base">
              Ver cómo trabajamos
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─────────── DESKTOP HERO ─────────── (lg+) */}
      <section className="hidden lg:block relative bg-canvas overflow-hidden">
        {/* Decoración cálida sutil (solo mitad izquierda) */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="deco-blob bg-brand-gold-tint w-[520px] h-[520px] -top-40 -left-40" />
        </div>

        <div className="relative grid lg:grid-cols-2 items-stretch lg:min-h-[600px] xl:min-h-[680px]">
          {/* IZQUIERDA — texto */}
          <div className="flex items-center py-12 lg:py-16">
            <div className="w-full px-4 sm:px-6 lg:pl-8 lg:pr-12 xl:pl-[calc((100vw-1280px)/2+2rem)] xl:pr-16">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold-tint text-brand-gold-dark px-4 py-1.5 text-xs font-semibold tracking-wide">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-teal animate-pulse" />
                  FISIOTERAPIA & REHABILITACIÓN VETERINARIA
                </div>
              </Reveal>

              <Reveal delay={1}>
                <h1 className="mt-6 font-normal">
                  <span className="text-ink">
                    Movimiento sin{" "}
                    <span className="font-italic italic font-semibold uppercase tracking-tight">dolor</span>,
                  </span>
                  <br />
                  <span className="text-brand-teal">
                    a cualquier{" "}
                    <span className="font-italic italic font-semibold uppercase tracking-tight">edad</span>.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={2}>
                <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-lg leading-relaxed">
                  Rehabilitación post-quirúrgica, manejo de artrosis y recuperación de movilidad
                  para perros y gatos, con planes personalizados.
                </p>
              </Reveal>

              <Reveal delay={3}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href={whatsappLink("Hola Fernando, quería agendar una evaluación de fisioterapia.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-base"
                  >
                    Agendar evaluación
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <Link href="/servicios" className="btn-outline text-base">
                    Ver cómo trabajamos
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={4}>
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-ink-soft text-sm">
                  {[
                    "Respuesta en menos de 1 hora",
                    "Primera consulta sin compromiso",
                    "Coordinación con tu veterinario",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-brand-teal shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {t}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* DERECHA — imagen full bleed */}
          <div className="relative">
            <Image
              src="/images/hero-b.jpg"
              alt="Vínculo humano-mascota: cariño y cuidado"
              fill
              priority
              sizes="50vw"
              className="object-cover object-right"
            />

            <div className="absolute bottom-20 left-6 bg-white rounded-2xl px-5 py-4 shadow-xl border border-ink/5 max-w-[220px] z-10">
              <div className="flex items-center gap-1 text-brand-teal">
                {"★★★★★".split("").map((s, i) => <span key={i} className="text-lg leading-none">{s}</span>)}
              </div>
              <div className="mt-1.5 text-xs text-ink leading-snug">
                <strong className="font-semibold">+200 familias</strong> ya confiaron su mascota.
              </div>
            </div>

            <div className="absolute top-6 right-6 bg-ink text-white rounded-full px-4 py-2 shadow-lg z-10">
              <div className="text-[10px] uppercase tracking-widest text-white/70">Respuesta en</div>
              <div className="text-sm font-semibold leading-tight">&lt; 1 hora</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
