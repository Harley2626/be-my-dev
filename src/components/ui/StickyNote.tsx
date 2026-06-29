"use client";

type StickyNoteProps = {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
};

export function StickyNote({ children, className = "", rotate = -3 }: StickyNoteProps) {
  return (
    <div
      className={`inline-block rounded-sm border border-lime/35 bg-gradient-to-br from-warm to-accent-light/35 px-4 py-3 shadow-[0_2px_8px_rgba(58,66,52,0.06)] transition-transform duration-500 ease-out hover:rotate-0 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <p className="font-hand text-base leading-snug text-forest/85">{children}</p>
    </div>
  );
}
