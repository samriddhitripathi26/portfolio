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
      title: "Head, Media Department",
      organization: "Android Club, VIT Bhopal",
      description: "Led the media team to create engaging content, manage digital presence, and execute strategic campaigns for club events. Fostered a collaborative environment to deliver high-quality assets.",
    },
    {
      title: "Core Events Team",
      organization: "GDGC Events Team",
      description: "Managed and organized large-scale technical events successfully. Coordinated with speakers, sponsors, and student communities to ensure seamless execution and high attendee satisfaction.",
    },
    {
      title: "School Fest Organizer",
      organization: "High School",
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
              <div className="absolute -left-[41px] md:-left-[57px] top-2.5 w-5 h-5 rounded-full bg-[#0b0f17] border-2 border-purple-500 group-hover:bg-purple-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              
              <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">{exp.title}</h3>
                {exp.date && (
                  <span className="text-sm font-medium text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                    {exp.date}
                  </span>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                <h4 className="text-lg font-medium text-purple-300">{exp.organization}</h4>
                {exp.location && (
                  <span className="text-sm text-gray-600 hidden sm:inline">•</span>
                )}
                {exp.location && (
                  <span className="text-sm text-gray-400">{exp.location}</span>
                )}
              </div>
              
              {exp.points ? (
                <ul className="space-y-3 text-gray-400 text-lg leading-relaxed font-light list-none">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-purple-400 mt-2.5 w-1.5 h-1.5 rounded-full shrink-0 bg-purple-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-lg leading-relaxed font-light">{exp.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

