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
    title: `${project.title} - Michael Potter: Design portfolio`,
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
        <nav className="mb-8" aria-label="Breadcrumb">
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
          {/* Duration */}
          {project.duration && (
            <p className="text-body text-muted mb-4">
              🗓️ {project.duration}
            </p>
          )}

          <h1 className="text-hero-md md:text-hero text-foreground mb-6">
            {project.title}
          </h1>

          <p className="text-body-lg text-muted mb-6">
            {project.tagline}
          </p>

          {/* Client */}
          {project.client && (
            <p className="text-body text-muted">
              <span className="text-foreground font-medium">Client</span>
              <br />
              {project.client}
            </p>
          )}
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

        {/* Content Sections */}
        <div className="max-w-content">
          {project.sections?.map((section, sectionIndex) => (
            <section key={sectionIndex} className="mb-16">
              <h2 className="text-h2 text-foreground mb-6">
                {section.title}
              </h2>
              
              {section.content.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-body-lg text-muted mb-4"
                >
                  {paragraph}
                </p>
              ))}

              {/* Subsections */}
              {section.subsections?.map((subsection, subIndex) => (
                <div key={subIndex} className="mt-10">
                  <h3 className="text-body-lg font-semibold text-foreground mb-4">
                    {subsection.title}
                  </h3>
                  {subsection.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-body-lg text-muted mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </section>
          ))}
        </div>

        {/* Navigation */}
        <nav className="max-w-content mt-16 pt-8 border-t border-border">
          <div className="flex justify-between">
            {project.prevProject ? (
              <Link
                href={`/work/${project.prevProject.slug}`}
                className="group flex flex-col"
              >
                <span className="text-small text-muted mb-1">
                  Previous Project
                </span>
                <span className="text-body text-foreground group-hover:text-muted transition-colors">
                  ← {project.prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {project.nextProject ? (
              <Link
                href={`/work/${project.nextProject.slug}`}
                className="group flex flex-col text-right"
              >
                <span className="text-small text-muted mb-1">
                  Next Project
                </span>
                <span className="text-body text-foreground group-hover:text-muted transition-colors">
                  {project.nextProject.title} →
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      </div>
    </article>
  );
}
