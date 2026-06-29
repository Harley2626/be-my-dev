"use client";

import { brand } from "@/lib/brand-colors";

type HandUnderlineProps = {
  className?: string;
  color?: string;
};

export function HandUnderline({ className, color = brand.highlight }: HandUnderlineProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M2 8C30 2 50 10 80 6C110 2 140 9 170 5C185 3 195 6 198 7"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </svg>
  );
}
