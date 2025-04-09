import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show indicator after scrolling down a bit (50px)
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 sm:h-1.5 bg-primary/60 z-[100] origin-left"
      style={{ 
        scaleX,
        opacity: isVisible ? 0.8 : 0 
      }}
      transition={{ opacity: { duration: 0.2 } }}
    />
  );
}