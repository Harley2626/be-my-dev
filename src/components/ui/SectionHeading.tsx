import { BrandDivider } from "@/components/brand/BrandDivider";
import { DoodleEgg, type DoodleName } from "@/components/brand/TinyDoodles";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Workshop zone — quiet breadcrumb in the story */
  zone?: string;
  lead?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  doodle?: DoodleName;
};

export function SectionHeading({
  zone,
  lead,
  title,
  description,
  align = "left",
  className,
  doodle,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "relative mb-12 md:mb-16",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {doodle && (
        <DoodleEgg
          name={doodle}
          size={26}
          rotate={align === "center" ? 6 : -8}
          className={cn(
            "pointer-events-none absolute hidden sm:block",
            align === "center" ? "-right-2 -top-2 md:-right-6" : "-right-4 top-0 md:-right-8",
          )}
        />
      )}

      {zone && (
        <p
          className={cn(
            "mb-2 font-hand text-sm uppercase tracking-widest text-stone",
            align === "center" && "mx-auto",
          )}
        >
          {zone}
        </p>
      )}

      {lead && (
        <p
          className={cn(
            "mb-3 font-hand text-xl text-accent-bright md:text-2xl",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      )}

      <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-forest md:text-4xl">
        {title}
      </h2>

      <BrandDivider className={cn("mt-5 max-w-xs", align === "center" ? "mx-auto" : "")} />

      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
