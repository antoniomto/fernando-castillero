import Link from "next/link";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ToolCard } from "@/components/ui/ToolCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/home/Hero";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { ProblemSection } from "@/components/home/ProblemSection";
import { FernandoTimeline } from "@/components/home/FernandoTimeline";
import { GalleryMosaic } from "@/components/home/GalleryMosaic";
import { Testimonials } from "@/components/home/Testimonials";
import { whatsappLink } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <SocialProofBar />
      <ProblemSection />

      {/* CÓMO TRABAJAMOS */}
      <section className="section bg-canvas-soft relative">
        <div className="container">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="eyebrow">Cómo trabajamos</span>
              <h2 className="mt-4 text-ink">
                De la primera consulta
                <br />
                a la <span className="text-brand-teal">recuperación</span>.
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                Un proceso claro, paso a paso, sin sorpresas.
              </p>
            </div>
          </Reveal>

          <div className="relative max-w-5xl mx-auto">
            <div
              aria-hidden
              className="hidden md:block absolute top-14 left-[16.66%] right-[16.66%] h-[2px] bg-gradient-to-r from-brand-teal/0 via-brand-gold/50 to-brand-teal/0"
            />
            <div className="grid gap-10 md:grid-cols-3 relative">
              {[
                { n: "1", title: "Escribinos por WhatsApp", desc: "Contanos qué le pasa a tu mascota. Te respondemos en menos de 1 hora en horario de atención." },
                { n: "2", title: "Evaluación inicial", desc: "Fernando examina a tu mascota y define un plan personalizado según diagnóstico y objetivos." },
                { n: "3", title: "Plan de sesiones", desc: "Empezamos las terapias con seguimiento continuo. Vas viendo los resultados semana a semana." },
              ].map((step, i) => (
                <Reveal key={step.n} delay={(i + 1) as 1 | 2 | 3}>
                  <div className="text-center relative">
                    <div className="mx-auto h-16 w-16 rounded-full bg-brand-teal text-white font-display text-2xl font-semibold flex items-center justify-center shadow-lg ring-8 ring-canvas-soft relative z-10">
                      {step.n}
                    </div>
                    <h3 className="text-ink mt-6 mb-3 text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm text-ink-soft leading-relaxed max-w-xs mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="section bg-canvas">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Tratamientos"
              title="Terapias y servicios que ofrecemos"
              subtitle="Combinamos técnicas complementarias para diseñar el mejor plan para tu mascota."
              center
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="card group hover:shadow-xl hover:border-brand-teal/30 hover:-translate-y-1 transition-all h-full">
                  <div className="h-14 w-14 rounded-2xl bg-brand-gold-tint text-brand-teal flex items-center justify-center mb-5 group-hover:bg-brand-teal group-hover:text-white group-hover:rotate-3 transition-all">
                    <ServiceIcon name={s.icon} className="h-7 w-7" />
                  </div>
                  <h4 className="text-ink mb-2 text-xl font-semibold">{s.title}</h4>
                  <p className="text-sm text-ink-soft leading-relaxed">{s.short}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 text-center">
              <Link href="/servicios" className="btn-dark">
                Ver detalle de servicios
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FernandoTimeline />

      {/* HERRAMIENTAS */}
      <section className="section bg-canvas-cream">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Herramientas gratuitas"
              title="Recursos prácticos para el día a día"
              subtitle="Calculadoras y guías que te ayudan a cuidar mejor a tu mascota. Sin registro, sin costo."
              center
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { href: "/herramientas/calculadora-alimentacion", title: "Calculadora de alimentación", description: "Calorías y gramos diarios recomendados según peso, edad, actividad y estado.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><path d="M6 3v18M6 8h12l-1 6H7" strokeLinecap="round" /></svg> },
              { href: "/herramientas/presupuesto-mascota", title: "Presupuesto mensual", description: "Estimación mensual del costo de tener un perro o gato: alimento, vet, higiene y accesorios.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><circle cx="12" cy="12" r="9" /><path d="M12 6v12M9 9h4a2 2 0 1 1 0 4h-2a2 2 0 1 0 0 4h5" strokeLinecap="round" /></svg> },
              { href: "/herramientas/recuperacion-post-cirugia", title: "Recuperación post-cirugía", description: "Timeline semana a semana + checklist descargable según el tipo de cirugía.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" /><circle cx="18" cy="18" r="3" /></svg> },
            ].map((t, i) => (
              <Reveal key={t.href} delay={(i + 1) as 1 | 2 | 3}>
                <ToolCard {...t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GalleryMosaic />
      <Testimonials />

      {/* CTA FINAL — bloque fuerte teal, ancla visual antes del footer */}
      <section className="relative bg-brand-teal text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-40">
          <div className="deco-blob bg-brand-gold w-[420px] h-[420px] -top-16 -right-24" />
          <div className="deco-blob bg-brand-teal-2 w-[500px] h-[500px] -bottom-32 -left-16" style={{ animationDelay: "-10s" }} />
        </div>

        <div className="container-tight relative py-20 md:py-32">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-xs md:text-sm uppercase tracking-[0.22em] text-brand-gold font-semibold">
                Empezá hoy
              </span>
              <h2 className="mt-4 text-white">
                Cada semana sin fisioterapia
                <br />
                es <span className="font-italic italic font-semibold text-brand-gold">músculo que se pierde</span>.
              </h2>
              <p className="mt-8 text-white/85 text-lg leading-relaxed max-w-2xl mx-auto">
                Escribime por WhatsApp y coordinamos una evaluación esta misma semana.
                Te respondo en menos de 1 hora en horario de atención.
              </p>
              <a
                href={whatsappLink("Hola Fernando, quería coordinar una evaluación de fisioterapia esta semana.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-10 text-base px-8 py-4"
              >
                Coordinar evaluación por WhatsApp
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <p className="mt-6 text-xs text-white/60">
                Sin compromiso · Respuesta rápida · {`{{PROMESA_EXTRA}}`}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
