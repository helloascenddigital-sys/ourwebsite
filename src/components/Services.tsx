"use client";

import { motion, Variants } from "framer-motion";
import { Monitor, Layout, BarChart, Cpu } from "lucide-react";

const services = [
  {
    icon: <Layout className="w-10 h-10 text-accent-gold" />,
    title: "Website Development",
    description: "Stunning, high-performance websites tailored to your brand's unique identity."
  },
  {
    icon: <Monitor className="w-10 h-10 text-accent-gold" />,
    title: "Web Applications",
    description: "Complex, scalable web apps built with modern frameworks and robust backends."
  },
  {
    icon: <BarChart className="w-10 h-10 text-accent-gold" />,
    title: "Data Dashboards",
    description: "Intuitive analytics dashboards turning complex data into actionable insights."
  },
  {
    icon: <Cpu className="w-10 h-10 text-accent-gold" />,
    title: "AI/ML Solutions",
    description: "Intelligent AI integrations and machine learning models to automate and scale."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface-dark relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Capabilities
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-accent-gold-light opacity-60 to-accent-gold mx-auto"
          ></motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl relative group overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:border-accent-gold/40"
            >
              {/* Hover sweep effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-6 bg-black p-4 rounded-xl inline-block border border-white/5 relative z-10">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 relative z-10 font-heading">
                {service.title}
              </h3>
              <p className="text-gray-400 relative z-10 font-sans leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
