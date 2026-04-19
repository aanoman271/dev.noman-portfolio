import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-surface-brighter border border-border hover:border-accent transition-colors focus:outline-none"
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
        <motion.span
          initial={false}
          animate={{
            y: theme === 'dark' ? 0 : 30,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          className="material-symbols-outlined text-accent absolute"
        >
          dark_mode
        </motion.span>
        <motion.span
          initial={false}
          animate={{
            y: theme === 'light' ? 0 : -30,
            opacity: theme === 'light' ? 1 : 0,
          }}
          className="material-symbols-outlined text-accent absolute"
        >
          light_mode
        </motion.span>
      </div>
    </button>
  );
};

export default ThemeToggle;
