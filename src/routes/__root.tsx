import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "../lib/i18n";
import { ErrorState } from "../components/site/ErrorState";
import { CookieConsent } from "../components/site/CookieConsent";
import faviconIco from "../assets/favicon.ico.asset.json";
import favicon32 from "../assets/favicon-32.png.asset.json";
import appleTouchIcon from "../assets/apple-touch-icon.png.asset.json";
import icon512 from "../assets/icon-512.png.asset.json";
import ogImage from "../assets/og-image.jpg.asset.json";

const SITE_ORIGIN = "https://avyron.eu";
const OG_IMAGE_URL = `${SITE_ORIGIN}${ogImage.url}`;

function NotFoundComponent() {
  return (
    <ErrorState
      code="404"
      title="Pagina nu a fost găsită"
      description="Pagina pe care o cauți nu există sau a fost mutată. Te invităm să revii la pagina principală sau să ne contactezi dacă ai nevoie de ajutor."
      actions={[
        { label: "Înapoi acasă", to: "/", variant: "primary" },
        { label: "Contact", href: "mailto:asociatiemigratie@gmail.com", variant: "outline" },
      ]}
    />
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <ErrorState
      code="500"
      title="Această pagină nu s-a încărcat"
      description="Ceva nu a funcționat de partea noastră. Poți încerca să reîncarci pagina sau să revii la pagina principală."
      actions={[
        {
          label: "Încearcă din nou",
          onClick: () => {
            router.invalidate();
            reset();
          },
          variant: "primary",
        },
        { label: "Înapoi acasă", href: "/", variant: "outline" },
      ]}
    />
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Asociația Europa Protecția Migrației" },
      { name: "description", content: "Asociația Europa Protecția Migrației — ONG european dedicat protecției migrației, migranților și refugiaților." },
      { name: "theme-color", content: "#0D1B2A" },
      { property: "og:title", content: "Asociația Europa Protecția Migrației" },
      { name: "twitter:title", content: "Asociația Europa Protecția Migrației" },
      { property: "og:description", content: "ONG european dedicat protecției migrației, migranților și refugiaților." },
      { name: "twitter:description", content: "ONG european dedicat protecției migrației, migranților și refugiaților." },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Asociația Europa — Protecția Migrației" },
      { name: "twitter:image", content: OG_IMAGE_URL },
      { name: "twitter:image:alt", content: "Asociația Europa — Protecția Migrației" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Asociația Europa Protecția Migrației" },
      { property: "og:locale", content: "ro_RO" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: faviconIco.url },
      { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32.url },
      { rel: "icon", type: "image/png", sizes: "512x512", href: icon512.url },
      { rel: "apple-touch-icon", sizes: "180x180", href: appleTouchIcon.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <Outlet />
      </I18nProvider>
    </QueryClientProvider>
  );
}
