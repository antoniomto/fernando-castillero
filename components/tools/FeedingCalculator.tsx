"use client";

import { useMemo, useState } from "react";
import { whatsappLink } from "@/lib/site-config";

type Species = "perro" | "gato";
type Age = "cachorro" | "adulto" | "senior";
type Activity = "bajo" | "medio" | "alto";
type Status = "normal" | "esterilizado" | "obesidad";

const FACTORS: Record<Species, Record<Age, Record<Activity, number>>> = {
  perro: {
    cachorro: { bajo: 2.0, medio: 2.5, alto: 3.0 },
    adulto:   { bajo: 1.4, medio: 1.6, alto: 1.8 },
    senior:   { bajo: 1.2, medio: 1.4, alto: 1.6 },
  },
  gato: {
    cachorro: { bajo: 2.0, medio: 2.5, alto: 2.5 },
    adulto:   { bajo: 1.0, medio: 1.2, alto: 1.4 },
    senior:   { bajo: 0.9, medio: 1.1, alto: 1.2 },
  },
};

const STATUS_ADJUST: Record<Status, number> = {
  normal: 1.0,
  esterilizado: 0.9,
  obesidad: 0.8,
};

const KCAL_PER_GRAM = 3.6; // densidad calórica promedio de alimento seco premium

export function FeedingCalculator() {
  const [species, setSpecies] = useState<Species>("perro");
  const [weight, setWeight] = useState<string>("");
  const [age, setAge] = useState<Age>("adulto");
  const [activity, setActivity] = useState<Activity>("medio");
  const [status, setStatus] = useState<Status>("normal");

  const result = useMemo(() => {
    const w = parseFloat(weight);
    if (!w || w <= 0 || w > 100) return null;
    const rer = 70 * Math.pow(w, 0.75);
    const factor = FACTORS[species][age][activity] * STATUS_ADJUST[status];
    const kcal = Math.round(rer * factor);
    const grams = Math.round(kcal / KCAL_PER_GRAM);
    const meals = age === "cachorro" ? (w < 5 ? 4 : 3) : species === "gato" ? 3 : 2;
    return { kcal, grams, meals, rer: Math.round(rer) };
  }, [species, weight, age, activity, status]);

  return (
    <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
      <form className="card space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="label">Especie</label>
          <div className="grid grid-cols-2 gap-2">
            {(["perro", "gato"] as Species[]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSpecies(s)}
                className={`rounded-xl border-2 px-4 py-2.5 text-xs md:text-sm font-bold capitalize transition ${
                  species === s
                    ? "border-brand-marine bg-brand-marine-tint text-brand-marine"
                    : "border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="weight" className="label">Peso Actual (kg)</label>
          <input
            id="weight"
            type="number"
            min="0.5"
            max="100"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Ej: 14.5"
            className="input"
          />
        </div>

        <div>
          <label className="label">Etapa de Vida</label>
          <select value={age} onChange={(e) => setAge(e.target.value as Age)} className="input">
            <option value="cachorro">Cachorro / En crecimiento (&lt; 1 año)</option>
            <option value="adulto">Adulto (1 a 7 años)</option>
            <option value="senior">Senior / Geriátrico (&gt; 7 años)</option>
          </select>
        </div>

        <div>
          <label className="label">Nivel de Actividad Diaria</label>
          <div className="grid grid-cols-3 gap-2">
            {(["bajo", "medio", "alto"] as Activity[]).map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setActivity(a)}
                className={`rounded-xl border-2 px-3 py-2 text-xs font-bold capitalize transition ${
                  activity === a
                    ? "border-brand-marine bg-brand-marine-tint text-brand-marine"
                    : "border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="label">Condición Corporal</label>
          <select value={status} onChange={(e) => setStatus(e.target.value as Status)} className="input">
            <option value="normal">Peso Óptimo / Normal</option>
            <option value="esterilizado">Esterilizado / Castrado</option>
            <option value="obesidad">Con Sobrepeso (Plan de Reducción)</option>
          </select>
        </div>
      </form>

      <div className="card bg-slate-900 text-white border-slate-800 flex flex-col justify-between shadow-xl">
        <div>
          <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
            <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold">
              Resultado Orientativo (WSAVA)
            </span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          {result ? (
            <div className="mt-6 space-y-6">
              <div>
                <div className="text-5xl font-extrabold text-white font-display">
                  {result.kcal} <span className="text-xl font-normal text-slate-400">kcal/día</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Requerimiento energético estimado</div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3.5">
                  <div className="text-2xl font-bold text-emerald-300">{result.grams} g</div>
                  <div className="text-[11px] text-slate-400">Croquetas secas / día</div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3.5">
                  <div className="text-2xl font-bold text-white">{result.meals}</div>
                  <div className="text-[11px] text-slate-400">Tomas recomendadas</div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 pt-3 border-t border-white/10 leading-relaxed">
                Cálculo basado en RER ({result.rer} kcal) × factor MER. La ración exacta varía según la densidad calórica del alimento comercial.
              </p>
            </div>
          ) : (
            <div className="py-12 text-center text-slate-400 text-sm">
              Introduce el peso en kg para calcular la ración diaria recomendada.
            </div>
          )}
        </div>

        {result && (
          <a
            href={whatsappLink(
              `Hola Dr. Fernando, utilicé la calculadora de nutrición: mi ${species} de ${weight}kg requiere unas ${result.kcal} kcal/día. Me gustaría asesoría nutricional o de control de peso.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full mt-6 text-xs md:text-sm py-3"
          >
            Consultar con el Dr. Fernando por WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}
