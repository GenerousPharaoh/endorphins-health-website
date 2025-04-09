import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoadTransition() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add a small delay to allow initial page render
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[1000] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="relative"
          >
            <div className="relative h-20 w-20 flex items-center justify-center">
              <motion.div 
                className="absolute inset-0 border-[3px] border-t-transparent border-primary rounded-full"
                animate={{ rotate: 360 }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1,
                  ease: "linear" 
                }}
              />
              <motion.div 
                className="h-10 w-10 bg-black border-[3px] border-primary rounded-sm overflow-hidden flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5
                }}
              >
                <motion.span 
                  className="text-white font-bold text-xs"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  E
                </motion.span>
                <div className="absolute top-[3px] left-[3px] h-1 w-1 bg-primary"></div>
                <div className="absolute bottom-[3px] right-[3px] h-1 w-1 bg-primary"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}