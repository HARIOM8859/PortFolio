function Footer() {
  return (
    <footer className="px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-400 sm:flex-row">
        <p>(c) 2026 Hariom Yadav. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#home" className="transition hover:text-cyan-300">
            Home
          </a>
          <a href="#projects" className="transition hover:text-cyan-300">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-cyan-300">
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/hariom-yadav-3a729a278"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
