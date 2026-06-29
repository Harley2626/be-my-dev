"use client";

import { Button } from "@/components/ui/Button";
import { DoodleEgg } from "@/components/brand/TinyDoodles";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "How I help", href: "#services" },
  { label: "What it costs", href: "#pricing" },
  { label: "My work", href: "#projects" },
  { label: "Toolbox", href: "#how-it-works" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-surface/94 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.6)_inset]"
          : "bg-transparent",
      )}
    >
      <div className="container-wide flex items-center justify-between px-6 py-5 md:px-8 lg:px-12">
        <a href="#" aria-label="Be My Dev home" className="group relative flex items-center">
          <Logo size="md" />
          <DoodleEgg
            name="pencil"
            size={18}
            rotate={-12}
            opacity={0}
            className="absolute -right-5 -top-1 transition-opacity duration-500 group-hover:opacity-55"
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm text-muted hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href="#contact" size="default" className="hidden sm:inline-flex">
          Let&apos;s build yours
        </Button>
      </div>
    </header>
  );
}
