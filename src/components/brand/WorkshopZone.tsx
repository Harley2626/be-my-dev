import { cn } from "@/lib/utils";

type WorkshopZoneProps = {
  children: React.ReactNode;
  className?: string;
  /** Subtle zone tint — like moving through the workshop */
  tone?: "bench" | "board" | "gallery" | "tools" | "notes" | "door";
};

const tones: Record<NonNullable<WorkshopZoneProps["tone"]>, string> = {
  bench: "bg-paper/80 workshop-zone-bench",
  board: "workshop-zone-board",
  gallery: "bg-accent-light/12 workshop-zone-gallery",
  tools: "workshop-zone-tools",
  notes: "bg-sage/8 workshop-zone-notes",
  door: "workshop-zone-door",
};

export function WorkshopZone({ children, className, tone = "bench" }: WorkshopZoneProps) {
  return <div className={cn("section-padding relative", tones[tone], className)}>{children}</div>;
}
