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
    <header className={`fixed w-full top-0 z-50 bg-white shadow-lg transition-all ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-primary"></div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-primary text-2xl font-bold">Endorphins</span>
              <span className="text-secondary text-2xl font-medium ml-1">Health</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="font-heading text-foreground hover:text-primary px-3 py-2 rounded-md transition-all relative group">
              <span className="text-xs font-bold text-primary absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity">01</span>
              <span className="font-medium">Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#team" className="font-heading text-foreground hover:text-primary px-3 py-2 rounded-md transition-all relative group">
              <span className="text-xs font-bold text-primary absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity">02</span>
              <span className="font-medium">Our Team</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#testimonials" className="font-heading text-foreground hover:text-primary px-3 py-2 rounded-md transition-all relative group">
              <span className="text-xs font-bold text-primary absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity">03</span>
              <span className="font-medium">Testimonials</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="font-heading text-foreground hover:text-primary px-3 py-2 rounded-md transition-all relative group">
              <span className="text-xs font-bold text-primary absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity">04</span>
              <span className="font-medium">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition-all"
            >
              <a href="#booking" className="flex items-center">
                <span>Book Now</span>
                <span className="ml-2 text-xs font-bold">→</span>
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
              <div className="flex flex-col space-y-1 pt-4">
                <a 
                  href="#services" 
                  className="font-heading text-foreground hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-md transition-all flex items-center"
                  onClick={closeMobileMenu}
                >
                  <span className="text-primary font-bold mr-2">01</span>
                  <span>Services</span>
                </a>
                <a 
                  href="#team" 
                  className="font-heading text-foreground hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-md transition-all flex items-center"
                  onClick={closeMobileMenu}
                >
                  <span className="text-primary font-bold mr-2">02</span>
                  <span>Our Team</span>
                </a>
                <a 
                  href="#testimonials" 
                  className="font-heading text-foreground hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-md transition-all flex items-center"
                  onClick={closeMobileMenu}
                >
                  <span className="text-primary font-bold mr-2">03</span>
                  <span>Testimonials</span>
                </a>
                <a 
                  href="#contact" 
                  className="font-heading text-foreground hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-md transition-all flex items-center"
                  onClick={closeMobileMenu}
                >
                  <span className="text-primary font-bold mr-2">04</span>
                  <span>Contact</span>
                </a>
                <div className="pt-2 pb-1">
                  <a 
                    href="#booking" 
                    className="bg-primary hover:bg-primary/90 text-white font-heading font-medium mx-4 py-3 rounded-md text-center transition-all flex items-center justify-center"
                    onClick={closeMobileMenu}
                  >
                    <span>Book Now</span>
                    <span className="ml-2 text-xs font-bold">→</span>
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
