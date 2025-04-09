import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'wouter';
import { ScrollIndicator } from '../ui/scroll-indicator';
import { ScrollToTop } from '../ui/scroll-to-top';

interface LayoutProps {
  children: ReactNode;
}

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 10,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -10,
    scale: 0.98,
  },
};

// Transition configuration for smoother animations
const pageTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1], // cubic-bezier curve for smooth deceleration
  duration: 0.4,
};

const Layout = ({ children }: LayoutProps) => {
  const [location] = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollIndicator />
      <ScrollToTop />
      <Navbar />
      <div className="flex-grow overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.main 
            key={location}
            className="w-full"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;