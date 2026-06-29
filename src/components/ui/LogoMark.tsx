import { LogoShell } from "@/components/brand/LogoShell";
import { brand } from "@/lib/brand-colors";

type LogoMarkProps = {
  className?: string;
  size?: number;
  variant?: "site" | "coffee";
};

/** Rounded olive square — the core brand mark */
export function LogoMark({ className, size = 44, variant = "site" }: LogoMarkProps) {
  return (
    <LogoShell className={className} size={size}>
      {variant === "site" ? <SiteIconInner /> : <CoffeeIconInner />}
    </LogoShell>
  );
}

function SiteIconInner() {
  return (
    <>
      <path
        d="M-8 -5.5C-8 -6.5 -7.2 -7.2 -6.2 -7.2H6.2C7.2 -7.2 8 -6.5 8 -5.5V5.5C8 6.5 7.2 7.2 6.2 7.2H-6.2C-7.2 7.2 -8 6.5 -8 5.5V-5.5Z"
        className="fill-accent-light"
      />
      <path d="M-4.5 0.5H4.5M-4.5 3.5H0" stroke={brand.stroke} strokeWidth="1.6" strokeLinecap="round" />
    </>
  );
}

function CoffeeIconInner() {
  return (
    <>
      <path
        d="M-9 4C-9 0 -5 -3 0 -3H4C9 -3 13 0 13 4C13 8 9 10 0 10C-9 10 -9 8 -9 4Z"
        className="fill-accent-light"
      />
      <path
        d="M13 1H15C16.5 1 17.5 2.2 17.5 4C17.5 5.8 16.5 7 15 7H13"
        stroke={brand.stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M-4 -3C-3 -6 -1 -8 2 -8" stroke={brand.stroke} strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <path d="M-2 3Q0 5 2 3" stroke={brand.stroke} strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
    </>
  );
}
