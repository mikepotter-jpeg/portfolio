"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";

export default function AboutPage() {
  return (
    <article className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {about.title}
          </motion.h1>

          {/* Badges */}
          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {about.badges.map((badge, index) => (
              <span
                key={index}
                className="text-base md:text-lg font-medium text-foreground"
              >
                {badge.emoji} {badge.text}
              </span>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.div
            className="space-y-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {about.bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-foreground/80 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.p
            className="text-lg md:text-xl text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {about.cta}
          </motion.p>
        </div>
      </div>
    </article>
  );
}
