"use client";

import { useMemo, useState } from "react";
import { getBudget, currency, type Species, type Size, type Quality } from "@/data/budget-ranges";
import { whatsappLink } from "@/lib/site-config";

const SIZES: { value: Size; label: string; hint: string }[] = [
  { value: "pequeno", label: "Pequeño", hint: "hasta 10 kg" },
  { value: "mediano", label: "Mediano", hint: "10-25 kg" },
  { value: "grande", label: "Grande", hint: "25-40 kg" },
  { value: "gigante", label: "Gigante", hint: "más de 40 kg" },
];

const QUALITIES: { value: Quality; label: string }[] = [
  { value: "economico", label: "Económico" },
  { value: "premium", label: "Premium" },
  { value: "super", label: "Super premium" },
];

export function PetBudget() {
  const [species, setSpecies] = useState<Species>("perro");
  const [size, setSize] = useState<Size>("mediano");
  const [quality, setQuality] = useState<Quality>("premium");

  const budget = useMemo(() => getBudget(species, size, quality), [species, size, quality]);
  const total = useMemo(
    () => budget.alimento + budget.vet + budget.higiene + budget.accesorios + budget.imprevistos,
    [budget]
  );

  const items = [
    { key: "alimento", label: "Alimento", value: budget.alimento },
    { key: "vet", label: "Veterinario preventivo", value: budget.vet },
    { key: "higiene", label: "Higiene y peluquería", value: budget.higiene },
    { key: "accesorios", label: "Accesorios y juguetes", value: budget.accesorios },
    { key: "imprevistos", label: "Imprevistos", value: budget.imprevistos },
  ];

  return (
    <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
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

        {species === "perro" && (
          <div>
            <label className="label">Tamaño</label>
            <div className="grid grid-cols-2 gap-2">
              {SIZES.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => setSize(s.value)}
                  className={`rounded-lg border-2 px-3 py-2 text-sm font-medium text-left transition ${
                    size === s.value
                      ? "border-brand-teal bg-brand-teal/10 text-ink"
                      : "border-ink/15 text-ink-soft hover:border-ink-muted"
                  }`}
                >
                  <div>{s.label}</div>
                  <div className="text-xs text-ink-muted">{s.hint}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
          <label className="label">Calidad de alimento</label>
          <div className="grid grid-cols-3 gap-2">
            {QUALITIES.map((q) => (
              <button
                key={q.value}
                type="button"
                onClick={() => setQuality(q.value)}
                className={`rounded-lg border-2 px-2 py-2 text-xs font-medium transition ${
                  quality === q.value
                    ? "border-brand-teal bg-brand-teal/10 text-ink"
                    : "border-ink/15 text-ink-soft hover:border-ink-muted"
                }`}
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-ink-muted pt-2 border-t border-ink/10">
          Valores orientativos en pesos argentinos. Se actualizan periódicamente y varían según ciudad.
        </p>
      </form>

      <div className="card bg-brand-teal text-white border-brand-teal">
        <span className="text-xs uppercase tracking-widest text-brand-teal">Estimación mensual</span>
        <div className="mt-3 text-4xl font-display text-brand-teal">{currency(total)}</div>
        <div className="text-sm text-white/60 mb-6">total por mes</div>

        <ul className="space-y-2 border-t border-white/20/10 pt-4">
          {items.map((it) => (
            <li key={it.key} className="flex justify-between text-sm">
              <span className="text-white/80">{it.label}</span>
              <span className="font-medium text-white">{currency(it.value)}</span>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink(
            `Hola Fernando, calculé el presupuesto mensual para un ${species} ${species === "perro" ? size : ""} con alimento ${quality}: aprox ${currency(total)}. Quería consultarte sobre fisioterapia.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold w-full mt-6 text-sm"
        >
          Consultar por fisioterapia
        </a>
      </div>
    </div>
  );
}
