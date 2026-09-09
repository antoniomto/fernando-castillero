"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site-config";

type Species = "perro" | "gato";

interface BodyZone {
  id: string;
  name: string;
  locationLabel: string;
  symptoms: string[];
  commonConditions: string[];
  recommendedCare: string;
  serviceBranch: "CANEM Hospital" | "Mundo Aparte Fisioterapia" | "Unidad de Prótesis";
}

const ZONES: Record<Species, BodyZone[]> = {
  perro: [
    {
      id: "cuello",
      name: "Cuello & Zona Cervical",
      locationLabel: "Región cervical y nuca",
      symptoms: [
        "Rehúsa agachar la cabeza para comer o beber",
        "Gime o se queja si tocas el collar o intentas ponerle la correa",
        "Camina con el cuello rígido y la cabeza baja",
      ],
      commonConditions: ["Hernia discal cervical (IVDD)", "Contractura miofascial aguda", "Meningitis o inestabilidad atlantoaxial"],
      recommendedCare: "Examen neurológico + Láser Clase IV analgésico + reposo guiado sin collar (usar arnés de pecho).",
      serviceBranch: "Mundo Aparte Fisioterapia",
    },
    {
      id: "hombro-codo",
      name: "Hombro & Codo (Patas Delanteras)",
      locationLabel: "Miembros anteriores",
      symptoms: [
        "Cojera al levantarse que disminuye tras unos pasos de calentamiento",
        "Rechaza bajar escaleras o saltar del auto",
        "Mete o saca los codos hacia afuera al trotar",
      ],
      commonConditions: ["Displasia de codo (FCP / UAP)", "Osteocondritis disecante (OCD)", "Tendinopatía bicipital"],
      recommendedCare: "Radiología digital en CANEM + Hidroterapia en cinta subacuática para proteger cartílago articular.",
      serviceBranch: "CANEM Hospital",
    },
    {
      id: "columna",
      name: "Columna & Lomo (Toracolumbar)",
      locationLabel: "Espalda media y baja",
      symptoms: [
        "Lomo arqueado hacia arriba ('xifosis') y abdomen tenso",
        "Temblores en patas traseras al defecar o pararse",
        "Arrastra las uñas de las patas de atrás contra el pavimento",
      ],
      commonConditions: ["Extrusión discal (hernia de disco)", "Espondilosis deformante ('picos de loro')", "Lumbosacra / Síndrome de Cauda Equina"],
      recommendedCare: "Triage neurológico urgente si hay pérdida de sensibilidad + Electroestimulación NMES y descompresión.",
      serviceBranch: "Mundo Aparte Fisioterapia",
    },
    {
      id: "cadera",
      name: "Cadera & Pelvis",
      locationLabel: "Articulación coxofemoral",
      symptoms: [
        "Marcha en conejo: corre brincando con ambas patas traseras a la vez",
        "Dificultad evidente para pararse en pisos lisos o azulejo",
        "Pérdida de masa muscular en muslos (se ve 'delgado de atrás')",
      ],
      commonConditions: ["Displasia de cadera bilateral", "Osteoartrosis severa (OA)", "Subluxación coxofemoral"],
      recommendedCare: "Protocolo multimodal: Hidroterapia Mundo Aparte + control de peso WSAVA + condroprotectores y láser.",
      serviceBranch: "Mundo Aparte Fisioterapia",
    },
    {
      id: "rodilla",
      name: "Rodilla & Babilla",
      locationLabel: "Articulación de la rodilla",
      symptoms: [
        "Cojera súbita tras una carrera o giro brusco en el parque",
        "Mantiene la pata en el aire o apoya solo la punta de los dedos",
        "'Clic' o chasquido perceptible al flexionar la articulación",
      ],
      commonConditions: ["Rotura de ligamento cruzado craneal (LCC)", "Luxación de rótula medial (común en razas pequeñas)", "Artritis femorotibial"],
      recommendedCare: "Cirugía correctiva TPLO / TTA en CANEM o rodillera biomecánica estabilizadora si no es candidato quirúrgico.",
      serviceBranch: "CANEM Hospital",
    },
    {
      id: "tarso-carpo",
      name: "Carpo & Tarso (Muñecas & Tobillos)",
      locationLabel: "Extremidades distales",
      symptoms: [
        "La muñeca se dobla casi hasta tocar el suelo al pisar ('plantigrado')",
        "Engrosamiento o líquido visible alrededor del talón",
        "Lamido obsesivo en una sola articulación hasta dejarla sin pelo",
      ],
      commonConditions: ["Hiperextensión carpiana por rotura de ligamentos palmares", "Tendinitis aquilea", "Artrosis tarsal"],
      recommendedCare: "Órtesis biomecánica a medida (Unidad de Prótesis) para devolver el soporte sin perder la extremidad.",
      serviceBranch: "Unidad de Prótesis",
    },
  ],
  gato: [
    {
      id: "columna-gato",
      name: "Columna & Región Lumbar",
      locationLabel: "Lomo y zona pélvica felina",
      symptoms: [
        "Ya no salta a su repisa, mesa o rascador favorito",
        "Pelaje opaco o descuidado en el lomo (le duele girarse para acicalarse)",
        "Gruñe o muerde si intentas cepillar la zona trasera",
      ],
      commonConditions: ["Espondilosis felina", "Artrosis lumbar y lumbosacra", "Dolor neuropático felino"],
      recommendedCare: "Láser terapéutico indoloro (muy bien tolerado por felinos) + adecuación ambiental con rampas.",
      serviceBranch: "Mundo Aparte Fisioterapia",
    },
    {
      id: "cadera-gato",
      name: "Cadera & Codo Felino",
      locationLabel: "Articulaciones mayores",
      symptoms: [
        "Usa sillas intermedias como escalón en vez de saltar de una vez",
        "Defeca o micciona fuera del arenero porque le cuesta entrar al borde alto",
        "Pasa mucho más tiempo durmiendo y menos interactuando",
      ],
      commonConditions: ["Osteoartrosis felina geriátrica (presente en 90% de gatos > 12 años)", "Displasia felina"],
      recommendedCare: "Terapia de fotobiomodulación + nutrición antiinflamatoria sin estrés hospitalario.",
      serviceBranch: "Mundo Aparte Fisioterapia",
    },
    {
      id: "trauma-gato",
      name: "Pelvis & Extremidades (Caídas)",
      locationLabel: "Traumatología",
      symptoms: [
        "Incapacidad para mover patas traseras tras escape o caída de ventana",
        "Cola caída sin movimiento o dolor agudo al tacto",
      ],
      commonConditions: ["Síndrome del gato paracaidista", "Fractura de fémur o pelvis", "Tromboembolismo aórtico"],
      recommendedCare: "Atención hospitalaria inmediata 24/7 en quirófano CANEM para estabilización y radiología.",
      serviceBranch: "CANEM Hospital",
    },
  ],
};

export function PainAtlas() {
  const [species, setSpecies] = useState<Species>("perro");
  const [selectedId, setSelectedId] = useState<string>("cadera");

  const zones = ZONES[species];
  const current = zones.find((z) => z.id === selectedId) || zones[0];

  const handleSpeciesChange = (newSpecies: Species) => {
    setSpecies(newSpecies);
    setSelectedId(ZONES[newSpecies][0].id);
  };

  return (
    <div className="rounded-3xl bg-slate-100/90 p-2 sm:p-3 border border-slate-200/80 shadow-md">
      <div className="rounded-[1.4rem] bg-white p-5 sm:p-8 border border-slate-100">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-marine">
                Herramienta Visual de Localización
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink mt-1">
              Atlas Anatómico del Dolor en Mascotas
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Toca la zona del cuerpo donde notas molestia o cambios de comportamiento para identificar la sospecha clínica.
            </p>
          </div>

          {/* Species Toggle */}
          <div className="inline-flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto">
            <button
              type="button"
              onClick={() => handleSpeciesChange("perro")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                species === "perro"
                  ? "bg-brand-marine text-white shadow-sm"
                  : "text-slate-600 hover:text-ink"
              }`}
            >
              🐕 Caninos (Perro)
            </button>
            <button
              type="button"
              onClick={() => handleSpeciesChange("gato")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                species === "gato"
                  ? "bg-brand-marine text-white shadow-sm"
                  : "text-slate-600 hover:text-ink"
              }`}
            >
              🐈 Felinos (Gato)
            </button>
          </div>
        </div>

        {/* Anatomical Zones Button Grid (100% Mobile Touch Friendly) */}
        <div className="py-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Selecciona la zona anatómica con molestia:
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {zones.map((z) => {
              const active = z.id === selectedId;
              return (
                <button
                  key={z.id}
                  type="button"
                  onClick={() => setSelectedId(z.id)}
                  className={`p-3.5 rounded-2xl text-left border transition-all duration-200 min-h-[56px] flex items-center justify-between gap-3 ${
                    active
                      ? "bg-brand-marine text-white border-brand-marine shadow-md scale-[1.01]"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200/80"
                  }`}
                >
                  <div>
                    <div className="text-xs sm:text-sm font-bold leading-tight">{z.name}</div>
                    <div className={`text-[10px] mt-0.5 ${active ? "text-emerald-300" : "text-slate-500"}`}>
                      {z.locationLabel}
                    </div>
                  </div>
                  <span
                    className={`h-3 w-3 rounded-full shrink-0 ${
                      active ? "bg-emerald-400 ring-4 ring-white/20" : "bg-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Clinical Diagnostic Output for Selected Zone */}
        <div className="mt-2 pt-5 border-t border-slate-100 grid gap-6 lg:grid-cols-12">
          {/* Left: Symptoms & Suspicions */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200">
                  Zona en revisión
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {current.locationLabel}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-ink">
                {current.name}
              </h4>
            </div>

            {/* Observed Symptoms */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Señales que puedes notar en casa:
              </div>
              <ul className="space-y-2">
                {current.symptoms.map((s, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs sm:text-sm text-slate-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinical Conditions */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Patologías clínicas comúnmente diagnosticadas:
              </div>
              <div className="flex flex-wrap gap-2">
                {current.commonConditions.map((c, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-ink"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Care pathway & WhatsApp action */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900 text-white p-5 sm:p-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  Ruta de Tratamiento en Aguascalientes
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/10 text-emerald-300 border border-white/15">
                    {current.serviceBranch}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                  Abordaje Clínico Recomendado:
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-white/5 p-3.5 rounded-xl border border-white/10">
                  {current.recommendedCare}
                </p>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                * Esta guía es orientativa. El dolor articular debe confirmarse con exploración ortopédica y pruebas diagnósticas.
              </p>
            </div>

            {/* Direct CTA */}
            <a
              href={whatsappLink(
                `Hola Dr. Fernando, utilicé el Atlas del Dolor para mi ${species}: noto molestias en ${current.name}. Me gustaría agendar una valoración médica.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full mt-5 text-xs sm:text-sm py-3 px-4 text-center justify-center"
            >
              <span>Consultar caso de {current.name}</span>
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
