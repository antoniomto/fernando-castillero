import type { Metadata } from "next";
import Link from "next/link";
import { PetBudget } from "@/components/tools/PetBudget";

export const metadata: Metadata = {
  title: "Presupuesto mensual de mascota",
  description:
    "Calculá el costo mensual estimado de tener un perro o gato: alimento, veterinario, higiene, accesorios e imprevistos.",
  alternates: { canonical: "/herramientas/presupuesto-mascota" },
};

export default function PresupuestoMascotaPage() {
  return (
    <>
      <section className="bg-brand-teal text-white section">
        <div className="container-tight">
          <Link href="/herramientas" className="text-brand-teal text-sm hover:text-brand-teal-2 transition">
            ← Todas las herramientas
          </Link>
          <h1 className="mt-4 text-white">Presupuesto mensual</h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl">
            ¿Cuánto cuesta tener una mascota por mes? Elegí especie, tamaño y calidad de alimento
            para ver una estimación desglosada.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-tight">
          <PetBudget />

          <div className="mt-14 card">
            <h4 className="text-ink">Aclaraciones</h4>
            <p className="mt-3 text-sm text-ink-soft">
              Los valores son estimativos y basados en precios de referencia. Pueden variar según
              ciudad, marca de alimento, cobertura veterinaria y hábitos de tu mascota. El rubro
              &ldquo;Imprevistos&rdquo; contempla emergencias, medicaciones ocasionales y visitas
              extra al veterinario.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
