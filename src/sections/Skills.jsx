import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SkillIcon from '../components/SkillIcon';

const Skills = () => {
  const { skills } = portfolioData;

  const categories = [
    { title: 'Frontend Architecture', data: skills.frontend, icon: 'layers' },
    { title: 'Backend Systems', data: skills.backend, icon: 'database' },
    { title: 'Development Tools', data: skills.tools, icon: 'construction' },
  ];

  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[.4em] text-accent uppercase font-bold"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-black font-headline tracking-tighter uppercase"
          >
            Tech Stack  <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent to-accent-dim">& Tools</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-dim text-sm md:text-base leading-relaxed"
          >
            The technologies I work with to design, develop, and deliver modern web experiences.          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
                className="flex items-center gap-3 pb-4 border-b border-border"
              >
                <span className="material-symbols-outlined text-accent text-xl">{cat.icon}</span>
                <h3 className="text-sm font-mono tracking-widest uppercase font-bold">{cat.title}</h3>
              </motion.div>

              <div className="grid grid-cols-1 gap-4">
                {cat.data.map((skill, skillIdx) => (
                  <SkillIcon
                    key={skillIdx}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    delay={catIdx * 0.1 + skillIdx * 0.05}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
