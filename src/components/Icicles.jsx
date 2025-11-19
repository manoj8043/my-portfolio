import React from 'react';
import { motion } from 'framer-motion';

const Icicles = ({ position = 'top' }) => {
  const icicles = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div
      className={`absolute ${position === 'top' ? 'top-0 left-0' : 'bottom-0 left-0'} w-full h-16 pointer-events-none z-40`}
      style={{
        background: `linear-gradient(${
          position === 'top' ? 'to bottom' : 'to top'
        }, transparent 0%, rgba(200, 230, 255, 0.3) 50%, transparent 100%)`,
      }}
    >
      {icicles.map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: position === 'top' ? -20 : 20 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            y: position === 'top' ? [0, 5, 0] : [0, -5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute"
          style={{
            left: `${(i * 100) / icicles.length}%`,
            width: `${2 + Math.random() * 3}px`,
            height: `${20 + Math.random() * 15}px`,
            background: 'linear-gradient(to bottom, rgba(200, 230, 255, 0.8), rgba(150, 200, 255, 0.4))',
            borderRadius: '0 0 50% 50%',
            transform: position === 'top' ? 'none' : 'rotate(180deg)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        />
      ))}
    </div>
  );
};

export default Icicles;
