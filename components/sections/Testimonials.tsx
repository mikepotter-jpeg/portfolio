"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-h2 text-foreground mb-2">
            Kind words
          </h2>
          <p className="text-body text-muted mb-12">
            Received from colleagues.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              className="border border-border rounded-card p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <time className="text-small text-muted block mb-4">
                {testimonial.date}
              </time>
              <p className="text-body text-foreground/80 leading-relaxed mb-6 whitespace-pre-line">
                {testimonial.quote}
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-body font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-small text-muted">
                  {testimonial.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
