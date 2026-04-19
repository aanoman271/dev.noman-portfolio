import React from 'react';
import { motion } from 'framer-motion';

const SkillIcon = ({ icon: Icons, name, level, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="p-4 bg-surface-brighter rounded-xl border border-border flex flex-col gap-3 group hover:border-accent/50 transition-all shadow-lg"
    >
      <div className="flex justify-between items-center">
        {Icons && <Icons className="text-lg text-accent group-hover:scale-110 transition-transform" />}
        <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-widest">
          {name}
        </span>
        <span className="font-mono text-[9px] text-text-dim">
          {level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-[2px] bg-border overflow-hidden rounded-full">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full bg-accent"
        />
      </div>
    </motion.div>
  );
};

export default SkillIcon;
