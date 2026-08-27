import type { Metadata } from "next";
import { faqs } from "@/data/faq";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agenda una consulta con Fernando Castillero, fisioterapeuta veterinario. Escríbenos por WhatsApp, email o visítanos.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", url: "/" }, { name: "Contacto", url: "/contacto" }])} />
      <section className="bg-brand-teal text-white section">
        <div className="container-tight text-center">
          <span className="eyebrow">Contacto</span>
          <h1 className="mt-3 text-white">Agenda una consulta</h1>
          <p className="mt-4 text-white/80 text-lg">
            La forma más rápida es por WhatsApp. También puedes escribir por email o pasar por el consultorio.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-tight grid gap-8 md:grid-cols-2">
          <div className="card">
            <h3 className="text-ink">Datos de contacto</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <div className="text-xs uppercase tracking-widest text-brand-teal">WhatsApp</div>
                <div className="text-ink font-medium mt-1">{siteConfig.contact.whatsapp}</div>
              </li>
              <li>
                <div className="text-xs uppercase tracking-widest text-brand-teal">Teléfono</div>
                <div className="text-ink font-medium mt-1">{siteConfig.contact.telefono}</div>
              </li>
              <li>
                <div className="text-xs uppercase tracking-widest text-brand-teal">Email</div>
                <div className="text-ink font-medium mt-1">{siteConfig.contact.email}</div>
              </li>
              <li>
                <div className="text-xs uppercase tracking-widest text-brand-teal">Dirección</div>
                <div className="text-ink font-medium mt-1">{siteConfig.contact.direccion}</div>
                <div className="text-ink-muted">{siteConfig.contact.ciudad}</div>
              </li>
              <li>
                <div className="text-xs uppercase tracking-widest text-brand-teal">Horarios</div>
                <div className="text-ink font-medium mt-1 whitespace-pre-line">
                  {siteConfig.contact.horarios}
                </div>
              </li>
              <li>
                <div className="text-xs uppercase tracking-widest text-brand-teal">Instagram</div>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink font-medium mt-1 inline-block hover:text-brand-teal"
                >
                  {siteConfig.social.instagramHandle}
                </a>
              </li>
            </ul>

            <a
              href={whatsappLink("Hola Fernando, quería agendar una consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full mt-8"
            >
              Escribir por WhatsApp
            </a>
          </div>

          <div className="card p-0 overflow-hidden">
            <div className="aspect-square md:aspect-auto md:h-full min-h-[300px] bg-ink/5 flex items-center justify-center text-ink-muted text-sm">
              [ mapa embebido · {`{{GOOGLE_MAPS_EMBED}}`} ]
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-tight">
          <h2 className="text-ink text-center mb-10">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group card cursor-pointer p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex justify-between items-center gap-4">
                  <h4 className="text-ink text-lg font-display">{f.q}</h4>
                  <span className="text-brand-teal text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="mt-4 text-ink-soft text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
