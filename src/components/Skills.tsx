
const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS & Tailwind CSS", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "TypeScript", level: 65 },
      { name: "React.js", level: 70 },
      { name: "Next.js", level: 65 },
    ],
  },
  {
    title: "Tools & Technologies",
    description: "Tools I use while developing and managing projects.",
    skills: [
      { name: "Git & GitHub", level: 70 },
      { name: "REST API", level: 65 },
      { name: "Responsive Design", level: 80 },
      { name: "VS Code", level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-white px-5 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            What I work with
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            My Skills
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Technologies and tools I&apos;m learning and using to build
            modern web applications.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid gap-7 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {group.description}
              </p>

              <div className="mt-7 space-y-6">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-slate-700">
                        {skill.name}
                      </span>

                      <span className="text-sm font-medium text-blue-600">
                        {skill.level}%
                      </span>
                    </div>

                    <div
                      className="h-2.5 overflow-hidden rounded-full bg-slate-100"
                      role="progressbar"
                      aria-label={skill.name}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="h-full rounded-full bg-blue-600 transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-8 text-center text-sm leading-6 text-slate-500">
          I&apos;m continuously practicing and improving my skills through
          hands-on projects and learning.
        </p>
      </div>
    </section>
  );
};

export default Skills;
