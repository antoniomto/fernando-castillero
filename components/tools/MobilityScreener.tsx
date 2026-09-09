"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site-config";

interface Question {
  id: string;
  text: string;
  detail: string;
}

const questions: Question[] = [
  {
    id: "q1",
    text: "¿Tu mascota tarda o muestra rigidez al levantarse tras descansar?",
    detail: "Especialmente por las mañanas o después de dormir una siesta larga.",
  },
  {
    id: "q2",
    text: "¿Ha dejado de saltar al auto, sillón o subir escaleras con facilidad?",
    detail: "Duda antes de subir, pide ayuda o evita los desniveles.",
  },
  {
    id: "q3",
    text: "¿Notas que cojea o 'camina como conejo' al trotar?",
    detail: "Junta las dos patas traseras al correr o carga el peso en un solo lado.",
  },
  {
    id: "q4",
    text: "¿Se cansa mucho antes en los paseos o se sienta a mitad del camino?",
    detail: "Disminución evidente en su nivel habitual de energía o resistencia física.",
  },
  {
    id: "q5",
    text: "¿Ha cambiado de humor o se queja si tocas su cadera, lomo o patas?",
    detail: "Muestra incomodidad, gruñe suavemente o lame compulsivamente una articulación.",
  },
];

export function MobilityScreener() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const toggleAnswer = (id: string, val: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
  };

  const answeredCount = Object.keys(answers).length;
  const positiveCount = Object.values(answers).filter(Boolean).length;

  const handleEvaluate = () => {
    if (answeredCount < questions.length) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  let level: "low" | "medium" | "high" = "low";
  let badgeColor = "bg-emerald-100 text-emerald-800 border-emerald-300";
  let title = "Movilidad Óptima / Preventiva";
  let advice =
    "Tu mascota no presenta señales evidentes de dolor articular ni pérdida motora severa. Se recomienda mantener paseos moderados, control de peso y revisiones preventivas anuales.";

  if (positiveCount >= 3) {
    level = "high";
    badgeColor = "bg-rose-100 text-rose-800 border-rose-300";
    title = "Signos Marcados de Compromiso Articular / Motor";
    advice =
      "Tu mascota muestra múltiples señales de dolor crónico, posible artrosis o lesión biomecánica. Una evaluación de fisioterapia y valoración ortopédica temprana evita que pierda masa muscular y calidad de vida.";
  } else if (positiveCount >= 1) {
    level = "medium";
    badgeColor = "bg-amber-100 text-amber-800 border-amber-300";
    title = "Señales Tempranas de Desgaste o Incomodidad";
    advice =
      "Existen indicios iniciales de dolor o rigidez articular. Tratarlo a tiempo con hidroterapia o fisioterapia preventiva frena el avance degenerativo.";
  }

  const customMessage = `Hola Dr. Fernando, completé el evaluador de movilidad en tu web. Mi mascota dio ${positiveCount} de 5 señales de alerta (${title}). Me gustaría agendar una valoración clínica.`;

  return (
    <div className="rounded-3xl bg-white border border-slate-200/90 p-6 md:p-10 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2">
            Herramienta Gratuita · 100% en el Navegador
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-ink">
            Evaluador de Movilidad y Dolor Articular
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Responde 5 preguntas clave para identificar si tu perro o gato necesita rehabilitación.
          </p>
        </div>

        <div className="text-right shrink-0">
          <span className="text-xs font-semibold text-slate-400 block">Progreso</span>
          <span className="text-sm font-bold text-brand-marine">
            {answeredCount} de {questions.length} respondidas
          </span>
        </div>
      </div>

      {!submitted ? (
        <div className="space-y-6">
          {questions.map((q, idx) => {
            const current = answers[q.id];
            return (
              <div
                key={q.id}
                className={`p-4 md:p-5 rounded-2xl border transition-all ${
                  current !== undefined
                    ? "border-brand-marine/40 bg-brand-marine-tint/20"
                    : "border-slate-200 bg-slate-50/50"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1 pr-2">
                    <p className="text-sm md:text-base font-semibold text-ink">
                      <span className="text-brand-marine font-bold mr-2">{idx + 1}.</span>
                      {q.text}
                    </p>
                    <p className="text-xs text-slate-500">{q.detail}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0">
                    <button
                      type="button"
                      onClick={() => toggleAnswer(q.id, true)}
                      className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
                        current === true
                          ? "bg-rose-600 text-white shadow-sm"
                          : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      Sí
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleAnswer(q.id, false)}
                      className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
                        current === false
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="pt-4 flex items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              * Este test es una guía orientativa y no reemplaza el diagnóstico veterinario presencial.
            </p>
            <button
              type="button"
              disabled={answeredCount < questions.length}
              onClick={handleEvaluate}
              className={`btn-primary text-xs md:text-sm px-7 py-3.5 shrink-0 ${
                answeredCount < questions.length ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              Ver Diagnóstico Orientativo ↗
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 md:p-8 space-y-6 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${badgeColor}`}>
                Resultado: {title}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                ({positiveCount} alertas detectadas)
              </span>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-semibold text-slate-500 hover:text-ink underline"
            >
              Reiniciar prueba
            </button>
          </div>

          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            {advice}
          </p>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-marine">
                Recomendación del Dr. Fernando Castillero
              </p>
              <p className="text-sm font-semibold text-ink mt-0.5">
                {level === "high"
                  ? "Agendar valoración de fisioterapia y radiografía articular"
                  : level === "medium"
                  ? "Chequeo de movilidad preventiva en Mundo Aparte"
                  : "Mantener plan de nutrición y ejercicio equilibrado"}
              </p>
            </div>

            <a
              href={whatsappLink(customMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs md:text-sm px-6 py-3 shrink-0 w-full sm:w-auto text-center"
            >
              Consultar este resultado por WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
