import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ item, isLast, delay = 0 }) => {
  return (
    <div className="relative flex gap-8 pb-12">
      {/* Line and Dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay }}
          className={`w-3 h-3 rounded-full z-10 ${
            item.type === 'experience' ? 'bg-accent' : 'bg-accent-dim'
          } shadow-[0_0_15px_rgba(83,221,252,0.4)]`}
        />
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: delay + 0.2 }}
            className="w-[1px] bg-border flex-grow mt-2"
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.1 }}
        className="flex-grow pt-[-4px]"
      >
        <span className="font-mono text-[10px] text-accent tracking-widest uppercase mb-2 block">
          {item.period}
        </span>
        <h4 className="text-lg font-bold font-headline tracking-tight mb-1">
          {item.title}
        </h4>
        <span className="text-sm text-text-dim/80 font-medium mb-4 block">
          {item.company || item.institution}
        </span>
        <p className="text-text-dim text-sm leading-relaxed max-w-xl">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
