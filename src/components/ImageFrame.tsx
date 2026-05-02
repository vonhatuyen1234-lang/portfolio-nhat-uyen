import React from 'react';
import { motion } from 'motion/react';

interface ImageFrameProps {
  src: string;
  className?: string;
  delay?: number;
  rotation?: number;
  aspectRatio?: string;
  onClick?: () => void;
}

const ImageFrame: React.FC<ImageFrameProps> = ({ src, className, delay = 0, rotation = 0, aspectRatio = "aspect-[3/4]", onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30, rotate: rotation - 5 }}
      whileInView={{ opacity: 1, scale: 1, y: 0, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05, rotate: rotation + 2, zIndex: 50 }}
      onClick={onClick}
      className={`liquid-glass group relative overflow-hidden rounded-2xl p-2 shadow-2xl cursor-pointer ${className}`}
    >
      <div className={`relative ${aspectRatio} w-full overflow-hidden rounded-xl bg-muted`}>
        <img
          src={src}
          alt="Portrait"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      
      {/* Decorative glass elements */}
      <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-white/10 blur-xl transition-all group-hover:bg-white/20" />
      <div className="absolute -left-4 -bottom-4 h-16 w-16 rounded-full bg-blue-500/10 blur-xl transition-all group-hover:bg-blue-500/20" />
    </motion.div>
  );
};

export default ImageFrame;
