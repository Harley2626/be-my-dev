"use client";

import { MicroWhisper } from "@/components/ui/MicroWhisper";
import { WorkshopZone } from "@/components/brand/WorkshopZone";
import { DoodleEgg } from "@/components/brand/TinyDoodles";
import { Button } from "@/components/ui/Button";
import { GreenTape } from "@/components/ui/BrandMarks";
import { PersonalityNote } from "@/components/ui/PersonalityNote";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StickyNote } from "@/components/ui/StickyNote";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

const packageOptions = ["Starter", "Business", "Shop"];

const phoneDisplay = "083 963 0497";
const phoneTel = "+27839630497";
const phoneWhatsApp = "27839630497";

const inputClass =
  "w-full rounded-xl border border-accent-soft bg-surface px-4 py-3.5 text-sm transition-all duration-500 focus:border-accent-bright focus:outline-none focus:ring-2 focus:ring-accent-light";

const checkboxClass =
  "h-4 w-4 rounded border-accent-soft text-accent focus:ring-accent-light focus:ring-offset-0";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [needsPhotographer, setNeedsPhotographer] = useState(false);
  const [needsBrandDesigner, setNeedsBrandDesigner] = useState(false);
  const [callbackMethod, setCallbackMethod] = useState<"call" | "whatsapp" | "">("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact">
      <WorkshopZone tone="door">
        <div className="container-wide">
          <SectionHeading
            zone="The front door"
            lead="You've made it this far."
            title="Let's build yours."
            description="Tell me about your idea — even if it's still taking shape. I read every message myself, and I'll reply like a person, not a pipeline."
            align="center"
            doodle="cursor"
          />

          <MicroWhisper className="mb-6 block text-center md:mb-8" rotate={1}>
            built with care
          </MicroWhisper>

          <div className="paper-card warm-card-hover relative mx-auto max-w-4xl overflow-hidden">
            <GreenTape className="left-8 top-0" wide />
            <DoodleEgg name="keyboard" size={22} rotate={5} className="absolute bottom-6 left-5 hidden md:block" opacity={0.45} />
            <div className="absolute right-5 top-5 hidden md:block">
              <StickyNote rotate={3}>Replies within a day</StickyNote>
            </div>

            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-center bg-gradient-to-br from-accent-light/40 to-sage/10 p-8 md:p-12 lg:p-14">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-hand text-2xl text-accent-bright">Thanks for stopping by the workshop.</p>
                  <p className="mt-5 max-w-sm leading-relaxed text-muted">
                    Whether you know exactly what you need or you&apos;re still figuring it out — either
                    way is fine. Drop me a note and we&apos;ll take it from there.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-x-4 gap-y-1">
                    <PersonalityNote>Built in Cape Town.</PersonalityNote>
                    <PersonalityNote>Coffee usually helps.</PersonalityNote>
                  </div>
                  <p className="mt-3 font-hand text-base text-accent-bright/90">
                    Just you and me. No account managers.
                  </p>

                  <div className="mt-8 rounded-xl border border-accent-soft/60 bg-surface/70 p-5">
                    <p className="font-hand text-lg text-accent-bright">Prefer to talk now?</p>
                    <p className="mt-1 text-sm text-muted">Call or WhatsApp me on {phoneDisplay}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button href={`tel:${phoneTel}`} variant="secondary" size="default">
                        Call me
                      </Button>
                      <Button
                        href={`https://wa.me/${phoneWhatsApp}`}
                        variant="secondary"
                        size="default"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp me
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="border-t border-accent-soft p-8 md:p-12 lg:border-l lg:border-t-0 lg:p-14">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex h-full flex-col items-center justify-center py-12 text-center"
                  >
                    <p className="font-hand text-3xl text-accent-bright">Got it — thank you.</p>
                    <p className="mt-3 text-muted">I&apos;ll read your message properly and reply soon.</p>
                    <p className="mt-2 font-hand text-lg text-accent-bright">Usually much sooner.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Name" id="name" required placeholder="Your name" />
                      <Field label="Email" id="email" type="email" required placeholder="you@business.com" />
                    </div>

                    <div>
                      <label htmlFor="package" className="mb-2 block text-sm font-medium text-forest">
                        Which package are you interested in?
                      </label>
                      <select id="package" name="package" className={inputClass} defaultValue="">
                        <option value="" disabled>
                          Choose a package
                        </option>
                        {packageOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>

                    <fieldset>
                      <legend className="mb-3 block text-sm font-medium text-forest">Do you need?</legend>
                      <p className="mb-3 text-xs text-muted">Select one, both, or leave blank.</p>
                      <div className="flex flex-wrap gap-6">
                        <label className="flex cursor-pointer items-center gap-2.5 text-sm text-forest">
                          <input
                            type="checkbox"
                            name="needsPhotographer"
                            checked={needsPhotographer}
                            onChange={(e) => setNeedsPhotographer(e.target.checked)}
                            className={checkboxClass}
                          />
                          Photographer
                        </label>
                        <label className="flex cursor-pointer items-center gap-2.5 text-sm text-forest">
                          <input
                            type="checkbox"
                            name="needsBrandDesigner"
                            checked={needsBrandDesigner}
                            onChange={(e) => setNeedsBrandDesigner(e.target.checked)}
                            className={checkboxClass}
                          />
                          Brand designer
                        </label>
                      </div>
                    </fieldset>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-forest">
                        Your idea
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell me about the business and what you're hoping to build..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <div className="rounded-xl border border-accent-soft/60 bg-accent-light/15 p-5">
                      <p className="text-sm font-medium text-forest">Or I can call or WhatsApp you</p>
                      <p className="mt-1 text-xs text-muted">
                        Leave your number and how you&apos;d like me to reach out.
                      </p>
                      <div className="mt-4">
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-forest">
                          Your number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="e.g. 082 123 4567"
                          className={inputClass}
                        />
                      </div>
                      <fieldset className="mt-4">
                        <legend className="mb-2 block text-sm font-medium text-forest">
                          How should I reach you?
                        </legend>
                        <div className="flex flex-wrap gap-4">
                          <label className="flex cursor-pointer items-center gap-2.5 text-sm text-forest">
                            <input
                              type="radio"
                              name="callbackMethod"
                              value="call"
                              checked={callbackMethod === "call"}
                              onChange={() => setCallbackMethod("call")}
                              className={checkboxClass}
                            />
                            Call
                          </label>
                          <label className="flex cursor-pointer items-center gap-2.5 text-sm text-forest">
                            <input
                              type="radio"
                              name="callbackMethod"
                              value="whatsapp"
                              checked={callbackMethod === "whatsapp"}
                              onChange={() => setCallbackMethod("whatsapp")}
                              className={checkboxClass}
                            />
                            WhatsApp
                          </label>
                        </div>
                      </fieldset>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Let&apos;s build yours
                    </Button>
                    <p className="text-center font-hand text-base text-muted">
                      Goes straight to me. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </WorkshopZone>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-forest">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}
