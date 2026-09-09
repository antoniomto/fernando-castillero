import type { Metadata } from "next";
import Link from "next/link";
import { MobilityGuide } from "@/components/tools/MobilityGuide";

export const metadata: Metadata = {
  title: "Guía de Soluciones Biomecánicas & Prótesis Veterinarias",
  description:
    "Asistente interactivo para prótesis animales, sillas de ruedas, órtesis dinámicas y férulas correctoras a medida en Aguascalientes con el Dr. Fernando Castillero.",
  alternates: { canonical: "/herramientas/guia-protesis" },
};

export default function GuiaProtesisPage() {
  return (
    <>
      <section className="bg-slate-900 text-white section">
        <div className="container-tight text-center">
          <nav aria-label="Migas de pan" className="mb-4">
            <Link
              href="/herramientas"
              className="text-xs font-semibold text-amber-400 hover:text-white transition inline-flex items-center gap-1.5"
            >
              <span>← Volver a Herramientas Clínicas</span>
            </Link>
          </nav>
          <span className="eyebrow bg-white/10 text-amber-300 border-white/20">
            Unidad de Biomecánica & Prótesis
          </span>
          <h1 className="mt-4 text-white text-3xl md:text-5xl font-bold">
            Guía de Soluciones Ortopédicas
          </h1>
          <p className="mt-4 text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Identifica el dispositivo anatómico adecuado para la condición motora de tu mascota:
            amputaciones, debilidad pélvica, deformidades angulares y soporte post-quirúrgico.
          </p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container max-w-5xl">
          <MobilityGuide />
        </div>
      </section>
    </>
  );
}
