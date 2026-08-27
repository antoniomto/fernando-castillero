import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/content/blog/posts";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre fisioterapia y rehabilitación veterinaria: cuidados, prevención y bienestar animal.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-brand-teal text-white section">
        <div className="container-tight text-center">
          <span className="eyebrow">Blog</span>
          <h1 className="mt-3 text-white">Educación y cuidados</h1>
          <p className="mt-4 text-white/80 text-lg">
            Artículos prácticos para entender mejor a tu mascota y prevenir problemas de movilidad.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Últimos artículos" center />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card group hover:shadow-md hover:border-brand-teal/40 hover:-translate-y-0.5 transition-all flex flex-col"
              >
                <div className="aspect-video rounded-xl bg-ink/5 mb-4 flex items-center justify-center text-ink/20 text-xs">
                  [ imagen del post ]
                </div>
                <div className="flex items-center gap-3 text-xs text-ink-muted mb-2">
                  <time dateTime={p.date}>
                    {new Date(p.date).toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" })}
                  </time>
                  <span aria-hidden>·</span>
                  <span>{p.readingMin} min lectura</span>
                </div>
                <h3 className="text-ink text-xl group-hover:text-brand-teal transition mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-ink-soft flex-grow">{p.excerpt}</p>
                <span className="mt-4 text-brand-teal font-medium text-sm">Leer más →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
