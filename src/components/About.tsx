
import { Code2, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-slate-100 bg-slate-50 px-5 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Get to know me
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            About Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            A little introduction about who I am, what I do, and what
            motivates me to keep learning.
          </p>
        </div>

        {/* About Content */}
        <div className="grid items-start gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-14">
          {/* Introduction */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-slate-900">
              My Programming Journey
            </h3>

            <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
              <p>
                Hello! I&apos;m Biddut Hossen, an aspiring Frontend
                Developer passionate about building modern and
                user-friendly web applications.
              </p>

              <p>
                My web development journey started with learning the
                fundamentals of programming. As I continued learning,
                I became interested in how websites are designed,
                how components work together, and how data is displayed
                to users.
              </p>

              <p>
                Currently, I&apos;m improving my skills in JavaScript,
                TypeScript, React, Next.js, and Tailwind CSS by building
                practical projects. I enjoy understanding how things
                work, solving coding problems, and turning ideas into
                functional applications.
              </p>

              <p>
                My goal is to become a professional web developer who
                creates accessible, responsive, and useful digital
                experiences. Outside coding, I also value continuous
                learning and personal growth.
              </p>
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-4">
            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Code2 size={24} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Building Projects
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  I enjoy creating responsive interfaces and practical
                  applications that solve real-world problems.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Lightbulb size={24} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Learning New Things
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  I like exploring new technologies, understanding
                  concepts, and improving my problem-solving skills.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Rocket size={24} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Growing Every Day
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  I believe in consistent practice, learning from
                  mistakes, and building better projects step by step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
