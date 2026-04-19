import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import BentoCard from '../components/BentoCard';

const Contact = () => {
  const { profile } = portfolioData;

  const contactMethods = [
    { icon: 'alternate_email', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'call', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: 'chat', label: 'WhatsApp', value: 'Chat Now', href: `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}` },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[.4em] text-accent uppercase font-bold"
          >
            Connectivity
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-black font-headline tracking-tighter uppercase leading-none"
          >
            Start a <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent to-accent-dim">Dialogue.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-dim text-sm md:text-base leading-relaxed"
          >
            Available for architectural consulting, full-stack engineering, and high-performance frontend development.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, idx) => (
            <BentoCard
              key={idx}
              icon={method.icon}
              delay={idx * 0.1}
              className="flex flex-col items-center text-center py-12 hover:scale-[1.02] transition-transform"
            >
              <div className="space-y-4 relative z-10 w-full">
                <span className="font-mono text-[10px] text-accent font-bold tracking-[0.2em] uppercase block">{method.label}</span>
                <span className="text-xl font-bold font-headline block truncate">{method.value}</span>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-mono font-black text-accent uppercase tracking-widest hover:bg-accent hover:text-bg-dark transition-all"
                >
                  Connect Now
                  <span className="material-symbols-outlined text-xs">arrow_outward</span>
                </a>
              </div>
            </BentoCard>
          ))}
        </div>

        {/* Global Location Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center pt-8"
        >
          <div className="px-8 py-4 bg-surface-brighter border border-border rounded-2xl flex items-center gap-4 shadow-xl group">
             <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
             <span className="font-mono text-[10px] text-text-dim/80 tracking-widest uppercase font-bold group-hover:text-accent transition-colors">
                Available for Global Remote Opportunities
             </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
