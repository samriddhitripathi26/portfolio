"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, ArrowRight, Check, Copy } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("samriddhitripathi26@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">Get In Touch</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            I'm currently looking for new opportunities. Whether you have a project idea, a question, or just want to connect, feel free to drop me an email. I'll do my best to get back to you!
          </p>
        </motion.div>

        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto mb-16 p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm hover:border-white/[0.12] transition-colors duration-500 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-cyan-400">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-light uppercase tracking-wider">Email Address</p>
              <p className="text-white font-medium md:text-lg">samriddhitripathi26@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={copyEmail}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3.5 bg-white/5 border border-white/10 text-white rounded-2xl font-medium hover:bg-white/10 transition-all text-sm group cursor-pointer"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              )}
              {copied ? "Copied!" : "Copy"}
            </button>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=samriddhitripathi26@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black rounded-2xl font-semibold hover:bg-gray-200 transition-colors text-sm"
            >
              Email Me
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Social Links & Resume */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href="https://linkedin.com/in/samriddhi-tripathi-"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-white/[0.03] border border-white/10 rounded-full hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 text-gray-300 hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>

          <a
            href="https://github.com/samriddhitripathi26"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-white/[0.03] border border-white/10 rounded-full hover:bg-white/10 hover:text-white hover:border-white/50 transition-all duration-300 text-gray-300 hover:scale-110"
            title="GitHub"
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
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-10 left-0 right-0 text-center text-gray-500 text-sm font-light">
        <p className="mt-3">&copy; 2025 Samriddhi Tripathi. All rights reserved.</p>
      </div>
    </section>
  );
}
