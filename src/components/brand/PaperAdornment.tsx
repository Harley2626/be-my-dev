import { cn } from "@/lib/utils";

type AdornmentType = "tape-top" | "tape-corner" | "pin" | "clip";

type PaperAdornmentProps = {
  type?: AdornmentType;
  className?: string;
};

/** Tape, pins, and clips — paper on a craftsman's desk */
export function PaperAdornment({ type = "tape-top", className }: PaperAdornmentProps) {
  if (type === "pin") {
    return (
      <span
        className={cn(
          "pointer-events-none absolute -top-1.5 left-1/2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border border-accent-bright/30 bg-accent shadow-sm",
          className,
        )}
        aria-hidden
      >
        <span className="absolute inset-1 rounded-full bg-accent-bright/40" />
      </span>
    );
  }

  if (type === "clip") {
    return (
      <span
        className={cn(
          "pointer-events-none absolute -top-2 left-6 z-10 h-5 w-8 rounded-t-sm border-2 border-stone/50 bg-stone/25",
          className,
        )}
        aria-hidden
      />
    );
  }

  if (type === "tape-corner") {
    return (
      <span
        className={cn(
          "pointer-events-none absolute -left-2 top-3 z-10 h-4 w-10 -rotate-[28deg] bg-accent-soft/80 shadow-sm",
          className,
        )}
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(92,104,73,0.08) 2px, rgba(92,104,73,0.08) 5px)",
        }}
        aria-hidden
      />
    );
  }

  return (
    <span
      className={cn(
        "pointer-events-none absolute -top-2 left-1/2 z-10 h-4 w-16 -translate-x-1/2 -rotate-1 bg-accent-soft/75 shadow-sm",
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
