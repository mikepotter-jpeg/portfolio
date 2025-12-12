"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/content";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/work/${project.slug}`}
        className={cn(
          "group block rounded-lg overflow-hidden bg-background border border-foreground/10",
          "transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
        )}
      >
        <div className="aspect-[16/10] relative bg-foreground/5 overflow-hidden">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-lg bg-foreground/10" />
            </div>
          )}
        </div>

        <div className="p-6">
          {project.subtitle && (
            <p className="text-sm text-foreground/50 mb-1">{project.subtitle}</p>
          )}
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
            {project.title}
          </h3>
          <p className="text-foreground/70 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-foreground/60 px-2 py-1 bg-foreground/5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
