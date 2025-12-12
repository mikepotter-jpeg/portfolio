"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui";
import { projects } from "@/lib/content";

export function ProjectGrid() {
  return (
    <section id="work" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Some of my work
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl">
            I&apos;ve designed for Energy Australia, Dan Murphy&apos;s, and the
            Department of Agriculture, creating services that make it easier for
            organisations to connect with their users.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
