import { Reveal } from "../Reveal";
import { whatsappLink } from "@/lib/site-config";

const signos = [
  { title: "Le cuesta levantarse", desc: "Rigidez matinal, dolor al pararse después de descansar." },
  { title: "Cojea o carga menos una pata", desc: "Aunque sea de forma intermitente." },
  { title: "Ya no quiere subir al sofá", desc: "Rechaza saltos, escaleras o el auto." },
  { title: "Se cansa antes en el paseo", desc: "Menos energía, jadeo temprano, ganas de volver." },
  { title: "Duerme más y juega menos", desc: "Cambios de humor asociados al dolor crónico." },
  { title: "Fue operado hace poco", desc: "La rehabilitación temprana acelera la recuperación." },
];

export function ProblemSection() {
  return (
    <section className="section bg-canvas">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="eyebrow">¿Reconocés estos signos?</span>
            <h2 className="mt-4 text-ink">
              La mayoría de los problemas de movilidad
              <br />
              se <span className="text-brand-teal">detectan tarde</span>.
            </h2>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              Cuanto antes se interviene, más músculo se preserva y más rápida es la recuperación.
              Si tu mascota tiene uno o más de estos signos, vale la pena una evaluación.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {signos.map((s, i) => (
            <Reveal key={s.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="flex items-start gap-4 p-6 rounded-3xl bg-canvas-soft border border-ink/[0.06] hover:border-brand-teal/40 hover:shadow-lg transition h-full">
                <div className="h-9 w-9 rounded-full bg-brand-teal text-white flex items-center justify-center shrink-0 font-display font-semibold text-sm">
                  {i + 1}
                </div>
                <div>
                  <div className="font-display font-semibold text-ink text-lg leading-tight">{s.title}</div>
                  <div className="text-sm text-ink-soft mt-1.5 leading-relaxed">{s.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-14">
            <a
              href={whatsappLink("Hola Fernando, mi mascota tiene algunos signos y quería consultarte.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Consultá sin compromiso
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
