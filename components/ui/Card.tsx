"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/content";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block rounded-card overflow-hidden border border-border bg-background hover:border-foreground/20 transition-colors"
      >
        <div className="aspect-[16/10] relative bg-[#f5f5f5] overflow-hidden">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-lg bg-border" />
            </div>
          )}
        </div>

        <div className="p-5">
          {project.subtitle && (
            <p className="text-small text-muted mb-1">{project.subtitle}</p>
          )}
          <h3 className="text-body font-semibold text-foreground mb-2">
            {project.title}
          </h3>
          <p className="text-small text-muted mb-4 line-clamp-3">
            {project.description}
          </p>
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-muted px-2 py-1 bg-[#f5f5f5] rounded"
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
