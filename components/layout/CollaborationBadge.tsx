type Props = { variant?: "light" | "dark"; className?: string };

export function CollaborationBadge({ variant = "light", className = "" }: Props) {
  const styles =
    variant === "light"
      ? "border-white/30 text-white/80"
      : "border-ink/15 text-ink-soft";

  return (
    <span
      className={`hidden md:inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wider ${styles} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
      En colaboración con Mundo à Parte
    </span>
  );
}
