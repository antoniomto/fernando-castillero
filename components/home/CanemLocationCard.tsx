"use client";

import { Reveal } from "../Reveal";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export function CanemLocationCard() {
  return (
    <section id="canem-hospital" className="section bg-white relative">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="eyebrow">Sede Hospitalaria</span>
            <h2 className="mt-4 text-ink">
              CANEM Hospital Veterinario
              <br />
              <span className="text-brand-marine font-semibold">Aguascalientes, Ags.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Instalaciones médicas equipadas para cirugía, diagnóstico por imagen, hospitalización
              y atención de urgencias con el respaldo y dirección del Dr. Fernando Castillero y su equipo médico.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left: Info Card */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div
              aria-hidden
              className="absolute top-0 right-0 w-64 h-64 bg-brand-marine/20 rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                    <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16" />
                    <path d="M12 7v6M9 10h6" />
                    <path d="M3 21h18" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">CANEM Hospital</h3>
                  <p className="text-xs text-slate-400">Medicina Quirúrgica & Hospitalización</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <strong className="block text-white font-semibold">Dirección:</strong>
                    Avenida Convención de 1914 Norte #1506, esquina con calle Jacaranda, Circunvalación Norte, C.P. 20020, Aguascalientes, Ags., México.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <div>
                    <strong className="block text-white font-semibold">Horarios de Consulta:</strong>
                    Lunes a Sábado: 9:00 AM – 8:00 PM · Urgencias 24 Horas
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <strong className="block text-white font-semibold">Atención & Citas:</strong>
                    Llamada directa o coordinación vía WhatsApp
                  </div>
                </div>
              </div>

              {/* Services Tags */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Servicios Disponibles en Sede
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Cirugía General",
                    "Traumatología",
                    "Hospitalización",
                    "Cuidado Dental",
                    "Vacunación",
                    "Laboratorio Clínico",
                  ].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full bg-white/10 text-xs text-slate-200 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink("Hola Dr. Fernando, me gustaría agendar una consulta médica en CANEM Hospital.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs md:text-sm px-6 py-3 text-center flex-1"
              >
                Agendar en CANEM
              </a>
              <a
                href="https://maps.google.com/?q=Avenida+Convencion+de+1914+Norte+1506+Aguascalientes"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light text-xs md:text-sm px-6 py-3 text-center"
              >
                Cómo llegar ↗
              </a>
            </div>
          </div>

          {/* Right: Map / Visual Location Mockup */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-100 border border-slate-200 p-2.5 flex flex-col">
            <div className="rounded-[1.4rem] bg-white border border-slate-200/80 p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Ubicación Estratégica
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Abierto para atención
                  </span>
                </div>

                <h4 className="text-lg font-bold text-ink mb-2">
                  Fácil acceso en Circunvalación Norte
                </h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                  Ubicado en una de las avenidas principales de Aguascalientes con estacionamiento
                  y acceso adaptado para mascotas con movilidad reducida o en camilla.
                </p>

                {/* Styled Map Placeholder with Real Coordinates Link */}
                <div className="rounded-2xl bg-slate-100 border border-slate-200 h-56 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-marine-tint/40 to-slate-200/60 opacity-80" />
                  <div className="relative z-10 space-y-2">
                    <div className="h-12 w-12 rounded-full bg-brand-marine text-white flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <p className="text-xs md:text-sm font-bold text-ink">
                      Av. Convención de 1914 Norte #1506
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Circunvalación Norte, Aguascalientes
                    </p>
                    <a
                      href="https://maps.google.com/?q=Avenida+Convencion+de+1914+Norte+1506+Aguascalientes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-marine hover:underline pt-1"
                    >
                      Abrir en Google Maps ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>¿Tienes dudas sobre traslados?</span>
                <a
                  href={whatsappLink("Hola Dr. Fernando, tengo una consulta sobre el traslado de mi mascota a CANEM.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand-marine hover:underline"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
