import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const { projects } = portfolioData;
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-[1px] bg-accent" />
                            <span className="font-mono text-xs tracking-[.4em] text-accent uppercase font-bold">Featured Works</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-4xl md:text-6xl font-black font-headline tracking-tighter uppercase"
                        >
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent to-accent-dim">Projects.</span>
                        </motion.h2>
                    </div>

                    {/* <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-text-dim text-sm md:text-base max-w-sm leading-relaxed font-medium md:text-right"
            >
                A collection of high-performance environments engineered with precision and style.
            </motion.p> */}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projects.map((project, idx) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onViewDetails={setSelectedProject}
                            delay={idx * 0.1}
                        />
                    ))}
                </div>

                {/* Detailed View Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 sm:p-12">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                className="relative w-full max-w-5xl bg-surface border border-border rounded-[2rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
                            >
                                {/* Modal Header */}
                                <div className="sticky top-0 z-20 bg-surface/80 backdrop-blur-md border-b border-border p-6 md:px-12 flex justify-between items-center">
                                    <span className="font-mono text-[10px] text-accent font-bold tracking-[0.2em] uppercase">Project_Detailed_Breakdown</span>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-brighter transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-accent">close</span>
                                    </button>
                                </div>

                                <div className="p-8 md:p-12 space-y-12">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                        {/* Summary */}
                                        <div className="space-y-6">
                                            <h3 className="text-4xl md:text-5xl font-black font-headline tracking-tighter uppercase">{selectedProject.title}</h3>
                                            <div className="flex flex-wrap gap-3">
                                                {selectedProject.techStack.map(tech => (
                                                    <span key={tech} className="px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-lg text-[10px] font-mono text-accent uppercase font-bold">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="whitespace-pre-line text-text-dim text-lg leading-relaxed font-medium">
                                                {selectedProject.description}
                                            </p>

                                            <div className="flex gap-4 pt-4">
                                                <a href={selectedProject.links.live} className="px-8 py-3 bg-accent text-bg-dark font-black text-[10px] tracking-widest uppercase rounded-lg hover:brightness-110 transition-all active:scale-95">Live Demo</a>
                                                <a href={selectedProject.links.repo} className="px-8 py-3 border border-border hover:border-accent/40 text-[10px] font-mono tracking-widest uppercase rounded-lg transition-all active:scale-95">Source Code</a>
                                            </div>
                                        </div>

                                        {/* Visuals / Info */}
                                        <div className="space-y-8">
                                            <div className="bg-surface-brighter rounded-2xl border border-border aspect-video flex items-center justify-center overflow-hidden group relative">
                                                {selectedProject.image ? (
                                                    <img
                                                        src={selectedProject.image}
                                                        alt={selectedProject.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                                    />
                                                ) : (
                                                    <span className="material-symbols-outlined text-8xl text-text-dim/10 group-hover:scale-110 transition-transform duration-1000">visibility</span>
                                                )}
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="p-5 bg-surface-brighter rounded-xl border border-border space-y-2">
                                                    <span className="font-mono text-[9px] text-accent uppercase font-bold block">Status</span>
                                                    <span className="text-sm font-bold uppercase tracking-widest">Completed</span>
                                                </div>
                                                <div className="p-5 bg-surface-brighter rounded-xl border border-border space-y-2">
                                                    <span className="font-mono text-[9px] text-accent uppercase font-bold block">Category</span>
                                                    <span className="text-sm font-bold uppercase tracking-widest">Web Application</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Detailed Sections */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-border">
                                        <div className="space-y-4">
                                            <h4 className="text-xl font-bold font-headline uppercase tracking-tight flex items-center gap-3">
                                                <span className="material-symbols-outlined text-accent text-lg">psychology</span>
                                                Core Challenges
                                            </h4>
                                            <p className="text-text-dim text-sm leading-relaxed font-medium">
                                                {selectedProject.challenges}
                                            </p>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-xl font-bold font-headline uppercase tracking-tight flex items-center gap-3">
                                                <span className="material-symbols-outlined text-accent text-lg">rocket_launch</span>
                                                Future Plans
                                            </h4>
                                            <p className="text-text-dim text-sm leading-relaxed font-medium">
                                                {selectedProject.futurePlans}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Projects;
