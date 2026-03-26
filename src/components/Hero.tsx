"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src="/assets/logo.mp4" type="video/mp4" />
          {/* Fallback pattern if video fails */}
        </video>
        <div className="absolute inset-0 bg-black/60 z-0"></div>
      </div>

      {/* Floating Particles Background layer */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--color-accent-gold)_0%,_transparent_20%)] bg-[length:24px_24px] pointer-events-none" style={{ backgroundPosition: "0 0", mixBlendMode: 'screen' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-16 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-accent-silver text-xs font-semibold tracking-widest uppercase mb-6">
            Ascend Digital Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Building Digital Experiences <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold-light via-accent-gold to-accent-gold/70 text-glow-gold relative overflow-hidden inline-block">
            That Stand Out
            <motion.span 
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 5 }}
              className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light"
        >
          Websites &nbsp;&bull;&nbsp; Dashboards &nbsp;&bull;&nbsp; AI Solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#services"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-gold to-accent-gold-light text-black font-semibold tracking-wide transition-all duration-300 hover:scale-105 box-glow-gold-strong flex items-center justify-center min-w-[180px]"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/30 text-white font-semibold tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white flex items-center justify-center min-w-[180px]"
          >
            Contact Us
          </a>
        </motion.div>
      </div>


    </section>
  );
}
