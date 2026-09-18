"use client";

import { useState } from "react";
import Image from "next/image";
import { whatsappLink } from "@/lib/site-config";

interface Therapy {
  id: string;
  name: string;
  tag: string;
  badgeColor: string;
  icon: (className?: string) => React.ReactNode;
  tagline: string;
  mechanism: string;
  conditions: string[];
  sessionFlow: { step: string; detail: string }[];
  duration: string;
  frequency: string;
  contraindications: string;
  image: string;
  imageCaption: string;
}

const therapies: Therapy[] = [
  {
    id: "hidroterapia",
    name: "Hidroterapia",
    tag: "Cinta Subacuática & Piscina",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    icon: (className = "h-5 w-5") => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    tagline: "Recuperación motora y fortalecimiento muscular con mínimo impacto articular.",
    mechanism:
      "La flotabilidad del agua a temperatura controlada (28-32°C) reduce hasta un 65% el peso que soportan las articulaciones enfermas o intervenidas, permitiendo ejercitar masa muscular sin dolor ni microtraumatismos.",
    conditions: [
      "Rehabilitación post-quirúrgica (TPLO, rotura de ligamentos, fracturas)",
      "Displasia de cadera o codo en perros jóvenes y adultos",
      "Osteoartrosis crónica y pérdida de masa muscular en seniors",
      "Programa de reducción de peso y acondicionamiento cardiovascular",
    ],
    sessionFlow: [
      { step: "1. Valoración previa", detail: "Control de constantes, temperatura y estado de la piel/heridas." },
      { step: "2. Inmersión guiada", detail: "Paseo en cinta a velocidad regulada por veterinario y arnés de soporte." },
      { step: "3. Secado & monitoreo", detail: "Secado térmico, estiramientos suaves y registro de evolución." },
    ],
    duration: "20 a 30 minutos",
    frequency: "2 a 3 sesiones semanales según fase",
    contraindications: "Heridas abiertas sin cicatrizar, infecciones cutáneas activas o cardiopatías descompensadas.",
    image: "/images/gallery-hydro.jpg",
    imageCaption: "Sesión de hidroterapia con flotabilidad controlada",
  },
  {
    id: "laser",
    name: "Láser Terapéutico",
    tag: "Fotobiomodulación Clase IV",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    icon: (className = "h-5 w-5") => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
    tagline: "Analgesia profunda y regeneración celular acelerada sin fármacos ni dolor.",
    mechanism:
      "Los fotones de longitud de onda infrarroja penetran profundamente en los tejidos estimulando la producción mitocondrial de ATP, reduciendo citoquinas inflamatorias y bloqueando fibras nociceptivas del dolor en minutos.",
    conditions: [
      "Dolor articular agudo por artrosis o artritis",
      "Hernias discales (IVDD) y dolor neuropático en columna",
      "Cicatrización acelerada de heridas quirúrgicas y quemaduras",
      "Tendinitis, contracturas musculares y fascitis",
    ],
    sessionFlow: [
      { step: "1. Protección ocular", detail: "Colocación de gafas Doggles especiales para proteger la retina del paciente." },
      { step: "2. Aplicación puntual", detail: "Pase manual con sonda láser sobre puntos gatillo y articulaciones afectadas." },
      { step: "3. Efecto calmante", detail: "Alivio y relajación inmediata observada en la postura de la mascota." },
    ],
    duration: "10 a 15 minutos",
    frequency: "2 veces por semana en etapa aguda; mantenimiento mensual",
    contraindications: "Zonas con presencia de tumores o neoplasias malignas activas.",
    image: "/images/clinical/laser-pastor-aleman.jpg",
    imageCaption: "Pastor Alemán con gafas Doggles recibiendo láser de alta potencia",
  },
  {
    id: "magneto",
    name: "Magnetoterapia",
    tag: "Solenoide E-VET",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    icon: (className = "h-5 w-5") => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M8 12h8" />
      </svg>
    ),
    tagline: "Campos magnéticos pulsátiles indoloros para consolidación ósea y celular.",
    mechanism:
      "Genera microcorrientes inducidas a nivel iónico que aceleran la calcificación en fracturas retardadas, reactivan el flujo sanguíneo y desinflaman discos intervertebrales mientras el paciente descansa.",
    conditions: [
      "Retardo en consolidación de fracturas y fisuras",
      "Manejo conservador o post-quirúrgico de hernias de disco",
      "Artrosis severa en perros seniors y gatos gerontes",
      "Edemas óseos y procesos inflamatorios crónicos",
    ],
    sessionFlow: [
      { step: "1. Reposo en solenoide", detail: "La mascota se acomoda en la camilla dentro del túnel magnético." },
      { step: "2. Emisión indolora", detail: "Tratamiento 100% silencioso e indoloro (los pacientes suelen dormirse)." },
      { step: "3. Estimulación profunda", detail: "Acción celular sin necesidad de inmovilización ni anestesia." },
    ],
    duration: "20 a 30 minutos",
    frequency: "2 a 3 sesiones semanales",
    contraindications: "Hemorragias activas o pacientes con marcapasos cercanos.",
    image: "/images/clinical/magnetoterapia-gato-evet.jpg",
    imageCaption: "Paciente felino descansando plácidamente en solenoide E-VET",
  },
  {
    id: "electro",
    name: "Electroterapia",
    tag: "TENS & NMES Clínico",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: (className = "h-5 w-5") => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    tagline: "Estimulación neuromuscular para despertar extremidades paralizadas o atróficas.",
    mechanism:
      "Mediante impulsos eléctricos calibrados a microvoltajes seguros, el TENS inhibe los caminos medulares del dolor (Gate Control), mientras que el NMES contrae rítmicamente el músculo para evitar la atrofia en pacientes postrados.",
    conditions: [
      "Paresia o parálisis en patas traseras por hernia discal o traumatismo",
      "Atrofia muscular severa tras yesos o cirugías ortopédicas prolongadas",
      "Dolor miofascial crónico refractario a analgésicos orales",
      "Reeducación de la marcha en pacientes neurológicos",
    ],
    sessionFlow: [
      { step: "1. Preparación de piel", detail: "Gel conductor y electrodos de grado médico posicionados anatómicamente." },
      { step: "2. Calibración suave", detail: "Ajuste gradual de amplitud hasta conseguir contracción sin estrés." },
      { step: "3. Terapia activa", detail: "Ciclos de contracción y reposo con refuerzo positivo." },
    ],
    duration: "15 a 20 minutos",
    frequency: "2 a 3 veces por semana",
    contraindications: "Presencia de marcapasos, zonas con implantes metálicos recientes o crisis convulsivas.",
    image: "/images/clinical/electroterapia-tens-rehabmedic.jpg",
    imageCaption: "Electroestimulación neuromuscular RehabMedic con electrodos",
  },
  {
    id: "propiocepcion",
    name: "Cinesiterapia & Movilidad",
    tag: "Reeducación Neuromotora",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    icon: (className = "h-5 w-5") => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
      </svg>
    ),
    tagline: "Ejercicios activos en pistas inestables para recuperar equilibrio y coordinación.",
    mechanism:
      "Al desafiar el balance de la mascota con balones de cacahuate, platos basculantes y cavaletti, los mecanorreceptores de tendones y articulaciones envían señales correctivas al cerebelo, reentrenando la marcha.",
    conditions: [
      "Mascotas que tropiezan, arrastran las patas o tienen marcha descoordinada",
      "Rehabilitación tras cirugías de columna vertebral o luxación rotuliana",
      "Atletas caninos que requieren acondicionamiento propioceptivo",
      "Pacientes geriátricos con debilidad postural",
    ],
    sessionFlow: [
      { step: "1. Calentamiento", detail: "Movilizaciones pasivas asistidas para lubricar el líquido sinovial." },
      { step: "2. Circuito motor", detail: "Superficies de texturas, desniveles y barras con premios positivos." },
      { step: "3. Crioterapia final", detail: "Enfriamiento preventivo sobre articulaciones trabajadas." },
    ],
    duration: "25 a 30 minutos",
    frequency: "1 a 2 veces por semana combinada con rutina en casa",
    contraindications: "Inestabilidad ortopédica aguda sin fijación previa.",
    image: "/images/clinical/equipo-clinico-yorkie.jpg",
    imageCaption: "Asistencia motora guiada por el equipo de fisioterapia",
  },
  {
    id: "termoterapia",
    name: "Termoterapia & Masaje",
    tag: "Descompresión Miofascial",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    icon: (className = "h-5 w-5") => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    ),
    tagline: "Preparación muscular y liberación de contracturas compensatorias por dolor.",
    mechanism:
      "La aplicación de calor húmedo controlado aumenta la vasodilatación y elasticidad del colágeno, permitiendo liberar contracturas severas generadas cuando la mascota cojea y sobrecarga otras extremidades sanas.",
    conditions: [
      "Rigidez articular matutina severa en pacientes con artrosis",
      "Sobrecarga de extremidades anteriores por cojera trasera prolongada",
      "Contracturas lumbares y paravertebrales",
      "Preparación muscular previa a la sesión de hidroterapia",
    ],
    sessionFlow: [
      { step: "1. Compresas térmicas", detail: "Calor húmedo envuelto para elevar temperatura tisular de forma segura." },
      { step: "2. Masaje suave", detail: "Técnicas de effleurage y petrissage para distender fascias tensas." },
      { step: "3. Estiramientos", detail: "Movilidad pasiva controlada dentro del rango fisiológico sin dolor." },
    ],
    duration: "15 a 20 minutos",
    frequency: "2 a 3 veces por semana como coadyuvante",
    contraindications: "Inflamación o hemorragia aguda en las primeras 48-72 horas.",
    image: "/images/clinical/terapia-chihuahua-laser.jpg",
    imageCaption: "Aplicación y acondicionamiento muscular en paciente pequeño",
  },
];

export function TherapyExplorer() {
  const [selectedId, setSelectedId] = useState<string>("hidroterapia");
  const current = therapies.find((t) => t.id === selectedId) || therapies[0];

  return (
    <div className="rounded-3xl bg-slate-100/90 p-2 sm:p-3 border border-slate-200/80 shadow-md">
      <div className="rounded-[1.4rem] bg-white p-5 sm:p-8 border border-slate-100">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-marine">
                Mundo Aparte · Protocolos Clínicos
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink mt-1">
              Explorador Interactivo de Terapias
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Conoce el fundamento científico, indicaciones y lo que experimentará tu mascota en cada sesión de fisioterapia.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400">Terapia seleccionada:</span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${current.badgeColor}`}>
              {current.name}
            </span>
          </div>
        </div>

        {/* Horizontal Mobile-Friendly Scrollable Selector Tabs */}
        <div className="py-4 -mx-2 px-2 overflow-x-auto scrollbar-none flex gap-2 sm:gap-3">
          {therapies.map((t) => {
            const active = t.id === selectedId;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelectedId(t.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 min-h-[46px] ${
                  active
                    ? "bg-brand-marine text-white shadow-md shadow-brand-marine/20 scale-[1.02]"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                <span className={active ? "text-emerald-300" : "text-brand-marine"}>
                  {t.icon("h-4 w-4")}
                </span>
                <span>{t.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Therapy Detailed View */}
        <div className="mt-4 pt-4 border-t border-slate-100 grid gap-6 lg:grid-cols-12">
          {/* Left / Top Overview */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                {current.tag}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-ink mt-0.5">
                {current.tagline}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                <strong className="text-brand-marine font-semibold block mb-1">Mecanismo de acción:</strong>
                {current.mechanism}
              </p>
            </div>

            {/* Conditions Bullet Grid */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Casos Clínicos Principales
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {current.conditions.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/60 text-xs sm:text-sm text-slate-700"
                  >
                    <svg
                      className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contraindications Warning */}
            <div className="rounded-2xl bg-amber-50/70 border border-amber-200/80 p-3.5 flex items-start gap-3 text-xs text-amber-800">
              <svg className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
              </svg>
              <div>
                <strong className="font-semibold block">Criterio de Seguridad & Contraindicación:</strong>
                {current.contraindications}
              </div>
            </div>
          </div>

          {/* Right / Session Flow & Parameters */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900 text-white p-5 sm:p-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              {/* Imagen clínica real del procedimiento */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 shadow-md bg-slate-800">
                <Image
                  src={current.image}
                  alt={current.imageCaption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
                <span className="absolute bottom-2 left-2.5 right-2.5 text-[11px] font-medium text-emerald-300 leading-tight">
                  {current.imageCaption}
                </span>
              </div>

              <div className="border-b border-white/10 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  Protocolo de Atención
                </span>
                <h5 className="text-base font-bold text-white mt-0.5">
                  ¿Cómo se vive la sesión?
                </h5>
              </div>

              {/* 3 Steps */}
              <div className="space-y-3">
                {current.sessionFlow.map((s, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-emerald-300 mb-0.5">{s.step}</div>
                    <div className="text-slate-300 leading-relaxed">{s.detail}</div>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Duración típica</span>
                  <span className="font-bold text-white">{current.duration}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Frecuencia sugerida</span>
                  <span className="font-bold text-emerald-300">{current.frequency}</span>
                </div>
              </div>
            </div>

            {/* Contextual WhatsApp Action */}
            <a
              href={whatsappLink(
                `Hola Dr. Fernando, me gustaría consultar si la ${current.name} en Mundo Aparte es adecuada para el caso clínico de mi mascota.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full mt-5 text-xs sm:text-sm py-3 px-4 text-center justify-center"
            >
              <span>Consultar sobre {current.name}</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
