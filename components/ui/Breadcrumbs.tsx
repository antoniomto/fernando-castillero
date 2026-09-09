import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: "light" | "dark";
}

export function Breadcrumbs({ items, className = "", variant = "dark" }: BreadcrumbsProps) {
  const isDark = variant === "dark"; // on dark backgrounds like brand-marine or slate-900

  return (
    <nav
      aria-label="Migas de pan"
      className={`inline-flex items-center gap-2 text-xs font-medium ${className}`}
    >
      <ol className="flex items-center gap-1.5 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isDark
                      ? "text-emerald-300 hover:text-white"
                      : "text-slate-500 hover:text-brand-marine"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={`font-semibold ${
                    isDark ? "text-white/90" : "text-ink"
                  }`}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span
                  className={isDark ? "text-white/40" : "text-slate-300"}
                  aria-hidden="true"
                >
                  ›
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
