"use client";

import { motion } from "framer-motion";
import { Zap, Diamond, Headset, Expand } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-8 h-8 text-accent-gold" />,
    title: "Fast Delivery",
    description: "Rapid iteration cycles and specialized development workflows to launch faster."
  },
  {
    icon: <Diamond className="w-8 h-8 text-accent-gold" />,
    title: "Premium Design",
    description: "World-class aesthetics that elevate your brand and build immediate trust."
  },
  {
    icon: <Headset className="w-8 h-8 text-accent-gold" />,
    title: "Reliable Support",
    description: "Always-on technical support and continuous optimization for your platform."
  },
  {
    icon: <Expand className="w-8 h-8 text-accent-gold" />,
    title: "Scalable Solutions",
    description: "Architectures designed to handle massive growth without compromising speed."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-surface-dark border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-accent-gold font-semibold tracking-wider uppercase text-sm mb-4 block">The Ascend Advantage</span>
          <h2 className="text-3xl md:text-5xl font-bold">Why Choose Us</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-inner group transition-colors duration-300 hover:border-accent-gold/50">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent-gold blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-gray-400 font-sans leading-relaxed text-sm md:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
