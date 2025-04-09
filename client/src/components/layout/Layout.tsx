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

// Page transition variants - more subtle
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

// Transition configuration - gentler and faster
const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.2,
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