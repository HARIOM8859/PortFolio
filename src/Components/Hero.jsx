function Hero() {
  const profilePhoto = `${import.meta.env.BASE_URL}profile-photo.jpg`;

  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.12fr_0.88fr]"
    >
      <div>
        <p className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
          B.Tech CSE Student
        </p>
        <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
          Building code, learning systems, and shaping ideas into projects.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          I am Hariom Yadav from Agra, focused on Java development, data
          analytics, recommendation systems, and machine learning. This space
          collects the projects I am building while sharpening my engineering
          fundamentals.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md bg-cyan-300 px-6 py-3 font-bold text-zinc-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/15 bg-white/[0.03] px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-200"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
          {[
            ["11", "GitHub repos"],
            ["Java", "Core skill"],
            ["ML", "Learning path"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <p className="text-2xl font-black text-white">{value}</p>
              <p className="mt-1 text-sm text-zinc-400">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-cyan-300 via-emerald-300 to-amber-200 opacity-70 blur-sm" />
        <div className="relative rounded-[2rem] border border-white/15 bg-[#111827] p-4 shadow-2xl shadow-black/50">
          <div className="w-full text-center">
            <img
              src={profilePhoto}
              alt="Hariom Yadav"
              className="mx-auto aspect-[4/5] w-full rounded-3xl border border-white/10 object-cover object-top shadow-xl"
            />
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <h2 className="text-2xl font-bold text-white">Hariom Yadav</h2>
              <p className="mt-2 text-zinc-300">Software Development + ML</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
