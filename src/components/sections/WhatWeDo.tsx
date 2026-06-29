"use client";

import { Card } from "@/components/ui/Card";
import { CraftAccent } from "@/components/brand/CraftAccent";
import { WorkshopZone } from "@/components/brand/WorkshopZone";
import { DoodleEgg } from "@/components/brand/TinyDoodles";
import { MicroWhisper } from "@/components/ui/MicroWhisper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PersonalityNote } from "@/components/ui/PersonalityNote";
import {
  BrandIconRefresh,
  BrandIconShop,
  BrandIconWebsite,
} from "@/components/ui/BrandIcons";
import { motion } from "framer-motion";

const services = [
  {
    Icon: BrandIconWebsite,
    title: "Launch your business online",
    description:
      "A crafted home for your business — designed to feel like you, not pulled off a shelf.",
    aside: "where most start",
  },
  {
    Icon: BrandIconShop,
    title: "Open your shop",
    description:
      "Turn an idea into something people can buy from. Payments, products, the whole experience.",
    aside: "for selling online",
  },
  {
    Icon: BrandIconRefresh,
    title: "Restore what's worth keeping",
    description:
      "Good bones, lost soul. I'll reshape it with care — same business, better craft.",
    aside: "already have a site?",
  },
];

export function WhatWeDo() {
  return (
    <section id="services">
      <WorkshopZone tone="bench">
        <div className="container-wide relative">
          <CraftAccent variant="corner" className="absolute right-0 top-0 hidden md:block" />
          <MicroWhisper className="absolute left-0 top-2 hidden md:block" rotate={-5}>
            built with care
          </MicroWhisper>

          <SectionHeading
            zone="The workbench"
            lead="This is what I make."
            title="How I can help."
            description="I don't sell code or platforms. I help people launch ideas — websites and online stores, crafted properly, one at a time."
            doodle="plant"
          />

          <div className="grid gap-8 md:grid-cols-3">
            {services.map(({ Icon, title, description, aside }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card
                  hover
                  adornment={index === 0 ? "tape-corner" : index === 1 ? "pin" : "clip"}
                  dot={false}
                  className="group relative h-full"
                >
                  <span className="absolute right-5 top-5 font-hand text-base text-accent-bright/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {aside}
                  </span>
                  <div className="mb-6 transition-transform duration-650 ease-out group-hover:scale-[1.03] group-hover:-rotate-1">
                    <Icon size={48} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-forest">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{description}</p>
                  {index === 2 && (
                    <DoodleEgg name="pencil" size={20} rotate={-8} className="absolute bottom-4 right-4 opacity-40" />
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center">
            <PersonalityNote>No disappearing after launch.</PersonalityNote>
            <span className="mx-2 text-accent-soft">·</span>
            <PersonalityNote>You&apos;ll always work directly with me.</PersonalityNote>
          </p>
        </div>
      </WorkshopZone>
    </section>
  );
}
