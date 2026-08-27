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
                className={`rounded-lg border-2 px-4 py-2 text-sm font-medium capitalize transition ${
                  species === s
                    ? "border-brand-teal bg-brand-teal/10 text-ink"
                    : "border-ink/15 text-ink-soft hover:border-ink-muted"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="weight" className="label">Peso (kg)</label>
          <input
            id="weight"
            type="number"
            min="0.5"
            max="100"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Ej: 15"
            className="input"
          />
        </div>

        <div>
          <label className="label">Edad</label>
          <select value={age} onChange={(e) => setAge(e.target.value as Age)} className="input">
            <option value="cachorro">Cachorro / Junior (menos de 1 año)</option>
            <option value="adulto">Adulto</option>
            <option value="senior">Senior (más de 7 años)</option>
          </select>
        </div>

        <div>
          <label className="label">Nivel de actividad</label>
          <div className="grid grid-cols-3 gap-2">
            {(["bajo", "medio", "alto"] as Activity[]).map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setActivity(a)}
                className={`rounded-lg border-2 px-3 py-2 text-sm font-medium capitalize transition ${
                  activity === a
                    ? "border-brand-teal bg-brand-teal/10 text-ink"
                    : "border-ink/15 text-ink-soft hover:border-ink-muted"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="label">Estado</label>
          <select value={status} onChange={(e) => setStatus(e.target.value as Status)} className="input">
            <option value="normal">Normal</option>
            <option value="esterilizado">Esterilizado / castrado</option>
            <option value="obesidad">Con sobrepeso (plan de descenso)</option>
          </select>
        </div>
      </form>

      <div className="card bg-brand-teal text-white border-brand-teal">
        <span className="text-xs uppercase tracking-widest text-brand-teal">Resultado</span>
        {result ? (
          <>
            <div className="mt-4 space-y-4">
              <div>
                <div className="text-4xl font-display text-brand-teal">{result.kcal}</div>
                <div className="text-sm text-white/70">kcal por día</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-display">{result.grams} g</div>
                  <div className="text-xs text-white/60">alimento seco premium/día</div>
                </div>
                <div>
                  <div className="text-2xl font-display">{result.meals}</div>
                  <div className="text-xs text-white/60">comidas por día</div>
                </div>
              </div>
              <p className="text-xs text-white/60 pt-3 border-t border-white/20/10">
                Cálculo basado en RER ({result.rer} kcal) × factor MER (WSAVA). Es una estimación
                orientativa. La densidad calórica real depende de cada marca de alimento.
              </p>
            </div>

            <a
              href={whatsappLink(
                `Hola Fernando, usé la calculadora de alimentación: mi ${species} de ${weight}kg necesitaría ${result.kcal} kcal/día. Quería consultarte por un plan personalizado.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full mt-6 text-sm"
            >
              Consultar plan personalizado
            </a>
          </>
        ) : (
          <p className="text-white/60 text-sm mt-4">
            Completá el peso y elegí las opciones para ver el resultado.
          </p>
        )}
      </div>
    </div>
  );
}
