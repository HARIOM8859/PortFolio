const projects = [
  {
    title: "Banking Management System",
    description:
      "A Java-based banking application that practices core programming concepts through account management and transaction-style operations.",
    tech: "Java",
    link: "https://github.com/HARIOM8859/Banking-Management-System",
  },
  {
    title: "Library Management System",
    description:
      "A console-driven Java project for managing books and library records, built to strengthen object-oriented programming and CRUD logic.",
    tech: "Java, OOP",
    link: "https://github.com/HARIOM8859/Library_Management_System",
  },
  {
    title: "Student Management System",
    description:
      "A console-based CRUD student management system using Java and OOP concepts for adding, updating, viewing, and managing student records.",
    tech: "Java, CRUD",
    link: "https://github.com/HARIOM8859/student-management-system-java",
  },
  {
    title: "Fake Review Detection",
    description:
      "A machine learning and NLP project focused on classifying fake and genuine reviews using different text-processing techniques.",
    tech: "Machine Learning, NLP",
    link: "https://github.com/HARIOM8859/Fake_Review_Detection_MK02",
  },
  {
    title: "Web Series Recommender",
    description:
      "A Python recommendation-system project that explores content suggestions and recommendation logic for web series discovery.",
    tech: "Python, ML",
    link: "https://github.com/HARIOM8859/MK2-WEB_SERIES_RECOMMERNDER",
  },
  {
    title: "Movie Recommendation System",
    description:
      "A Python project that applies recommendation-system ideas to suggest movies based on data-driven similarity and user preference patterns.",
    tech: "Python",
    link: "https://github.com/HARIOM8859/Movie_recommendation_System",
  },
  {
    title: "Excel Data Analytics Learning",
    description:
      "A learning repository documenting progress in data analytics with Excel through practical datasets, analysis practice, and regular commits.",
    tech: "Excel, Data Analytics",
    link: "https://github.com/HARIOM8859/excel-data-analytics-learning",
  },
  {
    title: "Java Multithreading Practice",
    description:
      "A focused Java practice repository for learning multithreading concepts, thread execution, and concurrent programming basics.",
    tech: "Java, Multithreading",
    link: "https://github.com/HARIOM8859/multithreading-java",
  },
  {
    title: "Raktsetu App",
    description:
      "A donor-centric blood donation app concept for connecting donors with hospitals and patients during emergency situations.",
    tech: "HTML",
    link: "https://github.com/HARIOM8859/Raktsetu-app",
  },
];

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
          Selected work from GitHub
        </h2>
        </div>
        <a
          href="https://github.com/HARIOM8859"
          target="_blank"
          rel="noreferrer"
          className="w-fit rounded-md border border-white/10 bg-white/[0.04] px-5 py-3 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200"
        >
          Open GitHub
        </a>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group flex min-h-72 flex-col rounded-lg border border-white/10 bg-[#101522] p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-[#121b2d]"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="rounded-md bg-cyan-300/10 px-3 py-1 text-sm font-bold text-cyan-200">
                {project.tech}
              </p>
              <span className="text-sm font-black text-white/20">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">{project.title}</h3>
            <p className="mt-3 flex-1 leading-7 text-zinc-300">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-fit rounded-md border border-white/10 px-4 py-2 text-sm font-bold text-white transition group-hover:border-cyan-300 group-hover:text-cyan-200"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
