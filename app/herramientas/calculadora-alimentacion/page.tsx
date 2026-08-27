import type { Metadata } from "next";
import Link from "next/link";
import { FeedingCalculator } from "@/components/tools/FeedingCalculator";

export const metadata: Metadata = {
  title: "Calculadora de alimentación",
  description:
    "Calculá las calorías y gramos diarios que necesita tu perro o gato según peso, edad, actividad y estado. Basada en fórmulas RER/MER.",
  alternates: { canonical: "/herramientas/calculadora-alimentacion" },
};

export default function CalculadoraAlimentacionPage() {
  return (
    <>
      <section className="bg-brand-teal text-white section">
        <div className="container-tight">
          <Link href="/herramientas" className="text-brand-teal text-sm hover:text-brand-teal-2 transition">
            ← Todas las herramientas
          </Link>
          <h1 className="mt-4 text-white">Calculadora de alimentación</h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl">
            Ingresá los datos de tu mascota y obtené una estimación de las calorías y gramos diarios
            recomendados. Basada en fórmulas veterinarias estándar (RER × MER, WSAVA).
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-tight">
          <FeedingCalculator />

          <div className="mt-14 card">
            <h4 className="text-ink">¿Cómo se calcula?</h4>
            <p className="mt-3 text-sm text-ink-soft">
              El requerimiento energético en reposo (RER) se calcula como <code>70 × peso^0.75</code>.
              Luego se multiplica por un factor MER que depende de la edad, actividad y estado
              (normal, esterilizado, plan de descenso) para obtener las kcal diarias. Los gramos
              se estiman asumiendo una densidad calórica promedio de 3.6 kcal/g (alimento seco premium).
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              <strong>Importante:</strong> es una guía orientativa. Para un plan nutricional específico
              consulta con un veterinario nutricionista.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
