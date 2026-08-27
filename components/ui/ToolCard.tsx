import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
  cta?: string;
};

export function ToolCard({ href, title, description, icon, cta = "Probar herramienta" }: Props) {
  return (
    <Link
      href={href}
      className="group card hover:shadow-md hover:border-brand-teal/40 hover:-translate-y-0.5 transition-all flex flex-col"
    >
      <div className="h-12 w-12 rounded-xl bg-ink/5 text-brand-teal flex items-center justify-center mb-4 group-hover:bg-brand-teal/15 group-hover:text-brand-teal-2 transition">
        {icon}
      </div>
      <h4 className="text-ink mb-2">{title}</h4>
      <p className="text-sm text-ink-soft mb-4 flex-grow">{description}</p>
      <span className="text-brand-teal font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
        {cta} <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
