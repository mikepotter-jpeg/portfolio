"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui";
import { projects } from "@/lib/content";

export function ProjectGrid() {
  return (
    <section id="work" className="py-20 scroll-mt-20">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-h2 text-foreground mb-3">
            Some of my work
          </h2>
          <p className="text-body-lg text-muted mb-12 max-w-content">
            I&apos;ve designed for Energy Australia, Dan Murphy&apos;s, and the
            Department of Agriculture, creating services that make it easier for
            organisations to connect with their users.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
