
export const instant = false;
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

const projects = [
  {
    slug: "fitlog",
    name: "FitLog",
    category: "Fitness Web Application",
    description:
      "A workout tracking application built to explore fitness activities and organize workout information through a responsive interface.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://fit-log-beige-ten.vercel.app/",
    githubUrl: "https://github.com/biddut-webdev/fit-log",
    challenges: [
      "Organizing reusable components and application routes.",
      "Building a responsive interface for different screen sizes.",
      "Managing workout data and completed activities.",
    ],
    improvements: [
      "Add user authentication and personal workout history.",
      "Add progress charts and workout statistics.",
      "Improve accessibility and loading states.",
    ],
  },
  {
    slug: "bangla-news-24",
    name: "Bangla News 24",
    category: "News Portal",
    description:
      "A Bangla news website that organizes news content into a readable interface with article pages and popular news sections.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://bangla-news-24-green.vercel.app/",
    githubUrl: "https://github.com/biddut-webdev",
    challenges: [
      "Fetching and displaying news from an API.",
      "Handling dynamic article routes and unavailable content.",
      "Creating a readable layout for Bengali text.",
    ],
    improvements: [
      "Improve search and category filtering.",
      "Add article bookmarking and reading history.",
      "Improve error handling and loading experiences.",
    ],
  },
  {
    slug: "book-vibe",
    name: "Book Vibe",
    category: "Book Library Application",
    description:
      "A book library application for browsing book information and exploring a collection through a user-friendly interface.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://book-vibe-amber-seven.vercel.app/",
    githubUrl: "https://github.com/biddut-webdev",
    challenges: [
      "Displaying book information in reusable components.",
      "Maintaining a consistent layout across screen sizes.",
      "Organizing application pages and navigation.",
    ],
    improvements: [
      "Add advanced book search and filtering.",
      "Add reading lists and personal favorites.",
      "Improve book details and recommendations.",
    ],
  },
];

interface ProjectDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const ProjectDetailsPage = async ({
  params,
}: ProjectDetailsPageProps) => {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12 sm:py-16">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to Projects
        </Link>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            {project.category}
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {project.name}
          </h1>

          <p className="mt-5 max-w-3xl leading-8 text-slate-600">
            {project.description}
          </p>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-slate-900">
              Technology Stack
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-slate-900">
              Project Links
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Live Project
                <ExternalLink size={16} />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
              >
                GitHub Repository ↗
              </a>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-slate-900">
              Challenges Faced
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-600">
              {project.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-slate-900">
              Future Improvements
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-600">
              {project.improvements.map((improvement) => (
                <li key={improvement}>{improvement}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
};

export default ProjectDetailsPage;
