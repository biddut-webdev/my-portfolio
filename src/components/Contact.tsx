
const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="scroll-mt-24 bg-white px-5 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Contact Me
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Let&apos;s Work Together
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Have a project idea or want to connect? Feel free to reach out.
              I&apos;m always interested in learning, building, and collaborating
              with others.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            <a
              href="mailto:biddutem60@gmail.com"
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50"
            >
              <span className="text-2xl" aria-hidden="true">
                ✉️
              </span>

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Email Me
              </h3>

              <p className="mt-2 break-all text-sm text-slate-600 transition group-hover:text-blue-600">
                biddutem60@gmail.com
              </p>
            </a>

            <a
              href="https://github.com/biddut-webdev"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50"
            >
              <span className="text-2xl" aria-hidden="true">
                💻
              </span>

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                GitHub
              </h3>

              <p className="mt-2 text-sm text-slate-600 transition group-hover:text-blue-600">
                Explore my projects ↗
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/md-biddut-hossen/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 sm:col-span-2"
            >
              <span className="text-2xl" aria-hidden="true">
                🤝
              </span>

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                LinkedIn
              </h3>

              <p className="mt-2 text-sm text-slate-600 transition group-hover:text-blue-600">
                Let&apos;s connect professionally ↗
              </p>
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default Contact;
