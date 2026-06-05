"use client";

import { motion } from "framer-motion";
import { Code2, Users, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  const skills = [
    { icon: <Code2 className="w-5 h-5 text-purple-400" />, title: "Full Stack Dev", desc: "Building scalable web applications" },
    { icon: <Lightbulb className="w-5 h-5 text-cyan-400" />, title: "Innovation", desc: "Fostering creative and impactful solutions" },
    { icon: <Users className="w-5 h-5 text-blue-400" />, title: "Leadership", desc: "Guiding teams to execution" },
    { icon: <Rocket className="w-5 h-5 text-pink-400" />, title: "Problem Solving", desc: "Turning ideas into reality" }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
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
              Hi, I'm <span className="text-white font-medium">Samriddhi Tripathi</span>, a Computer Science Engineering student at <span className="text-white font-medium">VIT Bhopal University</span>. I have a keen interest in software development and enjoy building applications that solve real-world problems.
            </p>
            <p>
              What excites me most about this field is the opportunity to create <span className="text-purple-300 font-medium">impactful solutions</span> that make people's lives easier. I am passionate about continuously learning new technologies, improving my skills, and taking on <span className="text-cyan-300 font-medium">challenges</span> that help me grow both personally and professionally.
            </p>
            <p>
              My goal is to become a skilled <span className="text-white font-medium">software engineer</span> who can contribute to meaningful products and make a positive impact through technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-flex group-hover:scale-110 transition-transform duration-500">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
