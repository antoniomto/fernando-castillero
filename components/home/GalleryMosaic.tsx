import Link from "next/link";
import Image from "next/image";
import { Reveal } from "../Reveal";

const items = [
  {
    src: "/images/gallery-hydro.jpg",
    alt: "Hidroterapia canina",
    label: "Hidroterapia",
    span: "md:col-span-2 md:row-span-2 aspect-square",
  },
  {
    src: "/images/gallery-vet.jpg",
    alt: "Fernando evaluando paciente",
    label: "Evaluación clínica",
    span: "aspect-square",
  },
  {
    src: "/images/gallery-cat.jpg",
    alt: "Gato en evaluación",
    label: "Gatos también",
    span: "aspect-square",
  },
  {
    src: "/images/gallery-dog.jpg",
    alt: "Perro sano en recuperación",
    label: "Recuperación completa",
    span: "md:col-span-2 aspect-[2/1]",
  },
];

export function GalleryMosaic() {
  return (
    <section className="section bg-canvas relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-brand-gold-tint opacity-60 blur-3xl pointer-events-none"
      />

      <div className="container relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] items-center">
          <Reveal>
            <div>
              <span className="eyebrow">Instalaciones</span>
              <h2 className="mt-4 text-ink">
                Equipamiento
                <br />
                <span className="text-brand-teal">profesional</span>
                <br />
                para cada terapia.
              </h2>
              <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-md">
                Cinta subacuática, láser terapéutico, superficies propioceptivas y espacio
                pensado específicamente para la rehabilitación animal.
              </p>
              <Link href="/galeria" className="btn-outline mt-8 text-sm">
                Ver galería completa
              </Link>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="grid grid-cols-3 gap-3 md:gap-4 auto-rows-[minmax(140px,auto)]">
              {items.map((it, i) => (
                <figure
                  key={i}
                  className={`${it.span} rounded-3xl overflow-hidden relative group transition-all shadow-sm hover:shadow-xl hover:-translate-y-1`}
                >
                  <Image
                    src={it.src}
                    alt={it.alt}
                    fill
                    sizes="(max-width: 768px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />
                  <figcaption className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">
                    {it.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
