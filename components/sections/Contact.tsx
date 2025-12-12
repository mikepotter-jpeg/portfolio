"use client";

import { motion } from "framer-motion";
import { contact, siteConfig } from "@/lib/content";

export function Contact() {
  return (
    <section className="py-24 bg-foreground/5">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {contact.headline}
          </h2>
          <p className="text-xl text-foreground/70">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-foreground font-medium underline underline-offset-4 hover:text-foreground/70 transition-colors"
            >
              Email me
            </a>{" "}
            or connect with me on{" "}
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium underline underline-offset-4 hover:text-foreground/70 transition-colors"
            >
              LinkedIn
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
