"use client";

import { brand } from "@/lib/brand-colors";
import { motion } from "framer-motion";

const float = (delay = 0, y = 5) => ({
  animate: { y: [0, -y, 0] },
  transition: { duration: 5.5 + delay, repeat: Infinity, ease: "easeInOut" as const, delay },
});

const sway = (delay = 0) => ({
  animate: { rotate: [-1.2, 1.2, -1.2] },
  transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const, delay },
});

/** The workshop desk — Be My Dev's visual identity. Alive, calm, handcrafted. */
export function HeroWorkspace() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-moss/10 blur-3xl" aria-hidden />

        <div className="paper-card relative overflow-visible p-3 shadow-[0_12px_48px_rgba(58,66,52,0.1)] md:p-5">
          <span
            className="pointer-events-none absolute -top-2 left-1/2 z-20 h-4 w-14 -translate-x-1/2 -rotate-1 bg-accent-soft/80 shadow-sm"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(92,104,73,0.07) 3px, rgba(92,104,73,0.07) 6px)",
            }}
            aria-hidden
          />

          <svg
            viewBox="0 0 480 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-full"
            aria-label="Jared's workshop desk with laptop, monitor, notebook, coffee, and sketches"
            role="img"
          >
            {/* Back wall — warm studio */}
            <rect x="16" y="12" width="448" height="210" rx="18" className="fill-accent-light/30" />
            <path d="M32 44 Q160 34 240 40 Q360 48 448 36" stroke={brand.brushSoft} strokeWidth="1.8" strokeLinecap="round" opacity="0.45" />

            {/* Desk */}
            <path
              d="M20 220 Q240 208 460 220 L468 360 Q240 372 12 360 Z"
              className="fill-warm"
              stroke={brand.stroke}
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path d="M20 220 Q240 208 460 220" stroke={brand.stroke} strokeWidth="1" opacity="0.2" />

            {/* Open notebook — left */}
            <motion.g transform="translate(36, 175) rotate(-10)" {...float(0.2, 3)}>
              <rect width="80" height="96" rx="3" className="fill-surface" stroke={brand.stroke} strokeWidth="1.2" />
              <path d="M40 4 V92" stroke={brand.stroke} strokeWidth="0.8" opacity="0.25" />
              <path d="M10 18 H36 M10 28 H32 M10 38 H34" stroke={brand.stroke} strokeWidth="0.9" strokeLinecap="round" opacity="0.35" />
              <path d="M48 22 H72 M48 32 H68" stroke={brand.highlight} strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
              <path d="M48 52 Q56 48 64 52" stroke={brand.stroke} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
            </motion.g>

            {/* Sketch with wireframe */}
            <motion.g transform="translate(108, 188) rotate(6)" {...float(1, 4)}>
              <rect width="64" height="72" rx="3" className="fill-surface" stroke={brand.stroke} strokeWidth="1" opacity="0.9" />
              <rect x="10" y="12" width="44" height="28" rx="2" stroke={brand.stroke} strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4" />
              <path d="M10 50 H54 M10 58 H40" stroke={brand.stroke} strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
            </motion.g>

            {/* Laptop — website preview */}
            <g transform="translate(168, 128)">
              <rect x="0" y="0" width="132" height="88" rx="7" className="fill-forest" stroke={brand.stroke} strokeWidth="1.4" />
              <rect x="7" y="7" width="118" height="74" rx="3" className="fill-surface" />
              <rect x="14" y="14" width="36" height="4" rx="2" className="fill-accent" opacity="0.7" />
              <rect x="58" y="14" width="20" height="3" rx="1.5" className="fill-accent-soft" />
              <rect x="14" y="26" width="72" height="5" rx="2" className="fill-forest/50" />
              <rect x="14" y="36" width="48" height="3" rx="1.5" className="fill-accent-bright/30" />
              <rect x="14" y="48" width="28" height="10" rx="3" className="fill-accent" opacity="0.85" />
              <rect x="46" y="48" width="28" height="10" rx="3" className="fill-accent-light" stroke={brand.stroke} strokeWidth="0.6" />
              <rect x="14" y="62" width="104" height="12" rx="2" className="fill-accent-light/50" />
              <path d="M-6 88 H138 L146 98 H-14 Z" className="fill-accent-soft/90" stroke={brand.stroke} strokeWidth="1.1" strokeLinejoin="round" />
            </g>

            {/* External monitor — finished site */}
            <g transform="translate(318, 108)">
              <rect x="0" y="0" width="120" height="82" rx="6" className="fill-charcoal" stroke={brand.stroke} strokeWidth="1.3" />
              <rect x="6" y="6" width="108" height="66" rx="2" className="fill-accent-light/25" />
              <rect x="14" y="14" width="92" height="8" rx="2" className="fill-surface/90" />
              <rect x="14" y="28" width="56" height="4" rx="2" className="fill-surface/60" />
              <rect x="14" y="36" width="40" height="3" rx="1.5" className="fill-surface/40" />
              <rect x="14" y="46" width="36" height="8" rx="2" className="fill-accent-bright/70" />
              <rect x="48" y="58" width="24" height="3" rx="1.5" className="fill-lime/50" />
              <path d="M48 82 V92 M72 82 V92" stroke={brand.stroke} strokeWidth="1.2" strokeLinecap="round" />
              <path d="M40 92 H80" stroke={brand.stroke} strokeWidth="1.2" strokeLinecap="round" />
            </g>

            {/* Coffee */}
            <g transform="translate(48, 248)">
              <path
                d="M0 26 C0 16 10 10 22 10 H38 C50 10 60 16 60 26 C60 34 50 40 30 40 C10 40 0 34 0 26 Z"
                className="fill-surface"
                stroke={brand.stroke}
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
              <path d="M60 20 H68 C72 20 74 22 74 26 C74 30 72 32 68 32 H60" stroke={brand.stroke} strokeWidth="1.2" strokeLinecap="round" />
              <motion.g {...float(0.4, 3)}>
                <path d="M16 8 Q20 2 24 8" stroke={brand.stroke} strokeWidth="0.9" strokeLinecap="round" opacity="0.35" />
                <path d="M28 6 Q32 0 36 6" stroke={brand.stroke} strokeWidth="0.9" strokeLinecap="round" opacity="0.25" />
              </motion.g>
            </g>

            {/* Plant */}
            <g transform="translate(368, 232)">
              <path d="M14 44 H34 L32 52 H16 L14 44Z" className="fill-accent-light" stroke={brand.stroke} strokeWidth="1.1" strokeLinejoin="round" />
              <motion.g style={{ transformOrigin: "24px 36px" }} {...sway(0.6)}>
                <path d="M24 44 V24" stroke={brand.stroke} strokeWidth="1.2" strokeLinecap="round" />
                <path d="M24 30 C16 30 10 24 10 16 C16 18 22 22 24 30Z" className="fill-moss/30" stroke={brand.stroke} strokeWidth="1" strokeLinejoin="round" />
                <path d="M24 26 C32 24 38 18 38 10 C32 12 26 16 24 26Z" className="fill-sage/25" stroke={brand.stroke} strokeWidth="1" strokeLinejoin="round" />
              </motion.g>
            </g>

            {/* Pencil */}
            <g transform="translate(128, 298) rotate(22)">
              <path d="M0 0 L40 0 L36 5 L4 5 Z" className="fill-lime/55" stroke={brand.stroke} strokeWidth="0.9" />
              <path d="M40 0 L44 -4 L40 -8 L36 0" className="fill-accent-soft" stroke={brand.stroke} strokeWidth="0.8" />
            </g>

            <ellipse cx="240" cy="368" rx="170" ry="7" className="fill-accent" opacity="0.05" />
          </svg>

          <motion.div className="absolute left-3 top-10 z-10 sm:left-6 sm:top-8" {...float(0, 4)} style={{ rotate: -5 }}>
            <div className="rounded-sm border border-lime/25 bg-gradient-to-br from-warm to-surface px-3 py-2 shadow-sm">
              <p className="font-hand text-sm text-forest/85">crafted, not templated</p>
            </div>
          </motion.div>

          <motion.div className="absolute right-4 top-14 z-10 sm:right-8" {...float(1.5, 3)} style={{ rotate: 3 }}>
            <div className="rounded-sm border border-lime/25 bg-gradient-to-br from-warm to-accent-light/40 px-3 py-2 shadow-sm">
              <p className="font-hand text-sm text-forest/85">your idea → live site</p>
            </div>
          </motion.div>

          <motion.div className="absolute bottom-20 right-3 z-10 sm:right-6" {...float(2.2, 5)} style={{ rotate: -2 }}>
            <div className="rounded-sm border border-lime/25 bg-gradient-to-br from-warm to-surface px-3 py-2 shadow-sm">
              <p className="font-hand text-sm text-forest/85">coffee usually helps</p>
            </div>
          </motion.div>
        </div>

        <p className="mt-5 text-center font-hand text-xl text-accent-bright/85">
          The workshop&apos;s open — come on in
        </p>
      </motion.div>
    </div>
  );
}
