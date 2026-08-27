import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Casos y testimonios",
  description: "Historias reales de rehabilitación: antes y después de fisioterapia veterinaria.",
  alternates: { canonical: "/casos" },
};

const casos = [
  {
    nombre: "{{CASO_1_NOMBRE}}",
    raza: "{{CASO_1_RAZA}}",
    diagnostico: "{{CASO_1_DIAGNOSTICO}}",
    resumen: "{{CASO_1_RESUMEN}} — Espacio para contar la historia: cómo llegó, qué se trabajó, resultado.",
    duracion: "{{CASO_1_DURACION}}",
  },
  {
    nombre: "{{CASO_2_NOMBRE}}",
    raza: "{{CASO_2_RAZA}}",
    diagnostico: "{{CASO_2_DIAGNOSTICO}}",
    resumen: "{{CASO_2_RESUMEN}}",
    duracion: "{{CASO_2_DURACION}}",
  },
  {
    nombre: "{{CASO_3_NOMBRE}}",
    raza: "{{CASO_3_RAZA}}",
    diagnostico: "{{CASO_3_DIAGNOSTICO}}",
    resumen: "{{CASO_3_RESUMEN}}",
    duracion: "{{CASO_3_DURACION}}",
  },
];

export default function CasosPage() {
  return (
    <>
      <section className="bg-brand-teal text-white section">
        <div className="container-tight text-center">
          <span className="eyebrow">Historias</span>
          <h1 className="mt-3 text-white">Casos y testimonios</h1>
          <p className="mt-4 text-white/80 text-lg">
            Historias reales de pacientes que recuperaron movilidad y bienestar.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Antes y después" center />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {casos.map((c, i) => (
              <article key={i} className="card p-0 overflow-hidden">
                <div className="aspect-video bg-ink/5 flex items-center justify-center text-ink/20 text-sm">
                  [ antes/después · placeholder ]
                </div>
                <div className="p-6">
                  <h4 className="text-ink text-xl">{c.nombre}</h4>
                  <p className="text-sm text-ink-muted mt-1">
                    {c.raza} · {c.diagnostico}
                  </p>
                  <p className="mt-3 text-sm text-ink-soft">{c.resumen}</p>
                  <p className="mt-4 text-xs uppercase tracking-widest text-brand-teal">
                    Duración: {c.duracion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
