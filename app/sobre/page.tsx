import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { whatsappLink, siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/JsonLd";
import { personSchema, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Sobre el Dr. Fernando Castillero",
  description:
    "Médico Veterinario y Director Clínico de CANEM Hospital Veterinario y Mundo Aparte Aguascalientes. Especialista en movilidad, rehabilitación y biomecánica.",
  alternates: { canonical: "/sobre" },
};

const clinicGallery = [
  {
    image: "/images/clinical/laser-pastor-aleman.jpg",
    title: "Fotobiomodulación Láser Clase IV",
    desc: "Tratamiento de artrosis y displasia con gafas protectoras Doggles.",
  },
  {
    image: "/images/clinical/magnetoterapia-perro-mundo-aparte.jpg",
    title: "Solenoide de Magnetoterapia E-VET",
    desc: "Campos magnéticos pulsátiles indoloros para regeneración celular y ósea.",
  },
  {
    image: "/images/clinical/electroterapia-tens-rehabmedic.jpg",
    title: "Electroestimulación Digital RehabMedic",
    desc: "Activación neuromuscular para evitar la atrofia en pacientes convalecientes.",
  },
  {
    image: "/images/clinical/equipo-clinico-yorkie.jpg",
    title: "Equipo Multidisciplinario en Consulta",
    desc: "Atención individualizada, refuerzo positivo y manejo sin estrés.",
  },
];

export default function SobrePage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", url: "/" },
          { name: "Dr. Fernando Castillero", url: "/sobre" },
        ])}
      />

      {/* Hero Header */}
      <section className="bg-brand-marine text-white section">
        <div className="container-tight text-center">
          <div className="mb-5 flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Dr. Fernando Castillero" },
              ]}
            />
          </div>
          <span className="eyebrow bg-white/10 text-emerald-300 border-white/20">
            Director Clínico & Especialista en Movilidad
          </span>
          <h1 className="mt-3 text-white text-3xl md:text-5xl font-bold">
            Dr. Fernando Castillero
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Medicina veterinaria de vanguardia, cirugía y hospitalización en CANEM, junto con
            rehabilitación avanzada en Mundo Aparte Aguascalientes.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section bg-canvas">
        <div className="container-tight grid gap-10 lg:grid-cols-[1fr_2fr] items-start">
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
            <Image
              src="/images/fernando.jpg"
              alt="Dr. Fernando Castillero, Director Clínico"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Trayectoria & Liderazgo Clínico
              </span>
              <h2 className="text-ink text-2xl md:text-3xl font-bold mt-1">
                Ciencia médica, tecnología biomecánica y vocación por la movilidad
              </h2>
            </div>

            <p>
              El <strong>Dr. Fernando Castillero</strong> dirige la práctica médica integrando dos
              pilares asistenciales en Aguascalientes: la atención quirúrgica y hospitalaria en{" "}
              <strong>CANEM Hospital Veterinario</strong>, y la fisioterapia física avanzada en{" "}
              <strong>Mundo Aparte</strong>, la red internacional pionera en rehabilitación de pequeños animales.
            </p>

            <p>
              Su enfoque clínico parte de una premisa clara: el dolor articular y la pérdida de marcha
              no deben asumirse como consecuencias inevitables de la vejez o de una cirugía fallida. A
              través de diagnósticos certeros, protocolos de fotobiomodulación, magnetoterapia,
              hidroterapia y dispositivos adaptativos a medida, restituye la funcionalidad y calidad de
              vida en perros y gatos con diagnósticos complejos.
            </p>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-ink text-lg font-bold mb-3">Especialidades & Competencias</h3>
              <div className="grid gap-2.5 sm:grid-cols-2 text-xs sm:text-sm">
                {[
                  "Fisioterapia y Rehabilitación Física Veterinaria",
                  "Manejo Multimodal del Dolor Crónico y Artrosis",
                  "Cirugía Ortopédica y Cuidados Post-Quirúrgicos",
                  "Biomecánica, Órtesis y Prótesis Caninas a Medida",
                  "Neurología Clínica y Reeducación de la Marcha",
                  "Medicina Hospitalaria y Urgencias Críticas 24/7",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200/60 font-medium text-slate-800">
                    <svg className="h-4 w-4 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 pt-4">
              <a
                href={whatsappLink("Hola Dr. Fernando, me gustaría agendar una valoración médica para mi mascota.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-7 py-3.5"
              >
                Agendar Consulta por WhatsApp
              </a>
              <Link href="/servicios" className="btn-outline text-sm px-7 py-3.5">
                Conocer Tratamientos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Evidence & Technology Gallery */}
      <section className="section bg-slate-50 border-t border-slate-200/70">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="eyebrow">Práctica Diaria & Evidencia</span>
            <h2 className="mt-3 text-ink text-2xl md:text-4xl font-bold">
              Equipamiento Profesional en Aguascalientes
            </h2>
            <p className="mt-4 text-slate-600 text-sm md:text-base">
              Nuestras instalaciones combinan protocolos internacionales con tecnología de grado médico
              diseñada para brindar tratamientos 100% seguros y libres de estrés.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {clinicGallery.map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-ink text-sm leading-snug group-hover:text-brand-marine transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] font-semibold text-emerald-700">
                    Mundo Aparte · CANEM
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/herramientas/explorador-terapias"
              className="btn-outline inline-flex items-center gap-2 text-sm px-7 py-3"
            >
              <span>Explorar los mecanismos científicos de cada terapia</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
