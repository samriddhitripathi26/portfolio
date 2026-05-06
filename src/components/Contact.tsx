"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ArrowRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-40 z-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-cyan-400 font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">What's Next?</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-10 text-white tracking-tight">Get In Touch</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="mailto:samriddhitripathi26@gmail.com"
            className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors w-full sm:w-auto text-lg"
          >
            <Mail className="w-5 h-5" />
            Say Hello
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>
          
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com/in/samriddhi-tripathi-"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white/[0.03] border border-white/10 rounded-full hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 text-gray-300 hover:scale-110"
            >
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            
            <a
              href="https://github.com/samriddhitripathi26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white/[0.03] border border-white/10 rounded-full hover:bg-white/10 hover:text-white hover:border-white/50 transition-all duration-300 text-gray-300 hover:scale-110"
            >
              <FaGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>

            <a
              href="/SAMRIDDHI_TRIPATHI_RESUME.pdf"
              download="Samriddhi_Tripathi_Resume.pdf"
              className="p-5 bg-white/[0.03] border border-white/10 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 text-gray-300 hover:scale-110"
              title="Download Resume"
            >
              <FileText className="w-6 h-6" />
              <span className="sr-only">Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-10 left-0 right-0 text-center text-gray-500 text-sm font-light">
        <p>Designed & Built with <span className="text-purple-400 font-medium">Next.js</span> and <span className="text-cyan-400 font-medium">Framer Motion</span></p>
        <p className="mt-3">&copy; {new Date().getFullYear()} Samriddhi Tripathi. All rights reserved.</p>
      </div>
    </section>
  );
}
