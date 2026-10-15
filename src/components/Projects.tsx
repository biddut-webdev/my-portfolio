
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";

const projects = [
  {
    slug: "fitlog",
    name: "FitLog",
    category: "Fitness Web Application",
    description:
      "A workout tracking application designed to help users explore workouts and manage their fitness activities.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/fitlog.png",
  },
  {
    slug: "bangla-news-24",
    name: "Bangla News 24",
    category: "News Portal",
    description:
      "A Bangla news portal that presents news articles in a clean layout with organized content and easy navigation.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/bangla-news-24.png",
  },
  {
    slug: "book-vibe",
    name: "Book Vibe",
    category: "Book Library Application",
    description:
      "A book-focused web application for browsing a collection of books and exploring reading-related information.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    image: "/book-vibe.png",
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<
    (typeof projects)[number] | null
  >(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              My recent work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Featured Projects
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              A selection of projects I have worked on while developing
              my web development skills.
            </p>
          </div>

          <span className="text-sm font-medium text-slate-500">
            3 Featured Projects
          </span>
        </div>

        {/* Project Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
            >
              {/* Clickable Project Image */}
              <button
                type="button"
                onClick={() => setSelectedImage(project)}
                aria-label={`View ${project.name} screenshot`}
                className="relative block h-48 w-full cursor-zoom-in overflow-hidden bg-slate-100 text-left"
              >
                <Image
                  src={project.image}
                  alt={`${project.name} project screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  priority={index === 0}
                />

                <span className="absolute bottom-3 right-3 rounded-lg bg-black/60 px-3 py-1.5 text-xs font-medium text-white">
                  Click to enlarge
                </span>
              </button>

              {/* Project Information */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {project.name}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Details Link */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 border-b border-blue-600 pb-1 text-sm font-semibold text-blue-600 transition hover:gap-3"
                >
                  View Details
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/biddut-webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            Explore GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedImage.name} screenshot preview`}
          >
            <div className="mb-3 flex items-center justify-between gap-4 text-white">
              <h3 className="text-lg font-semibold">
                {selectedImage.name}
              </h3>

              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
                className="rounded-full bg-white/15 p-2 transition hover:bg-white/25"
              >
                <X size={24} />
              </button>
            </div>

            <div className="relative h-[65vh] w-full overflow-hidden rounded-xl bg-slate-900 sm:h-[75vh]">
              <Image
                src={selectedImage.image}
                alt={`${selectedImage.name} full-size screenshot`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <p className="mt-3 text-center text-sm text-white/70">
              Click outside the image or press Escape to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
