import { Link } from "@tanstack/react-router";
import errorImg from "@/assets/error-illustration.jpg.asset.json";

type Action = {
  label: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
};

export function ErrorState({
  code,
  title,
  description,
  actions,
}: {
  code: string;
  title: string;
  description: string;
  actions: Action[];
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/40 px-4 py-12">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Eroare {code}
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {actions.map((a) => {
              const cls =
                a.variant === "outline"
                  ? "inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                  : "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90";
              if (a.to) {
                return (
                  <Link key={a.label} to={a.to} className={cls}>
                    {a.label}
                  </Link>
                );
              }
              if (a.onClick) {
                return (
                  <button key={a.label} onClick={a.onClick} className={cls}>
                    {a.label}
                  </button>
                );
              }
              return (
                <a key={a.label} href={a.href} className={cls}>
                  {a.label}
                </a>
              );
            })}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={errorImg.url}
            alt=""
            width={1024}
            height={768}
            className="mx-auto w-full max-w-md rounded-3xl shadow-soft"
          />
        </div>
      </div>
    </main>
  );
}
