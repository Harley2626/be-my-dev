import { brand } from "@/lib/brand-colors";
import { cn } from "@/lib/utils";

type DevBuddyPose = "idle" | "wave" | "peek" | "point" | "think" | "cheer" | "nod";

type DevBuddyProps = {
  pose?: DevBuddyPose;
  size?: number;
  className?: string;
};

/** Be My Dev's tiny olive companion — the logo square, alive. */
export function DevBuddy({ pose = "idle", size = 44, className }: DevBuddyProps) {
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
      <g
        style={{
          transform: pose === "think" ? "rotate(-4deg)" : pose === "nod" ? "rotate(2deg)" : undefined,
          transformOrigin: "22px 22px",
        }}
      >
        <rect width="44" height="44" rx="12" className="fill-accent" />
        <rect x="8" y="8" width="28" height="28" rx="8" className="fill-accent-light/40" />

        <circle cx="16" cy="19" r="2.2" fill={brand.eye} />
        <circle cx="28" cy="19" r="2.2" fill={brand.eye} />
        <circle cx="16.4" cy="19.2" r="0.9" fill={brand.strokeDark} />
        <circle cx="28.4" cy="19.2" r="0.9" fill={brand.strokeDark} />

        <path
          d={
            pose === "think"
              ? "M17 26Q22 28 27 25"
              : pose === "cheer"
                ? "M16 26Q22 30 28 26"
                : "M17 25Q22 28 27 25"
          }
          stroke={brand.strokeDark}
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />

        <circle cx="32" cy="24" r="3.5" className="fill-lime" opacity="0.9" />

        {pose === "wave" && (
          <path
            d="M36 14C38 10 40 8 42 6"
            stroke={brand.stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.5"
          />
        )}
        {pose === "point" && (
          <path
            d="M36 22H42M39 19L42 22L39 25"
            stroke={brand.stroke}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
        )}
        {pose === "cheer" && (
          <>
            <path d="M6 16L4 10" stroke={brand.stroke} strokeWidth="1.6" strokeLinecap="round" opacity="0.45" />
            <path d="M38 16L40 10" stroke={brand.stroke} strokeWidth="1.6" strokeLinecap="round" opacity="0.45" />
          </>
        )}
        {pose === "think" && (
          <path
            d="M34 14C35 11 37 9 39 8"
            stroke={brand.stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.4"
          />
        )}
        {pose === "peek" && (
          <path
            d="M8 36Q22 40 36 36"
            stroke={brand.stroke}
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.25"
          />
        )}
      </g>
    </svg>
  );
}
