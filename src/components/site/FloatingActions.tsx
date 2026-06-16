import { Mail, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const PHONE = "40724425003";
const EMAIL = "asociatiemigratie@gmail.com";

export function FloatingActions() {
  const { t } = useI18n();
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-6">
      <a
        href={`mailto:${EMAIL}`}
        aria-label={t("float.email")}
        className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-glow transition-transform hover:scale-110 sm:h-14 sm:w-14"
      >
        <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-navy px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
          {t("float.email")}
        </span>
      </a>
      <a
        href={`https://wa.me/${PHONE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("float.whatsapp")}
        className="group relative inline-flex h-14 w-14 animate-pulse-ring items-center justify-center rounded-full bg-teal text-white shadow-glow transition-transform hover:scale-110 sm:h-16 sm:w-16"
        style={{ backgroundColor: "oklch(0.62 0.18 152)" }}
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-navy px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
          {t("float.whatsapp")}
        </span>
      </a>
    </div>
  );
}
