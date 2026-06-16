import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Protecția Migrației — Asociația Europa | ONG European pentru migranți" },
      {
        name: "description",
        content:
          "Asociația Europa – Protecția Migrației: ONG european care oferă asistență juridică, integrare și advocacy pentru migranți și refugiați. Mediaș, Sibiu — activ în 14 țări UE.",
      },
      { name: "keywords", content: "ONG migrație, protecția migrației, asistență refugiați, integrare europeană, Asociația Europa, Mediaș Sibiu, drepturi migranți, NGO Europe migration" },
      { property: "og:title", content: "Protecția Migrației — Asociația Europa" },
      {
        property: "og:description",
        content:
          "Construim punți pentru o Europă primitoare. Asistență juridică, integrare, advocacy pentru migranți și refugiați în 14 țări UE.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Protecția Migrației — Asociația Europa" },
      {
        name: "twitter:description",
        content: "ONG european dedicat protecției migranților și refugiaților.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "Asociația Europa — Protecția Migrației",
          description:
            "ONG european care oferă asistență juridică, integrare și advocacy pentru migranți și refugiați.",
          email: "asociatiemigratie@gmail.com",
          telephone: "+40758790124",
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
