"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "Data Dashboards",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Crypto Exchange",
    category: "Web Applications",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AI Medical Platform",
    category: "AI/ML Solutions",
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e9e9c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Luxury E-Commerce",
    category: "Website Development",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Selected Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 max-w-xl"
            >
              A showcase of our premium digital products, engineered for scale and designed to captivate.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#contact" className="text-accent-gold hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold flex items-center gap-2 group">
              View All Work
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group cursor-pointer relative"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-surface-dark border border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex items-end">
                  <div className="p-8 w-full flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div>
                      <p className="text-accent-gold font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.category}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-accent-gold text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
