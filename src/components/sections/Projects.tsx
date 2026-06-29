"use client";

import { WorkshopZone } from "@/components/brand/WorkshopZone";
import { PaperAdornment } from "@/components/brand/PaperAdornment";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";

const project = {
  name: "Alice in Bloom",
  type: "Shopify store",
  plaque: "2026",
  image: "/projects/alice-in-bloom.png",
  description:
    "Alice in Bloom was built for a local mom in Cape Town with a passion for creating beautiful, handcrafted flower arrangements. The goal was to create a modern, elegant Shopify store that reflects the beauty of her brand while making it easy for customers to browse bouquets, place orders, and arrange flower deliveries online. The website combines a soft, premium design with a seamless shopping experience, mobile-friendly performance, and SEO best practices to help the business grow its online presence and connect with more customers.",
};

function ProjectPreview() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-accent-light/20">
      <Image
        src={project.image}
        alt={`${project.name} — Shopify store homepage preview`}
        fill
        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        sizes="(max-width: 896px) 100vw, 896px"
        priority
      />
      <span className="pointer-events-none absolute bottom-4 right-4 rounded-sm border border-accent-soft/60 bg-surface/90 px-3 py-1 font-hand text-sm text-muted shadow-sm">
        Preview — going live soon
      </span>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects">
      <WorkshopZone tone="gallery">
        <div className="container-wide">
          <SectionHeading
            zone="The gallery wall"
            lead="My last project."
            title="Alice in Bloom"
            description="One recent piece — crafted properly, for a real business."
            doodle="monitor"
          />

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="group relative mx-auto max-w-4xl"
          >
            <div className="gallery-piece paper-card warm-card-hover relative overflow-hidden">
              <PaperAdornment type="pin" />
              <span className="gallery-plaque absolute left-6 top-5 z-10 md:left-8">
                {project.plaque}
              </span>

              <div className="mt-6 overflow-hidden rounded-2xl border border-accent-soft/35 md:mt-8">
                <ProjectPreview />
              </div>

              <div className="px-4 py-8 md:px-8 md:py-10">
                <Badge>{project.type}</Badge>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </WorkshopZone>
    </section>
  );
}
