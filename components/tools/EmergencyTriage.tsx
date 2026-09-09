"use client";

import { useState } from "react";
import { whatsappLink, siteConfig } from "@/lib/site-config";

interface TriageOption {
  id: string;
  category: string;
  title: string;
  symptoms: string[];
  level: "emergency" | "urgent" | "routine";
  actionText: string;
}

const triageData: TriageOption[] = [
  {
    id: "respiratory",
    category: "Respiratorio & Circulatorio",
    title: "Dificultad respiratoria, encías moradas o desmayo",
    symptoms: ["Respira con la boca abierta y esfuerzo", "Lengua o encías azuladas/pálidas", "Colapso repentino o pérdida de conciencia"],
    level: "emergency",
    actionText: "URGENCIA INMEDIATA: Llevar a CANEM Hospital de inmediato",
  },
  {
    id: "trauma",
    category: "Traumatología & Accidentes",
    title: "Atropello, caída de altura o fractura expuesta",
    symptoms: ["Incapacidad total para apoyar una pata", "Hemorragia activa", "Dolor agudo incontrolable al tacto"],
    level: "emergency",
    actionText: "URGENCIA HOSPITALARIA: Requiere quirófano o estabilización",
  },
  {
    id: "gastro",
    category: "Digestivo & Toxinas",
    title: "Vómitos repetidos, abdomen hinchado o ingestión de veneno",
    symptoms: ["Intentos continuos de vomitar sin éxito (torsión gástrica)", "Ingesta de chocolate, medicamentos o plantas tóxicas", "Diarrea con sangre abundante"],
    level: "emergency",
    actionText: "ATENCIÓN URGENTE: Acudir de inmediato antes de que el tóxico se absorba",
  },
  {
    id: "mobility-chronic",
    category: "Movilidad & Dolor Crónico",
    title: "Cojea gradualmente, le cuesta levantarse o no sube escaleras",
    symptoms: ["Rigidez al despertar", "Pérdida de fuerza en patas traseras", "Ha dejado de jugar por dolor"],
    level: "urgent",
    actionText: "CONSULTA PROGRAMADA: Valoración en Fisioterapia (Mundo Aparte)",
  },
  {
    id: "preventive",
    category: "Preventivo & Chequeo",
    title: "Vacunas, desparasitación, limpieza dental o chequeo anual",
    symptoms: ["Mantenimiento preventivo", "Revisión de rutina", "Certificado de salud"],
    level: "routine",
    actionText: "CITA REGULAR: Agendar consulta en CANEM Hospital",
  },
];

export function EmergencyTriage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = triageData.find((t) => t.id === selectedId);

  return (
    <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-2">
              Triage Médico Orientativo 24/7
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              ¿Tu mascota necesita atención médica inmediata?
            </h3>
            <p className="text-xs md:text-sm text-slate-300 mt-1">
              Selecciona el síntoma principal para determinar el nivel de urgencia y el canal de atención adecuado.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="tel:4490000000"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition shadow-lg"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Llamar a Urgencias CANEM
            </a>
          </div>
        </div>

        {/* Symptoms selector grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {triageData.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`text-left p-4 rounded-2xl border transition-all ${
                  isSelected
                    ? "bg-white/15 border-brand-coral shadow-md ring-2 ring-brand-coral/40"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                    {item.category}
                  </span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      item.level === "emergency"
                        ? "bg-rose-500 animate-pulse"
                        : item.level === "urgent"
                        ? "bg-amber-400"
                        : "bg-emerald-400"
                    }`}
                  />
                </div>
                <div className="text-xs md:text-sm font-bold text-white leading-snug">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Evaluation Output Card */}
        {selected ? (
          <div className="rounded-2xl bg-white/10 border border-white/15 p-6 md:p-8 space-y-4 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  selected.level === "emergency"
                    ? "bg-rose-500 text-white"
                    : selected.level === "urgent"
                    ? "bg-amber-500 text-slate-900"
                    : "bg-emerald-500 text-slate-900"
                }`}
              >
                {selected.actionText}
              </span>
              <span className="text-xs text-slate-300">
                Ubicación: Av. Convención de 1914 Norte #1506, Aguascalientes
              </span>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Señales críticas asociadas:
              </div>
              <ul className="space-y-1 text-xs md:text-sm text-slate-200">
                {selected.symptoms.map((s, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-brand-coral font-bold">•</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <p className="text-xs text-slate-400">
                * Si tu mascota no respira o pierde el conocimiento, acude inmediatamente sin esperar respuesta.
              </p>
              <a
                href={whatsappLink(
                  `URGENCIA/TRIAGE: Hola Dr. Fernando, mi mascota presenta síntomas de ${selected.title}. Necesito orientación de atención en CANEM Hospital.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs md:text-sm px-6 py-3 w-full sm:w-auto text-center shrink-0"
              >
                Avisar a recepción por WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center text-slate-400 text-xs md:text-sm">
            Haz clic en cualquiera de las opciones arriba para ver el protocolo de atención y recomendación directa.
          </div>
        )}
      </div>
    </div>
  );
}
