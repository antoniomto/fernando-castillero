import type { Metadata } from "next";
import { ToolCard } from "@/components/ui/ToolCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Herramientas",
  description:
    "Calculadoras y guías gratuitas para el cuidado de tu mascota: alimentación, presupuesto mensual y recuperación post-cirugía.",
  alternates: { canonical: "/herramientas" },
};

export default function HerramientasPage() {
  return (
    <>
      <section className="bg-brand-teal text-white section">
        <div className="container-tight text-center">
          <span className="eyebrow">Recursos gratuitos</span>
          <h1 className="mt-3 text-white">Herramientas prácticas</h1>
          <p className="mt-4 text-white/80 text-lg">
            Sin registro. Sin costo. Diseñadas para ayudarte a cuidar mejor a tu mascota todos los días.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Elegí una herramienta"
            subtitle="Cada una está pensada para resolver una pregunta concreta. Si necesitás algo más específico, escríbeme por WhatsApp."
            center
          />
          <div className="grid gap-6 md:grid-cols-3">
            <ToolCard
              href="/herramientas/calculadora-alimentacion"
              title="Calculadora de alimentación"
              description="Calorías y gramos diarios recomendados según especie, peso, edad, actividad y estado."
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><path d="M6 3v18M6 8h12l-1 6H7" strokeLinecap="round"/></svg>}
            />
            <ToolCard
              href="/herramientas/presupuesto-mascota"
              title="Presupuesto mensual"
              description="Estimación mensual del costo de tener un perro o gato: alimento, vet, higiene y accesorios."
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><circle cx="12" cy="12" r="9"/><path d="M12 6v12M9 9h4a2 2 0 1 1 0 4h-2a2 2 0 1 0 0 4h5" strokeLinecap="round"/></svg>}
            />
            <ToolCard
              href="/herramientas/recuperacion-post-cirugia"
              title="Recuperación post-cirugía"
              description="Timeline semana a semana + checklist descargable según el tipo de cirugía."
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round"/><circle cx="18" cy="18" r="3"/></svg>}
            />
          </div>
        </div>
      </section>
    </>
  );
}
