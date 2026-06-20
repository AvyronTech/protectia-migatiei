import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Lock, FileText, Mail, ArrowLeft, Cookie, Scale, UserCheck, Database, Globe2 } from "lucide-react";

const EMAIL = "asociatiemigratie@gmail.com";
const URL_CANONICAL = "https://avyron.eu/confidentialitate";

export const Route = createFileRoute("/confidentialitate")({
  head: () => ({
    meta: [
      { title: "Politica de confidențialitate & GDPR — Asociația Europa Protecția Migrației" },
      {
        name: "description",
        content:
          "Politica de confidențialitate și protecție a datelor (GDPR) a Asociației Europa Protecția Migrației: ce date colectăm, cum le folosim și drepturile tale.",
      },
      { name: "keywords", content: "politica confidentialitate, GDPR, protectia datelor, Asociatia Europa, drepturi utilizatori, cookies" },
      { property: "og:title", content: "Politica de confidențialitate & GDPR — Asociația Europa" },
      { property: "og:description", content: "Cum protejăm datele tale personale conform GDPR — politică transparentă, accesibilă și completă." },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:url", content: URL_CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Politica de confidențialitate & GDPR" },
      { name: "twitter:description", content: "Politica de protecție a datelor a Asociației Europa Protecția Migrației." },
    ],
    links: [{ rel: "canonical", href: URL_CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Politica de confidențialitate & GDPR",
          url: URL_CANONICAL,
          inLanguage: "ro-RO",
          isPartOf: { "@type": "WebSite", name: "Asociația Europa Protecția Migrației", url: "https://avyron.eu" },
        }),
      },
    ],
  }),
  component: PrivacyPage,
});

const updated = "20 iunie 2026";

const sections = [
  {
    icon: Database,
    title: "1. Operatorul de date",
    body: (
      <>
        <p>
          Asociația Europa Protecția Migrației („Asociația", „noi") este operator de date cu caracter personal
          în sensul Regulamentului (UE) 2016/679 — GDPR. Ne poți contacta în orice moment privind protecția
          datelor la <a className="text-eu-blue underline-offset-2 hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </>
    ),
  },
  {
    icon: FileText,
    title: "2. Ce date colectăm",
    body: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li>Date de contact pe care ni le transmiți voluntar (nume, email, telefon) prin formulare sau email.</li>
        <li>Date tehnice anonime de navigare: tip de browser, sistem de operare, pagini vizitate, durata vizitei.</li>
        <li>Date pentru beneficiari: doar cele strict necesare pentru acordarea asistenței (juridice, sociale, etc.).</li>
        <li>Cookie-uri esențiale pentru funcționarea site-ului.</li>
      </ul>
    ),
  },
  {
    icon: Scale,
    title: "3. Temeiul legal",
    body: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li><strong>Consimțământul</strong> (art. 6(1)(a) GDPR) — pentru newsletter și formulare opționale.</li>
        <li><strong>Interesul legitim</strong> (art. 6(1)(f)) — pentru securitatea site-ului și analiza anonimă.</li>
        <li><strong>Obligație legală</strong> (art. 6(1)(c)) — pentru raportări către autorități competente.</li>
        <li><strong>Interes vital</strong> (art. 6(1)(d)) — în situații de protecție umanitară a beneficiarilor.</li>
      </ul>
    ),
  },
  {
    icon: UserCheck,
    title: "4. Drepturile tale (GDPR)",
    body: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li>Dreptul de acces, rectificare și ștergere („dreptul de a fi uitat").</li>
        <li>Dreptul la restricționarea sau opoziție față de prelucrare.</li>
        <li>Dreptul la portabilitatea datelor.</li>
        <li>Dreptul de a-ți retrage consimțământul în orice moment.</li>
        <li>Dreptul de a depune plângere la ANSPDCP (<a className="text-eu-blue underline-offset-2 hover:underline" href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">dataprotection.ro</a>).</li>
      </ul>
    ),
  },
  {
    icon: Cookie,
    title: "5. Cookie-uri",
    body: (
      <p>
        Folosim doar cookie-uri strict necesare pentru funcționarea site-ului (sesiune, preferințe limbă) și,
        eventual, cookie-uri analitice anonimizate. Poți gestiona cookie-urile din setările browser-ului tău.
      </p>
    ),
  },
  {
    icon: Globe2,
    title: "6. Transferuri de date",
    body: (
      <p>
        Datele sunt stocate pe servere din Uniunea Europeană. Nu transferăm date în afara SEE fără garanții
        adecvate (clauze contractuale standard ale Comisiei Europene).
      </p>
    ),
  },
  {
    icon: Lock,
    title: "7. Securitate și păstrare",
    body: (
      <p>
        Aplicăm măsuri tehnice și organizatorice adecvate: criptare în tranzit (HTTPS), acces limitat pe bază
        de rol, jurnalizare. Păstrăm datele doar atât timp cât este necesar scopului colectării sau cât impune
        legea aplicabilă.
      </p>
    ),
  },
  {
    icon: Mail,
    title: "8. Contact privind datele personale",
    body: (
      <p>
        Pentru orice solicitare privind datele tale personale, scrie-ne la{" "}
        <a className="text-eu-blue underline-offset-2 hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        Răspundem în cel mult 30 de zile, conform GDPR.
      </p>
    ),
  },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative isolate overflow-hidden bg-navy text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 80% at 15% 0%, color-mix(in oklab, var(--eu-blue) 55%, transparent) 0%, transparent 60%), radial-gradient(50% 70% at 90% 10%, color-mix(in oklab, var(--teal) 45%, transparent) 0%, transparent 65%), radial-gradient(45% 60% at 70% 110%, color-mix(in oklab, var(--eu-gold) 28%, transparent) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Înapoi acasă
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-eu-gold" />
            GDPR · Conform UE
          </div>
          <h1 className="mt-5 text-balance text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Politica de confidențialitate
            <span className="block bg-gradient-to-r from-eu-gold to-white bg-clip-text text-transparent">
              & protecția datelor
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Transparență, respect și control. Iată cum prelucrăm datele personale pe care ni le încredințezi,
            conform Regulamentului General privind Protecția Datelor (GDPR).
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/55">
            Ultima actualizare: {updated}
          </p>
        </div>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-5">
          {sections.map((s) => (
            <article
              key={s.title}
              className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-eu-blue/30 hover:shadow-glow sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-eu-blue/10 text-eu-blue transition-colors group-hover:bg-eu-blue group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold leading-snug text-navy sm:text-2xl">{s.title}</h2>
                  <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {s.body}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-10 overflow-hidden rounded-3xl p-7 text-white shadow-glow sm:p-9"
          style={{
            background:
              "linear-gradient(135deg, var(--navy), color-mix(in oklab, var(--eu-blue) 80%, var(--navy)))",
          }}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Ai întrebări despre datele tale?</h2>
              <p className="mt-2 max-w-xl text-sm text-white/80 sm:text-base">
                Echipa noastră îți răspunde în maximum 30 de zile, conform GDPR.
              </p>
            </div>
            <a
              href={`mailto:${EMAIL}?subject=GDPR%20%E2%80%94%20solicitare`}
              className="inline-flex items-center gap-2 self-start rounded-full bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-soft transition-transform hover:scale-[1.03] sm:self-auto"
            >
              <Mail className="h-4 w-4" /> Contactează responsabilul GDPR
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" /> Înapoi la pagina principală
          </Link>
        </div>
      </main>
    </div>
  );
}
