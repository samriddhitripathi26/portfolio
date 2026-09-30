"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Award, Star, Sparkles } from "lucide-react";

export default function EducationAchievements() {
  const educationList = [
    {
      institution: "Vellore Institute of Technology (VIT)",
      degree: "B.Tech in Computer Science Engineering",
      score: "CGPA: 8.80 / 10",
      period: "Aug 2023 – May 2027",
      details: "Specializing in software engineering, distributed systems, algorithms, and cloud architectures.",
      highlights: ["Data Structures & Algorithms", "Database Management Systems", "Object-Oriented Programming", "Computer Networks"]
    },
    {
      institution: "Queen Mary’s School, Tis Hazari",
      degree: "Senior Secondary (Class XII) & Secondary (Class X)",
      score: "Class XII: 93.4% • Class X: 94.2%",
      period: "May 2023 & May 2021",
      details: "Strong academic foundation in Science and Mathematics with distinction honors.",
      highlights: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    }
  ];

  const achievements = [
    {
      title: "Global Finalist",
      event: "NASSCOM Hackathon 2025",
      scale: "1000+ Teams Worldwide",
      desc: "Selected among top global finalist teams for architecting high-impact scalable software solutions.",
      badge: "Global Finalist"
    }
  ];

  return (
    <section id="education-achievements" className="relative w-full py-32 z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/40 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Academics & Recognition
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Education & <span className="bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-400 rounded-full mx-auto shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-red-950/50 border border-red-500/30 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Education</h3>
            </div>

            <div className="space-y-6">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative p-8 rounded-3xl bg-neutral-950/70 border border-white/[0.08] hover:border-red-500/35 hover:bg-neutral-900/60 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(239,68,68,0.1)]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h4 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                      {edu.institution}
                    </h4>
                    <span className="text-xs font-semibold text-red-300 bg-red-950/50 border border-red-500/25 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-base font-medium text-red-400 mb-2">{edu.degree}</p>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-semibold text-gray-200 mb-4">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{edu.score}</span>
                  </div>

                  <p className="text-sm text-gray-400 font-light leading-relaxed mb-5">
                    {edu.details}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
                    {edu.highlights.map((h, i) => (
                      <span key={i} className="text-xs text-gray-300 px-2.5 py-0.5 rounded-md bg-neutral-900/80 border border-white/5">
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-red-950/50 border border-red-500/30 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Hackathons & Honors</h3>
            </div>

            <div className="space-y-6">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative p-8 rounded-3xl bg-neutral-950/70 border border-white/[0.08] hover:border-red-500/35 hover:bg-neutral-900/60 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(239,68,68,0.1)]"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-950/60 border border-red-500/40 text-[11px] font-semibold uppercase tracking-wider text-red-300 mb-2">
                        <Sparkles className="w-3 h-3 text-red-400" />
                        {item.badge}
                      </span>
                      <h4 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <div className="p-3 bg-red-950/30 rounded-2xl border border-red-500/20 text-red-400 group-hover:scale-110 transition-transform shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>

                  <p className="text-sm md:text-base font-medium text-gray-200 mb-1">
                    {item.event}
                  </p>
                  <p className="text-xs text-red-400/90 font-medium mb-3">
                    Scale: {item.scale}
                  </p>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
