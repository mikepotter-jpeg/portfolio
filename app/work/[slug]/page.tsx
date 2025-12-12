import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, siteConfig } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: `${siteConfig.url}/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-20 md:py-28">
      <div className="max-w-container mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="max-w-content mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-small text-muted">
            <li>
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <span className="mx-1">/</span>
            </li>
            <li>
              <Link
                href="/#work"
                className="hover:text-foreground transition-colors"
              >
                My work
              </Link>
            </li>
            <li>
              <span className="mx-1">/</span>
            </li>
            <li className="text-foreground" aria-current="page">
              {project.title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-content mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-small text-muted uppercase tracking-wide">
              {project.role}
            </span>
            {project.duration && (
              <>
                <span className="text-muted">•</span>
                <span className="text-small text-muted">
                  {project.duration}
                </span>
              </>
            )}
          </div>

          <h1 className="text-hero-md md:text-hero text-foreground mb-4">
            {project.title}
          </h1>

          <p className="text-body-lg text-muted">
            {project.tagline}
          </p>
        </header>

        {/* Hero Image */}
        {project.heroImage && (
          <div className="mb-16">
            <div className="aspect-[16/9] relative rounded-card overflow-hidden bg-[#f5f5f5]">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="max-w-content">
          {project.challenge && (
            <section className="mb-12">
              <h2 className="text-h2 text-foreground mb-4">
                The Challenge
              </h2>
              <p className="text-body-lg text-muted">
                {project.challenge}
              </p>
            </section>
          )}

          {project.solution && (
            <section className="mb-12">
              <h2 className="text-h2 text-foreground mb-4">
                The Solution
              </h2>
              <p className="text-body-lg text-muted">
                {project.solution}
              </p>
            </section>
          )}

          {project.outcome && (
            <section className="mb-12">
              <h2 className="text-h2 text-foreground mb-4">
                The Outcome
              </h2>
              <p className="text-body-lg text-muted">
                {project.outcome}
              </p>
            </section>
          )}

          {project.highlights && project.highlights.length > 0 && (
            <section className="mb-12">
              <h2 className="text-h2 text-foreground mb-4">
                Key Highlights
              </h2>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-body-lg text-muted"
                  >
                    <span className="text-border mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Navigation */}
        <nav className="max-w-content mt-16 pt-8 border-t border-border">
          <div className="flex justify-between">
            {(() => {
              const currentIndex = projects.findIndex(
                (p) => p.slug === project.slug
              );
              const prevProject =
                currentIndex > 0 ? projects[currentIndex - 1] : null;
              const nextProject =
                currentIndex < projects.length - 1
                  ? projects[currentIndex + 1]
                  : null;

              return (
                <>
                  {prevProject ? (
                    <Link
                      href={`/work/${prevProject.slug}`}
                      className="group flex flex-col"
                    >
                      <span className="text-small text-muted mb-1">
                        Previous
                      </span>
                      <span className="text-body text-foreground group-hover:text-muted transition-colors">
                        {prevProject.title}
                      </span>
                    </Link>
                  ) : (
                    <div />
                  )}
                  {nextProject ? (
                    <Link
                      href={`/work/${nextProject.slug}`}
                      className="group flex flex-col text-right"
                    >
                      <span className="text-small text-muted mb-1">
                        Next
                      </span>
                      <span className="text-body text-foreground group-hover:text-muted transition-colors">
                        {nextProject.title}
                      </span>
                    </Link>
                  ) : (
                    <div />
                  )}
                </>
              );
            })()}
          </div>
        </nav>
      </div>
    </article>
  );
}
