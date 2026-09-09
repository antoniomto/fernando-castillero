import { Reveal } from "../Reveal";

const milestones = [
  {
    year: "Vocación & Medicina",
    title: "Formación en Medicina Veterinaria",
    text: "Egresado con enfoque en medicina interna, cirugía y cuidados críticos. Desde el inicio, su interés se centró en cómo resolver casos complejos y mejorar la longevidad de los animales de compañía.",
  },
  {
    year: "Sede Quirúrgica",
    title: "Dirección en CANEM Hospital Veterinario",
    text: "Consolidación de CANEM en Aguascalientes junto a socios clínicos: un hospital equipado para cirugía avanzada, urgencias 24/7, hospitalización monitorizada y diagnóstico de alta resolución.",
  },
  {
    year: "Vanguardia Mundial",
    title: "Adquisición de la Franquicia Mundo Aparte",
    text: "Incorporación de la red de fisioterapia animal más grande del mundo, trayendo a la región protocolos internacionales de hidroterapia, láser regenerativo y neurorrehabilitación.",
  },
  {
    year: "Innovación Activa",
    title: "Biomecánica, Docencia & Prótesis",
    text: "Alianzas tecnológicas para el desarrollo de prótesis a medida, participación en conferencias veterinarias y colaboraciones académicas para elevar el estándar de la salud animal en México.",
  },
];

export function FernandoTimeline() {
  return (
    <section id="sobre-fernando" className="section bg-white relative overflow-hidden">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="eyebrow">Trayectoria & Autoridad</span>
            <h2 className="mt-4 text-ink">
              Detrás del Dr. Fernando Castillero:
              <br />
              <span className="text-brand-marine font-semibold">Ciencia, rigor y compromiso.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Una carrera dedicada a la medicina hospitalaria y a la constante búsqueda de soluciones avanzadas
              para que ninguna mascota pierda su alegría de moverse y compartir con su familia.
            </p>
          </div>
        </Reveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line behind milestones */}
          <div
            aria-hidden
            className="absolute left-[15px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-marine/20 via-brand-marine/40 to-brand-marine/10 md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div
                  className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 md:items-center ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  {/* Point on timeline */}
                  <div
                    aria-hidden
                    className="absolute left-[9px] md:left-1/2 top-3 h-4 w-4 rounded-full bg-brand-marine ring-4 ring-white md:-translate-x-1/2 shadow-md"
                  />

                  <div
                    className={`rounded-2xl bg-slate-50 border border-slate-200/80 p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow ${
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <span className="inline-block text-[11px] uppercase tracking-widest text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 mb-2">
                      {m.year}
                    </span>
                    <h3 className="text-ink text-lg md:text-xl font-bold mt-1">{m.title}</h3>
                    <p className="mt-3 text-slate-600 text-sm leading-relaxed">{m.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
