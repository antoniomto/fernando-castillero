import { Reveal } from "../Reveal";

const milestones = [
  {
    year: "{{ANIO_INICIO}}",
    title: "Los primeros pacientes",
    text: "Todo empezó atendiendo perros de amigos en casa. El primer caso que me marcó fue {{PRIMER_CASO}} — ahí entendí que la fisioterapia veterinaria era mi camino.",
  },
  {
    year: "{{ANIO_FORMACION}}",
    title: "Formación especializada",
    text: "Certificación en rehabilitación animal e hidroterapia. Cada curso, cada seminario me confirmó lo mismo: la mayoría de las mascotas necesita esto y muy pocos lo saben.",
  },
  {
    year: "{{ANIO_COLAB}}",
    title: "Colaboración con Mundo à Parte",
    text: "Acceso a instalaciones profesionales — pileta de hidroterapia, láser, equipamiento de última generación. Un salto enorme para la calidad de los tratamientos.",
  },
  {
    year: "Hoy",
    title: "Cientos de familias, un mismo enfoque",
    text: "Cada mascota es distinta y merece un plan pensado para ella. Sigo formándome y sigo escuchando — porque los dueños son los que mejor conocen a su animal.",
  },
];

export function FernandoTimeline() {
  return (
    <section className="section  relative">
      <div className="container">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="eyebrow">Detrás del profesional</span>
            <h2 className="mt-3 text-ink">
              Cómo Fernando llegó a la <span className="">fisioterapia veterinaria</span>.
            </h2>
          </div>
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          {/* línea vertical detrás de los hitos */}
          <div
            aria-hidden
            className="absolute left-[15px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-gold/40 via-brand-gold/60 to-brand-gold/20 md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div
                  className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10 md:items-center ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  {/* punto del timeline */}
                  <div
                    aria-hidden
                    className="absolute left-[9px] md:left-1/2 top-2 h-4 w-4 rounded-full bg-brand-teal ring-4 ring-white md:-translate-x-1/2 shadow"
                  />

                  <div className={`md:${i % 2 === 0 ? "text-right md:pr-10" : "md:pl-10"}`}>
                    <div className="text-xs uppercase tracking-widest text-brand-gold-dark font-semibold">
                      {m.year}
                    </div>
                    <h3 className="text-ink text-2xl mt-1">{m.title}</h3>
                    <p className="mt-3 text-brand-teal/75 text-[15px] leading-relaxed">{m.text}</p>
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
