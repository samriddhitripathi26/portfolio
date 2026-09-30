"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Web Technologies",
      skills: ["React.js", "Tailwind CSS", "Next.js", "Monaco Editor", "Node.js", "Express.js", "REST APIs", "JWT", "bcrypt"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Redis"]
    },
    {
      title: "AI & Cloud",
      skills: [
        "LLM API Integration", "Prompt Engineering", "Vercel", "Render", "CI/CD",
        "AWS (EC2, IAM, S3, VPC, CloudFront, CloudFormation, API Gateway, RDS, CloudWatch, ELB, DynamoDB)"
      ]
    },
    {
      title: "Tools & Fundamentals",
      skills: [
        "Postman", "VS Code", "Git", "GitHub", "DSA", "DBMS", "OOPs", "OS", "CN", "BullMQ", "Jest"
      ]
    }
  ];

  return (
    <section id="skills" className="relative w-full py-32 z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/40 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-400 rounded-full mx-auto shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 rounded-[2rem] bg-neutral-950/70 border border-white/[0.08] backdrop-blur-sm hover:border-red-500/35 hover:bg-neutral-900/60 transition-all duration-500 shadow-md hover:shadow-[0_0_25px_rgba(239,68,68,0.1)] ${
                category.title.includes("Cloud") ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-red-400 via-rose-300 to-white bg-clip-text text-transparent inline-block">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 text-xs md:text-sm font-medium text-gray-300 bg-neutral-900/80 border border-white/[0.08] rounded-2xl hover:bg-red-950/40 hover:border-red-500/40 hover:text-red-200 hover:shadow-[0_0_12px_rgba(239,68,68,0.2)] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

