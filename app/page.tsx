import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/home/Hero";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { EcosystemPillars } from "@/components/home/EcosystemPillars";
import { ProblemSection } from "@/components/home/ProblemSection";
import { FernandoTimeline } from "@/components/home/FernandoTimeline";
import { whatsappLink } from "@/lib/site-config";

const clinicalTools = [
  {
    href: "/herramientas/explorador-terapias",
    badge: "Mundo Aparte",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    title: "Explorador de Terapias de Fisioterapia",
    desc: "Aprende cómo el agua, el láser infrarrojo y la electroterapia regeneran cartílago y tejido muscular.",
    action: "Explorar 5 terapias →",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-emerald-600">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    href: "/herramientas/guia-protesis",
    badge: "Biomecánica",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    title: "Guía de Soluciones Ortopédicas & Prótesis",
    desc: "Asistente para sillas de ruedas, prótesis dinámicas y férulas correctoras tras amputación o lesión.",
    action: "Ver guía de dispositivos →",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-amber-600">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    href: "/herramientas/triage-urgencias",
    badge: "CANEM Urgencias",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    title: "Triage Médico Hospitalario 24/7",
    desc: "Clasifica los signos de alerta para determinar si tu mascota requiere intervención de quirófano urgente.",
    action: "Evaluar nivel de urgencia →",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-rose-600">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/herramientas/test-movilidad",
    badge: "Autoevaluación",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    title: "Test de Movilidad, Artrosis y Displasia",
    desc: "Cuestionario de 5 preguntas clínicas para evaluar dolor articular, rigidez matutina y debilidad motora.",
    action: "Comenzar test clínico →",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-blue-600">
        <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/herramientas/calculadora-alimentacion",
    badge: "Nutrición WSAVA",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    title: "Calculadora de Nutrición & Ración Diaria",
    desc: "Estima las calorías exactas y gramos recomendados según especie, peso, edad y nivel de actividad.",
    action: "Calcular ración diaria →",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-teal-600">
        <path d="M6 3v18M6 8h12l-1 6H7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/herramientas/recuperacion-post-cirugia",
    badge: "Post-Quirúrgico",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    title: "Cronograma de Recuperación Post-Cirugía",
    desc: "Timeline semanal y checklist diario para guiar los cuidados de tu mascota tras cirugías ortopédicas.",
    action: "Ver cronograma post-operatorio →",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-indigo-600">
        <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
        <circle cx="18" cy="18" r="3" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <ProblemSection />
      <EcosystemPillars />

      {/* SECCIÓN COMPACTA: HUB DE HERRAMIENTAS CLÍNICAS */}
      <section id="herramientas" className="section bg-slate-50 relative overflow-hidden">
        <div className="container relative z-10">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="eyebrow">Recursos & Exploradores Clínicos</span>
              <h2 className="mt-4 text-ink">
                Herramientas Interactivas para Propietarios
                <br />
                <span className="text-brand-marine font-semibold">100% Gratuitas, Prácticas y sin Registro</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Diseñadas por el equipo del Dr. Fernando Castillero para orientar tus decisiones clínicas,
                evaluar síntomas y preparar la mejor calidad de vida para tu mascota.
              </p>
            </div>
          </Reveal>

          {/* Bento Grid of Dedicated Interactive Tools */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {clinicalTools.map((t, i) => (
              <Reveal key={t.href} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <Link
                  href={t.href}
                  className="group flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-brand-marine/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${t.badgeColor}`}>
                        {t.badge}
                      </span>
                      <div className="h-10 w-10 rounded-2xl bg-slate-50 group-hover:bg-brand-marine-tint flex items-center justify-center transition-colors shrink-0">
                        {t.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-ink group-hover:text-brand-marine transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                      {t.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-marine group-hover:text-brand-marine-2">
                    <span>{t.action}</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">↗</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2}>
            <div className="mt-14 text-center">
              <Link
                href="/herramientas"
                className="btn-outline inline-flex items-center gap-2 text-sm px-8 py-3.5"
              >
                <span>Ver todas las herramientas y guías clínicas</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FernandoTimeline />

      {/* CTA FINAL */}
      <section id="contacto" className="relative bg-brand-marine text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-20">
          <div className="deco-blob bg-emerald-500 w-[480px] h-[480px] -top-20 -right-20" />
          <div className="deco-blob bg-brand-marine-2 w-[520px] h-[520px] -bottom-32 -left-20" style={{ animationDelay: "-8s" }} />
        </div>

        <div className="container-tight relative py-20 md:py-28">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-xs md:text-sm uppercase tracking-[0.22em] text-emerald-300 font-bold">
                Atención Médica & Especialidades
              </span>
              <h2 className="mt-4 text-white">
                Tu mascota en las mejores manos,
                <br />
                con <span className="font-bold text-emerald-300">diagnóstico certero y calidad de vida</span>.
              </h2>
              <p className="mt-6 text-slate-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Escríbenos por WhatsApp para orientarte sobre consultas en CANEM Hospital,
                programas de rehabilitación en Mundo Aparte o valoraciones de prótesis.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={whatsappLink("Hola Dr. Fernando, me gustaría agendar una valoración médica/fisioterapia para mi mascota.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm md:text-base px-8 py-4"
                >
                  <span>Agendar Consulta por WhatsApp</span>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="tel:4490000000"
                  className="btn-outline-light text-sm md:text-base px-7 py-3.5"
                >
                  Llamar a Recepción
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Atención en Aguascalientes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Instalaciones Quirúrgicas & Fisioterapia</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Respuesta rápida y profesional</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
