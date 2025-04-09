import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled 500px (increased threshold)
      if (window.scrollY > 500) {
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 p-2 bg-primary/80 text-white rounded-full shadow-md hover:bg-primary focus:outline-none group"
          aria-label="Scroll to top"
        >
          <motion.div
            className="relative flex items-center justify-center"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <ChevronUp size={16} strokeWidth={2} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}