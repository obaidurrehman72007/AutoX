import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [showPreloader, setShowPreloader] = useState(!localStorage.getItem("visited"));
  useEffect(() => {
    if (showPreloader) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setShowPreloader(false), 500);
            localStorage.setItem("visited", "true");
            return 100;
          }
          return prev + 1;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [showPreloader]);
  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 bg-black flex flex-col items-center justify-center z-9999"
        >
          <div className="relative w-full max-w-md px-10">
            <div className="flex justify-between items-end mb-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-white text-xs tracking-[0.5em] font-light uppercase"
              >
                Engineered for Performance
              </motion.div>
              <div className="text-orange-600 font-mono text-4xl font-bold leading-none">
                {progress}%
              </div>
            </div>
            <div className="h-0.5 w-full bg-white/10 overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute top-0 left-0 h-full bg-orange-600"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-8 flex justify-center"
            >
              <div className="w-1 h-1 bg-white rounded-full mx-1" />
              <div className="w-1 h-1 bg-white rounded-full mx-1" />
              <div className="w-1 h-1 bg-white rounded-full mx-1" />
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-10 overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="block text-[10vw] font-black text-white/5 leading-none uppercase select-none"
            >
              Luxury
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Preloader;