import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PetBudget } from "@/components/tools/PetBudget";
import { RelatedTools } from "@/components/tools/RelatedTools";

export const metadata: Metadata = {
  title: "Presupuesto Mensual Estimado para Mascotas (México)",
  description:
    "Calcula el costo mensual estimado de tener un perro o gato en México: alimento, chequeos veterinarios, higiene, accesorios e imprevistos.",
  alternates: { canonical: "/herramientas/presupuesto-mascota" },
};

export default function PresupuestoMascotaPage() {
  return (
    <>
      <section className="bg-brand-marine text-white section">
        <div className="container-tight text-center">
          <div className="mb-5 flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Herramientas", href: "/herramientas" },
                { label: "Presupuesto Mensual" },
              ]}
            />
          </div>
          <span className="eyebrow bg-white/10 text-emerald-300 border-white/20">
            Planificación Familiar · Costos en México (MXN)
          </span>
          <h1 className="mt-4 text-white text-3xl md:text-5xl font-bold">
            Presupuesto Mensual de Mascota
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            ¿Cuánto cuesta mantener a tu perro o gato al mes? Elige especie, tamaño y calidad de alimento para ver un desglose realista.
          </p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-tight">
          <PetBudget />

          <div className="mt-14 card bg-white">
            <h4 className="text-ink font-bold text-base">Criterios de estimación</h4>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Los montos están calculados en pesos mexicanos (MXN) con base en promedios de alimentos comerciales, planes preventivos de vacunación/desparasitación y artículos de cuidado. El rubro de imprevistos contempla visitas médicas de urgencia o tratamientos eventuales.
            </p>
          </div>

          <RelatedTools currentSlug="presupuesto-mascota" />
        </div>
      </section>
    </>
  );
}
