"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectItem {
  title: string;
  subtitle?: string;
  date?: string;
  featured?: boolean;
  bullets?: string[];
  description?: string;
  tech: string[];
  link: string;
}

export default function Projects() {
  const projects: ProjectItem[] = [
    {
      title: "TestPilot AI",
      subtitle: "AI-Powered Unit Test Generation & Validation Suite",
      date: "Jan 2026 – Mar 2026",
      featured: true,
      bullets: [
        "Architected a full-stack MERN application that generates AI-powered unit tests (Jest, Mocha, PyTest, JUnit) with edge-case coverage, secured with JWT authentication, and built a scope-based output validation pipeline with auto-regeneration that cut invalid test cases by 85% across 500+ generations.",
        "Implemented a BullMQ background job queue with per-user rate limiting (10 generations/hour) and exponential-backoff retries, enabling reliable concurrent request handling without API rate limit violations."
      ],
      tech: ["React", "Node.js", "MongoDB", "Gemini API", "Monaco Editor", "BullMQ", "JWT"],
      link: "https://github.com/samriddhitripathi26/TestPilot-AI.git"
    },
    {
      title: "Flagify",
      subtitle: "Enterprise Feature Flagging & Real-Time A/B Testing Platform",
      date: "Jan 2026 – Mar 2026",
      bullets: [
        "Engineered a feature flag platform using Node.js, Express, and MongoDB for real-time toggling of 500+ flags across 3 microservices, reducing rollout time by 40%, with Python and JavaScript REST SDKs.",
        "Integrated Redis caching for sub-50 ms API responses (60% latency reduction, 200+ concurrent evaluations), and added Jest tests (85% coverage) and Docker containerization for consistent deployments."
      ],
      tech: ["TypeScript", "Next.js", "React", "Node.js", "Express", "MongoDB", "Redis"],
      link: "https://github.com/samriddhitripathi26/Flagify"
    },
    {
      title: "RepoSphere",
      subtitle: "Unified Git Repository Intelligence & Commits Analytics Dashboard",
      date: "Jan 2025 – Mar 2025",
      bullets: [
        "Built a GitHub analytics dashboard with React, TypeScript, and REST APIs, processing 10,000+ commits across 500+ repositories with interactive visualizations.",
        "Implemented OAuth Device Flow authentication with server-side token storage and automatic refresh, securing 200+ user sessions, and streamlined GitHub Actions CI/CD pipelines to cut deployment errors by 70%."
      ],
      tech: ["React", "TypeScript", "Node.js", "REST API", "OAuth", "Tailwind CSS"],
      link: "https://github.com/samriddhitripathi26/RepoSphere"
    }
  ];

  return (
    <section id="projects" className="relative w-full py-32 z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/40 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-400 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative p-8 md:p-10 rounded-[2rem] bg-neutral-950/80 border ${
                project.featured ? "border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.12)]" : "border-white/[0.08]"
              } overflow-hidden hover:border-red-500/40 hover:bg-neutral-900/70 transition-all duration-500 backdrop-blur-md flex flex-col`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-rose-950/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-red-300 transition-colors duration-300 flex items-center gap-2">
                        {project.title}
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-300 bg-red-950/60 border border-red-500/40 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            <Sparkles className="w-3 h-3 text-red-400" /> Featured
                          </span>
                        )}
                      </h3>
                    </div>
                    {project.subtitle && (
                      <p className="text-sm md:text-base text-gray-400 font-normal">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {project.date && (
                      <span className="text-xs md:text-sm font-semibold text-red-300/90 bg-red-950/40 border border-red-500/20 px-3 py-1 rounded-full whitespace-nowrap">
                        {project.date}
                      </span>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-neutral-900 border border-white/10 rounded-full hover:bg-red-600 hover:border-red-500 hover:text-white transition-all duration-300 hover:scale-110 shrink-0 group/btn shadow-md"
                      title="View GitHub Repository"
                    >
                      <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Bullets or Description */}
                {project.bullets && (
                  <ul className="space-y-3.5 text-gray-300 text-sm md:text-base leading-relaxed font-light mb-8 flex-grow">
                    {project.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-3">
                        <span className="text-red-500 mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {project.description && (
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 flex-grow font-light">
                    {project.description}
                  </p>
                )}
                
                {/* Tech Pills & Link */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06] mt-auto">
                  <div className="flex flex-wrap gap-2 md:gap-2.5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1 text-xs md:text-sm font-medium text-red-300 bg-red-950/40 border border-red-500/25 rounded-xl hover:border-red-500/50 hover:bg-red-900/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-gray-300 hover:text-red-400 transition-colors"
                  >
                    <FaGithub className="w-4 h-4 text-red-400" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

