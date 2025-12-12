import type { Metadata } from "next";
import { about, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Me",
  description: about.intro,
};

export default function AboutPage() {
  return (
    <article className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-2xl text-foreground/70 leading-relaxed">
              {about.headline}
            </p>
          </header>

          {/* Intro */}
          <section className="mb-12">
            <p className="text-xl text-foreground/80 leading-relaxed">
              {about.intro}
            </p>
          </section>

          {/* Bio */}
          <section className="mb-12 space-y-6">
            {about.bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-foreground/70 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Skills & Expertise
            </h2>
            <div className="flex flex-wrap gap-3">
              {about.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-full text-sm text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="pt-8 border-t border-foreground/10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-foreground/70 mb-6">
              I&apos;m always interested in hearing about new projects and opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Me
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 rounded-lg font-medium hover:bg-foreground/5 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
