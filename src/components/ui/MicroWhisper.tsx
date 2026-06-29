import { cn } from "@/lib/utils";

type MicroWhisperProps = {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
};

/** Tiny personality reward — never dominates, just there if you notice */
export function MicroWhisper({ children, className, rotate = -3 }: MicroWhisperProps) {
  return (
    <span
      className={cn(
        "pointer-events-none inline-block font-hand text-sm text-accent-bright/55 select-none",
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden
    >
      {children}
    </span>
  );
}
