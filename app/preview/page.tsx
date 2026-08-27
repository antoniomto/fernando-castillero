import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preview — Hero H1 Variants",
  robots: { index: false },
};

// Wrapper común que emula el hero
function HeroBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-ink/10">
      <div className="bg-canvas-soft border-b border-ink/10 py-3">
        <div className="container">
          <div className="text-xs uppercase tracking-widest font-semibold text-brand-teal">
            {label}
          </div>
        </div>
      </div>
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl">
          {children}
          <p className="mt-6 text-ink-soft max-w-lg">
            Rehabilitación post-quirúrgica, manejo de artrosis y recuperación de movilidad
            para perros y gatos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function PreviewPage() {
  return (
    <>
      {/* V1 — Baseline actual */}
      <HeroBox label="V1 · Actual (Quicksand medium, teal highlight)">
        <h1 className="text-ink font-display font-medium leading-[0.98] tracking-[-0.035em] text-[2.75rem] md:text-[5rem] lg:text-[6.5rem]">
          Movimiento sin dolor,
          <br />
          <span className="text-brand-teal">a cualquier edad.</span>
        </h1>
      </HeroBox>

      {/* V2 — Italic serif accent (Fraunces italic mezclada con Quicksand) */}
      <HeroBox label="V2 · Editorial mix — Quicksand + Fraunces italic serif">
        <h1 className="text-ink font-display font-medium leading-[0.98] tracking-[-0.035em] text-[2.75rem] md:text-[5rem] lg:text-[6.5rem]">
          Movimiento sin{" "}
          <span className="font-italic italic text-brand-teal font-normal">dolor</span>,
          <br />
          a cualquier{" "}
          <span className="font-italic italic text-brand-teal font-normal">edad.</span>
        </h1>
      </HeroBox>

      {/* V3 — Peso mezclado en la misma frase */}
      <HeroBox label="V3 · Contraste de pesos — light + bold en la misma línea">
        <h1 className="text-ink font-display leading-[0.98] tracking-[-0.035em] text-[2.75rem] md:text-[5rem] lg:text-[6.5rem]">
          <span className="font-light">Movimiento</span>
          <br />
          <span className="font-medium">sin dolor,</span>
          <br />
          <span className="font-bold text-brand-teal">a cualquier edad.</span>
        </h1>
      </HeroBox>

      {/* V4 — Display gigante + subtítulo pequeño (editorial magazine) */}
      <HeroBox label="V4 · Palabra ancla gigante + subtítulo compacto">
        <div>
          <h1 className="text-brand-teal font-display font-semibold leading-[0.85] tracking-[-0.05em] text-[5rem] md:text-[8rem] lg:text-[11rem]">
            Movimiento.
          </h1>
          <div className="mt-4 md:mt-6 font-italic italic text-ink text-2xl md:text-4xl font-normal">
            Sin dolor. A cualquier edad.
          </div>
        </div>
      </HeroBox>

      {/* V5 — Fraunces serif full — magazine feel */}
      <HeroBox label="V5 · Serif takeover (Fraunces italic para toda la frase)">
        <h1 className="text-ink font-italic italic leading-[0.98] tracking-[-0.02em] text-[2.75rem] md:text-[5rem] lg:text-[6.5rem] font-medium">
          Movimiento sin dolor,
          <br />
          <span className="text-brand-teal">a cualquier edad.</span>
        </h1>
      </HeroBox>

      {/* V6 — Ultra tight + mixed style */}
      <HeroBox label="V6 · Compacto con italic al final (más punchy)">
        <h1 className="text-ink font-display font-semibold leading-[0.95] tracking-[-0.04em] text-[3rem] md:text-[6rem] lg:text-[8rem]">
          Movimiento
          <br />
          sin dolor,{" "}
          <span className="font-italic italic text-brand-teal font-normal">a cualquier edad.</span>
        </h1>
      </HeroBox>
    </>
  );
}
