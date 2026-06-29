import { brand } from "@/lib/brand-colors";
import { cn } from "@/lib/utils";

const S = brand.stroke;
const SD = brand.strokeDark;

type DoodleSvgProps = {
  size?: number;
  className?: string;
  rotate?: number;
  opacity?: number;
  children: React.ReactNode;
};

function DoodleSvg({ size = 28, className, rotate = 0, opacity = 0.72, children }: DoodleSvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      style={{ transform: `rotate(${rotate}deg)`, opacity }}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function DoodleCoffee(props: Omit<DoodleSvgProps, "children">) {
  return (
    <DoodleSvg {...props}>
      <path
        d="M9 22C9 18 12 15 16 15H20C24 15 27 18 27 22C27 25 24 27 16 27C8 27 9 25 9 22Z"
        className="fill-accent-light"
        stroke={S}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M27 19H29C30.5 19 31.5 20 31.5 22C31.5 24 30.5 25 29 25H27" stroke={S} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M13 15C14 12 16 10 19 10" stroke={S} strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
      <path d="M17 12C17.5 9 19 7 21 7" stroke={S} strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <path d="M12 21Q16 23 20 21" stroke={SD} strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
    </DoodleSvg>
  );
}

export function DoodleNotebook(props: Omit<DoodleSvgProps, "children">) {
  return (
    <DoodleSvg {...props}>
      <rect x="8" y="6" width="16" height="20" rx="2.5" className="fill-accent-light" stroke={S} strokeWidth="1.4" />
      <path d="M12 6V26" stroke={S} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <circle cx="10" cy="10" r="0.8" fill={SD} opacity="0.4" />
      <circle cx="10" cy="14" r="0.8" fill={SD} opacity="0.4" />
      <circle cx="10" cy="18" r="0.8" fill={SD} opacity="0.4" />
      <path d="M14 12H21M14 16H19M14 20H20" stroke={SD} strokeWidth="1.1" strokeLinecap="round" opacity="0.45" />
    </DoodleSvg>
  );
}

export function DoodleCursor(props: Omit<DoodleSvgProps, "children">) {
  return (
    <DoodleSvg {...props}>
      <path
        d="M8 6L8 24L13 19L17 27L20 25L16 17L24 17L8 6Z"
        className="fill-accent-light"
        stroke={S}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </DoodleSvg>
  );
}

export function DoodlePlant(props: Omit<DoodleSvgProps, "children">) {
  return (
    <DoodleSvg {...props}>
      <path d="M11 26H21L20 22H12L11 26Z" className="fill-accent-light" stroke={S} strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M16 22V14" stroke={S} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M16 16C12 16 10 13 10 10C13 11 15 13 16 16Z" className="fill-accent-soft/80" stroke={S} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M16 14C20 13 22 10 22 7C19 8 17 10 16 14Z" className="fill-accent-soft/80" stroke={S} strokeWidth="1.2" strokeLinejoin="round" />
    </DoodleSvg>
  );
}

export function DoodleMonitor(props: Omit<DoodleSvgProps, "children">) {
  return (
    <DoodleSvg {...props}>
      <rect x="6" y="8" width="20" height="14" rx="2.5" className="fill-accent-light" stroke={S} strokeWidth="1.4" />
      <path d="M11 14H21M11 17H18" stroke={SD} strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
      <path d="M13 22H19" stroke={S} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16 22V25" stroke={S} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12 25H20" stroke={S} strokeWidth="1.3" strokeLinecap="round" />
    </DoodleSvg>
  );
}

export function DoodlePencil(props: Omit<DoodleSvgProps, "children">) {
  return (
    <DoodleSvg {...props}>
      <path
        d="M8 24L22 10L25 13L11 27L8 24Z"
        className="fill-accent-light"
        stroke={S}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M22 10L25 7L28 10L25 13L22 10Z" className="fill-lime/70" stroke={S} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M8 24L6 27L9 28L11 27L8 24Z" className="fill-accent-soft" stroke={S} strokeWidth="1.1" strokeLinejoin="round" />
    </DoodleSvg>
  );
}

export function DoodleRuler(props: Omit<DoodleSvgProps, "children">) {
  return (
    <DoodleSvg {...props}>
      <rect
        x="5"
        y="14"
        width="22"
        height="7"
        rx="1.5"
        transform="rotate(-12 16 17.5)"
        className="fill-accent-light"
        stroke={S}
        strokeWidth="1.3"
      />
      <path
        d="M8 16.5L8 19M11 15.8L11 18.8M14 15.2L14 18.2M17 14.5L17 17.5M20 13.8L20 16.8M23 13.2L23 16.2"
        stroke={SD}
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.5"
        transform="rotate(-12 16 17.5)"
      />
    </DoodleSvg>
  );
}

export function DoodleKeyboard(props: Omit<DoodleSvgProps, "children">) {
  return (
    <DoodleSvg {...props}>
      <rect x="5" y="12" width="22" height="12" rx="2.5" className="fill-accent-light" stroke={S} strokeWidth="1.4" />
      <rect x="8" y="15" width="3" height="2.5" rx="0.6" stroke={SD} strokeWidth="0.8" opacity="0.45" />
      <rect x="12.5" y="15" width="3" height="2.5" rx="0.6" stroke={SD} strokeWidth="0.8" opacity="0.45" />
      <rect x="17" y="15" width="3" height="2.5" rx="0.6" stroke={SD} strokeWidth="0.8" opacity="0.45" />
      <rect x="21.5" y="15" width="3" height="2.5" rx="0.6" stroke={SD} strokeWidth="0.8" opacity="0.45" />
      <rect x="10" y="19.5" width="12" height="2.5" rx="0.6" stroke={SD} strokeWidth="0.8" opacity="0.45" />
    </DoodleSvg>
  );
}

export const doodles = {
  coffee: DoodleCoffee,
  notebook: DoodleNotebook,
  cursor: DoodleCursor,
  plant: DoodlePlant,
  monitor: DoodleMonitor,
  pencil: DoodlePencil,
  ruler: DoodleRuler,
  keyboard: DoodleKeyboard,
} as const;

export type DoodleName = keyof typeof doodles;

type DoodleEggProps = {
  name: DoodleName;
  size?: number;
  className?: string;
  rotate?: number;
  opacity?: number;
};

/** Tiny handcrafted illustration — Easter egg placement throughout the site */
export function DoodleEgg({ name, size = 28, className, rotate = 0, opacity = 0.72 }: DoodleEggProps) {
  const Doodle = doodles[name];
  return <Doodle size={size} className={className} rotate={rotate} opacity={opacity} />;
}
