import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description, image, tags = [], className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`card bg-base-200 shadow-xl overflow-hidden group ${className}`}
    >
      {image && (
        <figure className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title text-primary">{title}</h2>
        <p className="text-sm opacity-80">{description}</p>
        <div className="card-actions justify-end mt-4">
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-outline badge-sm opacity-60">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
