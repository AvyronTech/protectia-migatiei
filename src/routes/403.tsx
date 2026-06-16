import { createFileRoute } from "@tanstack/react-router";
import { ErrorState } from "@/components/site/ErrorState";

function ForbiddenPage() {
  return (
    <ErrorState
      code="403"
      title="Acces interzis"
      description="Nu ai permisiunea să accesezi această pagină. Dacă ai ajuns aici dintr-un link primit, verifică să fii autentificat sau revino la pagina principală."
      actions={[
        { label: "Înapoi acasă", to: "/", variant: "primary" },
        { label: "Contact", href: "mailto:asociatiemigratie@gmail.com", variant: "outline" },
      ]}
    />
  );
}

export const Route = createFileRoute("/403")({
  head: () => ({
    meta: [
      { title: "403 — Acces interzis | Asociația Europa Protecția Migrației" },
      { name: "description", content: "Nu ai permisiunea să accesezi această pagină a Asociației Europa Protecția Migrației." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ForbiddenPage,
});
