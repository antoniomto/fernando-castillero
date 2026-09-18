"use client";

import { useState } from "react";
import Image from "next/image";
import { protocols, getProtocol } from "@/data/recovery-protocols";
import { whatsappLink } from "@/lib/site-config";

export function RecoveryTimeline() {
  const [slug, setSlug] = useState<string>(protocols[0].slug);
  const protocol = getProtocol(slug);

  if (!protocol) return null;

  return (
    <div>
      <div className="card mb-8 grid gap-6 md:grid-cols-[1fr_260px] items-center">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 inline-block mb-3">
            Protocolo Hospitalario & Fisioterapia
          </span>
          <label htmlFor="cirugia" className="label font-bold text-ink text-base">
            Selecciona el tipo de cirugía o lesión:
          </label>
          <select
            id="cirugia"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="input mt-1.5 font-medium"
          >
            {protocols.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
          <p className="mt-3.5 text-sm text-slate-600 leading-relaxed">{protocol.summary}</p>
        </div>

        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
          <Image
            src="/images/clinical/soporte-post-quirurgico-perro.jpg"
            alt="Paciente canino en recuperación post-quirúrgica asistida"
            fill
            sizes="(max-width: 768px) 100vw, 260px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
          <span className="absolute bottom-2 left-2.5 right-2.5 text-[11px] font-medium text-white/95 leading-tight">
            Soporte ortopédico y marcha en clínica
          </span>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-3 no-print">
        <button type="button" onClick={() => window.print()} className="btn-outline text-sm">
          Imprimir / guardar PDF
        </button>
        <a
          href={whatsappLink(
            `Hola Fernando, mi mascota tuvo una cirugía de ${protocol.name}. Quería consultarte por un plan de rehabilitación.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm"
        >
          Consultar plan de rehabilitación
        </a>
      </div>

      <div className="space-y-4">
        {protocol.phases.map((phase, idx) => (
          <article key={phase.window} className="card border-l-4 border-brand-teal">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-teal-2 bg-brand-teal/10 px-3 py-1 rounded-full">
                {phase.window}
              </span>
              <span className="text-xs text-ink-muted">Fase {idx + 1}</span>
            </div>
            <h3 className="text-ink text-xl">{phase.title}</h3>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              <div>
                <h5 className="text-sm font-semibold text-ink mb-2">Qué esperar</h5>
                <ul className="text-sm text-ink-soft space-y-1 list-disc list-inside">
                  {phase.expect.map((e) => <li key={e}>{e}</li>)}
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-ink mb-2">Actividades permitidas</h5>
                <ul className="text-sm text-ink-soft space-y-1 list-disc list-inside">
                  {phase.allowed.map((a) => <li key={a}>{a}</li>)}
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-brand-gold-dark mb-2">Señales de alarma</h5>
                <ul className="text-sm text-ink-soft space-y-1 list-disc list-inside">
                  {phase.alarm.map((a) => <li key={a}>{a}</li>)}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="card mt-10 bg-canvas-cream border-ink/10">
        <h4 className="text-ink">Checklist diario de cuidados</h4>
        <p className="text-sm text-ink-soft mt-2">
          Chequeos que conviene hacer todos los días durante la recuperación.
        </p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {protocol.dailyChecklist.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink">
              <span className="inline-block h-4 w-4 rounded border-2 border-ink/20 mt-0.5 shrink-0" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 rounded-2xl bg-brand-teal text-white p-8 text-center">
        <h3 className="text-white">La rehabilitación acelera la recuperación</h3>
        <p className="mt-3 text-white/80 max-w-xl mx-auto">
          En cada etapa post-cirugía, un plan de fisioterapia adecuado previene atrofia,
          reduce dolor y acorta los tiempos de vuelta a la actividad.
        </p>
        <a
          href={whatsappLink(
            `Hola Fernando, quería agendar una evaluación de fisioterapia post-${protocol.name}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-6"
        >
          Agendar evaluación
        </a>
      </div>
    </div>
  );
}
