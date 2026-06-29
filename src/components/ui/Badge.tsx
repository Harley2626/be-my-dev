import { LogoDot } from "@/components/brand/LogoShell";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "brand-badge inline-flex items-center gap-1.5 rounded-lg border border-accent-soft bg-accent-light/55 px-2.5 py-0.5 font-hand text-sm text-accent",
        className,
      )}
    >
      <LogoDot className="opacity-75" />
      {children}
    </span>
  );
}
