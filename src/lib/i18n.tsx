import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "ro" | "en";

type Dict = Record<string, string>;

const ro: Dict = {
  "nav.about": "Despre noi",
  "nav.programs": "Programe",
  "nav.impact": "Impact",
  "nav.map": "Europa",
  "nav.research": "Cercetare",
  "nav.stories": "Povești",
  "nav.partners": "Parteneri",
  "nav.contact": "Contact",
  "nav.donate": "Donează",

  "hero.eyebrow": "ONG European • Protecția Migrației",
  "hero.title.l1": "Deschidem drumuri",
  "hero.title.l2": "către o Europă",
  "hero.title.l3": "primitoare.",
  "hero.subtitle":
    "Asociația Europa sprijină migranți, refugiați și comunități vulnerabile prin asistență juridică, integrare și advocacy la nivel european.",
  "hero.cta.primary": "Susține misiunea",
  "hero.cta.secondary": "Descoperă programele",
  "hero.badge": "Acreditat UE",
  "hero.stat1": "Familii sprijinite",
  "hero.stat2": "Țări partenere",
  "hero.stat3": "Voluntari activi",

  "about.eyebrow": "Despre noi",
  "about.title": "O voce de încredere pentru migranți în Europa.",
  "about.p1":
    "Asociația Europa – Protecția Migrației este o organizație non-guvernamentală care apără drepturile fundamentale ale migranților și promovează politici europene incluzive. Combinăm asistența directă cu cercetarea și advocacy-ul.",
  "about.p2":
    "Lucrăm independent, transparent și conform standardelor europene, alături de instituții, parteneri locali și comunități pentru o Europă demnă pentru toți.",
  "about.pill1": "Independent",
  "about.pill2": "Transparent",
  "about.pill3": "Conform UE",

  "impact.eyebrow": "Impactul nostru",
  "impact.title": "Rezultate măsurabile, schimbare durabilă.",
  "impact.s1.label": "Persoane asistate",
  "impact.s2.label": "Cazuri juridice rezolvate",
  "impact.s3.label": "Rapoarte de politici publicate",
  "impact.s4.label": "Parteneri instituționali",

  "programs.eyebrow": "Programe & servicii",
  "programs.title": "Soluții integrate pentru fiecare etapă a migrației.",
  "programs.p1.title": "Integrare & limbă",
  "programs.p1.desc":
    "Cursuri de română și engleză, orientare culturală și sprijin pentru școlarizarea copiilor.",
  "programs.p2.title": "Asistență juridică",
  "programs.p2.desc":
    "Consiliere gratuită pentru azil, drept de ședere, reîntregirea familiei și acces la servicii publice.",
  "programs.p3.title": "Acces la muncă",
  "programs.p3.desc":
    "Recunoașterea calificărilor, mentorat profesional și conectare cu angajatori responsabili.",
  "programs.p4.title": "Sănătate & wellbeing",
  "programs.p4.desc":
    "Acces la servicii medicale, consiliere psihologică și sprijin pentru victimele traficului de persoane.",

  "map.eyebrow": "Prezență europeană",
  "map.title": "Activi în 14 țări ale Uniunii Europene.",
  "map.desc":
    "Coordonăm proiecte transfrontaliere și facem parte din rețele europene specializate în migrație și protecție umanitară.",
  "map.hover": "Treci cu mouse-ul peste un punct",

  "research.eyebrow": "Cercetare & publicații",
  "research.title": "Date solide pentru politici corecte.",
  "research.r1.tag": "Raport",
  "research.r1.title": "Integrarea refugiaților ucraineni în România 2025",
  "research.r2.tag": "Policy Brief",
  "research.r2.title": "Reforma Pactului European pentru Migrație și Azil",
  "research.r3.tag": "Studiu",
  "research.r3.title": "Accesul la piața muncii pentru migranții non-UE",
  "research.read": "Citește",

  "stories.eyebrow": "Povești de succes",
  "stories.title": "În spatele fiecărui număr, o viață schimbată.",
  "stories.s1.name": "Amadou, 28",
  "stories.s1.from": "din Senegal • Cluj",
  "stories.s1.quote":
    "Am primit asistență juridică și un loc de muncă în 4 luni. Astăzi îmi ajut familia să se mute legal în Europa.",
  "stories.s2.name": "Layla, 34",
  "stories.s2.from": "din Siria • București",
  "stories.s2.quote":
    "Cursurile de limbă mi-au redat încrederea. Lucrez ca asistent medical și fiica mea învață în școala publică.",
  "stories.s3.name": "Olena, 31",
  "stories.s3.from": "din Ucraina • Sibiu",
  "stories.s3.quote":
    "În cele mai grele zile am găsit oameni care ne-au oferit o casă, hrană și o direcție. Suntem o familie nouă aici.",

  "partners.eyebrow": "Parteneri & finanțatori",
  "partners.title": "În colaborare cu instituții europene de top.",

  "cta.title": "Alătură-te misiunii pentru o Europă mai dreaptă.",
  "cta.desc": "Donează, devino partener sau voluntar. Fiecare contribuție construiește o punte.",
  "cta.donate": "Donează acum",
  "cta.partner": "Devino partener",

  "contact.title": "Contact",
  "contact.address": "Sediu social",
  "contact.addressValue": "București, România",
  "contact.email": "Email",
  "contact.phone": "Telefon",

  "footer.tagline": "Deschidem drumuri către o Europă primitoare.",
  "footer.rights": "Toate drepturile rezervate.",
  "footer.legal": "ONG înregistrat în România",
  "footer.col.explore": "Explorează",
  "footer.col.involve": "Implică-te",
  "footer.anpc.label": "Conform legii — Protecția consumatorilor",

  "follow.eyebrow": "Urmărește-ne",
  "follow.title": "Rămâi aproape de comunitatea noastră.",
  "follow.desc": "Povești reale, actualizări din proiecte și moduri prin care poți ajuta — direct în feed-ul tău.",

  "float.whatsapp": "Scrie-ne pe WhatsApp",
  "float.email": "Trimite-ne un email",

  "lang.switch": "EN",
};

const en: Dict = {
  "nav.about": "About",
  "nav.programs": "Programs",
  "nav.impact": "Impact",
  "nav.map": "Europe",
  "nav.research": "Research",
  "nav.stories": "Stories",
  "nav.partners": "Partners",
  "nav.contact": "Contact",
  "nav.donate": "Donate",

  "hero.eyebrow": "European NGO • Migration Protection",
  "hero.title.l1": "Opening pathways",
  "hero.title.l2": "to a welcoming",
  "hero.title.l3": "Europe.",
  "hero.subtitle":
    "Asociația Europa supports migrants, refugees and vulnerable communities through legal aid, integration and advocacy across the European Union.",
  "hero.cta.primary": "Support our mission",
  "hero.cta.secondary": "Discover our programs",
  "hero.badge": "EU accredited",
  "hero.stat1": "Families supported",
  "hero.stat2": "Partner countries",
  "hero.stat3": "Active volunteers",

  "about.eyebrow": "About us",
  "about.title": "A trusted voice for migrants in Europe.",
  "about.p1":
    "Asociația Europa – Migration Protection is a non-governmental organisation defending the fundamental rights of migrants and advancing inclusive European policies. We combine direct assistance with research and advocacy.",
  "about.p2":
    "We work independently, transparently and in line with European standards, alongside institutions, local partners and communities for a Europe that respects everyone.",
  "about.pill1": "Independent",
  "about.pill2": "Transparent",
  "about.pill3": "EU compliant",

  "impact.eyebrow": "Our impact",
  "impact.title": "Measurable results, lasting change.",
  "impact.s1.label": "People assisted",
  "impact.s2.label": "Legal cases solved",
  "impact.s3.label": "Policy reports published",
  "impact.s4.label": "Institutional partners",

  "programs.eyebrow": "Programs & services",
  "programs.title": "Integrated solutions for every stage of the migration journey.",
  "programs.p1.title": "Integration & language",
  "programs.p1.desc":
    "Romanian and English classes, cultural orientation and school support for migrant children.",
  "programs.p2.title": "Legal assistance",
  "programs.p2.desc":
    "Free advice on asylum, residency, family reunification and access to public services.",
  "programs.p3.title": "Access to work",
  "programs.p3.desc":
    "Qualification recognition, professional mentoring and matching with responsible employers.",
  "programs.p4.title": "Health & wellbeing",
  "programs.p4.desc":
    "Access to healthcare, psychological support and assistance for victims of human trafficking.",

  "map.eyebrow": "European presence",
  "map.title": "Active in 14 European Union countries.",
  "map.desc":
    "We coordinate cross-border projects and belong to leading European networks on migration and humanitarian protection.",
  "map.hover": "Hover over a point",

  "research.eyebrow": "Research & publications",
  "research.title": "Solid data for fair policies.",
  "research.r1.tag": "Report",
  "research.r1.title": "Integration of Ukrainian refugees in Romania 2025",
  "research.r2.tag": "Policy Brief",
  "research.r2.title": "Reforming the European Pact on Migration & Asylum",
  "research.r3.tag": "Study",
  "research.r3.title": "Labour market access for non-EU migrants",
  "research.read": "Read",

  "stories.eyebrow": "Success stories",
  "stories.title": "Behind every number, a life transformed.",
  "stories.s1.name": "Amadou, 28",
  "stories.s1.from": "from Senegal • Cluj",
  "stories.s1.quote":
    "I received legal aid and a job within 4 months. Today I help my family relocate legally to Europe.",
  "stories.s2.name": "Layla, 34",
  "stories.s2.from": "from Syria • Bucharest",
  "stories.s2.quote":
    "Language classes gave me back my confidence. I work as a nurse and my daughter studies in a public school.",
  "stories.s3.name": "Olena, 31",
  "stories.s3.from": "from Ukraine • Sibiu",
  "stories.s3.quote":
    "On our hardest days we found people who offered us a home, food and direction. We are a new family here.",

  "partners.eyebrow": "Partners & funders",
  "partners.title": "In collaboration with leading European institutions.",

  "cta.title": "Join the mission for a fairer Europe.",
  "cta.desc": "Donate, partner with us or volunteer. Every contribution builds a bridge.",
  "cta.donate": "Donate now",
  "cta.partner": "Become a partner",

  "contact.title": "Contact",
  "contact.address": "Registered office",
  "contact.addressValue": "Mediaș, Sibiu County, Tineretului St., no. 11, bl. 7, sc. B, ap. 59",
  "contact.email": "Email",
  "contact.phone": "Phone",

  "footer.tagline": "Building bridges for a welcoming Europe.",
  "footer.rights": "All rights reserved.",
  "footer.legal": "NGO registered in Romania",
  "footer.col.explore": "Explore",
  "footer.col.involve": "Get involved",
  "footer.anpc.label": "In accordance with consumer protection law",

  "follow.eyebrow": "Follow us",
  "follow.title": "Stay close to our community.",
  "follow.desc": "Real stories, project updates and ways you can help — straight to your feed.",

  "float.whatsapp": "Message us on WhatsApp",
  "float.email": "Send us an email",

  "lang.switch": "RO",
};

const dictionaries: Record<Lang, Dict> = { ro, en };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: keyof typeof ro) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ro");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "ro" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
  }, []);

  const toggle = useCallback(() => setLang(lang === "ro" ? "en" : "ro"), [lang, setLang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      toggle,
      t: (k) => dictionaries[lang][k] ?? (k as string),
    }),
    [lang, setLang, toggle],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
