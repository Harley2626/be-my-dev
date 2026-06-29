"use client";

import { brand } from "@/lib/brand-colors";
import { cn } from "@/lib/utils";

type HandArrowProps = {
  direction?: "down" | "right" | "left" | "up";
  className?: string;
  color?: string;
};

export function HandArrow({
  direction = "right",
  className,
  color = brand.highlight,
}: HandArrowProps) {
  const rotation = {
    right: 0,
    down: 90,
    left: 180,
    up: 270,
  }[direction];

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className={cn("shrink-0", className)}
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden
    >
      <path
        d="M6 14C10 13 12 15 16 14C18 13.5 20 14 22 14"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M18 10C20 12 21 13 22 14C21 15 20 16 18 18"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
