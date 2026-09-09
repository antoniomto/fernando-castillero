"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site-config";

interface MobilitySolution {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  device: string;
  deviceType: "Prótesis Activa" | "Silla de Ruedas" | "Órtesis Biomecánica" | "Férula Estabilizadora";
  tagColor: string;
  candidates: string[];
  protocolSteps: { title: string; desc: string }[];
  clinicalRequirements: string;
  adaptationTime: string;
}

const solutions: MobilitySolution[] = [
  {
    id: "amputacion",
    category: "Amputación & Pérdida de Extremidad",
    title: "Mi mascota perdió una extremidad o tiene muñón funcional",
    shortDesc: "Prótesis dinámicas a medida para restaurar el apoyo cuadrúpedo simétrico.",
    device: "Prótesis Dinámica Transtibial / Transradial Personalizada",
    deviceType: "Prótesis Activa",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    candidates: [
      "Amputaciones distales conservando al menos un tercio de la extremidad",
      "Perros o gatos medianos y grandes que sufren sobrecarga en articulaciones restantes",
      "Casos con muñón cicatrizado sin dolor neuropático ni fístulas",
    ],
    protocolSteps: [
      { title: "1. Escaneo y Molde 3D", desc: "Toma de impresión anatómica exacta del muñón para confeccionar el encaje interior." },
      { title: "2. Fabricación en Fibra / Polímero", desc: "Socket semirrígido con liner viscoelástico y pie dinámico con suela antiderrapante." },
      { title: "3. Readaptación Motora", desc: "Sesiones de fisioterapia guiada en Mundo Aparte para reentrenar la propiocepción." },
    ],
    clinicalRequirements: "Radiografías recientes del muñón y valoración del estado cutáneo.",
    adaptationTime: "3 a 6 semanas con protocolo gradual",
  },
  {
    id: "paralisis",
    category: "Parálisis o Debilidad de Patas Traseras",
    title: "Arrastra las patas traseras o no puede sostener su propio peso",
    shortDesc: "Sillas de ruedas ultraligeras que devuelven la autonomía y libertad de movimiento.",
    device: "Carro Adaptativo Ergonómico de Aluminio Aeronáutico",
    deviceType: "Silla de Ruedas",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    candidates: [
      "Parálisis o paresia por hernia discal severa (IVDD grados 4 y 5)",
      "Mielopatía degenerativa en razas predispuestas (Pastor Alemán, Bóxer)",
      "Displasia de cadera terminal con pérdida muscular en pacientes geriátricos",
    ],
    protocolSteps: [
      { title: "1. Medición Antropométrica", desc: "7 dimensiones clave (altura a la cruz, longitud pélvica, ancho pectoral)." },
      { title: "2. Calibración del Centro de Gravedad", desc: "Balance neutro para evitar que el peso cargue la columna torácica o el cuello." },
      { title: "3. Prueba en Terreno", desc: "Adaptación con arnés pectoral acolchado y correas de suspensión inguinal." },
    ],
    clinicalRequirements: "Evaluación neurológica previa para determinar si existe posibilidad de recuperación motora.",
    adaptationTime: "Inmediata a 7 días (la mayoría corre el primer día)",
  },
  {
    id: "deformidad",
    category: "Hiperextensión o Luxación Articular",
    title: "Apoyo vencido en 'talones' o articulaciones desalineadas",
    shortDesc: "Órtesis dinámicas que corrigen la postura evitando cirugías agresivas de fusión.",
    device: "Órtesis Biomecánica Articulada con Control de Rango (ROM)",
    deviceType: "Órtesis Biomecánica",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    candidates: [
      "Hiperextensión carpiana (muñeca que toca el suelo al apoyar)",
      "Inestabilidad o laxitud de tarso (talón) por rotura de tendón calcáneo común",
      "Deformidades angulares del crecimiento en extremidades anteriores",
    ],
    protocolSteps: [
      { title: "1. Evaluación Cinemática", desc: "Análisis del paso en video y medición de ángulos de flexo-extensión." },
      { title: "2. Confección a Medida", desc: "Valvas termoplásticas ligeras con articulación de acero o titanio regulable." },
      { title: "3. Progresión Angular", desc: "Ajuste paulatino de los grados de libertad conforme se tonifica el tendón." },
    ],
    clinicalRequirements: "Estudio radiológico ortopédico para descartar fracturas ocultas.",
    adaptationTime: "10 a 14 días con uso supervisado",
  },
  {
    id: "postquirurgico",
    category: "Inestabilidad de Rodilla & Post-Quirúrgico",
    title: "Cojera de rodilla, ligamento lesionado o apoyo doloroso",
    shortDesc: "Soporte estructural guiado para proteger articulaciones en convalecencia.",
    device: "Férula Estabilizadora de Rodilla con Articulación Biaxial",
    deviceType: "Férula Estabilizadora",
    tagColor: "bg-purple-50 text-purple-700 border-purple-200",
    candidates: [
      "Rotura o esguince parcial de ligamento cruzado craneal (LCC)",
      "Pacientes de edad avanzada con riesgo quirúrgico que no pueden operarse",
      "Protección contra sobrecargas durante la consolidación de osteotomías",
    ],
    protocolSteps: [
      { title: "1. Moldeado Anatómico", desc: "Fijación sobre muslo y tibia respetando la rotación natural de la babilla." },
      { title: "2. Sistema de Doble Bisagra", desc: "Permite la flexión natural mientras bloquea el desplazamiento 'cajón' anterior." },
      { title: "3. Combinación Fisioterápica", desc: "Uso sinérgico con láser y ejercicios isométricos para masa muscular." },
    ],
    clinicalRequirements: "Palpación ortopédica y confirmación diagnóstica con el Dr. Fernando.",
    adaptationTime: "1 a 2 semanas",
  },
];

export function MobilityGuide() {
  const [selectedId, setSelectedId] = useState<string>("amputacion");
  const current = solutions.find((s) => s.id === selectedId) || solutions[0];

  return (
    <div className="rounded-3xl bg-slate-100/90 p-2 sm:p-3 border border-slate-200/80 shadow-md">
      <div className="rounded-[1.4rem] bg-white p-5 sm:p-8 border border-slate-100">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Unidad de Biomecánica & Prótesis
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink mt-1">
              Guía de Soluciones Biomecánicas
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Selecciona la situación clínica de tu mascota para conocer el dispositivo ortopédico, requisitos y tiempos de adaptación.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400">Solución:</span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${current.tagColor}`}>
              {current.deviceType}
            </span>
          </div>
        </div>

        {/* 4 Interactive Selector Cards (Mobile Stack / Desktop 4-grid) */}
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4 py-5">
          {solutions.map((s) => {
            const isSelected = s.id === selectedId;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedId(s.id)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between min-h-[110px] ${
                  isSelected
                    ? "bg-brand-marine text-white border-brand-marine shadow-md scale-[1.01]"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200/80"
                }`}
              >
                <div>
                  <div
                    className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                      isSelected ? "text-emerald-300" : "text-brand-marine"
                    }`}
                  >
                    {s.category}
                  </div>
                  <div className="text-xs sm:text-sm font-bold leading-snug">
                    {s.title}
                  </div>
                </div>
                <div
                  className={`text-[11px] font-medium mt-2 pt-2 border-t ${
                    isSelected ? "border-white/20 text-slate-200" : "border-slate-200 text-slate-500"
                  }`}
                >
                  Ver dispositivo recomendado →
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Solution Workspace */}
        <div className="mt-2 pt-5 border-t border-slate-100 grid gap-6 lg:grid-cols-12">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-2 ${current.tagColor}`}>
                {current.deviceType}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-ink">
                {current.device}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                {current.shortDesc}
              </p>
            </div>

            {/* Candidates */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                ¿Para quiénes está indicado?
              </div>
              <div className="space-y-2">
                {current.candidates.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-200/60 text-xs sm:text-sm text-slate-700"
                  >
                    <svg
                      className="h-4 w-4 text-amber-600 shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
                    </svg>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical requirements */}
            <div className="rounded-2xl bg-blue-50/70 border border-blue-200/80 p-3.5 flex items-start gap-3 text-xs text-blue-900">
              <svg className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
              <div>
                <strong className="font-semibold block">Requisito Médico de Inicio:</strong>
                {current.clinicalRequirements}
              </div>
            </div>
          </div>

          {/* Right Steps & WhatsApp */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900 text-white p-5 sm:p-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  Proceso de Fabricación & Entrega
                </span>
                <h5 className="text-base font-bold text-white mt-0.5">
                  De la valoración al primer paso
                </h5>
              </div>

              {/* Protocol steps */}
              <div className="space-y-3">
                {current.protocolSteps.map((s, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-amber-300 mb-0.5">{s.title}</div>
                    <div className="text-slate-300 leading-relaxed">{s.desc}</div>
                  </div>
                ))}
              </div>

              {/* Metric */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                <span className="text-[10px] text-slate-400 block uppercase">Tiempo estimado de adaptación</span>
                <span className="font-bold text-emerald-300">{current.adaptationTime}</span>
              </div>
            </div>

            {/* Contextual CTA */}
            <a
              href={whatsappLink(
                `Hola Dr. Fernando, me interesa una valoración biomecánica: mi mascota presenta el caso de ${current.category} (${current.device}).`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full mt-5 text-xs sm:text-sm py-3 px-4 text-center justify-center"
            >
              <span>Valorar caso con el Dr. Fernando</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
