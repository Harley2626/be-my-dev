"use client";

import { CraftAccent } from "@/components/brand/CraftAccent";
import { MicroWhisper } from "@/components/ui/MicroWhisper";
import { Button } from "@/components/ui/Button";
import { HandUnderline } from "@/components/ui/HandUnderline";
import { PersonalityNote } from "@/components/ui/PersonalityNote";
import { HeroWorkspace } from "@/components/sections/HeroWorkspace";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-36">
      <CraftAccent variant="circle" className="absolute left-4 top-40 hidden md:block" />
      <MicroWhisper className="absolute right-8 top-36 hidden lg:block" rotate={4}>
        carefully handcrafted
      </MicroWhisper>

      <div className="container-wide px-6 md:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.08fr] lg:gap-14 xl:gap-18">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <p className="mb-6 font-hand text-2xl text-accent-bright md:text-3xl">Hey, I&apos;m Jared.</p>

            <h1 className="font-display text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-forest md:text-5xl lg:text-[3.25rem]">
              I&apos;m not just another{" "}
              <span className="relative inline-block">
                web developer.
                <HandUnderline className="absolute -bottom-0.5 left-0 w-full" />
              </span>
            </h1>

            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted md:text-xl">
              I&apos;m someone who genuinely cares about building your business. Be My Dev is my
              workshop — one person, one desk, a lot of heart.
            </p>

            <p className="mt-5 max-w-md leading-relaxed text-muted">
              I&apos;ll build the website while you focus on your business. You&apos;ll always work
              directly with me — no account managers, no confusing jargon, no disappearing after
              launch.
            </p>

            <div className="mt-11 flex flex-wrap items-center gap-4">
              <Button href="#contact" size="lg">
                Let&apos;s build yours
              </Button>
              <Button href="#pricing" variant="secondary" size="lg">
                What it usually costs
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-accent-soft/50 pt-7">
              <PersonalityNote>Built in Cape Town.</PersonalityNote>
              <PersonalityNote>Usually replies within a day.</PersonalityNote>
              <PersonalityNote>Coffee usually helps.</PersonalityNote>
            </div>
            <MicroWhisper className="mt-3 block" rotate={-1}>
              Cape Town, South Africa
            </MicroWhisper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 lg:order-2"
          >
            <HeroWorkspace />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
