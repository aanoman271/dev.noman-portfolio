import React from 'react';
import { motion } from 'framer-motion';

const BentoCard = ({ children, className = "", title, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-surface border border-border rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-accent/40 transition-colors shadow-xl ${className}`}
    >
      {/* Background Icon Glow */}
      {icon && (
        <span className="material-symbols-outlined absolute -top-4 -right-4 text-8xl opacity-[0.03] text-accent group-hover:opacity-[0.08] transition-opacity">
          {icon}
        </span>
      )}

      {title && (
        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
          {icon && (
            <span className="material-symbols-outlined text-accent">{icon}</span>
          )}
          <span className="font-headline tracking-tight">{title}</span>
        </h3>
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default BentoCard;
