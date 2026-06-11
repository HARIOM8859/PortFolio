const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080a12]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-3 text-lg font-black tracking-wide">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-cyan-300 text-zinc-950 shadow-lg shadow-cyan-500/20">
            H
          </span>
          Hariom<span className="text-cyan-300">.</span>
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 text-sm font-medium text-zinc-300 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-md bg-white px-4 py-2 text-sm font-bold text-zinc-950 shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-200"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
