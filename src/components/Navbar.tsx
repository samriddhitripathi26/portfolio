"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        scrolled ? "bg-[#0b0f17]/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hidden md:flex">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>
      
      {/* Mobile Nav - simplified */}
      <div className="flex items-center justify-between w-full px-6 md:hidden">
        <span className="font-bold text-lg tracking-tight">ST.</span>
        <button className="p-2 bg-white/5 border border-white/10 rounded-md">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </motion.nav>
  );
}
