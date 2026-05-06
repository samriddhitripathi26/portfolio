"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "SupplierScout Platform",
      description: "A comprehensive platform to connect businesses with reliable suppliers, featuring advanced search, verification systems, and streamlined communication channels.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      link: "#"
    },
    {
      title: "Freelance Marketplace Platform",
      description: "A robust MERN stack application facilitating freelance work. Includes features for job posting, bidding, secure contracts, dispute resolution, and a rating system.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      link: "#"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Selected Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-10 rounded-[2rem] bg-white/[0.02] border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 backdrop-blur-sm flex flex-col h-full"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <a href={project.link} className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 shrink-0 ml-4">
                    <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-white" />
                  </a>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-10 flex-grow font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-1.5 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
