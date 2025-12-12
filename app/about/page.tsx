"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";

export default function AboutPage() {
  return (
    <article className="py-20 md:py-28">
      <div className="max-w-container mx-auto px-6">
        <div className="max-w-content">
          {/* Title */}
          <motion.h1
            className="text-hero-md md:text-hero text-foreground mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {about.title}
          </motion.h1>

          {/* Badges */}
          <motion.div
            className="flex flex-col gap-2 mb-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {about.badges.map((badge, index) => (
              <span
                key={index}
                className="text-body-lg font-medium text-foreground"
              >
                <span className="mr-2">{badge.emoji}</span>
                {badge.text}
              </span>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.div
            className="space-y-6 mb-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            {about.bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-body-lg text-muted"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.p
            className="text-body-lg text-muted"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            {about.cta}
          </motion.p>
        </div>
      </div>
    </article>
  );
}
