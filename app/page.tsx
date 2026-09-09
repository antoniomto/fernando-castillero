import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/home/Hero";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { EcosystemPillars } from "@/components/home/EcosystemPillars";
import { ProblemSection } from "@/components/home/ProblemSection";
import { FernandoTimeline } from "@/components/home/FernandoTimeline";
import { MobilityScreener } from "@/components/tools/MobilityScreener";
import { EmergencyTriage } from "@/components/tools/EmergencyTriage";
import { FeedingCalculator } from "@/components/tools/FeedingCalculator";
import { whatsappLink } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <ProblemSection />
      <EcosystemPillars />

      {/* SECCIÓN INTERACTIVA: HERRAMIENTAS DE SALUD */}
      <section id="herramientas" className="section bg-slate-50 relative overflow-hidden">
        <div className="container relative z-10">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="eyebrow">Recursos para Propietarios</span>
              <h2 className="mt-4 text-ink">
                Herramientas Clínicas Interactivas
                <br />
                <span className="text-brand-marine font-semibold">100% Gratuitas y sin Registro</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Diseñadas por el equipo del Dr. Fernando Castillero para ayudarte a evaluar la movilidad,
                identificar síntomas de urgencia y calcular la nutrición óptima de tu mascota.
              </p>
            </div>
          </Reveal>

          {/* Interactive Screener 1: Mobility & Joint Pain */}
          <div className="space-y-12 max-w-5xl mx-auto">
            <Reveal delay={1}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Herramienta 1 · Detección de Artrosis y Displasia
                  </span>
                </div>
                <MobilityScreener />
              </div>
            </Reveal>

            {/* Interactive Screener 2: Emergency Triage */}
            <Reveal delay={2}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Herramienta 2 · Protocolo de Urgencias Hospitalarias (CANEM)
                  </span>
                </div>
                <EmergencyTriage />
              </div>
            </Reveal>

            {/* Interactive Tool 3: Feeding Calculator */}
            <Reveal delay={3}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Herramienta 3 · Nutrición y Requerimiento Energético (WSAVA)
                  </span>
                </div>
                <FeedingCalculator />
              </div>
            </Reveal>
          </div>
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
