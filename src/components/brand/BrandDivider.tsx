import { DoodleEgg, type DoodleName } from "@/components/brand/TinyDoodles";
import { cn } from "@/lib/utils";

type BrandDividerProps = {
  className?: string;
  doodle?: DoodleName;
};

/** Hand-drawn section divider with optional tiny illustration */
export function BrandDivider({ className, doodle }: BrandDividerProps) {
  return (
    <div className={cn("flex items-center gap-3 py-2", className)} aria-hidden>
      <svg viewBox="0 0 120 8" fill="none" className="h-2 flex-1" preserveAspectRatio="none">
        <path
          d="M0 4C20 6 40 2 60 4C80 6 100 2 120 4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="text-accent-soft"
        />
      </svg>
      {doodle ? (
        <DoodleEgg name={doodle} size={22} opacity={0.55} rotate={-4} />
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-lime opacity-70" />
      )}
      <svg viewBox="0 0 120 8" fill="none" className="h-2 flex-1" preserveAspectRatio="none">
        <path
          d="M0 4C25 2 45 6 65 4C85 2 105 6 120 4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="text-accent-soft"
        />
      </svg>
    </div>
  );
}
