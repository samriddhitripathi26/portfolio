"use client";

import { motion, Variants } from "framer-motion";
import { Download, ArrowRight, Mail, Sparkles, GraduationCap, Briefcase, Trophy, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden z-10 px-6">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left: Text Content (Span 7 cols) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 lg:col-span-7"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0d0d0d]/90 border border-red-500/25 backdrop-blur-md mb-8 shadow-[0_0_25px_rgba(239,68,68,0.18)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.9)]"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-gray-200 tracking-wide">Available for SDE Roles & Opportunities</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-[1.05]"
          >
            Samriddhi <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-white bg-clip-text text-transparent">
              Tripathi.
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 md:gap-3 mb-6"
          >
            <span className="px-3.5 py-1 rounded-lg text-xs md:text-sm font-semibold tracking-wide uppercase bg-red-950/60 text-red-300 border border-red-500/30 shadow-sm">
              Full Stack Developer
            </span>
            <span className="text-gray-500 hidden sm:inline">•</span>
            <span className="px-3.5 py-1 rounded-lg text-xs md:text-sm font-semibold tracking-wide uppercase bg-neutral-900/80 text-gray-300 border border-white/10">
              AI Systems & Cloud
            </span>
            <span className="text-gray-500 hidden sm:inline">•</span>
            <span className="text-xs md:text-sm text-red-400 font-medium">
              CGPA 8.80 @ VIT
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-300 max-w-xl mb-10 leading-relaxed font-light"
          >
            Engineering scalable full-stack applications, intelligent AI-powered developer tooling, and high-throughput background queue architectures with clean code and robust test pipelines.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 bg-[length:200%_auto] hover:bg-[position:right_center] text-white rounded-full font-semibold shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              <Sparkles className="w-4 h-4 text-red-200" />
              Featured Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/SAMRIDDHI_TRIPATHI_RESUME.pdf"
              download="Samriddhi_Tripathi_Resume.pdf"
              className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 bg-neutral-900/90 border border-white/10 text-white rounded-full font-medium hover:bg-neutral-800 hover:border-red-500/40 backdrop-blur-md transition-all duration-300 shadow-lg"
            >
              <Download className="w-4 h-4 text-red-400 group-hover:-translate-y-0.5 transition-transform" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 bg-neutral-900/90 border border-white/10 text-white rounded-full font-medium hover:bg-neutral-800 hover:border-red-500/40 backdrop-blur-md transition-all duration-300 shadow-lg"
            >
              <Mail className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
              Contact
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Modern Developer Identity Bento Card (Span 5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 lg:order-2 lg:col-span-5 flex justify-center"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/30 via-rose-600/20 to-red-950/20 rounded-[3rem] blur-2xl opacity-75 pointer-events-none" />

          {/* Identity Card Container */}
          <div className="relative w-full max-w-[360px] md:max-w-[390px] rounded-[2.5rem] bg-neutral-950/90 border border-red-500/30 p-4 md:p-5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col group">
            
            {/* Card Header Bar */}
            <div className="flex items-center justify-between px-2 py-1.5 mb-3 border-b border-white/[0.08] text-[11px] font-mono text-gray-400 uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                <span className="text-gray-300 font-semibold">DEV_ID // ST-26</span>
              </div>
              <span className="text-red-400 font-semibold">VIT CSE &apos;27</span>
            </div>

            {/* Photo Container */}
            <div className="relative w-full aspect-[4/4.6] rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900 shadow-inner">
              <Image
                src="/profile-new.jpeg"
                alt="Samriddhi Tripathi - Full Stack Developer"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              
              {/* Subtle gradient vignette at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

              {/* In-Card Floating Badges */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none">
                <div className="px-3 py-1 rounded-full bg-neutral-950/80 border border-red-500/30 backdrop-blur-md text-[11px] font-semibold text-red-300 shadow-lg flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-red-400" />
                  <span>CGPA 8.80</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-neutral-950/80 border border-white/10 backdrop-blur-md text-[11px] font-semibold text-gray-200 shadow-lg flex items-center gap-1.5">
                  <Trophy className="w-3 h-3 text-amber-400" />
                  <span>Finalist &apos;25</span>
                </div>
              </div>

              {/* Bottom In-Card Role Banner */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-neutral-950/90 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white tracking-tight">Samriddhi Tripathi</p>
                    <p className="text-[11px] text-red-400 font-medium flex items-center gap-1">
                      <Briefcase className="w-3 h-3" /> SDE Intern @ Victorious Infotech
                    </p>
                  </div>
                  <a
                    href="https://github.com/samriddhitripathi26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-red-600 hover:text-white text-gray-300 transition-colors"
                    title="GitHub Profile"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links Footer Bar */}
            <div className="grid grid-cols-2 gap-2 mt-3 pt-2">
              <a
                href="https://leetcode.com/u/samriddhi23BCE10140"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/40 hover:bg-red-950/30 transition-all text-xs font-medium text-gray-300 hover:text-white group/lc"
              >
                <SiLeetcode className="w-3.5 h-3.5 text-amber-500 group-hover/lc:scale-110 transition-transform" />
                <span>LeetCode</span>
                <ExternalLink className="w-3 h-3 text-gray-500 group-hover/lc:text-red-400" />
              </a>

              <a
                href="https://linkedin.com/in/samriddhi-tripathi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/40 hover:bg-red-950/30 transition-all text-xs font-medium text-gray-300 hover:text-white group/li"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-gray-500 group-hover/li:text-red-400" />
              </a>
            </div>

          </div>
        </motion.div>
        
      </div>
    </section>
  );
}


