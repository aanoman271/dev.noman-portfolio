import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onViewDetails, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-all shadow-xl flex flex-col h-full"
    >
      {/* Visual Component */}
      <div className="relative h-56 overflow-hidden bg-surface-brighter">
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent z-10" />

        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            whileHover={{ scale: 1.1 }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-text-dim opacity-10 group-hover:scale-110 transition-transform duration-700">
              auto_awesome_motion
            </span>
          </div>
        )}


      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 font-headline tracking-tight group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-text-dim text-sm leading-relaxed mb-6 flex-grow line-clamp-2">
          {project.shortDesc}
        </p>
        {/* Tech Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map(tech => (
            <span key={tech} className="px-2 py-1 bg-black/40 backdrop-blur-md rounded border border-white/5 text-[9px] font-mono text-accent uppercase tracking-tighter">
              {tech}
            </span>
          ))}
        </div>
        <button
          onClick={() => onViewDetails(project)}
          className="w-full py-3 bg-surface-brighter border border-border rounded-lg text-xs font-mono tracking-widest uppercase hover:bg-accent hover:text-bg-dark hover:border-accent transition-all active:scale-95"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
