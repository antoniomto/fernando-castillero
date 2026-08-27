import { Reveal } from "../Reveal";

const stats = [
  { number: "{{STAT_PACIENTES}}", label: "Pacientes atendidos" },
  { number: "{{STAT_ANIOS}}", label: "Años de experiencia" },
  { number: "6+", label: "Terapias disponibles" },
  { number: "5.0", label: "En reseñas de Google" },
];

export function SocialProofBar() {
  return (
    <section className="bg-canvas-cream border-y border-brand-gold/20">
      <div className="container py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
            <div>
              <div className="font-display text-4xl md:text-6xl text-ink leading-none font-medium tracking-tight">
                {s.number}
              </div>
              <div className="text-[11px] md:text-xs text-ink-soft uppercase tracking-[0.18em] mt-3 font-medium">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
