"use client";

import { Card } from "@/components/ui/Card";
import { WorkshopZone } from "@/components/brand/WorkshopZone";
import { DoodleEgg } from "@/components/brand/TinyDoodles";
import { PassportStamp } from "@/components/ui/BrandMarks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HandArrow } from "@/components/ui/HandArrow";
import { PersonalityNote } from "@/components/ui/PersonalityNote";
import { motion } from "framer-motion";

const tools = [
  { number: "01", title: "You tell me about the idea." },
  { number: "02", title: "I sketch a plan and a fixed quote." },
  { number: "03", title: "I craft it — carefully, properly." },
  { number: "04", title: "We launch. You go live." },
];

const collaborators = [
  {
    title: "Photographer",
    price: "R5,500",
    summary: "4–5 hours · ±200 edited photos",
    description:
      "Professional photography for your products, team, or space — ideal if your site needs real images that feel like your business.",
    adornment: "pin" as const,
  },
  {
    title: "Brand designer",
    price: "R5,000",
    summary: "Full brand identity package",
    description:
      "Logo, colours, typography, and everything needed to build out your website — a complete brand identity before we start crafting the site.",
    adornment: "clip" as const,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works">
      <WorkshopZone tone="tools">
        <div className="container-wide">
          <SectionHeading
            zone="My toolbox"
            lead="Simple process. No mystery."
            title="How we'd work together."
            description="Good craft doesn't need a twelve-step methodology. Four steps, always transparent, always the same person on the other end."
            align="center"
            doodle="notebook"
          />

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {tools.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="paper-card warm-card-hover relative p-7 text-center"
              >
                {index === 0 && (
                  <div className="absolute -right-2 -top-3">
                    <PassportStamp rotate={5}>step one</PassportStamp>
                  </div>
                )}
                {index === 1 && (
                  <DoodleEgg name="coffee" size={20} rotate={-4} className="absolute -bottom-1 -left-1 opacity-50" />
                )}

                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent font-display text-sm font-semibold text-surface shadow-sm">
                  {step.number}
                </div>
                <p className="font-medium leading-snug text-forest">{step.title}</p>
                {index < tools.length - 1 && (
                  <div className="mt-4 hidden justify-center lg:flex" aria-hidden>
                    <HandArrow direction="right" className="opacity-35" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl text-center">
            <p className="font-hand text-xl text-accent-bright md:text-2xl">
              Need photos or a brand first?
            </p>
            <p className="mt-2 text-muted">
              I work with a photographer and brand designer you can use — optional, but handy if
              you&apos;re starting from scratch.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
            {collaborators.map((person, index) => (
              <motion.div
                key={person.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card hover adornment={person.adornment} dot={false} className="h-full">
                  <p className="font-hand text-lg text-accent-bright">{person.title}</p>
                  <p className="mt-3 font-display text-3xl font-semibold text-accent">{person.price}</p>
                  <p className="mt-1 font-hand text-base text-muted">{person.summary}</p>
                  <p className="mt-4 leading-relaxed text-muted">{person.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-lg text-center font-hand text-2xl text-accent-bright">
            I&apos;ll build the website while you focus on your business.
          </p>
          <p className="mt-3 text-center">
            <PersonalityNote>No account managers.</PersonalityNote>
            <span className="mx-2 text-accent-soft">·</span>
            <PersonalityNote>No disappearing after launch.</PersonalityNote>
          </p>
        </div>
      </WorkshopZone>
    </section>
  );
}
