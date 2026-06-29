import { brand } from "@/lib/brand-colors";
import { cn } from "@/lib/utils";

type MarkProps = {
  className?: string;
};

export function BrushStroke({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 120 32"
      fill="none"
      className={cn("pointer-events-none absolute -left-2 -top-1 h-8 w-[110%] opacity-50", className)}
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d="M4 18C20 8 45 22 70 14C90 8 105 16 116 12"
        stroke={brand.brushSoft}
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M8 20C30 14 55 24 85 16"
        stroke={brand.brushLight}
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export function HandCircle({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={cn("pointer-events-none absolute h-full w-full", className)}
      aria-hidden
    >
      <ellipse
        cx="24"
        cy="24"
        rx="20"
        ry="18"
        stroke={brand.highlight}
        strokeWidth="1.4"
        strokeDasharray="3 2"
        opacity="0.35"
        transform="rotate(-6 24 24)"
      />
    </svg>
  );
}

export function GreenTape({ className, wide }: MarkProps & { wide?: boolean }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute h-5 bg-accent-soft/75 shadow-sm",
        wide ? "w-24 -rotate-2" : "w-14 rotate-[-3deg]",
        className,
      )}
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(92,104,73,0.07) 3px, rgba(92,104,73,0.07) 6px)",
      }}
      aria-hidden
    />
  );
}

export function PassportStamp({
  children,
  className,
  rotate = -8,
}: MarkProps & { children: React.ReactNode; rotate?: number }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border-2 border-dashed border-accent-bright/45 px-3 py-0.5 font-hand text-sm uppercase tracking-wide text-accent",
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}

export function BrandLabel({ children, className }: MarkProps & { children: React.ReactNode }) {
  return (
    <span className={cn("relative inline-block", className)}>
      <BrushStroke className="opacity-60" />
      <span className="relative font-flair text-xl text-accent-bright">{children}</span>
    </span>
  );
}
