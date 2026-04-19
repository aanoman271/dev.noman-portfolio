import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import TimelineItem from '../components/TimelineItem';

const Timeline = () => {
  const { timeline } = portfolioData;

  // Logic: Show Education only if it exceeds HSC level (level > 1)
  const filteredTimeline = timeline.filter(
    (item) => item.type === 'experience' || (item.type === 'education' && item.level > 1)
  );

  return (
    <section id="experience" className="py-32 px-6 md:px-12 lg:px-24 bg-surface/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Section Header */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
            >
                <div className="w-12 h-[1px] bg-accent" />
                <span className="font-mono text-xs tracking-[.4em] text-accent uppercase font-bold">Chronology</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase leading-none"
            >
              Career <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent to-accent-dim">
                Evolution.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-text-dim text-lg leading-relaxed max-w-sm font-medium"
          >
            A decade's worth of engineering, translated into a legacy of high-performance digital solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 bg-surface-brighter rounded-2xl border border-border mt-8 flex items-center justify-between group overflow-hidden"
          >
            <div className="relative z-10">
                <span className="block text-4xl font-black text-accent font-headline">Infinite</span>
                <span className="font-mono text-[10px] text-text-dim uppercase tracking-widest font-bold">Learning Loop</span>
            </div>
            <span className="material-symbols-outlined text-6xl text-accent opacity-10 group-hover:rotate-180 transition-transform duration-1000">all_inclusive</span>
          </motion.div>
        </div>

        {/* Timeline Content */}
        <div className="lg:col-span-7 pt-4">
          <div className="relative">
            {filteredTimeline.map((item, idx) => (
              <TimelineItem
                key={idx}
                item={item}
                isLast={idx === filteredTimeline.length - 1}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
