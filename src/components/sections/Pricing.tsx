"use client";

import { MicroWhisper } from "@/components/ui/MicroWhisper";
import { Card } from "@/components/ui/Card";
import { WorkshopZone } from "@/components/brand/WorkshopZone";
import { DoodleEgg } from "@/components/brand/TinyDoodles";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StickyNote } from "@/components/ui/StickyNote";
import { PassportStamp } from "@/components/ui/BrandMarks";
import { BrandIconCheck } from "@/components/ui/BrandIcons";
import { PersonalityNote } from "@/components/ui/PersonalityNote";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Starter",
    price: "R5,500",
    subtitle: "For ideas finding their feet.",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive",
      "Contact Form",
      "Basic SEO",
      "Google Maps",
      "WhatsApp Button",
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "R9,500",
    subtitle: "Everything in Starter, plus:",
    features: [
      "Blog",
      "Google Analytics",
      "Speed Optimisation",
      "Advanced SEO",
      "Training Session",
    ],
    featured: true,
  },
  {
    name: "Shop",
    price: "R10,500",
    pricePrefix: "Starting from",
    subtitle: "For opening your doors online:",
    features: [
      "Shopify Setup",
      "Product Upload",
      "Payment Gateway",
      "Shipping Setup",
      "Collection Pages",
      "Basic SEO",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing">
      <WorkshopZone tone="board">
        <div className="container-wide">
          <SectionHeading
            zone="The price board"
            lead="Plain and honest."
            title="What it usually costs."
            description="Good craft takes time — but the price shouldn't be a mystery. These are my usual starting points. We'll agree on an exact figure before anything begins."
            align="center"
            doodle="ruler"
          />

          <div className="relative grid gap-8 md:grid-cols-3">
            <DoodleEgg name="ruler" size={22} rotate={-12} className="absolute -left-1 top-1/3 hidden lg:block" opacity={0.45} />
            <div className="absolute -top-4 right-0 hidden md:block">
              <StickyNote rotate={2}>No surprise invoices</StickyNote>
            </div>

            <MicroWhisper className="absolute -left-1 bottom-0 hidden lg:block" rotate={-4}>
              fixed pricing
            </MicroWhisper>

            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card
                  hover={!pkg.featured}
                  adornment={pkg.featured ? "pin" : index === 0 ? "tape-top" : "clip"}
                  dot={false}
                  className={`relative flex h-full flex-col ${
                    pkg.featured
                      ? "border-accent-bright/25 bg-gradient-to-br from-accent-light/45 to-surface shadow-md"
                      : ""
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute -right-1 top-14 hidden sm:block">
                      <PassportStamp rotate={10}>fixed price</PassportStamp>
                    </div>
                  )}

                  <h3 className="font-display text-xl font-semibold text-forest">{pkg.name}</h3>
                  <div className="mt-5">
                    {pkg.pricePrefix && <p className="text-sm text-muted">{pkg.pricePrefix}</p>}
                    <p className="font-display text-4xl font-semibold text-accent">{pkg.price}</p>
                  </div>
                  <p className="mt-2 text-sm text-muted">{pkg.subtitle}</p>

                  <ul className="mt-8 flex-1 space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <BrandIconCheck size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="#contact"
                    variant={pkg.featured ? "primary" : "secondary"}
                    className="mt-8 w-full"
                  >
                    Let&apos;s build yours
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center">
            <PersonalityNote>No confusing jargon.</PersonalityNote>
            <span className="mx-2 text-accent-soft">·</span>
            <PersonalityNote>Fixed pricing whenever I can.</PersonalityNote>
          </p>
        </div>
      </WorkshopZone>
    </section>
  );
}
