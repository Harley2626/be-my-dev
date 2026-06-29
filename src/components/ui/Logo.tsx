import { LogoMark } from "@/components/ui/LogoMark";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
};

export function Logo({ className, showTagline = false, size = "md" }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: "text-base", tagline: "text-[10px]" },
    md: { icon: 36, text: "text-lg", tagline: "text-xs" },
    lg: { icon: 44, text: "text-xl", tagline: "text-sm" },
  };

  const s = sizes[size];

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark size={s.icon} variant="site" />
      <div className="leading-none">
        <div className={cn("flex items-baseline gap-1", s.text)}>
          <span className="font-flair text-accent-bright">Be My</span>
          <span className="font-display font-bold tracking-tight text-forest">Dev</span>
        </div>
        {showTagline && (
          <p className={cn("mt-0.5 font-hand text-muted", s.tagline)}>a craftsman&apos;s workshop · Cape Town</p>
        )}
      </div>
    </div>
  );
}
