
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl font-bold tracking-tight text-slate-900"
          onClick={() => setIsOpen(false)}
        >
          Biddut<span className="text-blue-600">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 md:inline-flex"
        >
          Contact Me
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
