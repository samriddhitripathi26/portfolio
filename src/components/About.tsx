"use client";

import { motion } from "framer-motion";
import { Code2, Users, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  const highlights = [
    { icon: <Code2 className="w-5 h-5 text-red-400" />, title: "Full Stack Dev", desc: "Building scalable & resilient web systems" },
    { icon: <Lightbulb className="w-5 h-5 text-rose-400" />, title: "AI Integration", desc: "Crafting intelligent workflows & tooling" },
    { icon: <Users className="w-5 h-5 text-red-300" />, title: "Leadership", desc: "Guiding teams and executing vision" },
    { icon: <Rocket className="w-5 h-5 text-rose-500" />, title: "Problem Solving", desc: "Turning complex specs into elegant code" }
  ];

  return (
    <section id="about" className="relative w-full py-32 z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/40 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Overview
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-400 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6 font-light"
          >
            <p>
              Hi, I&apos;m <span className="text-white font-medium">Samriddhi Tripathi</span>, a Computer Science Engineering student at <span className="text-white font-medium">VIT Bhopal University</span>. I have a keen interest in software development and specialize in building high-performance applications that solve real-world problems.
            </p>
            <p>
              What excites me most is engineering <span className="text-red-400 font-medium">impactful developer tooling and systems</span> that maximize productivity. I am driven by continuous learning, mastering modern frameworks, and tackling <span className="text-rose-400 font-medium">challenging architectural problems</span>.
            </p>
            <p>
              My goal is to become a top-tier <span className="text-white font-medium">Software Development Engineer</span> who designs reliable, enterprise-grade products with high test coverage and seamless user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 rounded-3xl bg-neutral-950/70 border border-white/[0.08] backdrop-blur-md hover:border-red-500/40 hover:bg-neutral-900/80 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-[0_0_25px_rgba(239,68,68,0.12)]"
              >
                <div className="mb-6 p-4 bg-red-950/40 border border-red-500/20 rounded-2xl inline-flex group-hover:scale-110 group-hover:border-red-500/50 transition-all duration-500 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-red-300 transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

