import { Reveal } from "../Reveal";

const stats = [
  { number: "CANEM", label: "Hospital Veterinario · Aguascalientes" },
  { number: "Mundo Aparte", label: "Franquicia Internacional de Rehabilitación" },
  { number: "Prótesis", label: "Biomecánica y Dispositivos a Medida" },
  { number: "24/7", label: "Urgencias y Hospitalización" },
];

export function SocialProofBar() {
  return (
    <section className="bg-white border-y border-slate-200/80">
      <div className="container py-12 md:py-14 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
            <div className="p-2">
              <div className="font-display text-3xl md:text-5xl text-brand-marine leading-none font-bold tracking-tight">
                {s.number}
              </div>
              <div className="text-[11px] md:text-xs text-slate-500 uppercase tracking-[0.16em] mt-3 font-semibold">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
