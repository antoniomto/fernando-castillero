import type { Metadata } from "next";
import Link from "next/link";
import { RecoveryTimeline } from "@/components/tools/RecoveryTimeline";

export const metadata: Metadata = {
  title: "Recuperación post-cirugía",
  description:
    "Timeline semana a semana y checklist descargable según el tipo de cirugía: TPLO, hernia discal, castración, fractura, luxación de rótula.",
  alternates: { canonical: "/herramientas/recuperacion-post-cirugia" },
};

export default function RecuperacionPostCirugiaPage() {
  return (
    <>
      <section className="bg-brand-teal text-white section no-print">
        <div className="container-tight">
          <Link href="/herramientas" className="text-brand-teal text-sm hover:text-brand-teal-2 transition">
            ← Todas las herramientas
          </Link>
          <h1 className="mt-4 text-white">Recuperación post-cirugía</h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl">
            Timeline visual y checklist diario adaptados al tipo de cirugía. Guía orientativa para
            complementar las indicaciones de tu veterinario.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-tight">
          <RecoveryTimeline />
        </div>
      </section>
    </>
  );
}
