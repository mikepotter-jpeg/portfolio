"use client";

import { motion } from "framer-motion";
import { contact, siteConfig } from "@/lib/content";

export function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          className="max-w-content"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-h2 text-foreground mb-3">
            {contact.headline}
          </h2>
          <p className="text-body-lg text-muted mb-2">
            {contact.subheadline}
          </p>
          <p className="text-body-lg text-muted">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-foreground underline hover:text-muted transition-colors"
            >
              Email me
            </a>{" "}
            or connect with me on{" "}
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline hover:text-muted transition-colors"
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
