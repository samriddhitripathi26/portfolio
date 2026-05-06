"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const techSkills = ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Node.js", "Express.js", "Next.js", "MongoDB", "MySQL", "Tailwind CSS"];
  const softSkills = ["Leadership", "Event Management", "Product Thinking", "Communication", "Team Collaboration", "Problem Solving"];

  return (
    <section id="skills" className="relative w-full py-32 z-10 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
              <span className="w-10 h-px bg-cyan-500" />
              Technical Stack
            </h3>
            <div className="flex flex-wrap gap-4">
              {techSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 text-sm md:text-base font-medium text-gray-300 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
              <span className="w-10 h-px bg-purple-500" />
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 text-sm md:text-base font-medium text-gray-300 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-300 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
