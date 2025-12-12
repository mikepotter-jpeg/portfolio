"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-container mx-auto px-6">
        <div className="max-w-content">
          <motion.h1
            className="text-hero-md md:text-hero text-foreground mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            I&apos;m Michael, a product designer in Sydney.
          </motion.h1>

          <motion.p
            className="text-body-lg text-muted mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            I specialise in enterprise product design, with experience in account
            systems, permissions, and identity workflows where clarity matters.
            I&apos;ve led design for government, energy, and retail serving thousands
            of businesses.
          </motion.p>

          <motion.p
            className="text-body-lg text-muted mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            I use research to inform decisions and partner with engineering to
            deliver.
          </motion.p>

          <motion.p
            className="text-body-lg text-muted"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <Link
              href="/about"
              className="text-foreground underline hover:text-muted transition-colors"
            >
              Learn a little more about me
            </Link>
            .
          </motion.p>
        </div>
      </div>
    </section>
  );
}
