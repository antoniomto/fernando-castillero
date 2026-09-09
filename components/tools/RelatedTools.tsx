import Link from "next/link";
import { whatsappLink } from "@/lib/site-config";

interface RelatedToolsProps {
  currentSlug: string;
}

const allTools = [
  {
    slug: "explorador-terapias",
    href: "/herramientas/explorador-terapias",
    title: "Explorador de Terapias",
    badge: "Fisioterapia",
    desc: "Aprende cómo el agua, el láser y la electroterapia regeneran cartílago y tejido muscular.",
  },
  {
    slug: "guia-protesis",
    href: "/herramientas/guia-protesis",
    title: "Guía de Prótesis & Órtesis",
    badge: "Biomecánica",
    desc: "Soluciones ortopédicas y carros adaptativos para amputaciones o debilidad.",
  },
  {
    slug: "triage-urgencias",
    href: "/herramientas/triage-urgencias",
    title: "Triage de Urgencias 24/7",
    badge: "CANEM Hospital",
    desc: "Clasificación de síntomas de alerta para valorar atención quirúrgica inmediata.",
  },
  {
    slug: "atlas-dolor",
    href: "/herramientas/atlas-dolor",
    title: "Atlas Anatómico del Dolor",
    badge: "Diagnóstico",
    desc: "Localizador interactivo de molestias articulares y de columna en perros y gatos.",
  },
  {
    slug: "test-movilidad",
    href: "/herramientas/test-movilidad",
    title: "Test de Movilidad & Artrosis",
    badge: "Autoevaluación",
    desc: "Cuestionario clínico de 5 preguntas para detectar rigidez y dolor temprano.",
  },
  {
    slug: "calculadora-alimentacion",
    href: "/herramientas/calculadora-alimentacion",
    title: "Calculadora Nutricional (WSAVA)",
    badge: "Nutrición",
    desc: "Ración diaria de calorías y gramos exactos según peso y edad.",
  },
  {
    slug: "recuperacion-post-cirugia",
    href: "/herramientas/recuperacion-post-cirugia",
    title: "Timeline Post-Cirugía",
    badge: "Post-Quirúrgico",
    desc: "Cronograma de cuidados semana a semana y checklist diario.",
  },
  {
    slug: "presupuesto-mascota",
    href: "/herramientas/presupuesto-mascota",
    title: "Presupuesto Mensual (MXN)",
    badge: "Planificación",
    desc: "Estimación del costo de alimento, veterinaria preventiva e higiene.",
  },
];

export function RelatedTools({ currentSlug }: RelatedToolsProps) {
  const suggestions = allTools.filter((t) => t.slug !== currentSlug).slice(0, 3);

  return (
    <section className="mt-20 pt-12 border-t border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-marine">
            Orientación Continua
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-ink mt-1">
            Otras herramientas que pueden interesarte
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Explora otros recursos interactivos gratuitos diseñados por nuestro equipo clínico.
          </p>
        </div>

        <Link
          href="/herramientas"
          className="text-xs sm:text-sm font-bold text-brand-marine hover:text-brand-marine-2 inline-flex items-center gap-1 shrink-0"
        >
          <span>Ver todas las herramientas (8)</span>
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {suggestions.map((tool) => (
          <Link
            key={tool.slug}
            href={tool.href}
            className="group p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-marine/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 mb-3 border border-slate-200/60">
                {tool.badge}
              </span>
              <h4 className="text-base font-bold text-ink group-hover:text-brand-marine transition-colors">
                {tool.title}
              </h4>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {tool.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-marine">
              <span>Abrir herramienta</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Clinical reassurance banner */}
      <div className="mt-10 rounded-2xl bg-slate-100 border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-sm font-bold text-ink">¿Tienes una duda médica sobre tu mascota?</h4>
          <p className="text-xs text-slate-600 mt-0.5">
            El Dr. Fernando Castillero y el equipo de CANEM / Mundo Aparte pueden orientarte directamente por WhatsApp.
          </p>
        </div>

        <a
          href={whatsappLink("Hola Dr. Fernando, utilicé una de sus herramientas clínicas y me gustaría orientarme sobre el caso de mi mascota.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs py-2.5 px-5 shrink-0"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </section>
  );
}
