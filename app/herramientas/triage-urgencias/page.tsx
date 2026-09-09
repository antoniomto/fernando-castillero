import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmergencyTriage } from "@/components/tools/EmergencyTriage";
import { RelatedTools } from "@/components/tools/RelatedTools";

export const metadata: Metadata = {
  title: "Triage Médico & Urgencias Veterinarias 24/7 | CANEM Hospital",
  description:
    "Protocolo de clasificación de urgencias médicas para perros y gatos en Aguascalientes. Atención hospitalaria 24 horas y quirófano en CANEM con el Dr. Fernando Castillero.",
  alternates: { canonical: "/herramientas/triage-urgencias" },
};

export default function TriageUrgenciasPage() {
  return (
    <>
      <section className="bg-slate-950 text-white section">
        <div className="container-tight text-center">
          <div className="mb-5 flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Herramientas", href: "/herramientas" },
                { label: "Triage de Urgencias 24/7" },
              ]}
            />
          </div>
          <span className="eyebrow bg-rose-500/20 text-rose-300 border-rose-500/30">
            CANEM Hospital · Sede Quirúrgica 24/7
          </span>
          <h1 className="mt-4 text-white text-3xl md:text-5xl font-bold">
            Triage Médico & Protocolo de Urgencias
          </h1>
          <p className="mt-4 text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Identifica el nivel de gravedad de los síntomas de tu mascota para saber si requiere atención inmediata
            en quirófano o consulta programada.
          </p>
        </div>
      </section>

      <section className="section bg-slate-900">
        <div className="container max-w-5xl">
          <EmergencyTriage />
          <div className="text-slate-200">
            <RelatedTools currentSlug="triage-urgencias" />
          </div>
        </div>
      </section>
    </>
  );
}
