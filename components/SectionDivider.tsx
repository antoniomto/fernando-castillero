type Props = {
  /** color arriba del divisor (fondo saliente) */
  fromColor?: string;
  /** color abajo del divisor (fondo entrante) */
  toColor?: string;
  variant?: "wave" | "curve" | "tilt";
  flip?: boolean;
  className?: string;
};

/**
 * Divisor SVG orgánico entre secciones. Rompe la monotonía de rectángulos.
 * Los colores usan variables CSS del brand.
 */
export function SectionDivider({
  fromColor = "var(--brand-cream)",
  toColor = "var(--brand-teal)",
  variant = "wave",
  flip = false,
  className = "",
}: Props) {
  const paths: Record<string, string> = {
    wave: "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z",
    curve: "M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z",
    tilt: "M0,0 L1440,120 L1440,120 L0,120 Z",
  };

  return (
    <div
      aria-hidden
      className={`relative w-full leading-none ${className}`}
      style={{
        backgroundColor: fromColor,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-[60px] md:h-[90px]"
      >
        <path d={paths[variant]} fill={toColor} />
      </svg>
    </div>
  );
}
