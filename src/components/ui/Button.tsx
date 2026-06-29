import { LogoDot } from "@/components/brand/LogoShell";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "brand-btn brand-btn-primary bg-gradient-to-b from-accent-bright to-accent text-surface shadow-[0_3px_0_#2f3629,0_4px_14px_rgba(58,66,52,0.18)] hover:from-accent hover:to-forest hover:shadow-[0_4px_0_#2f3629,0_8px_22px_rgba(58,66,52,0.22)] active:translate-y-0.5 active:shadow-[0_1px_0_#2f3629]",
  secondary:
    "brand-btn brand-btn-secondary border border-accent-soft bg-gradient-to-b from-accent-light/70 to-accent-light/35 text-forest shadow-sm hover:border-accent-bright/45 hover:from-accent-light hover:to-accent-soft/50 active:translate-y-px",
  ghost: "brand-btn text-muted hover:bg-accent-light/50 hover:text-forest",
};

const sizes: Record<ButtonSize, string> = {
  default: "px-6 py-2.5 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {variant === "primary" && <LogoDot className="absolute right-2.5 top-2 opacity-80" />}
      {children}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
