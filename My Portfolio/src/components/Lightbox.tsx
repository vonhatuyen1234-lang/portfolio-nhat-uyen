import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LightboxProps {
  src: string | null;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ src, onClose }) => {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-h-screen max-w-7xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt="Detailed View"
              className="max-h-[90vh] w-auto object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 text-white backdrop-blur-md flex items-center justify-center transition-all hover:bg-white/20"
            >
              <X size={20} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
