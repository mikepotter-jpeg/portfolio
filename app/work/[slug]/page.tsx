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
    <article className="py-24">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="max-w-3xl mx-auto mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-foreground/60">
            <li>
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
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
              <span className="mx-2">/</span>
            </li>
            <li className="text-foreground" aria-current="page">
              {project.title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mx-auto mb-16">

          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium text-foreground/50 uppercase tracking-wider">
              {project.role}
            </span>
            {project.duration && (
              <>
                <span className="text-foreground/30">•</span>
                <span className="text-sm text-foreground/50">
                  {project.duration}
                </span>
              </>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-foreground/70 leading-relaxed">
            {project.tagline}
          </p>
        </header>

        {/* Hero Image */}
        {project.heroImage && (
          <div className="max-w-5xl mx-auto mb-16">
            <div className="aspect-[16/9] relative rounded-2xl overflow-hidden bg-foreground/5">
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
        <div className="max-w-3xl mx-auto prose prose-lg prose-neutral dark:prose-invert">
          {project.challenge && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                The Challenge
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                {project.challenge}
              </p>
            </section>
          )}

          {project.solution && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                The Solution
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                {project.solution}
              </p>
            </section>
          )}

          {project.outcome && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                The Outcome
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                {project.outcome}
              </p>
            </section>
          )}

          {project.highlights && project.highlights.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Key Highlights
              </h2>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-foreground/70"
                  >
                    <span className="text-foreground/30 mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Navigation */}
        <nav className="max-w-3xl mx-auto mt-16 pt-8 border-t border-foreground/10">
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
                      <span className="text-sm text-foreground/50 mb-1">
                        Previous
                      </span>
                      <span className="text-foreground group-hover:text-foreground/70 transition-colors">
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
                      <span className="text-sm text-foreground/50 mb-1">
                        Next
                      </span>
                      <span className="text-foreground group-hover:text-foreground/70 transition-colors">
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
