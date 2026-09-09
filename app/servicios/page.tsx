import type { Metadata } from "next";
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
                className={`card md:p-10 grid gap-6 md:grid-cols-[auto_1fr] items-start ${
                  i % 2 === 1 ? "md:bg-slate-50" : ""
                }`}
              >
                <div className="h-16 w-16 rounded-2xl bg-brand-marine-tint text-brand-marine flex items-center justify-center shrink-0">
                  <ServiceIcon name={s.icon} className="h-9 w-9" />
                </div>
                <div>
                  <h3 className="text-ink">{s.title}</h3>
                  <p className="mt-3 text-slate-600">{s.description}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                        <svg className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
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
