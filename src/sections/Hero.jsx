import React from "react";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import image from "../assets/image.jpg";
const Hero = () => {
  const { profile, hero } = portfolioData;

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20">
      {/* Background Decorative Element */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-accent-dim/5 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-10 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-4">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 bg-surface-brighter rounded-full border border-border shadow-2xl mx-auto lg:mx-0"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="text-[10px] tracking-[0.1em] text-text-dim uppercase font-mono font-medium">
                {hero.availability}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4"
            >
              <span className="font-mono text-accent font-bold tracking-[0.3em] text-xs md:text-sm uppercase block">
                {profile.name} — {profile.role}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] font-headline uppercase">
                {hero.headline.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent to-accent-dim">
                  {hero.headline.split(" ").pop()}
                </span>
              </h1>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-text-dim text-base md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 pt-6"
          >
            <a
              href={profile.resumeLink}
              download="Abdullah_Al_Noman_Resume.pdf"
              className="w-full sm:w-auto px-10 py-5 bg-gradient-to-br from-accent to-accent-dim text-bg-dark font-black text-xs tracking-[0.2em] rounded-xl shadow-[0_10px_30px_-10px_rgba(83,221,252,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(83,221,252,0.6)] hover:-translate-y-1 transition-all active:scale-95 uppercase"
            >
              Download Resume
            </a>

            <div className="flex gap-5">
              {profile.socials.map((platform, idx) => {
                const Icon = platform.icon;
                return (
                  <a
                    key={platform.name}
                    href={platform.link}
                    className="w-14 h-14 flex items-center justify-center rounded-2xl border border-border hover:border-accent/40 text-text-dim hover:text-accent transition-all bg-surface hover:-translate-y-1 shadow-xl"
                    aria-label={platform.name}
                  >
                    <div className="text-2xl">
                      <Icon />
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative group">
            {/* Gradient Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-accent to-accent-dim rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>

            {/* Image Container */}
            <div className="relative w-72 h-96 md:w-96 md:h-[34rem] rounded-[1.5rem] overflow-hidden bg-surface-brighter border border-border/50 shadow-2xl p-1">
              <div className="w-full h-full rounded-[1.2rem] overflow-hidden bg-surface border border-border">
                <div className="w-full h-full flex items-center justify-center text-text-dim/20">
                  <img
                    src={image}
                    alt="profile"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Binary Badge */}
            <div className="absolute -bottom-6 -left-6 bg-surface shadow-2xl border border-border px-5 py-3 rounded-xl hidden md:block">
              <span className="font-mono text-[9px] text-accent tracking-tighter block opacity-60">
                SYSTEM_RECOGNITION
              </span>
              <span className="font-mono text-[11px] text-accent font-bold tracking-widest uppercase">
                {profile.name.replace(" ", "_")}
              </span>
            </div>

            {/* Experience Badge */}
            <div className="absolute -top-6 -right-6 bg-surface shadow-2xl border border-border px-5 py-3 rounded-xl hidden md:block">
              <span className="font-mono text-[9px] text-accent tracking-tighter block opacity-60">
                UPTIME
              </span>
              <span className="font-mono text-[11px] text-accent font-bold tracking-widest uppercase">
                {profile.experience}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
