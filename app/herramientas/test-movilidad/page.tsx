import type { Metadata } from "next";
import Link from "next/link";
import { MobilityScreener } from "@/components/tools/MobilityScreener";

export const metadata: Metadata = {
  title: "Test Rápido de Movilidad, Artrosis y Displasia en Mascotas",
  description:
    "Cuestionario clínico de 5 preguntas para evaluar el nivel de dolor articular y pérdida de movilidad en perros y gatos. Diseñado por el Dr. Fernando Castillero.",
  alternates: { canonical: "/herramientas/test-movilidad" },
};

export default function TestMovilidadPage() {
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
            Prevención & Diagnóstico Oportuno
          </span>
          <h1 className="mt-4 text-white text-3xl md:text-5xl font-bold">
            Test de Movilidad & Artrosis
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Responde 5 preguntas observacionales para determinar si los signos de tu mascota
            ameritan valoración ortopédica o fisioterapia preventiva.
          </p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container max-w-5xl">
          <MobilityScreener />
        </div>
      </section>
    </>
  );
}
