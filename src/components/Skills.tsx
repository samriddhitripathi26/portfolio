"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript (ES6)", "React.js"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL"]
    },
    {
      title: "Cloud Services (AWS)",
      skills: [
        "AWS IAM", "Amazon EC2", "Amazon S3", "Amazon VPC", "AWS CloudWatch",
        "AWS CloudTrail", "AWS ECS", "AWS EKS", "AWS CloudFormation",
        "Amazon DynamoDB", "Amazon API Gateway", "Elastic Load Balancing (ELB)",
        "Auto Scaling", "Amazon RDS", "Amazon CloudFront", "AWS Fargate"
      ]
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "Chrome DevTools"]
    },
    {
      title: "Core Concepts",
      skills: [
        "Component-Based Architecture", "State Management",
        "Responsive Design", "UI Development", "SDLC"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm hover:border-white/[0.15] transition-all duration-500 ${
                category.title.includes("Cloud") ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent inline-block">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-default"
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
