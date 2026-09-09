import Link from "next/link";
import Image from "next/image";
import { Reveal } from "../Reveal";
import { whatsappLink } from "@/lib/site-config";

export function Hero() {
  return (
    <>
      {/* ─────────── MOBILE HERO ─────────── (< lg) */}
      <section className="lg:hidden relative bg-gradient-to-b from-canvas-cream to-canvas overflow-hidden">
        <div className="relative h-[calc(100vh-72px)] min-h-[600px] max-h-[820px] w-full">
          {/* Imagen full bleed con mix-blend-darken para fusionar el fondo blanco con el cream */}
          <Image
            src="/images/hero-v2.png"
            alt="Vínculo humano-mascota: cariño y cuidado"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-[72%_50%] mix-blend-darken"
          />

          {/* Gradientes suaves para asegurar legibilidad del texto (adaptados al cream) */}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-canvas-cream/50 via-transparent to-canvas-cream/85" />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-canvas-cream/90 to-transparent" />

          {/* Contenido overlay — H1 agrupado arriba, CTA abajo, imagen respira en medio */}
          <div className="relative z-10 h-full grid grid-rows-[auto_1fr_auto] gap-4 p-5 pt-6">
            {/* Row 1: H1 completo (ambas líneas juntas) — top-left */}
            <Reveal delay={1}>
              <h1 className="font-normal text-[3rem] sm:text-[4rem] leading-[0.95] tracking-[-0.02em]">
                <span className="block text-ink">
                  Movimiento sin{" "}
                  <span className="font-italic italic font-semibold uppercase">dolor</span>,
                </span>
                <span className="block text-brand-teal mt-1">
                  a cualquier{" "}
                  <span className="font-italic italic font-semibold uppercase">edad</span>.
                </span>
              </h1>
            </Reveal>

            {/* Row 2: spacer — deja respirar la imagen */}
            <div></div>

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

      {/* ─────────── DESKTOP HERO ─────────── (lg+) — full-width con texto flotante */}
      <section className="hidden lg:block relative bg-gradient-to-r from-canvas-cream to-canvas overflow-hidden">
        <div className="relative w-full lg:min-h-[calc(100vh-72px)]">
          {/* Imagen full-width con mix-blend-darken para "desaparecer" el fondo blanco sobre el cream */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-v2.png"
              alt="Vínculo humano-mascota: cariño y cuidado"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-[78%_35%] mix-blend-darken"
            />
          </div>

          {/* Gradiente para legibilidad del texto (adaptado al cream) */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-canvas-cream/90 via-canvas-cream/50 via-30% to-transparent to-60% z-10"
          />

          {/* Contenido flotante sobre la imagen */}
          <div className="relative z-20 h-full flex items-center lg:min-h-[calc(100vh-72px)]">
            <div className="w-full pl-8 sm:pl-12 lg:pl-20 xl:pl-28 2xl:pl-40 pr-8 py-12 lg:py-16">
              <div className="max-w-3xl">
                <Reveal>
                  <h1 className="font-normal lg:text-[clamp(3rem,5.8vw,7rem)] leading-[0.95]">
                    <span className="text-ink block">
                      Movimiento sin{" "}
                      <span className="font-italic italic font-semibold uppercase tracking-tight">dolor</span>,
                    </span>
                    <span className="text-brand-teal block">
                      a cualquier{" "}
                      <span className="font-italic italic font-semibold uppercase tracking-tight">edad</span>.
                    </span>
                  </h1>
                </Reveal>

                <Reveal delay={1}>
                  <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-lg leading-relaxed">
                    Rehabilitación post-quirúrgica, manejo de artrosis y recuperación de movilidad
                    para perros y gatos, con planes personalizados.
                  </p>
                </Reveal>

                <Reveal delay={2}>
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

                <Reveal delay={3}>
                  <div className="mt-6 flex items-center gap-3 text-sm text-ink-soft">
                    <svg className="h-4 w-4 text-brand-teal shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>CANEM Hospital · Mundo Aparte · Prótesis a medida</span>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
