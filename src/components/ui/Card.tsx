import { PaperAdornment } from "@/components/brand/PaperAdornment";
import { LogoDot } from "@/components/brand/LogoShell";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  dot?: boolean;
  adornment?: "tape-top" | "tape-corner" | "pin" | "clip";
};

export function Card({
  children,
  className,
  hover = false,
  dot = true,
  adornment,
}: CardProps) {
  return (
    <div
      className={cn(
        "paper-card p-7 md:p-8",
        hover && "warm-card-hover cursor-default",
        className,
      )}
    >
      {adornment && <PaperAdornment type={adornment} />}
      {dot && !adornment && <LogoDot className="brand-card-dot" />}
      {children}
    </div>
  );
}
