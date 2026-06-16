import { ArrowRight, ShieldCheck, Scale, Briefcase, GraduationCap, HeartPulse, BookOpen, Phone, Mail, Building2, Instagram, Facebook } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Reveal, CountUp } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";
import logoAsset from "@/assets/logo.asset.json";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import prog1 from "@/assets/program-integration.jpg";
import prog2 from "@/assets/program-legal.jpg";
import prog3 from "@/assets/program-employment.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

const EMAIL = "asociatiemigratie@gmail.com";
const PHONE_DISPLAY = "+40 758 790 124";
const PHONE = "40758790124";

export function LandingPage() {
  const { t } = useI18n();

  return (
    <div id="top" className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <FloatingActions />

      <main>
        {/* ============ HERO ============ */}
        <section
          aria-labelledby="hero-title"
          className="relative isolate flex min-h-[88svh] items-center pb-14 pt-28 sm:pt-32"
        >
          <img
            src={heroImg}
            alt=""
            width={1920}
            height={1280}
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background"
          />

          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                <ShieldCheck className="h-3.5 w-3.5 text-eu-gold" />
                {t("hero.eyebrow")}
              </span>
            </Reveal>

            <h1
              id="hero-title"
              className="mt-6 max-w-4xl text-balance text-[2.6rem] font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              <Reveal as="span" className="block">{t("hero.title.l1")}</Reveal>
              <Reveal as="span" delay={120} className="block">{t("hero.title.l2")}</Reveal>
              <Reveal as="span" delay={240} className="block">
                <span className="text-gradient" style={{ backgroundImage: "linear-gradient(135deg, var(--eu-gold), white)" }}>
                  {t("hero.title.l3")}
                </span>
              </Reveal>
            </h1>

            <Reveal delay={360}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
                {t("hero.subtitle")}
              </p>
            </Reveal>

            <Reveal delay={480}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#cta"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-glow transition-all hover:scale-[1.03] hover:bg-eu-gold"
                >
                  {t("hero.cta.primary")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15"
                >
                  {t("hero.cta.secondary")}
                </a>
              </div>
            </Reveal>

            <Reveal delay={620}>
              <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3 sm:gap-6">
                {[
                  { n: 120, s: "+", l: "hero.stat1" as const },
                  { n: 3, s: "", l: "hero.stat2" as const },
                  { n: 25, s: "+", l: "hero.stat3" as const },
                ].map((x) => (
                  <div
                    key={x.l}
                    className="liquid-glass-dark rounded-2xl px-4 py-3 sm:px-5 sm:py-4"
                  >
                    <dt className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                      <CountUp to={x.n} suffix={x.s} />
                    </dt>
                    <dd className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-white/70 sm:text-xs">
                      {t(x.l)}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" className="relative py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={aboutImg}
                  alt="Consilier social asistă o femeie refugiată"
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
                />
                <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-white p-4 shadow-glow sm:block">
                  <img src={logoAsset.url} alt="" width={80} height={80} className="h-16 w-auto" />
                </div>
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <Eyebrow>{t("about.eyebrow")}</Eyebrow>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-5xl">
                  {t("about.title")}
                </h2>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {t("about.p1")}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {t("about.p2")}
                </p>
              </Reveal>
              <Reveal delay={400}>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {(["about.pill1", "about.pill2", "about.pill3"] as const).map((k) => (
                    <li
                      key={k}
                      className="inline-flex items-center gap-1.5 rounded-full border border-eu-blue/15 bg-eu-blue/5 px-3.5 py-1.5 text-xs font-semibold text-eu-blue"
                    >
                      <ShieldCheck className="h-3.5 w-3.5" /> {t(k)}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ IMPACT ============ */}
        <section id="impact" className="relative bg-navy py-16 text-white sm:py-20">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, var(--eu-blue) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--teal) 0, transparent 45%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <Reveal><Eyebrow tone="light">{t("impact.eyebrow")}</Eyebrow></Reveal>
              <Reveal delay={100}>
                <h2 className="mt-4 text-balance text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  {t("impact.title")}
                </h2>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: 120, s: "+", l: "impact.s1.label" as const },
                { n: 35, s: "+", l: "impact.s2.label" as const },
                { n: 4, s: "", l: "impact.s3.label" as const },
                { n: 8, s: "+", l: "impact.s4.label" as const },
              ].map((x, i) => (
                <Reveal key={x.l} delay={i * 100}>
                  <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-teal/40 hover:bg-white/10">
                    <div className="text-4xl font-black tracking-tight sm:text-5xl">
                      <CountUp to={x.n} suffix={x.s} />
                    </div>
                    <div className="mt-2 h-px w-10 bg-teal transition-all group-hover:w-20" />
                    <p className="mt-3 text-sm text-white/70">{t(x.l)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PROGRAMS ============ */}
        <section id="programs" className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <Reveal><Eyebrow>{t("programs.eyebrow")}</Eyebrow></Reveal>
              <Reveal delay={100}>
                <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-5xl">
                  {t("programs.title")}
                </h2>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { img: prog1, icon: GraduationCap, t: "programs.p1.title" as const, d: "programs.p1.desc" as const },
                { img: prog2, icon: Scale, t: "programs.p2.title" as const, d: "programs.p2.desc" as const },
                { img: prog3, icon: Briefcase, t: "programs.p3.title" as const, d: "programs.p3.desc" as const },
                { img: prog1, icon: HeartPulse, t: "programs.p4.title" as const, d: "programs.p4.desc" as const },
              ].map((p, i) => (
                <Reveal key={p.t} delay={i * 80}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={p.img}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                      <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-eu-blue shadow-soft backdrop-blur">
                        <p.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-navy">{t(p.t)}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(p.d)}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ EUROPE MAP ============ */}
        <section id="map" className="relative bg-surface py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
            <div>
              <Reveal><Eyebrow>{t("map.eyebrow")}</Eyebrow></Reveal>
              <Reveal delay={100}>
                <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-5xl">
                  {t("map.title")}
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {t("map.desc")}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <ul className="mt-6 flex flex-wrap gap-2 text-xs">
                  {["RO", "BG", "HU", "PL", "DE", "FR", "IT", "ES", "GR", "AT", "NL", "BE", "SE", "PT"].map((c) => (
                    <li key={c} className="rounded-md border border-eu-blue/20 bg-white px-2.5 py-1 font-bold text-eu-blue">{c}</li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <EuropeMap />
            </Reveal>
          </div>
        </section>

        {/* ============ RESEARCH ============ */}
        <section id="research" className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <Reveal><Eyebrow>{t("research.eyebrow")}</Eyebrow></Reveal>
                <Reveal delay={100}>
                  <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-5xl">
                    {t("research.title")}
                  </h2>
                </Reveal>
              </div>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {[
                { tag: "research.r1.tag" as const, title: "research.r1.title" as const, year: "2025" },
                { tag: "research.r2.tag" as const, title: "research.r2.title" as const, year: "2025" },
                { tag: "research.r3.tag" as const, title: "research.r3.title" as const, year: "2024" },
              ].map((r, i) => (
                <Reveal key={r.title} delay={i * 100}>
                  <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-eu-blue/30 hover:shadow-glow">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-eu-blue/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-eu-blue">
                        <BookOpen className="h-3 w-3" /> {t(r.tag)}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">{r.year}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold leading-snug text-navy">{t(r.title)}</h3>
                    <a
                      href="#"
                      className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold text-eu-blue transition-all group-hover:gap-2.5"
                    >
                      {t("research.read")} <ArrowRight className="h-4 w-4" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ STORIES ============ */}
        <section id="stories" className="bg-surface py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <Reveal><Eyebrow>{t("stories.eyebrow")}</Eyebrow></Reveal>
              <Reveal delay={100}>
                <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-5xl">
                  {t("stories.title")}
                </h2>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { img: story1, n: "stories.s1.name" as const, f: "stories.s1.from" as const, q: "stories.s1.quote" as const },
                { img: story2, n: "stories.s2.name" as const, f: "stories.s2.from" as const, q: "stories.s2.quote" as const },
                { img: story3, n: "stories.s3.name" as const, f: "stories.s3.from" as const, q: "stories.s3.quote" as const },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <figure className="group relative h-full overflow-hidden rounded-3xl bg-card shadow-soft">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={s.img}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="absolute inset-x-0 bottom-0 p-5">
                      <div className="rounded-2xl border border-white/20 bg-white/90 p-5 backdrop-blur-md">
                        <p className="text-sm italic leading-relaxed text-navy">"{t(s.q)}"</p>
                        <div className="mt-3 flex items-center justify-between">
                          <p className="text-sm font-bold text-navy">{t(s.n)}</p>
                          <p className="text-xs text-muted-foreground">{t(s.f)}</p>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PARTNERS ============ */}
        <section id="partners" className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                {t("partners.title")}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  "European Commission",
                  "UNHCR",
                  "Council of Europe",
                  "IOM",
                  "Red Cross",
                  "ECRE",
                ].map((name) => (
                  <div
                    key={name}
                    className="flex h-16 items-center justify-center rounded-xl border border-border bg-card px-3 text-center text-xs font-bold tracking-tight text-navy/70 transition-all hover:border-eu-blue/40 hover:text-eu-blue"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ FOLLOW US ============ */}
        <section id="follow" aria-labelledby="follow-title" className="bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal><Eyebrow>{t("follow.eyebrow")}</Eyebrow></Reveal>
              <Reveal delay={100}>
                <h2 id="follow-title" className="mt-4 text-balance text-3xl font-black tracking-tight text-navy sm:text-4xl">
                  {t("follow.title")}
                </h2>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t("follow.desc")}</p>
              </Reveal>
            </div>

            <Reveal delay={240}>
              <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
                {[
                  {
                    name: "Instagram",
                    handle: "@protectiamigratiei",
                    href: "https://instagram.com/protectiamigratiei",
                    Icon: Instagram,
                    grad: "linear-gradient(135deg,#feda75,#fa7e1e 40%,#d62976 70%,#962fbf)",
                  },
                  {
                    name: "Facebook",
                    handle: "Asociația Europa",
                    href: "https://facebook.com/protectiamigratiei",
                    Icon: Facebook,
                    grad: "linear-gradient(135deg,#1877F2,#0a4fb8)",
                  },
                  {
                    name: "TikTok",
                    handle: "@protectiamigratiei",
                    href: "https://tiktok.com/@protectiamigratiei",
                    Icon: TikTokIcon,
                    grad: "linear-gradient(135deg,#25F4EE,#000000 55%,#FE2C55)",
                  },
                ].map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-1 opacity-80"
                        style={{ background: s.grad }}
                      />
                      <span
                        className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-soft transition-transform group-hover:scale-110"
                        style={{ background: s.grad }}
                      >
                        <s.Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-bold text-navy">{s.name}</span>
                        <span className="block truncate text-xs text-muted-foreground">{s.handle}</span>
                      </span>
                      <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-eu-blue" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section id="cta" className="px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div
                className="relative overflow-hidden rounded-[2rem] p-8 text-white shadow-glow sm:p-14 lg:p-20"
                style={{ background: "linear-gradient(135deg, var(--navy), color-mix(in oklab, var(--eu-blue) 80%, var(--navy)))" }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
                  style={{ background: "var(--teal)" }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full opacity-25 blur-3xl"
                  style={{ background: "var(--eu-gold)" }}
                />

                <div className="relative max-w-2xl">
                  <h2 className="text-balance text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    {t("cta.title")}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                    {t("cta.desc")}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${EMAIL}?subject=Donație`}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-soft transition-transform hover:scale-[1.03]"
                    >
                      {t("cta.donate")} <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href={`mailto:${EMAIL}?subject=Parteneriat`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
                    >
                      {t("cta.partner")}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ CONTACT / FOOTER ============ */}
        <footer id="contact" className="border-t border-border bg-navy text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <img src={logoAsset.url} alt="" width={56} height={56} className="h-12 w-auto rounded-md bg-white p-1" />
                <div>
                  <p className="text-base font-bold leading-tight">Asociația Europa</p>
                  <p className="text-xs text-white/60">Protecția Migrației</p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">{t("footer.tagline")}</p>
              <div className="mt-5 flex gap-2">
                <a aria-label="Instagram" href="https://instagram.com/protectiamigratiei" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-teal/50 hover:bg-white/10 hover:text-white">
                  <Instagram className="h-4 w-4" />
                </a>
                <a aria-label="Facebook" href="https://facebook.com/protectiamigratiei" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-teal/50 hover:bg-white/10 hover:text-white">
                  <Facebook className="h-4 w-4" />
                </a>
                <a aria-label="TikTok" href="https://tiktok.com/@protectiamigratiei" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-teal/50 hover:bg-white/10 hover:text-white">
                  <TikTokIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">{t("contact.title")}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-3">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  <span className="text-white/85">{t("contact.addressValue")}</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  <a href={`mailto:${EMAIL}`} className="text-white/85 hover:text-white">{EMAIL}</a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  <a href={`tel:+${PHONE}`} className="text-white/85 hover:text-white">{PHONE_DISPLAY}</a>
                </li>
              </ul>
            </div>

            {/* Nav columns */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">{t("footer.col.explore")}</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    ["about", "nav.about"],
                    ["programs", "nav.programs"],
                    ["impact", "nav.impact"],
                    ["map", "nav.map"],
                  ].map(([id, k]) => (
                    <li key={id}>
                      <a href={`#${id}`} className="text-white/75 hover:text-white">{t(k as never)}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">{t("footer.col.involve")}</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li><a href="#cta" className="text-white/75 hover:text-white">{t("nav.donate")}</a></li>
                  <li><a href="#follow" className="text-white/75 hover:text-white">{t("follow.eyebrow")}</a></li>
                  <li><a href="#stories" className="text-white/75 hover:text-white">{t("nav.stories")}</a></li>
                  <li><a href="#research" className="text-white/75 hover:text-white">{t("nav.research")}</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* ANPC strip */}
          <div className="border-t border-white/10 bg-navy/60">
            <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-5 py-4 text-[11px] text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <p className="font-semibold uppercase tracking-wider text-white/55">{t("footer.anpc.label")}</p>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://anpc.ro/ce-este-sal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 font-semibold text-white/80 transition-colors hover:border-teal/40 hover:text-white"
                >
                  ANPC – SAL
                </a>
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 font-semibold text-white/80 transition-colors hover:border-teal/40 hover:text-white"
                >
                  ANPC – SOL
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <p>© {new Date().getFullYear()} Asociația Europa. {t("footer.rights")}</p>
              <p>{t("footer.legal")}</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Eyebrow({ children, tone = "dark" }: { children: React.ReactNode; tone?: "dark" | "light" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] ${
        tone === "light" ? "text-teal" : "text-eu-blue"
      }`}
    >
      <span className={`inline-block h-px w-8 ${tone === "light" ? "bg-teal" : "bg-eu-blue"}`} />
      {children}
    </span>
  );
}

function EuropeMap() {
  // Stylised pin layout, not a geographically accurate map
  const points = [
    { x: 48, y: 72, label: "România" },
    { x: 38, y: 48, label: "Germania" },
    { x: 30, y: 60, label: "Franța" },
    { x: 22, y: 78, label: "Spania" },
    { x: 42, y: 78, label: "Italia" },
    { x: 56, y: 58, label: "Polonia" },
    { x: 64, y: 84, label: "Grecia" },
    { x: 32, y: 38, label: "Olanda" },
    { x: 46, y: 30, label: "Suedia" },
    { x: 50, y: 64, label: "Ungaria" },
    { x: 58, y: 70, label: "Bulgaria" },
    { x: 26, y: 88, label: "Portugalia" },
    { x: 38, y: 56, label: "Austria" },
    { x: 30, y: 52, label: "Belgia" },
  ];

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white to-surface shadow-soft">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="europeGlow" cx="50%" cy="55%" r="55%">
            <stop offset="0%" stopColor="oklch(0.48 0.22 264)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="oklch(0.48 0.22 264)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#europeGlow)" />
        <g stroke="oklch(0.48 0.22 264 / 0.15)" strokeWidth="0.2" fill="none">
          {[20, 35, 50, 65, 80].map((y) => (
            <line key={y} x1="5" x2="95" y1={y} y2={y} />
          ))}
          {[20, 35, 50, 65, 80].map((x) => (
            <line key={x} y1="5" y2="95" x1={x} x2={x} />
          ))}
        </g>
      </svg>
      {points.map((p) => (
        <div
          key={p.label}
          className="group absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
        >
          <span className="block h-2.5 w-2.5 rounded-full bg-eu-blue shadow-[0_0_0_4px_oklch(0.48_0.22_264/0.18)] transition-all group-hover:scale-150 group-hover:bg-teal" />
          <span className="pointer-events-none absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-navy px-2 py-1 text-[10px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
            {p.label}
          </span>
        </div>
      ))}
      <div className="absolute bottom-3 right-3 rounded-full border border-border bg-white/80 px-3 py-1 text-[10px] font-semibold text-muted-foreground backdrop-blur">
        EU · 14 țări
      </div>
    </div>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.4v3a8.5 8.5 0 0 1-4.5-1.3v6.4a6.2 6.2 0 1 1-6.2-6.2c.34 0 .67.03 1 .09v3.1a3.2 3.2 0 1 0 2.2 3.03V3h3z"/>
    </svg>
  );
}
