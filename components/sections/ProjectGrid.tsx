"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui";
import { projects } from "@/lib/content";

export function ProjectGrid() {
  return (
    <section id="work" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Some of my work
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
