import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asociația Europa Protecția Migrației — ONG european" },
      {
        name: "description",
        content:
          "Asociația Europa Protecția Migrației — ONG european cu scopul protecției migrației: asistență juridică, integrare și advocacy pentru migranți și refugiați. Sediu Mediaș, Sibiu.",
      },
      { name: "keywords", content: "Asociația Europa Protecția Migrației, ONG migrație, protecția migrației, asistență refugiați, integrare europeană, Mediaș Sibiu" },
      { property: "og:title", content: "Asociația Europa Protecția Migrației" },
      {
        property: "og:description",
        content:
          "ONG european dedicat protecției migrației: asistență juridică, integrare și advocacy pentru migranți și refugiați.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:url", content: "https://avyron.eu/" },
      { property: "og:image", content: "https://avyron.eu/__l5e/assets-v1/d0fa8b46-9d23-4b7d-a1d6-bae48788ab63/logo-tight.png" },
      { property: "og:image:alt", content: "Asociația Europa Protecția Migrației" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Asociația Europa Protecția Migrației" },
      {
        name: "twitter:description",
        content: "ONG european dedicat protecției migrației — protejăm migranții și refugiații.",
      },
      { name: "twitter:image", content: "https://avyron.eu/__l5e/assets-v1/d0fa8b46-9d23-4b7d-a1d6-bae48788ab63/logo-tight.png" },
    ],
    links: [{ rel: "canonical", href: "https://avyron.eu/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "Asociația Europa Protecția Migrației",
          alternateName: "Asociația Europa",
          description:
            "ONG european cu scopul protecției migrației — oferă asistență juridică, integrare și advocacy pentru migranți și refugiați.",
          email: "asociatiemigratie@gmail.com",
          telephone: "+40724425003",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Str. Tineretului nr. 11, bl. 7, sc. B, ap. 59",
            addressLocality: "Mediaș",
            addressRegion: "Sibiu",
            addressCountry: "RO",
          },
          areaServed: "EU",
        }),
      },
    ],
  }),
  component: LandingPage,
});
