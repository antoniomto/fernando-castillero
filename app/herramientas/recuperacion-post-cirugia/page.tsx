import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RecoveryTimeline } from "@/components/tools/RecoveryTimeline";
import { RelatedTools } from "@/components/tools/RelatedTools";

export const metadata: Metadata = {
  title: "Cronograma de Recuperación Post-Cirugía en Mascotas",
  description:
    "Timeline semana a semana y checklist descargable según el tipo de cirugía veterinaria: TPLO, hernia discal, fracturas y luxación de rótula.",
  alternates: { canonical: "/herramientas/recuperacion-post-cirugia" },
};

export default function RecuperacionPostCirugiaPage() {
  return (
    <>
      <section className="bg-brand-marine text-white section no-print">
        <div className="container-tight text-center">
          <div className="mb-5 flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Herramientas", href: "/herramientas" },
                { label: "Recuperación Post-Cirugía" },
              ]}
            />
          </div>
          <span className="eyebrow bg-white/10 text-emerald-300 border-white/20">
            Cuidados Post-Operatorios & Fisioterapia
          </span>
          <h1 className="mt-4 text-white text-3xl md:text-5xl font-bold">
            Recuperación Post-Cirugía
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Cronograma visual semana a semana y checklist diario según el procedimiento quirúrgico de tu mascota.
          </p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-tight">
          <RecoveryTimeline />
          <RelatedTools currentSlug="recuperacion-post-cirugia" />
        </div>
      </section>
    </>
  );
}
