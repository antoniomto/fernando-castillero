import type { Metadata } from "next";
import Link from "next/link";
import { TherapyExplorer } from "@/components/tools/TherapyExplorer";

export const metadata: Metadata = {
  title: "Explorador de Terapias de Fisioterapia Veterinaria",
  description:
    "Conoce a fondo las 5 terapias de rehabilitación animal en Mundo Aparte: hidroterapia, láser terapéutico, electroestimulación, cinesiterapia y termoterapia por el Dr. Fernando Castillero en Aguascalientes.",
  alternates: { canonical: "/herramientas/explorador-terapias" },
};

export default function ExploradorTerapiasPage() {
  return (
    <>
      <section className="bg-brand-marine text-white section">
        <div className="container-tight text-center">
          <nav aria-label="Migas de pan" className="mb-4">
            <Link
              href="/herramientas"
              className="text-xs font-semibold text-emerald-300 hover:text-white transition inline-flex items-center gap-1.5"
            >
              <span>← Volver a Herramientas Clínicas</span>
            </Link>
          </nav>
          <span className="eyebrow bg-white/10 text-emerald-300 border-white/20">
            Mundo Aparte · Ciencia y Fisioterapia
          </span>
          <h1 className="mt-4 text-white text-3xl md:text-5xl font-bold">
            Explorador Científico de Terapias
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Descubre el mecanismo fisiológico, indicaciones clínicas y lo que tu mascota experimentará
            en cada sesión guiada por el equipo del Dr. Fernando Castillero.
          </p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container max-w-5xl">
          <TherapyExplorer />
        </div>
      </section>
    </>
  );
}
