import { DoodleEgg } from "@/components/brand/TinyDoodles";
import { MicroWhisper } from "@/components/ui/MicroWhisper";
import { Logo } from "@/components/ui/Logo";
import { PersonalityNote } from "@/components/ui/PersonalityNote";

export function Footer() {
  return (
    <footer className="border-t border-accent-soft bg-paper/80">
      <div className="container-wide section-padding !py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Logo size="md" showTagline />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              A one-person workshop in Cape Town. I craft websites and online stores for people
              who&apos;d rather hire a maker than an agency.
            </p>
          </div>
          <div className="flex items-end gap-4 md:text-right">
            <div className="space-y-1">
              <PersonalityNote>Built in Cape Town.</PersonalityNote>
              <p className="font-hand text-xl text-accent-bright">Coffee usually helps.</p>
              <p className="font-hand text-lg text-accent-bright/80">Thanks for visiting the workshop.</p>
            </div>
            <DoodleEgg name="plant" size={28} rotate={-4} opacity={0.5} className="hidden sm:block" />
          </div>
        </div>
        <p className="mt-10 flex flex-wrap items-center justify-between gap-2 text-xs text-stone">
          <span>© {new Date().getFullYear()} Be My Dev · Jared</span>
          <MicroWhisper rotate={2}>built with coffee</MicroWhisper>
        </p>
      </div>
    </footer>
  );
}
