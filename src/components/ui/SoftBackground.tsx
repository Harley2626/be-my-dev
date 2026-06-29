"use client";

export function SoftBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="soft-blob absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent-light/50" />
      <div
        className="soft-blob absolute bottom-10 -left-20 h-80 w-80 rounded-full bg-accent-soft/35"
        style={{ animationDelay: "-11s" }}
      />
      <div
        className="soft-blob absolute top-1/2 right-1/4 h-64 w-64 rounded-full bg-lime/15"
        style={{ animationDelay: "-18s" }}
      />
    </div>
  );
}
