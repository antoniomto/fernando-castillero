import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/ServiceIcon";
import { whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Hidroterapia, laserterapia, masaje terapéutico, rehabilitación post-quirúrgica, geriatría y deportiva. Fisioterapia veterinaria por Fernando Castillero.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-brand-teal text-white section">
        <div className="container-tight text-center">
          <span className="eyebrow">Tratamientos</span>
          <h1 className="mt-3 text-white">Servicios de fisioterapia</h1>
          <p className="mt-4 text-white/80 text-lg">
            Terapias complementarias, planes personalizados y seguimiento continuo.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-8 md:gap-10">
            {services.map((s, i) => (
              <article
                key={s.slug}
                className={`card md:p-10 grid gap-6 md:grid-cols-[auto_1fr] items-start ${
                  i % 2 === 1 ? "md:bg-brand-teal/[0.02]" : ""
                }`}
              >
                <div className="h-16 w-16 rounded-2xl bg-brand-teal/15 text-brand-teal-2 flex items-center justify-center">
                  <ServiceIcon name={s.icon} className="h-9 w-9" />
                </div>
                <div>
                  <h3 className="text-ink">{s.title}</h3>
                  <p className="mt-3 text-ink-soft">{s.description}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink-soft">
                        <svg className="h-5 w-5 shrink-0 text-brand-teal mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

          <div className="mt-16 text-center">
            <p className="text-ink-soft">
              ¿No estás seguro de qué tratamiento necesita tu mascota?
            </p>
            <a
              href={whatsappLink("Hola Fernando, quería consultarte qué tratamiento sería el ideal para mi mascota.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4"
            >
              Consultá sin cargo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
