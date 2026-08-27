import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Galería de instalaciones",
  description:
    "Equipamiento profesional para fisioterapia veterinaria: cinta subacuática, láser, superficies propioceptivas y más.",
  alternates: { canonical: "/galeria" },
};

const areas = [
  { title: "Cinta subacuática", desc: "Rehabilitación con carga controlada y menor impacto." },
  { title: "Piscina de hidroterapia", desc: "Ejercicio sin carga articular, ideal para post-cirugía." },
  { title: "Láser terapéutico", desc: "Reduce dolor e inflamación de forma no invasiva." },
  { title: "Zona de ejercicio propioceptivo", desc: "Balones, escaleras y superficies inestables." },
  { title: "Área de evaluación", desc: "Espacio para valoración clínica y biomecánica." },
  { title: "Recuperación post-sesión", desc: "Espacio cálido y tranquilo para descanso." },
];

export default function GaleriaPage() {
  return (
    <>
      <section className="bg-brand-teal text-white section">
        <div className="container-tight text-center">
          <span className="eyebrow">Instalaciones</span>
          <h1 className="mt-3 text-white">Galería</h1>
          <p className="mt-4 text-white/80 text-lg">
            Equipamiento profesional para cada tipo de terapia, en colaboración con Mundo à Parte.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Nuestro espacio y equipamiento" center />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <figure key={i} className="card p-0 overflow-hidden group">
                <div className="aspect-[4/3] bg-ink/5 flex items-center justify-center text-ink/20 text-sm">
                  [ {`{{FOTO_GALERIA_${i + 1}}}`} ]
                </div>
                <figcaption className="p-5">
                  <h4 className="text-ink text-lg">{a.title}</h4>
                  <p className="text-sm text-ink-soft mt-1">{a.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
