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
    <header className={`fixed w-full top-0 z-50 bg-white shadow-lg transition-all ${isScrolled ? 'py-1' : 'py-2'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-primary/90 to-primary"></div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="mr-2 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-lg font-black">E</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-primary text-lg font-extrabold tracking-tight">ENDORPHINS</span>
                <span className="text-gray-600 text-xs font-medium tracking-wider">HEALTH & WELLNESS</span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-4">
            <a href="#services" className="font-heading text-gray-600 hover:text-primary px-2 py-1 text-sm uppercase font-bold transition-all relative group tracking-wide">
              <span className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-0 h-0 bg-primary group-hover:w-2 group-hover:h-2 rounded-full transition-all"></span>
              Services
            </a>
            <a href="#team" className="font-heading text-gray-600 hover:text-primary px-2 py-1 text-sm uppercase font-bold transition-all relative group tracking-wide">
              <span className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-0 h-0 bg-primary group-hover:w-2 group-hover:h-2 rounded-full transition-all"></span>
              Team
            </a>
            <a href="#testimonials" className="font-heading text-gray-600 hover:text-primary px-2 py-1 text-sm uppercase font-bold transition-all relative group tracking-wide">
              <span className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-0 h-0 bg-primary group-hover:w-2 group-hover:h-2 rounded-full transition-all"></span>
              Reviews
            </a>
            <a href="#contact" className="font-heading text-gray-600 hover:text-primary px-2 py-1 text-sm uppercase font-bold transition-all relative group tracking-wide">
              <span className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-0 h-0 bg-primary group-hover:w-2 group-hover:h-2 rounded-full transition-all"></span>
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-bold px-5 py-1.5 rounded-md text-sm uppercase tracking-wide transition-all shadow-md"
            >
              <a href="#booking" className="flex items-center">
                <span>Book</span>
                <span className="ml-1 font-bold">→</span>
              </a>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu} 
              className="text-primary hover:bg-primary/10 p-2 rounded-full focus:outline-none transition-colors"
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

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white pb-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-1 pt-3">
                <a 
                  href="#services" 
                  className="font-heading text-gray-600 hover:text-primary px-4 py-2 text-sm uppercase font-bold tracking-wide transition-all flex items-center"
                  onClick={closeMobileMenu}
                >
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Services
                </a>
                <a 
                  href="#team" 
                  className="font-heading text-gray-600 hover:text-primary px-4 py-2 text-sm uppercase font-bold tracking-wide transition-all flex items-center"
                  onClick={closeMobileMenu}
                >
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Team
                </a>
                <a 
                  href="#testimonials" 
                  className="font-heading text-gray-600 hover:text-primary px-4 py-2 text-sm uppercase font-bold tracking-wide transition-all flex items-center"
                  onClick={closeMobileMenu}
                >
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Reviews
                </a>
                <a 
                  href="#contact" 
                  className="font-heading text-gray-600 hover:text-primary px-4 py-2 text-sm uppercase font-bold tracking-wide transition-all flex items-center"
                  onClick={closeMobileMenu}
                >
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Contact
                </a>
                <div className="pt-3 pb-1">
                  <a 
                    href="#booking" 
                    className="bg-primary hover:bg-primary/90 text-white font-heading font-medium mx-4 py-2 rounded-md text-center transition-all flex items-center justify-center text-sm"
                    onClick={closeMobileMenu}
                  >
                    <span>BOOK NOW</span>
                    <span className="ml-2 font-bold">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
