"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Head, Media Department",
      organization: "Android Club, VIT Bhopal",
      date: "Present",
      description: "Leading the media team to create engaging content, manage digital presence, and execute strategic campaigns for club events. Fostering a collaborative environment to deliver high-quality assets.",
    },
    {
      title: "Core Events Team",
      organization: "GDGC Events Team",
      date: "Past",
      description: "Managed and organized large-scale technical events successfully. Coordinated with speakers, sponsors, and student communities to ensure seamless execution and high attendee satisfaction.",
    },
    {
      title: "School Fest Organizer",
      organization: "High School",
      date: "Past",
      description: "Managed school-wide events with dedication and confidence. Handled logistics, team coordination, and event planning to create memorable experiences for hundreds of students.",
    }
  ];

  return (
    <section id="experience" className="relative w-full py-32 z-10 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Leadership & Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 md:pl-12 ml-4 md:ml-0 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#0b0f17] border-2 border-purple-500 group-hover:bg-purple-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                <h3 className="text-2xl font-bold text-white tracking-tight">{exp.title}</h3>
                <span className="text-sm font-medium text-cyan-400 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 w-fit backdrop-blur-sm">
                  {exp.date}
                </span>
              </div>
              
              <h4 className="text-lg font-medium text-purple-300 mb-4">{exp.organization}</h4>
              <p className="text-gray-400 text-lg leading-relaxed font-light">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
