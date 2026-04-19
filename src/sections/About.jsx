import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import BentoCard from '../components/BentoCard';

const AnimatedCodeEditor = () => {
  const codeLines = [
    { text: 'while', color: 'text-accent' },
    { text: ' (learning) ', color: 'text-text' },
    { text: '{', color: 'text-text' },
    { text: '  build();', color: 'text-accent-dim' },
    { text: '  deploy();', color: 'text-accent-dim' },
    { text: '  grow++;', color: 'text-accent' },
    { text: '}', color: 'text-text' },
  ];

  return (
    <div className="w-full max-w-[280px] bg-bg-dark/40 border border-border rounded-xl overflow-hidden font-mono text-[9px] leading-tight shadow-2xl group/editor">
      <div className="bg-surface-brighter/50 px-3 py-1.5 border-b border-border flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
          <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-text-dim/40 text-[8px] uppercase tracking-widest font-bold">alive.js</span>
        </div>
      </div>
      <div className="p-3 space-y-1 relative overflow-hidden">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            className="flex gap-3 items-center"
          >
            <span className="text-text-dim/20 w-2 text-right select-none text-[8px]">{i + 1}</span>
            <span className={`${line.color} whitespace-pre`}>{line.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-surface/30 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

        {/* Left Column: Story */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-accent" />
              <span className="font-mono text-xs tracking-[.4em] text-accent uppercase font-bold">About</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black font-headline tracking-tighter leading-tight"
            >
              {about.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-accent underline decoration-accent/20 underline-offset-8">
                {about.title.split(' ').pop()}
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8 text-text-dim text-lg md:text-xl leading-relaxed max-w-2xl font-medium"
          >
            <p>{about.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {about.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block text-4xl font-black text-text font-headline">{stat.value}</span>
                  <span className="block font-mono text-[10px] text-accent uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Bento Cards */}
        <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-8">
          <BentoCard
            title=" Modules"
            icon="Core"
            className="min-h-[250px]"
            delay={0.3}
          >
            {/* <p className="text-text-dim/80 text-sm mb-6 font-medium">
              When I'm not architecting systems, I'm exploring the intersections of physical and digital artistry.
            </p> */}
            <div className="grid grid-cols-1 gap-3">
              {about.beyondCode.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-surface-brighter rounded-xl border border-border group hover:border-accent/40 transition-all">
                    <div className="text-accent text-xl group-hover:scale-110 transition-transform">
                      <Icon />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-text-dim uppercase font-bold">
                      {item.text}
                    </span>
                  </div>
                )
              }
              )}
            </div>
          </BentoCard>

          <BentoCard
            icon="auto_stories"
            className="bg-accent/5 border-accent/20 min-h-[320px]"
            delay={0.5}
          >
            <div className="flex flex-col gap-6 h-full justify-between">
              <div className="space-y-2">
                {/* <span className="text-3xl font-black text-accent font-headline">Constant Growth.</span>
                <p className="text-text-dim text-sm font-medium leading-relaxed">
                  Always pushing the boundaries. Obsessed with performance and fluid user experiences.
                </p> */}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <AnimatedCodeEditor />
              </motion.div>
            </div>
          </BentoCard>
        </div>

      </div>
    </section>
  );
};

export default About;
