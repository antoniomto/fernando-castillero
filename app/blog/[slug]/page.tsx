import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/content/blog/posts";
import { whatsappLink } from "@/lib/site-config";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post no encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const paragraphs = post.content
    .trim()
    .split("\n\n")
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <article className="section">
      <JsonLd data={articleSchema(post)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: post.title, url: `/blog/${post.slug}` },
      ])} />
      <div className="container-tight max-w-3xl">
        <Link href="/blog" className="text-brand-teal text-sm hover:text-brand-teal-2 transition">
          ← Volver al blog
        </Link>

        <header className="mt-6 mb-10">
          <div className="flex items-center gap-3 text-xs text-ink-muted mb-3">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" })}
            </time>
            <span aria-hidden>·</span>
            <span>{post.readingMin} min lectura</span>
          </div>
          <h1 className="text-ink">{post.title}</h1>
          <p className="mt-4 text-ink-soft text-lg">{post.excerpt}</p>
        </header>

        <div className="prose max-w-none space-y-6 text-ink">
          {paragraphs.map((block, i) => {
            if (block.startsWith("## ")) return <h2 key={i} className="text-ink mt-8">{block.slice(3)}</h2>;
            if (block.startsWith("- ")) {
              const items = block.split("\n").map((l) => l.replace(/^-\s*/, ""));
              return (
                <ul key={i} className="list-disc list-inside space-y-1 text-ink-soft">
                  {items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              );
            }
            return <p key={i} className="text-ink-soft leading-relaxed">{block}</p>;
          })}
        </div>

        <div className="mt-16 rounded-2xl bg-brand-teal text-white p-8 text-center">
          <h3 className="text-white">¿Tenés dudas sobre tu mascota?</h3>
          <p className="mt-3 text-white/80">
            Escribime por WhatsApp y conversamos.
          </p>
          <a
            href={whatsappLink(`Hola Fernando, leí el artículo "${post.title}" y me quedaron algunas dudas.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-6"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
