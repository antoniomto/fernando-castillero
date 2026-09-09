import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FeedingCalculator } from "@/components/tools/FeedingCalculator";
import { RelatedTools } from "@/components/tools/RelatedTools";

export const metadata: Metadata = {
  title: "Calculadora de Alimentación y Ración Diaria para Perros y Gatos",
  description:
    "Calcula las calorías y gramos diarios que necesita tu perro o gato según peso, edad, actividad y estado corporal. Basada en estándares WSAVA.",
  alternates: { canonical: "/herramientas/calculadora-alimentacion" },
};

export default function CalculadoraAlimentacionPage() {
  return (
    <>
      <section className="bg-brand-marine text-white section">
        <div className="container-tight text-center">
          <div className="mb-5 flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Herramientas", href: "/herramientas" },
                { label: "Calculadora Nutricional" },
              ]}
            />
          </div>
          <span className="eyebrow bg-white/10 text-emerald-300 border-white/20">
            Nutrición Clínica · Estándar WSAVA
          </span>
          <h1 className="mt-4 text-white text-3xl md:text-5xl font-bold">
            Calculadora de Alimentación
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Ingresa los datos de tu mascota para obtener una estimación precisa de las calorías y gramos diarios recomendados para su peso y edad.
          </p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-tight">
          <FeedingCalculator />

          <div className="mt-14 card bg-white">
            <h4 className="text-ink text-base font-bold">¿Cómo se calcula el requerimiento energético?</h4>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              El requerimiento energético en reposo (RER) se calcula con la fórmula científica internacional{" "}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-brand-marine font-semibold">70 × peso^0.75</code>.
              Luego se aplica un factor de mantenimiento (MER) según especie, etapa de vida y nivel de actividad física.
            </p>
            <p className="mt-3 text-xs text-slate-500">
              * Nota: Esta calculadora es una guía referencial. Cada paciente puede requerir ajustes según su condición corporal y salud metabólica.
            </p>
          </div>

          <RelatedTools currentSlug="calculadora-alimentacion" />
        </div>
      </section>
    </>
  );
}
