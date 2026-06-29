import { brand } from "@/lib/brand-colors";
import { cn } from "@/lib/utils";

type CraftAccentProps = {
  className?: string;
  variant?: "circle" | "line" | "corner";
};

/** Subtle sketch marks — notebook circles, pencil lines */
export function CraftAccent({ className, variant = "circle" }: CraftAccentProps) {
  if (variant === "line") {
    return (
      <svg
        viewBox="0 0 80 12"
        fill="none"
        className={cn("pointer-events-none h-3 w-20 opacity-30", className)}
        aria-hidden
      >
        <path
          d="M2 8C18 4 38 10 58 6C68 4 74 6 78 7"
          stroke={brand.highlight}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variant === "corner") {
    return (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className={cn("pointer-events-none h-10 w-10 opacity-25", className)}
        aria-hidden
      >
        <path d="M4 36 Q4 4 36 4" stroke={brand.highlight} strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={cn("pointer-events-none h-12 w-12 opacity-25", className)}
      aria-hidden
    >
      <ellipse
        cx="24"
        cy="24"
        rx="18"
        ry="16"
        stroke={brand.highlight}
        strokeWidth="1"
        strokeDasharray="3 2"
        transform="rotate(-8 24 24)"
      />
    </svg>
  );
}
