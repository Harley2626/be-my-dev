import { LogoShell } from "@/components/brand/LogoShell";
import { brand } from "@/lib/brand-colors";
import { cn } from "@/lib/utils";

type BrandIconProps = {
  className?: string;
  size?: number;
};

export function BrandIconWebsite({ className, size }: BrandIconProps) {
  return (
    <LogoShell className={className} size={size}>
      <path
        d="M-8 -5.5C-8 -6.5 -7.2 -7.2 -6.2 -7.2H6.2C7.2 -7.2 8 -6.5 8 -5.5V5.5C8 6.5 7.2 7.2 6.2 7.2H-6.2C-7.2 7.2 -8 6.5 -8 5.5V-5.5Z"
        className="fill-accent-light"
        stroke={brand.stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M-4.5 0.5H4.5M-4.5 3.5H0" stroke={brand.stroke} strokeWidth="1.5" strokeLinecap="round" />
    </LogoShell>
  );
}

export function BrandIconShop({ className, size }: BrandIconProps) {
  return (
    <LogoShell className={className} size={size}>
      <path
        d="M-7 -3L-5 -7H5L7 -3M-8 1H8L7 7H-7L-8 1Z"
        stroke={brand.stroke}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M-2 7V9M2 7V9" stroke={brand.stroke} strokeWidth="1.5" strokeLinecap="round" />
    </LogoShell>
  );
}

export function BrandIconRefresh({ className, size }: BrandIconProps) {
  return (
    <LogoShell className={className} size={size}>
      <path
        d="M-6 2C-6 -3 -1 -6 4 -3M4 -5L4 -1L0 -1M4 2C4 7 -1 10 -6 7M-6 5L-6 1L-2 1"
        stroke={brand.stroke}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </LogoShell>
  );
}

export function BrandIconCheck({ className, size = 20 }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect x="1" y="1" width="18" height="18" rx="5" className="fill-accent-light" stroke={brand.brushSoft} strokeWidth="1" />
      <circle cx="16" cy="4" r="2" className="fill-lime" opacity="0.85" />
      <path
        d="M6 10L9 13L14 7"
        stroke={brand.stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BrandIconArrow({ className, size = 18 }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M3 9H13M10 6L13 9L10 12"
        stroke={brand.stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BrandIconPlus({ open, className, size = 24 }: BrandIconProps & { open?: boolean }) {
  return (
    <span
      className={cn(
        "relative inline-flex h-7 w-7 items-center justify-center rounded-lg border border-accent-soft bg-accent-light font-hand text-xl leading-none text-accent transition-all duration-500 ease-out",
        open && "rotate-45 border-accent-bright/40 bg-accent-soft",
        className,
      )}
      style={{ fontSize: size * 0.75 }}
    >
      +
      <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-lime opacity-80" aria-hidden />
    </span>
  );
}
