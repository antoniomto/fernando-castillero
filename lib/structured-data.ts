import { siteConfig } from "./site-config";

export const veterinaryBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: `${siteConfig.name} · ${siteConfig.role}`,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/logo.svg`,
  logo: `${siteConfig.url}/logo.svg`,
  telephone: siteConfig.contact.telefono,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.direccion,
    addressLocality: siteConfig.contact.ciudad,
  },
  openingHours: siteConfig.contact.horarios,
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter(
    (u) => u && !u.startsWith("{{")
  ),
  founder: {
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
  },
  makesOffer: [
    "Hidroterapia",
    "Laserterapia",
    "Masaje terapéutico",
    "Rehabilitación post-quirúrgica",
    "Fisioterapia geriátrica",
    "Rehabilitación deportiva",
  ].map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s },
  })),
};

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: `${siteConfig.url}/sobre`,
    image: `${siteConfig.url}/images/fernando.jpg`,
    sameAs: [siteConfig.social.instagram],
    worksFor: {
      "@type": "Organization",
      name: siteConfig.franquicia,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteConfig.url}${it.url}`,
    })),
  };
}

export function articleSchema(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: `${siteConfig.url}/sobre`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.svg`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}
