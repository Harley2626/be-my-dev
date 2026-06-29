import { cn } from "@/lib/utils";

type PersonalityNoteProps = {
  children: React.ReactNode;
  className?: string;
};

export function PersonalityNote({ children, className }: PersonalityNoteProps) {
  return (
    <span className={cn("font-hand text-base text-accent-bright/90", className)}>{children}</span>
  );
}
