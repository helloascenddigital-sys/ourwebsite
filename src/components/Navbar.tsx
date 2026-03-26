"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "Services", href: "#services" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-black/70 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" onClick={(e) => handleNavClick(e, "#home")} className="group flex items-center gap-2">
          <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-accent-gold-light to-accent-gold flex items-center justify-center">
            <span className="text-black font-bold font-heading text-lg">A</span>
          </div>
          <span className="text-xl font-heading font-semibold tracking-wide text-white group-hover:text-accent-gold transition-colors">
            Ascend
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-white hover:text-glow-gold transition-all duration-300"
            >
              {link.title}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e as any, "#contact")}
            className="px-5 py-2 rounded-full border border-accent-gold/50 text-accent-gold hover:bg-accent-gold hover:text-black transition-all duration-300 text-sm font-medium box-glow-gold hover:box-glow-gold-strong"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-accent-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-surface-dark border-b border-white/10"
        >
          <nav className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-gray-300 hover:text-accent-gold transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
