"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function AboutTeaser() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl md:text-3xl text-foreground/80 leading-relaxed">
            Learn a little more{" "}
            <Link
              href="/about"
              className="text-foreground font-medium underline underline-offset-4 hover:text-foreground/70 transition-colors"
            >
              about me
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
