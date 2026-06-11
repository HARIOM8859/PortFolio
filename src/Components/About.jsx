const skills = [
  "Java",
  "Python",
  "Machine Learning",
  "NLP",
  "Data Analytics",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
];

function About() {
  return (
    <section id="about" className="border-y border-white/10 bg-white/[0.03] px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            About Me
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Curious, consistent, and focused on getting better.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-zinc-300">
            I enjoy learning by building practical projects, from Java console
            applications to recommendation systems and data analytics practice.
            I am focused on improving my programming fundamentals while also
            exploring machine learning and modern web development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/10 bg-[#080a12]/70 px-4 py-2 text-sm font-semibold text-zinc-200 shadow-lg shadow-black/10 transition hover:border-emerald-300/60 hover:text-emerald-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
