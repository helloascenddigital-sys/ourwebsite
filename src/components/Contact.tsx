"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-14 border border-white/10 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent-gold/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Let's Build <br/> The Future.
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-400 mb-8 font-sans"
                >
                  Ready to elevate your digital presence? Get in touch and let's craft something extraordinary.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <a 
                  href="mailto:hello.ascenddigital@gmail.com" 
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5 group-hover:text-accent-gold transition-colors" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Email Us</span>
                    <span className="font-medium">hello.ascenddigital@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/919381856625"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group mt-8 rounded-2xl bg-gradient-to-r from-[#25D366]/10 to-transparent p-4 border border-[#25D366]/20 hover:border-accent-gold hover:box-glow-gold transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-black">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#25D366] font-semibold mb-1">Fast Response</span>
                    <span className="font-bold text-white">Chat on WhatsApp</span>
                  </div>
                </a>

                <a 
                  href="https://www.instagram.com/ascenddigital_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group rounded-2xl bg-gradient-to-r from-accent-gold/10 to-transparent p-4 border border-white/10 hover:border-accent-gold hover:box-glow-gold transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:border-accent-gold group-hover:bg-accent-gold/20 flex items-center justify-center text-white group-hover:text-accent-gold-light transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 group-hover:text-accent-gold transition-colors duration-300 font-semibold mb-1">Follow Us</span>
                    <span className="font-bold text-white group-hover:text-glow-gold transition-all duration-300">Instagram</span>
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3 bg-black/40 p-8 rounded-2xl border border-white/5"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-gold transition-colors font-sans"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-gold transition-colors font-sans"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-accent-gold transition-colors font-sans resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="button"
                  className="w-full py-4 rounded-xl bg-white text-black font-bold uppercase tracking-wider hover:bg-accent-gold transition-colors duration-300 hover:box-glow-gold mt-4"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
