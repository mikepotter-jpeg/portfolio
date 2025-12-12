"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Kind words
          </h2>
          <p className="text-foreground/60 mb-12">
            Received from colleagues.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              className="bg-foreground/5 border border-foreground/10 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <time className="text-sm text-foreground/50 mb-4 block">
                {testimonial.date}
              </time>
              <p className="text-foreground/80 leading-relaxed mb-6 whitespace-pre-line">
                {testimonial.quote}
              </p>
              <div className="border-t border-foreground/10 pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-foreground/60">
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
