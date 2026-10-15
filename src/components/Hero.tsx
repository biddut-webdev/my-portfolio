import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="scroll-mt-24 overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-24 md:grid-cols-2 md:py-28">
        {/* Introduction */}
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Biddut Hossen.
            <span className="mt-3 block text-blue-600">
              Frontend Developer
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            I build responsive and user-friendly web applications using
            React, Next.js, TypeScript, and Tailwind CSS. I enjoy solving
            problems, learning new technologies, and turning ideas into
            meaningful digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              View My Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              Download Resume
              <ArrowDown size={18} />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <span className="text-sm font-medium text-slate-500">
              Find me on
            </span>

            <a
              href="https://github.com/biddut-webdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/md-biddut-hossen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Profile Photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-blue-50 ring-1 ring-blue-100 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            {/* Decorative Circle */}
            <div className="absolute inset-5 rounded-full border-2 border-dashed border-blue-200" />

            {/* Your Photo */}
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-xl shadow-blue-100 sm:h-60 sm:w-60 lg:h-72 lg:w-72">
              <Image
                src="/biddut02.jpeg"
                alt="Biddut Hossen - Frontend Developer"
                fill
                priority
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 240px, 288px"
                className="object-cover"
              />
            </div>

            {/* Bottom Badge */}
            <div className="absolute -bottom-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-center text-sm font-medium text-slate-700 shadow-md">
              Learning · Building · Growing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;