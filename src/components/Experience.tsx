"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  organization: string;
  location?: string;
  date?: string;
  description?: string;
  points?: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Software Development Engineer (SDE) Intern",
      organization: "Victorious Infotech Pvt. Ltd.",
      location: "Noida, Uttar Pradesh",
      date: "Apr 2026 – Jun 2026",
      points: [
        "Engineered full-stack web features using React.js, Node.js, and Express.js, improving page speed by 30% and reducing server latency by 20%.",
        "Architected scalable RESTful APIs handling 1,000+ daily requests with 99.9% uptime, ensuring reliable communication between services.",
        "Established Jest unit tests (85% coverage), maintained GitHub Actions CI/CD pipelines, and delivered 3 sprint features on schedule within Agile workflows."
      ]
    },
    {
      title: "Social Media Manager",
      organization: "Android Club",
      points: [
        "Managed social media presence across platforms, increasing follower engagement by 35% and reach by 50%.",
        "Coordinated outreach for 5+ tech events, resulting in 200+ student registrations per event."
      ]
    },
    {
      title: "Events Team Member",
      organization: "Google Developers Group (GDG)",
      points: [
        "Organised 8+ technical workshops and hackathons with 150+ average attendance, ensuring smooth on-ground execution.",
        "Collaborated with speakers and sponsors, handling logistics and post-event feedback collection."
      ]
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/40 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Career & Community
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Leadership & Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-400 rounded-full mx-auto shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
        </motion.div>

        <div className="relative border-l-2 border-red-950/60 pl-8 md:pl-12 ml-4 md:ml-0 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group p-6 md:p-8 rounded-3xl bg-neutral-950/60 border border-white/[0.06] hover:border-red-500/30 hover:bg-neutral-900/60 transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(239,68,68,0.08)]"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[45px] md:-left-[61px] top-8 w-5 h-5 rounded-full bg-[#050505] border-2 border-red-500 group-hover:bg-red-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
              
              <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-red-200 transition-colors">{exp.title}</h3>
                {exp.date && (
                  <span className="text-xs md:text-sm font-semibold text-red-300 bg-red-950/40 border border-red-500/30 px-3.5 py-1 rounded-full w-fit whitespace-nowrap shadow-sm">
                    {exp.date}
                  </span>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                <h4 className="text-base md:text-lg font-medium text-red-400">{exp.organization}</h4>
                {exp.location && (
                  <span className="text-sm text-gray-600 hidden sm:inline">•</span>
                )}
                {exp.location && (
                  <span className="text-sm text-gray-400">{exp.location}</span>
                )}
              </div>
              
              {exp.points ? (
                <ul className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed font-light list-none">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-red-500 mt-2.5 w-1.5 h-1.5 rounded-full shrink-0 bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">{exp.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


