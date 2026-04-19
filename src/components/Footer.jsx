import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="w-full py-16 border-t border-border bg-black/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-mono text-[10px] tracking-[0.3em] text-text-dim uppercase">
            © 2026 {portfolioData.profile.role.split(' ').pop()} ARCHITECT.
          </span>
          <span className="font-mono text-[9px] tracking-[0.1em] text-text-dim/50 uppercase">
            ENGINEERED FOR PERFORMANCE.
          </span>
        </div>

        <div className="flex gap-10">
          {Object.entries(portfolioData.profile.socials).map(([platform, link]) => (
            <a
              key={platform}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-widest text-text-dim hover:text-accent transition-colors uppercase"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
