import { createFileRoute } from "@tanstack/react-router";
import { ErrorState } from "@/components/site/ErrorState";

function ServerErrorPage() {
  return (
    <ErrorState
      code="500"
      title="A apărut o eroare pe server"
      description="Ceva nu a funcționat la noi. Echipa a fost notificată — te rugăm să încerci din nou peste câteva momente sau revino la pagina principală."
      actions={[
        { label: "Reîncarcă", onClick: () => window.location.reload(), variant: "primary" },
        { label: "Înapoi acasă", to: "/", variant: "outline" },
      ]}
    />
  );
}

export const Route = createFileRoute("/500")({
  head: () => ({
    meta: [
      { title: "500 — Eroare server | Asociația Europa Protecția Migrației" },
      { name: "description", content: "A apărut o eroare pe serverul Asociației Europa Protecția Migrației." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ServerErrorPage,
});
