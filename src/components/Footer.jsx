import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full py-20 border-t border-border bg-black/40 overflow-hidden glass">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Column 1: Brand & Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-accent text-sm">terminal</span>
              </div>
              <span className="text-xl font-black font-headline tracking-tighter uppercase">
                {portfolioData.profile.role.split(' ').pop()} <span className="text-accent">ARCHITECT.</span>
              </span>
            </div>
            
            <p className="text-text-dim text-xs font-mono tracking-widest leading-relaxed max-w-sm uppercase opacity-60">
              © 2026 Abdullah Al Noman. All structures and logic registered under digital craftsmanship protocols.
            </p>
          </motion.div>

          {/* Column 2: Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 flex flex-wrap gap-x-8 gap-y-4"
          >
            {portfolioData.profile.socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative font-mono text-[10px] tracking-[0.3em] text-text-dim hover:text-accent transition-colors uppercase py-2"
              >
                {social.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </motion.div>

          {/* Column 3: Status & Back to Top */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 flex flex-col items-start lg:items-end gap-6"
          >
            <div className="flex flex-col items-start lg:items-end gap-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                </span>
                <span className="font-mono text-[9px] text-accent font-bold tracking-[0.2em] uppercase">Status: Online</span>
              </div>
              <span className="font-mono text-[9px] text-text-dim/50 tracking-[0.1em] uppercase">Local Time: {time}</span>
            </div>

            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 px-6 py-3 bg-surface border border-border rounded-xl hover:border-accent/40 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
            >
              <span className="font-mono text-[9px] tracking-widest text-text-dim group-hover:text-accent uppercase font-bold">Back to Top</span>
              <span className="material-symbols-outlined text-sm text-text-dim group-hover:text-accent group-hover:-translate-y-0.5 transition-transform">north</span>
            </button>
          </motion.div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-20 pt-10 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[8px] text-text-dim/30 tracking-[0.4em] uppercase">
            Engineered with Precision & Cinematic Intent.
          </span>
          <div className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

