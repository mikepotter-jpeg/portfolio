"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/content";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Squirkle shape decoration */}
          <motion.div
            className="relative w-32 h-32 mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-full h-full bg-gradient-to-br from-foreground/10 to-foreground/5 border border-foreground/10"
              style={{
                borderRadius: "32% 68% 68% 32% / 32% 32% 68% 68%",
              }}
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-foreground/70 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {siteConfig.title}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
