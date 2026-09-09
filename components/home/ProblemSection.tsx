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
    <section id="signos-alerta" className="section bg-canvas-soft relative">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="eyebrow">Detección Oportuna</span>
            <h2 className="mt-4 text-ink">
              El dolor en mascotas no siempre es evidente:
              <br />
              <span className="text-brand-marine font-semibold">¿Reconoces estas señales?</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Muchos propietarios confunden los síntomas de artrosis, displasia o lesión ligamentosa con &quot;vejez&quot;.
              Una intervención temprana preserva masa muscular y evita el sufrimiento silencioso.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {signos.map((s, i) => (
            <Reveal key={s.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-marine/40 hover:shadow-md transition-all h-full">
                <div className="h-9 w-9 rounded-xl bg-brand-marine-tint text-brand-marine flex items-center justify-center shrink-0 font-display font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <div className="font-display font-bold text-ink text-base leading-snug">{s.title}</div>
                  <div className="text-xs md:text-sm text-slate-500 mt-1.5 leading-relaxed">{s.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-12">
            <a
              href={whatsappLink("Hola Dr. Fernando, he notado algunas señales de molestia en mi mascota y me gustaría consultarte.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-8 py-3.5"
            >
              Consultar con el Dr. Fernando por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
