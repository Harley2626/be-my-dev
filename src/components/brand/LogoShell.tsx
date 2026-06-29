import { cn } from "@/lib/utils";

type LogoShellProps = {
  size?: number;
  className?: string;
  showDot?: boolean;
  children?: React.ReactNode;
};

/** The logo's rounded olive square — foundation for every icon in the system. */
export function LogoShell({ size = 44, className, showDot = true, children }: LogoShellProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect width="44" height="44" rx="12" className="fill-accent" />
      <rect
        x="9.5"
        y="9.5"
        width="25"
        height="25"
        rx="6.5"
        className="fill-accent-light"
        opacity="0.9"
      />
      {children && <g transform="translate(22, 22)">{children}</g>}
      {showDot && <circle cx="31.5" cy="12.5" r="3.8" className="fill-lime" />}
    </svg>
  );
}

/** Mini logo dot — decorative accent used on cards, badges, buttons */
export function LogoDot({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-block h-1.5 w-1.5 rounded-full bg-lime shadow-sm", className)}
      aria-hidden
    />
  );
}
