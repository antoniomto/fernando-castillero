import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { whatsappLink } from "@/lib/site-config";
import { JsonLd } from "@/components/JsonLd";
import { personSchema, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Sobre Fernando",
  description:
    "Fernando Castillero, fisioterapeuta veterinario especializado en rehabilitación de perros y gatos. En colaboración con Mundo à Parte.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", url: "/" }, { name: "Sobre Fernando", url: "/sobre" }])} />
      <section className="bg-brand-teal text-white section">
        <div className="container-tight text-center">
          <span className="eyebrow">Sobre</span>
          <h1 className="mt-3 text-white">Fernando Castillero</h1>
          <p className="mt-4 text-white/80 text-lg">Fisioterapeuta veterinario</p>
        </div>
      </section>

      <section className="section">
        <div className="container-tight grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-ink/10 shadow-lg">
            <Image
              src="/images/fernando.jpg"
              alt="Fernando Castillero, fisioterapeuta veterinario"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="prose max-w-none">
            <h3 className="text-ink">Un enfoque integral para la rehabilitación animal</h3>
            <p className="text-ink-soft mt-4">
              {`{{BIO_LARGA}} — Espacio para la biografía completa de Fernando: formación académica,
              años de experiencia, especializaciones (post-quirúrgica, geriátrica, deportiva), y su
              filosofía de trabajo. Contá qué te llevó a la fisioterapia veterinaria y qué te
              diferencia.`}
            </p>

            <h4 className="text-ink mt-8">Formación</h4>
            <ul className="text-ink-soft space-y-1">
              <li>{`{{FORMACION_1}} — ej. Médico Veterinario, UBA`}</li>
              <li>{`{{FORMACION_2}} — ej. Posgrado en Rehabilitación Animal`}</li>
              <li>{`{{FORMACION_3}} — ej. Certificación en hidroterapia canina`}</li>
            </ul>

            <h4 className="text-ink mt-8">En colaboración con Mundo à Parte</h4>
            <p className="text-ink-soft mt-2">
              Fernando atiende en las instalaciones de <strong>Mundo à Parte</strong>, franquicia
              especializada en fisioterapia veterinaria. Esta colaboración le permite acceder a
              equipamiento profesional (cinta subacuática, láser terapéutico, superficies
              propioceptivas) y ofrecer atención de nivel clínico en un entorno preparado
              específicamente para la rehabilitación animal.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={whatsappLink("Hola Fernando, quería agendar una consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Agendar consulta
              </a>
              <Link href="/servicios" className="btn-outline">
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
