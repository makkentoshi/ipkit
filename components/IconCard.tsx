import React from 'react';
import { motion } from 'framer-motion';

function IconCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 cursor-pointer"
    >
      <div className="text-4xl text-gradient mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}

export default IconCard;