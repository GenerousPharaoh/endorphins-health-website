import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoadTransition() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Shorter delay for a quicker initial render
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[1000] bg-white flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <div className="relative h-16 w-16 flex items-center justify-center">
              <motion.div 
                className="absolute inset-0 border-2 border-t-transparent border-primary/80 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1,
                  ease: "linear" 
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}