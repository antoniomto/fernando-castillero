import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/ServiceIcon";
import { TherapyExplorer } from "@/components/tools/TherapyExplorer";
import { whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Servicios Clínicos & Fisioterapia",
  description:
    "Especialidades veterinarias, fisioterapia avanzada en Mundo Aparte y cirugía en CANEM por el Dr. Fernando Castillero.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-brand-marine text-white section">
        <div className="container-tight text-center">
          <div className="mb-5 flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Servicios Clínicos" },
              ]}
            />
          </div>
          <span className="eyebrow bg-white/10 text-emerald-300 border-white/20">Tratamientos & Especialidades</span>
          <h1 className="mt-3 text-white text-3xl md:text-5xl font-bold">Servicios Clínicos y Fisioterapia</h1>
          <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Medicina hospitalaria rigurosa, protocolos de vanguardia y rehabilitación personalizada en Aguascalientes.
          </p>
        </div>
      </section>

      <section className="section bg-canvas">
        <div className="container">
          <div className="grid gap-8 md:gap-10">
            {services.map((s, i) => (
              <article
                key={s.slug}
                className={`card p-6 md:p-8 lg:p-10 grid gap-6 lg:grid-cols-[auto_1fr_320px] items-start ${
                  i % 2 === 1 ? "bg-slate-50/70" : "bg-white"
                }`}
              >
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-brand-marine-tint text-brand-marine flex items-center justify-center shrink-0">
                  <ServiceIcon name={s.icon} className="h-8 w-8 sm:h-9 sm:w-9" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Mundo Aparte · Aguascalientes
                    </span>
                  </div>
                  <h3 className="text-ink text-xl sm:text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">{s.description}</p>
                  
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <svg className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                    <a
                      href={whatsappLink(`Hola Dr. Fernando, me interesa consultar disponibilidad para el servicio de ${s.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-brand-marine hover:text-brand-marine-2 inline-flex items-center gap-1.5"
                    >
                      <span>Consultar este tratamiento por WhatsApp</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>

                <div className="lg:w-full">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-slate-100 group">
                    <Image
                      src={s.image}
                      alt={s.imageCaption}
                      fill
                      sizes="(max-width: 1024px) 100vw, 320px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] font-medium text-white/95 leading-tight">
                      {s.imageCaption}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Interactive Therapy Explorer */}
          <div className="mt-20">
            <TherapyExplorer />
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600">
              ¿No estás seguro de qué tratamiento o valoración necesita tu mascota?
            </p>
            <a
              href={whatsappLink("Hola Dr. Fernando, quería consultarte qué tratamiento sería el ideal para el caso de mi mascota.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 inline-flex text-sm px-8 py-3.5"
            >
              Orientación Médica por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
