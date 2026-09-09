import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PainAtlas } from "@/components/tools/PainAtlas";
import { RelatedTools } from "@/components/tools/RelatedTools";

export const metadata: Metadata = {
  title: "Atlas Anatómico del Dolor en Mascotas (Perros y Gatos)",
  description:
    "Herramienta interactiva para localizar molestias articulares, dolor de columna, displasia y lesiones de ligamentos en perros y gatos. Guía orientativa por el Dr. Fernando Castillero en Aguascalientes.",
  alternates: { canonical: "/herramientas/atlas-dolor" },
};

export default function AtlasDolorPage() {
  return (
    <>
      <section className="bg-brand-marine text-white section">
        <div className="container-tight text-center">
          <div className="mb-5 flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Herramientas", href: "/herramientas" },
                { label: "Atlas del Dolor" },
              ]}
            />
          </div>
          <span className="eyebrow bg-white/10 text-emerald-300 border-white/20">
            Detección Oportuna & Anatomía
          </span>
          <h1 className="mt-4 text-white text-3xl md:text-5xl font-bold">
            Atlas Anatómico del Dolor
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Toca o haz clic sobre la zona anatómica donde notas rigidez, cojera o quejidos
            para ver la sospecha diagnóstica y el abordaje veterinario indicado.
          </p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container max-w-5xl">
          <PainAtlas />
          <RelatedTools currentSlug="atlas-dolor" />
        </div>
      </section>
    </>
  );
}
