import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Heart,
  ShieldCheck,
  Sparkles,
  Building2,
  CreditCard,
  Mail,
  Copy,
  Check,
  Users,
  GraduationCap,
  Scale,
  HeartPulse,
  HandHeart,
  Star,
  ArrowRight,
} from "lucide-react";

const URL_CANONICAL = "https://avyron.eu/doneaza";
const EMAIL = "asociatiemigratie@gmail.com";

const IBAN = "RO00 BTRL 0000 0000 0000 0000";
const BANK = "Banca Transilvania";
const SWIFT = "BTRLRO22";
const BENEFICIARY = "Asociația Europa Protecția Migrației";
const CUI = "00000000";

const AMOUNTS = [10, 25, 50, 100, 250, 500];

export const Route = createFileRoute("/doneaza")({
  head: () => ({
    meta: [
      { title: "Donează — Susține Asociația Europa Protecția Migrației" },
      {
        name: "description",
        content:
          "Donează pentru migranți și refugiați: asistență juridică, integrare și advocacy la nivel european. Donații unice sau lunare, card, transfer bancar, SMS, redirecționare 3,5%.",
      },
      {
        name: "keywords",
        content:
          "donatii, donează ong, donează refugiati, donatie lunara, redirecționare 3.5%, asociatie europa, donează card",
      },
      { property: "og:title", content: "Donează — Asociația Europa Protecția Migrației" },
      { property: "og:description", content: "Fiecare contribuție deschide un drum nou. Donează simplu, sigur, cu impact măsurabil." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:url", content: URL_CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Donează — Asociația Europa" },
      { name: "twitter:description", content: "Susține misiunea pentru o Europă primitoare." },
    ],
    links: [{ rel: "canonical", href: URL_CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DonateAction",
          name: "Donează — Asociația Europa Protecția Migrației",
          url: URL_CANONICAL,
          recipient: {
            "@type": "NGO",
            name: BENEFICIARY,
            url: "https://avyron.eu",
          },
          inLanguage: "ro-RO",
        }),
      },
    ],
  }),
  component: DonatePage,
});

function DonatePage() {
  const [freq, setFreq] = useState<"once" | "monthly">("monthly");
  const [amount, setAmount] = useState<number>(50);
  const [custom, setCustom] = useState<string>("");
  const [copied, setCopied] = useState<string | null>(null);

  const finalAmount = useMemo(() => {
    const c = Number(custom);
    return Number.isFinite(c) && c > 0 ? Math.round(c) : amount;
  }, [custom, amount]);

  const donateHref = useMemo(() => {
    const subject = encodeURIComponent(
      `Donație ${freq === "monthly" ? "lunară" : "unică"}: ${finalAmount} RON`
    );
    const body = encodeURIComponent(
      `Bună,\n\nDoresc să fac o donație ${freq === "monthly" ? "lunară" : "unică"} de ${finalAmount} RON.\n\nVă rog să-mi trimiteți instrucțiunile de plată.\n\nMulțumesc.`
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }, [freq, finalAmount]);

  const copy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 80% at 10% 0%, color-mix(in oklab, var(--eu-blue) 60%, transparent) 0%, transparent 60%), radial-gradient(50% 70% at 90% 10%, color-mix(in oklab, var(--teal) 50%, transparent) 0%, transparent 65%), radial-gradient(45% 65% at 60% 110%, color-mix(in oklab, var(--eu-gold) 35%, transparent) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] mix-blend-screen"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Înapoi acasă
            </Link>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-eu-gold/40 bg-eu-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-eu-gold">
              <Heart className="h-3.5 w-3.5" /> Donație sigură
            </div>

            <h1 className="mt-5 text-balance text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Fiecare donație
              <br />
              <span
                className="text-gradient"
                style={{ backgroundImage: "linear-gradient(135deg, var(--eu-gold), white)" }}
              >
                deschide un drum.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Susții asistență juridică gratuită, cursuri de limbă, integrare profesională și sprijin
              psihologic pentru migranți și refugiați din Europa.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2 text-xs">
              <li className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 font-semibold text-white/85">
                <ShieldCheck className="h-3.5 w-3.5 text-teal" /> Transparență 100%
              </li>
              <li className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 font-semibold text-white/85">
                <Star className="h-3.5 w-3.5 text-eu-gold" /> Deductibil fiscal
              </li>
              <li className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 font-semibold text-white/85">
                <Users className="h-3.5 w-3.5 text-teal" /> 120+ familii sprijinite
              </li>
            </ul>
          </div>

          {/* Donation card */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2.5rem] opacity-60 blur-2xl"
              style={{ background: "linear-gradient(135deg, var(--eu-gold), var(--teal))" }}
            />
            <div className="rounded-[2rem] border border-white/15 bg-white/[0.06] p-5 backdrop-blur-xl shadow-glow sm:p-7">
              {/* Frequency */}
              <div className="inline-flex w-full rounded-full bg-black/30 p-1 ring-1 ring-white/10">
                {[
                  { k: "monthly" as const, label: "Lunar" },
                  { k: "once" as const, label: "O singură dată" },
                ].map((f) => (
                  <button
                    key={f.k}
                    onClick={() => setFreq(f.k)}
                    className={`flex-1 rounded-full px-3 py-2 text-xs font-bold transition-all sm:text-sm ${
                      freq === f.k
                        ? "bg-eu-gold text-navy shadow-soft"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Amounts */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {AMOUNTS.map((a) => {
                  const active = !custom && amount === a;
                  return (
                    <button
                      key={a}
                      onClick={() => {
                        setAmount(a);
                        setCustom("");
                      }}
                      className={`rounded-2xl border px-3 py-3 text-sm font-bold transition-all ${
                        active
                          ? "border-eu-gold bg-eu-gold/15 text-white shadow-glow"
                          : "border-white/15 bg-white/5 text-white/80 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {a} <span className="text-[10px] font-semibold text-white/60">RON</span>
                    </button>
                  );
                })}
              </div>

              {/* Custom */}
              <label className="mt-3 block text-[11px] font-semibold uppercase tracking-wider text-white/60">
                Sau alege suma ta
              </label>
              <div className="mt-1.5 flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-3 py-2.5">
                <input
                  type="number"
                  inputMode="numeric"
                  min={1}
                  placeholder="Ex. 75"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value.replace(/[^0-9]/g, ""))}
                  className="w-full bg-transparent text-base font-bold text-white placeholder-white/35 outline-none"
                />
                <span className="text-xs font-bold text-white/60">RON</span>
              </div>

              {/* Impact hint */}
              <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-3 text-[12px] leading-relaxed text-white/80">
                <span className="font-bold text-eu-gold">{finalAmount} RON</span>{" "}
                {freq === "monthly" ? "lunar" : "acum"} înseamnă{" "}
                {finalAmount >= 250
                  ? "o ședință de asistență juridică completă pentru o familie."
                  : finalAmount >= 100
                  ? "un pachet de integrare (limbă + orientare) pentru un adult."
                  : finalAmount >= 50
                  ? "materiale educaționale pentru un copil refugiat o lună."
                  : "transport și acces la servicii esențiale pentru o săptămână."}
              </div>

              {/* Donate buttons */}
              <a
                href={donateHref}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-eu-gold px-5 py-3.5 text-sm font-black text-navy shadow-glow transition-transform hover:scale-[1.02]"
              >
                <HandHeart className="h-4 w-4" /> Donează {finalAmount} RON
                {freq === "monthly" ? " / lună" : ""}
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-center text-[11px] text-white/55">
                Procesare securizată · Date confidențiale · Confirmare pe email
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT TIERS */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-eu-blue">
            <span className="inline-block h-px w-8 bg-eu-blue" /> Impactul donației tale
          </p>
          <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Bani transformați în drumuri concrete.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Fiecare contribuție este alocată direct programelor noastre. Iată ce poate face donația ta.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: GraduationCap,
              amount: "25 RON",
              title: "Carte & materiale",
              desc: "Susții materiale educaționale pentru un copil refugiat timp de o lună.",
            },
            {
              icon: Scale,
              amount: "100 RON",
              title: "Consultanță juridică",
              desc: "Acoperi o oră de asistență juridică gratuită pentru un caz de azil.",
            },
            {
              icon: HeartPulse,
              amount: "250 RON",
              title: "Sprijin psihologic",
              desc: "Permiți o ședință de consiliere pentru o victimă a traficului de persoane.",
            },
            {
              icon: Building2,
              amount: "500 RON",
              title: "Integrare completă",
              desc: "Acoperi un pachet lunar de integrare pentru o familie nou-venită.",
            },
          ].map((t) => (
            <article
              key={t.title}
              className="group h-full rounded-3xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-eu-gold/40 hover:shadow-glow"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-eu-blue/10 text-eu-blue transition-colors group-hover:bg-eu-gold/15 group-hover:text-eu-gold">
                <t.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-teal">{t.amount}</p>
              <h3 className="mt-1 text-lg font-bold text-navy">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* OTHER WAYS */}
      <section className="bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-eu-blue">
              <span className="inline-block h-px w-8 bg-eu-blue" /> Alte metode de donație
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-navy sm:text-4xl">
              Alege metoda care ți se potrivește.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {/* Card */}
            <article className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-eu-gold/15 text-eu-gold">
                <CreditCard className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy">Card bancar</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Donații unice sau recurente prin card, procesate securizat. Primești confirmare pe email.
              </p>
              <a
                href={donateHref}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-xs font-bold text-white transition-transform hover:scale-[1.03]"
              >
                Donează cu cardul <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>

            {/* Bank transfer */}
            <article className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-eu-blue/10 text-eu-blue">
                <Building2 className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy">Transfer bancar</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Pentru donații recurente, persoane juridice sau sponsorizări — folosește datele de mai jos.
              </p>
              <dl className="mt-4 space-y-2 text-xs">
                {[
                  { k: "Beneficiar", v: BENEFICIARY },
                  { k: "IBAN", v: IBAN, copy: true },
                  { k: "Bancă", v: BANK },
                  { k: "SWIFT/BIC", v: SWIFT },
                  { k: "CUI", v: CUI },
                ].map((r) => (
                  <div key={r.k} className="flex items-center justify-between gap-2 rounded-lg bg-surface px-3 py-2">
                    <div className="min-w-0">
                      <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        {r.k}
                      </dt>
                      <dd className="truncate font-mono text-[12px] font-semibold text-navy">{r.v}</dd>
                    </div>
                    {r.copy && (
                      <button
                        onClick={() => copy(r.v, r.k)}
                        aria-label={`Copiază ${r.k}`}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-white text-navy/70 transition-colors hover:text-eu-blue"
                      >
                        {copied === r.k ? <Check className="h-3.5 w-3.5 text-teal" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    )}
                  </div>
                ))}
              </dl>
            </article>

            {/* 3.5% redirection */}
            <article className="rounded-3xl border border-eu-gold/40 bg-gradient-to-br from-white to-eu-gold/5 p-6 shadow-glow">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-eu-gold text-navy">
                <Sparkles className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy">Redirecționează 3,5%</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Direcționează 3,5% din impozitul tău pe venit către Asociația Europa — fără cost suplimentar
                pentru tine, formularul 230 se depune online.
              </p>
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent("Solicitare formular 230")}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-eu-gold px-4 py-2.5 text-xs font-bold text-navy transition-transform hover:scale-[1.03]"
              >
                Solicită formularul 230 <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* TRUST / FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        <h2 className="text-balance text-3xl font-black tracking-tight text-navy sm:text-4xl">
          Întrebări frecvente
        </h2>
        <div className="mt-8 divide-y divide-border rounded-3xl border border-border bg-card">
          {FAQ.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-bold text-navy">
                {f.q}
                <span className="text-eu-blue transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-surface p-6 text-center sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-eu-blue">Ai întrebări?</p>
          <h3 className="mt-2 text-2xl font-black tracking-tight text-navy">Suntem aici pentru tine.</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Scrie-ne și îți răspundem în maxim 2 zile lucrătoare.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
          >
            <Mail className="h-4 w-4" /> {EMAIL}
          </a>
        </div>
      </section>
    </div>
  );
}

const FAQ = [
  {
    q: "Donațiile sunt deductibile fiscal?",
    a: "Da. Persoanele juridice pot deduce sponsorizările conform legislației în vigoare, iar persoanele fizice pot redirecționa 3,5% din impozitul pe venit prin formularul 230.",
  },
  {
    q: "Pot opri donația lunară în orice moment?",
    a: "Da, fără penalități. Ne scrii un email sau ne contactezi telefonic și oprim debitarea imediat.",
  },
  {
    q: "Cum aflu cum sunt folosiți banii?",
    a: "Publicăm anual un raport de activitate și un raport financiar pe site. Suntem auditați conform standardelor europene.",
  },
  {
    q: "Pot dona în numele unei firme?",
    a: "Sigur. Pentru sponsorizări și parteneriate corporate, scrie-ne la asociatiemigratie@gmail.com și pregătim contractul.",
  },
  {
    q: "Datele mele sunt în siguranță?",
    a: "Da. Procesăm datele conform GDPR — vezi Politica de confidențialitate. Nu trimitem informații personale către terți fără acordul tău.",
  },
];
