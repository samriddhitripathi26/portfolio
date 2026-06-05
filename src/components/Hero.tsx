"use client";

import { motion, Variants } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-24 overflow-hidden z-10 px-6">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-gray-300 tracking-wide">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 mb-6 leading-tight"
          >
            Samriddhi <br className="hidden lg:block" /> Tripathi.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-light"
          >
            <span className="text-purple-300/90 font-medium">Full Stack Developer</span>
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#projects" className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="/SAMRIDDHI_TRIPATHI_RESUME.pdf" download="Samriddhi_Tripathi_Resume.pdf" className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 backdrop-blur-md transition-all">
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              Download Resume
            </a>

            <a href="#contact" className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 backdrop-blur-md transition-all">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-2xl animate-pulse" />
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-white/5 p-2 backdrop-blur-sm"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden transition-all duration-700">
                <Image
                  src="/profile-new.jpeg"
                  alt="Samriddhi Tripathi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute -inset-4 border border-white/5 rounded-full border-dashed pointer-events-none" 
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="absolute -inset-8 border border-white/5 rounded-full border-dotted pointer-events-none hidden md:block" 
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
