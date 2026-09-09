import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ToolCard } from "@/components/ui/ToolCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Herramientas Clínicas & Recursos Interactivos para Propietarios",
  description:
    "Calculadoras, exploradores y guías interactivas gratuitas para el cuidado y movilidad de tu mascota: fisioterapia, prótesis, triage de urgencias, nutrición y artrosis.",
  alternates: { canonical: "/herramientas" },
};

export default function HerramientasPage() {
  return (
    <>
      <section className="bg-brand-marine text-white section">
        <div className="container-tight text-center">
          <div className="mb-5 flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Herramientas" },
              ]}
            />
          </div>
          <span className="eyebrow bg-white/10 text-emerald-300 border-white/20">Recursos Clínicos Gratuitos</span>
          <h1 className="mt-4 text-white text-3xl md:text-5xl font-bold">
            Herramientas Interactivas para Propietarios
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Sin registro y sin costo. Diseñadas por el equipo del Dr. Fernando Castillero para ayudarte a tomar decisiones informadas sobre la salud de tu mascota.
          </p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <SectionHeading
            title="Explora nuestras herramientas especializadas"
            subtitle="Elige la herramienta que mejor responda a la duda o síntoma actual de tu mascota."
            center
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
            <ToolCard
              href="/herramientas/explorador-terapias"
              title="Explorador de Terapias (Mundo Aparte)"
              description="Conoce el fundamento científico, indicaciones y sesiones de hidroterapia, láser, electroterapia y propiocepción."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-emerald-600">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              }
            />

            <ToolCard
              href="/herramientas/guia-protesis"
              title="Guía de Soluciones Biomecánicas & Prótesis"
              description="Asistente para prótesis, sillas de ruedas ergonómicas y férulas dinámicas en amputaciones o debilidad pélvica."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-amber-600">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              }
            />

            <ToolCard
              href="/herramientas/triage-urgencias"
              title="Triage de Urgencias Hospitalarias 24/7"
              description="Clasifica los síntomas de tu mascota para saber si requiere atención inmediata en quirófano CANEM o consulta."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-rose-600">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />

            <ToolCard
              href="/herramientas/atlas-dolor"
              title="Atlas Anatómico del Dolor"
              description="Toca la zona corporal con molestia para ver señales observables, patologías asociadas y especialidad médica."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-brand-marine">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
              }
            />

            <ToolCard
              href="/herramientas/test-movilidad"
              title="Test Rápido de Movilidad y Artrosis"
              description="Cuestionario clínico para identificar dolor articular silencioso, rigidez matutina y pérdida motora."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-blue-600">
                  <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />

            <ToolCard
              href="/herramientas/calculadora-alimentacion"
              title="Calculadora Nutricional (WSAVA)"
              description="Requerimiento calórico (RER/MER) y gramos diarios exactos según peso, especie y nivel de actividad."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-teal-600">
                  <path d="M6 3v18M6 8h12l-1 6H7" strokeLinecap="round" />
                </svg>
              }
            />

            <ToolCard
              href="/herramientas/recuperacion-post-cirugia"
              title="Recuperación Post-Cirugía (Timeline)"
              description="Guía semana a semana de cuidados, señales de alarma y checklist diario tras cirugías ortopédicas."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-indigo-600">
                  <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="3" />
                </svg>
              }
            />

            <ToolCard
              href="/herramientas/presupuesto-mascota"
              title="Presupuesto Mensual Estimado (MXN)"
              description="Cálculo promedio de alimentación, chequeos veterinarios preventivos y cuidados en México."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-emerald-600">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 6v12M9 9h4a2 2 0 1 1 0 4h-2a2 2 0 1 0 0 4h5" strokeLinecap="round" />
                </svg>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
