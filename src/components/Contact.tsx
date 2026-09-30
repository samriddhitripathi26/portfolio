"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, FileText, ArrowRight, Check, Copy } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("samriddhitripathi26@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+919650800775");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full py-36 z-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-red-950/40 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            Let&apos;s Connect
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 text-white tracking-tight">
            Get In <span className="bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            I&apos;m actively looking for Software Engineering and Full Stack Developer opportunities. Feel free to reach out via email, phone, or connect on LinkedIn and GitHub!
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 rounded-3xl bg-neutral-950/80 border border-white/[0.08] backdrop-blur-md hover:border-red-500/35 transition-all duration-300 flex flex-col justify-between text-left shadow-xl"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3.5 bg-red-950/50 rounded-2xl border border-red-500/30 text-red-400 shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-red-400/80 font-medium uppercase tracking-wider">Email</p>
                <p className="text-white font-medium text-sm md:text-base truncate">samriddhitripathi26@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
              <button
                onClick={copyEmail}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-neutral-900 border border-white/10 text-white rounded-xl font-medium hover:bg-neutral-800 hover:border-red-500/40 transition-all text-xs cursor-pointer whitespace-nowrap"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-red-400" />}
                {copiedEmail ? "Copied!" : "Copy"}
              </button>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=samriddhitripathi26@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white rounded-xl font-semibold shadow-md transition-all text-xs whitespace-nowrap"
              >
                Compose
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 rounded-3xl bg-neutral-950/80 border border-white/[0.08] backdrop-blur-md hover:border-red-500/35 transition-all duration-300 flex flex-col justify-between text-left shadow-xl"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3.5 bg-red-950/50 rounded-2xl border border-red-500/30 text-red-400 shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-red-400/80 font-medium uppercase tracking-wider">Phone / WhatsApp</p>
                <p className="text-white font-medium text-sm md:text-base truncate">+91 9650800775</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
              <button
                onClick={copyPhone}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-neutral-900 border border-white/10 text-white rounded-xl font-medium hover:bg-neutral-800 hover:border-red-500/40 transition-all text-xs cursor-pointer whitespace-nowrap"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-red-400" />}
                {copiedPhone ? "Copied!" : "Copy"}
              </button>
              <a
                href="tel:+919650800775"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-neutral-900 border border-white/10 text-white rounded-xl font-medium hover:bg-neutral-800 hover:border-red-500/40 transition-all text-xs whitespace-nowrap"
              >
                Call
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Social Links & Resume */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-5"
        >
          <a
            href="https://linkedin.com/in/samriddhi-tripathi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 md:p-5 bg-neutral-950/80 border border-white/10 rounded-full hover:bg-red-950/40 hover:text-red-300 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)] transition-all duration-300 text-gray-300 hover:scale-110 flex items-center gap-2 text-sm"
            title="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
            <span className="hidden sm:inline font-medium">LinkedIn</span>
          </a>

          <a
            href="https://github.com/samriddhitripathi26"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 md:p-5 bg-neutral-950/80 border border-white/10 rounded-full hover:bg-red-950/40 hover:text-red-300 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)] transition-all duration-300 text-gray-300 hover:scale-110 flex items-center gap-2 text-sm"
            title="GitHub Profile"
          >
            <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
            <span className="hidden sm:inline font-medium">GitHub</span>
          </a>

          <a
            href="https://leetcode.com/u/samriddhi23BCE10140"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 md:p-5 bg-neutral-950/80 border border-white/10 rounded-full hover:bg-red-950/40 hover:text-amber-400 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-300 text-gray-300 hover:scale-110 flex items-center gap-2 text-sm"
            title="LeetCode Profile"
          >
            <SiLeetcode className="w-5 h-5 md:w-6 md:h-6" />
            <span className="hidden sm:inline font-medium">LeetCode</span>
          </a>

          <a
            href="/SAMRIDDHI_TRIPATHI_RESUME.pdf"
            download="Samriddhi_Tripathi_Resume.pdf"
            className="p-4 md:p-5 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-full hover:from-red-500 hover:to-rose-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.4)] transition-all duration-300 hover:scale-110 flex items-center gap-2 text-sm font-semibold"
            title="Download PDF Resume"
          >
            <FileText className="w-5 h-5 md:w-6 md:h-6" />
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-10 left-0 right-0 text-center text-gray-500 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Samriddhi Tripathi • Computer Science Engineer</p>
      </div>
    </section>
  );
}


