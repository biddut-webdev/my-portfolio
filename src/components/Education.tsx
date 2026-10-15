const Education = () => {
  return (
    <section
      id="education"
      className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            My Academic Background
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Education
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            My educational journey and the foundation I am building for my
            career in web development.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <article className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                🎓
              </div>

              <div className="flex-1">
                <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  Currently Studying
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
                  Diploma in Engineering
                </h3>

                <p className="mt-2 font-medium text-blue-700">
                  Computer Science and Technology
                </p>

                <p className="mt-3 text-slate-700">
                  Naogaon Polytechnic Institute
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  February 2024 – January 2028
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  I am developing my technical foundation through my diploma
                  studies while learning frontend development and building
                  practical web applications with modern technologies.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Education;