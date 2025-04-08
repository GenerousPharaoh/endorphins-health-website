import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className="fixed w-full top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={`bg-black text-white ${isScrolled ? 'py-2' : 'py-4'} transition-all duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center">
                <div className="relative mr-3 h-10 w-10 bg-primary flex items-center justify-center transform rotate-12 skew-y-3 overflow-hidden group">
                  <span className="text-white text-xl font-black transform -rotate-12 -skew-y-3 z-10">E</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col leading-none">
                  <motion.span 
                    className="text-white text-xl font-black tracking-tighter"
                    initial={{ backgroundPosition: "0% 0%" }}
                    whileHover={{ 
                      backgroundSize: "200% 200%",
                      color: "transparent",
                      backgroundClip: "text",
                      backgroundImage: "linear-gradient(90deg, white, #ff5ebc, white)",
                      transition: { duration: 1, repeat: Infinity }
                    }}
                  >
                    ENDORPHINS
                  </motion.span>
                  <span className="text-primary text-[10px] font-bold tracking-[0.3em] mt-0.5">WELLNESS CENTER</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {['SERVICES', 'TEAM', 'REVIEWS', 'CONTACT'].map((item, i) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group mx-1 px-3 py-5 text-white/80 hover:text-white uppercase text-sm font-bold tracking-widest transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + (i * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative z-10">{item === 'REVIEWS' ? 'REVIEWS' : item}</span>
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Desktop Book Button */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild
                  className="relative overflow-hidden bg-transparent border-2 border-primary text-white font-black text-xs px-6 py-2 uppercase tracking-[0.15em] group"
                >
                  <a href="#booking" className="flex items-center">
                    <span className="relative z-10">Book Now</span>
                    <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu} 
                className="text-white hover:text-primary p-2 focus:outline-none transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 text-white overflow-hidden border-t border-primary/30 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col space-y-0 py-3">
                {['SERVICES', 'TEAM', 'REVIEWS', 'CONTACT'].map((item, i) => (
                  <motion.a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="border-b border-white/10 font-heading text-white hover:text-primary px-2 py-4 text-sm uppercase font-bold tracking-widest transition-all flex items-center"
                    onClick={closeMobileMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (i * 0.1) }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-1 h-6 bg-primary mr-4"
                      initial={{ height: 0 }}
                      animate={{ height: 24 }}
                      transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                    />
                    {item}
                  </motion.a>
                ))}
                
                <div className="pt-4 pb-2">
                  <motion.a 
                    href="#booking" 
                    className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold py-3 text-center transition-all flex items-center justify-center text-sm overflow-hidden relative"
                    onClick={closeMobileMenu}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                    <span className="relative z-10 flex items-center">
                      BOOK NOW
                      <motion.span 
                        className="ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.6 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
