import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { posts } from "@/content/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const routes = [
    "",
    "/sobre",
    "/servicios",
    "/herramientas",
    "/herramientas/explorador-terapias",
    "/herramientas/guia-protesis",
    "/herramientas/triage-urgencias",
    "/herramientas/atlas-dolor",
    "/herramientas/test-movilidad",
    "/herramientas/calculadora-alimentacion",
    "/herramientas/presupuesto-mascota",
    "/herramientas/recuperacion-post-cirugia",
    "/blog",
    "/contacto",
  ].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));

  const postUrls = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...routes, ...postUrls];
}
