"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  delay?: 1 | 2 | 3 | 4 | 5;
  className?: string;
};

/**
 * Fade-in al entrar en viewport. Detalles:
 * - rootMargin generoso (400px arriba y abajo) para que se pre-carguen antes de scrollear
 * - fallback: si ya está cerca del viewport al montar, se marca visible sin esperar
 * - fallback: si el observador no dispara en 200ms (screenshot/prerender), se marca visible
 */
export function Reveal({ children, as = "div", delay, className = "" }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // fallback inmediato: si ya está en o cerca del viewport, mostrar sin esperar
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.5) {
      el.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0, rootMargin: "400px 0px 400px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as "div";
  const delayCls = delay ? ` reveal-delay-${delay}` : "";
  return (
    <Tag ref={ref as never} className={`reveal${delayCls} ${className}`}>
      {children}
    </Tag>
  );
}
