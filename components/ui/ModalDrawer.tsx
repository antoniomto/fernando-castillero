"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ModalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  fullPageHref?: string;
  children: React.ReactNode;
}

export function ModalDrawer({
  isOpen,
  onClose,
  title,
  subtitle,
  fullPageHref,
  children,
}: ModalDrawerProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-drawer-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet / Modal Container */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] sm:max-h-[88vh] bg-white rounded-t-[2rem] sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200/80 animate-slide-up">
        {/* Mobile Drag Indicator */}
        <div className="sm:hidden pt-3 pb-1 flex justify-center cursor-grab" onClick={onClose}>
          <div className="w-12 h-1.5 rounded-full bg-slate-300" />
        </div>

        {/* Modal Header */}
        <div className="px-5 py-4 sm:px-8 sm:py-5 border-b border-slate-100 flex items-center justify-between gap-4 bg-slate-50/70 shrink-0">
          <div>
            <h3 id="modal-drawer-title" className="text-lg sm:text-xl font-bold text-ink leading-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{subtitle}</p>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {fullPageHref && (
              <Link
                href={fullPageHref}
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-brand-marine hover:border-brand-marine/40 transition shadow-sm"
              >
                <span>Página completa</span>
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </Link>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-2xl bg-white sm:bg-slate-100 hover:bg-slate-200 text-slate-600 transition border sm:border-0 border-slate-200"
              aria-label="Cerrar modal"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 md:p-8 overscroll-contain">
          {children}
        </div>

        {/* Modal Footer Bar */}
        {fullPageHref && (
          <div className="md:hidden px-4 py-3 bg-slate-50 border-t border-slate-100 text-center shrink-0">
            <Link
              href={fullPageHref}
              className="text-xs font-bold text-brand-marine hover:underline inline-flex items-center gap-1"
            >
              <span>Ver en página independiente dedicada</span>
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
