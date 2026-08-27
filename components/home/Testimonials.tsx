import { Reveal } from "../Reveal";
import { BlobFrame } from "../BlobFrame";

const testimonials = [
  {
    quote: "{{TESTIMONIO_1}}",
    author: "{{NOMBRE_TUTOR_1}}",
    pet: "{{MASCOTA_1}}",
    treatment: "{{TRATAMIENTO_1}}",
    photo: "/images/gallery-cat.jpg",
    variant: 1 as 1 | 2 | 3,
    color: "teal" as "gold" | "teal",
  },
  {
    quote: "{{TESTIMONIO_2}}",
    author: "{{NOMBRE_TUTOR_2}}",
    pet: "{{MASCOTA_2}}",
    treatment: "{{TRATAMIENTO_2}}",
    photo: "/images/gallery-dog.jpg",
    variant: 2 as 1 | 2 | 3,
    color: "gold" as "gold" | "teal",
  },
];

export function Testimonials() {
  return (
    <section className="section bg-brand-teal/[0.04] relative overflow-hidden border-y border-brand-teal/10">
      <div className="container relative">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">Historias</span>
            <h2 className="mt-4 text-ink">
              Lo que dicen quienes
              <br />
              ya <span className="text-brand-teal">confiaron</span>.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:gap-16 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={(i + 1) as 1 | 2}>
              <figure className="grid grid-cols-[auto_1fr] gap-6 items-start">
                <div className="w-24 md:w-32 shrink-0">
                  <BlobFrame
                    src={t.photo}
                    alt={`Mascota de ${t.author}`}
                    variant={t.variant}
                    color={t.color}
                    aspectRatio="aspect-square"
                    sizes="128px"
                  />
                </div>
                <div>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-brand-teal mb-3" aria-hidden>
                    <path d="M7 7h4v4H7v6H3v-6c0-2.2 1.8-4 4-4zm10 0h4v4h-4v6h-4v-6c0-2.2 1.8-4 4-4z" />
                  </svg>
                  <blockquote className="text-ink text-lg md:text-xl leading-relaxed font-display font-medium">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-5 text-sm">
                    <div className="font-semibold text-ink">{t.author}</div>
                    <div className="text-ink-soft">
                      {t.pet} · {t.treatment}
                    </div>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
