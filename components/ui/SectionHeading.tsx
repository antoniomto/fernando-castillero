type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, subtitle, center = false }: Props) {
  return (
    <div className={`max-w-2xl mb-12 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-2 text-ink">{title}</h2>
      {subtitle && <p className="mt-4 text-ink-soft text-lg">{subtitle}</p>}
    </div>
  );
}
