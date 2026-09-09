"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { ModalDrawer } from "@/components/ui/ModalDrawer";
import { EmergencyTriage } from "@/components/tools/EmergencyTriage";
import { TherapyExplorer } from "@/components/tools/TherapyExplorer";
import { MobilityGuide } from "@/components/tools/MobilityGuide";

interface PillarData {
  id: "canem" | "mundo-aparte" | "protesis";
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  icon: (className?: string) => React.ReactNode;
  highlights: string[];
  ctaText: string;
  dedicatedHref: string;
  stat: { value: string; label: string };
  gradient: string;
}

const pillars: PillarData[] = [
  {
    id: "canem",
    badge: "Centro Médico & Quirúrgico",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200/80",
    title: "CANEM Hospital Veterinario",
    subtitle: "Atención médica integral, hospitalización y quirófano en Aguascalientes.",
    description:
      "Hospital veterinario de referencia donde el Dr. Fernando lidera junto a socios especializados el diagnóstico certero, cirugías avanzadas, medicina preventiva y cuidados críticos con equipamiento de vanguardia.",
    icon: (className = "h-6 w-6") => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16" strokeLinecap="round" />
        <path d="M12 7v6M9 10h6" strokeLinecap="round" />
        <path d="M3 21h18" strokeLinecap="round" />
      </svg>
    ),
    highlights: [
      "Cirugía de tejidos blandos y traumatología",
      "Hospitalización monitorizada y cuidados intensivos",
      "Medicina interna, vacunas y cuidado dental",
      "Diagnóstico clínico y urgencias veterinarias",
    ],
    ctaText: "Abrir Triage & Protocolo Quirúrgico",
    dedicatedHref: "/herramientas/triage-urgencias",
    stat: { value: "24/7", label: "Atención y quirófano especializado" },
    gradient: "from-blue-600/10 via-transparent to-transparent",
  },
  {
    id: "mundo-aparte",
    badge: "Franquicia Internacional",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    title: "Mundo Aparte (Fisioterapia)",
    subtitle: "La red de rehabilitación animal más grande del mundo, dirigida localmente por Fernando.",
    description:
      "Centro especializado en recuperación motora, hidroterapia, termoterapia, láser terapéutico y estimulación neurológica para devolver la movilidad y calidad de vida sin dolor a perros y gatos.",
    icon: (className = "h-6 w-6") => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M8 11h8M12 7v8" strokeLinecap="round" />
      </svg>
    ),
    highlights: [
      "Hidroterapia en cinta acuática y piscina",
      "Láser terapéutico para dolor y regeneración tisular",
      "Rehabilitación post-quirúrgica y artrosis",
      "Planes biomecánicos personalizados por sesión",
    ],
    ctaText: "Explorar Terapias Interactivas",
    dedicatedHref: "/herramientas/explorador-terapias",
    stat: { value: "Global", label: "Red internacional de rehabilitación" },
    gradient: "from-emerald-600/10 via-transparent to-transparent",
  },
  {
    id: "protesis",
    badge: "Innovación Biomecánica",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200/80",
    title: "Prótesis & Movilidad Avanzada",
    subtitle: "Colaboración tecnológica para dispositivos ortopédicos y prótesis a medida.",
    description:
      "Alianza especializada con ingenieros biomédicos para diseñar extremidades artificiales, carros adaptativos y férulas dinámicas en pacientes con amputaciones o malformaciones severas.",
    icon: (className = "h-6 w-6") => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    highlights: [
      "Prótesis funcionales para extremidades anteriores y posteriores",
      "Ortesis dinámicas y férulas correctoras",
      "Sillas de ruedas ergonómicas personalizadas",
      "Adaptación y readiestramiento motor guiado",
    ],
    ctaText: "Abrir Guía de Prótesis & Órtesis",
    dedicatedHref: "/herramientas/guia-protesis",
    stat: { value: "100%", label: "Diseño anatómico personalizado" },
    gradient: "from-amber-600/10 via-transparent to-transparent",
  },
];

export function EcosystemPillars() {
  const [activeModal, setActiveModal] = useState<"canem" | "mundo-aparte" | "protesis" | null>(null);

  return (
    <section id="ecosistema" className="section bg-canvas-soft relative overflow-hidden">
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-marine/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container relative z-10">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="eyebrow">Ecosistema Clínico Integral</span>
            <h2 className="mt-4 text-ink">
              Tres pilares de vanguardia.
              <br />
              <span className="text-brand-marine font-semibold">Una sola dirección médica.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              El Dr. Fernando Castillero conecta la medicina hospitalaria rigurosa con la mayor red
              mundial de fisioterapia y tecnología protésica para un tratamiento 360° de tu mascota.
            </p>
          </div>
        </Reveal>

        {/* 3 Pillars Grid — Double-Bezel Card Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={(i + 1) as 1 | 2 | 3}>
              <div className="group relative rounded-3xl bg-slate-100/80 p-2.5 transition-all duration-300 hover:bg-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col h-full border border-slate-200/70">
                {/* Inner Card */}
                <div className="rounded-[1.4rem] bg-white p-7 md:p-8 flex flex-col flex-1 relative overflow-hidden border border-slate-100">
                  {/* Subtle top corner gradient */}
                  <div
                    aria-hidden
                    className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${p.gradient} rounded-bl-full pointer-events-none`}
                  />

                  {/* Header Pillar */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${p.badgeColor}`}
                    >
                      {p.badge}
                    </span>
                    <div className="h-11 w-11 rounded-2xl bg-brand-marine-tint text-brand-marine flex items-center justify-center group-hover:bg-brand-marine group-hover:text-white transition-colors duration-300 shrink-0">
                      {p.icon("h-5 w-5")}
                    </div>
                  </div>

                  <h3 className="text-ink text-xl font-bold tracking-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm font-medium text-brand-marine mb-4">
                    {p.subtitle}
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                    {p.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5 mb-8 border-t border-slate-100 pt-5 flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Capacidades Principales
                    </div>
                    {p.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                        <svg
                          className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stat Badge */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 mb-6 flex items-center gap-3.5">
                    <div className="text-xl font-extrabold text-brand-marine font-display">
                      {p.stat.value}
                    </div>
                    <div className="text-xs text-slate-600 font-medium leading-tight">
                      {p.stat.label}
                    </div>
                  </div>

                  {/* Action Link / Interactive Modal Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setActiveModal(p.id)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 text-white hover:bg-brand-marine py-3.5 px-5 text-xs md:text-sm font-semibold transition-all duration-200 shadow-sm cursor-pointer"
                  >
                    <span>{p.ctaText}</span>
                    <svg className="h-3.5 w-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Immersive Mobile-First Modal Drawers */}
      <ModalDrawer
        isOpen={activeModal === "canem"}
        onClose={() => setActiveModal(null)}
        title="CANEM Hospital · Sede Quirúrgica & Urgencias 24/7"
        subtitle="Protocolo de triage y evaluación inmediata de gravedad en Aguascalientes"
        fullPageHref="/herramientas/triage-urgencias"
      >
        <EmergencyTriage />
      </ModalDrawer>

      <ModalDrawer
        isOpen={activeModal === "mundo-aparte"}
        onClose={() => setActiveModal(null)}
        title="Mundo Aparte · Explorador Científico de Terapias"
        subtitle="Fundamento biológico, indicaciones y protocolo de fisioterapia veterinaria"
        fullPageHref="/herramientas/explorador-terapias"
      >
        <TherapyExplorer />
      </ModalDrawer>

      <ModalDrawer
        isOpen={activeModal === "protesis"}
        onClose={() => setActiveModal(null)}
        title="Unidad de Biomecánica & Prótesis a Medida"
        subtitle="Asistente interactivo de dispositivos ortopédicos, sillas de ruedas y férulas"
        fullPageHref="/herramientas/guia-protesis"
      >
        <MobilityGuide />
      </ModalDrawer>
    </section>
  );
}

