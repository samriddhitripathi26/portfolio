"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education-achievements" },
  { name: "Contact", href: "#contact" },
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

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300",
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-xl border-b border-red-950/30 py-3.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto w-full px-6 flex items-center justify-between md:justify-center">
        {/* Mobile Logo */}
        <a href="#home" className="md:hidden flex items-center gap-1 font-bold text-xl tracking-tight text-white group">
          <span>ST</span>
          <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse" />
        </a>

        {/* Desktop Nav Floating Capsule */}
        <div className="hidden md:flex items-center gap-1 px-5 py-2 rounded-full bg-[#0d0d0d]/80 border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.6)] backdrop-blur-xl hover:border-red-500/25 transition-colors duration-300">
          <a href="#home" className="flex items-center gap-1 font-bold text-sm tracking-wider text-white mr-3 group">
            <span>ST</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)] group-hover:scale-125 transition-transform" />
          </a>
          
          <div className="w-[1px] h-4 bg-white/10 mr-2" />

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3.5 py-1.5 text-sm font-medium text-gray-300 hover:text-white rounded-full hover:bg-red-500/10 hover:text-red-300 transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
          
          <a
            href="#contact"
            className="ml-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-rose-600 rounded-full hover:from-red-500 hover:to-rose-500 shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 bg-neutral-900/80 border border-white/10 rounded-xl text-gray-300 hover:text-white hover:border-red-500/40 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-red-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#0a0a0a]/95 border-b border-red-950/40 backdrop-blur-2xl p-6 flex flex-col gap-3 md:hidden shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-red-950/30 hover:border-l-2 hover:border-red-500 rounded-lg transition-all"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-rose-600 rounded-xl shadow-[0_0_15px_rgba(239,68,68,0.4)]"
            >
              Get In Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

