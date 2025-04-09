import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 focus:outline-none group"
          aria-label="Scroll to top"
        >
          <motion.div
            className="relative flex items-center justify-center"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <ChevronUp size={20} strokeWidth={2.5} />
            <motion.span 
              className="absolute inset-0 rounded-full bg-white/10"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.8, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}