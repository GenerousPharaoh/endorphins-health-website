import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
    <header className={`fixed w-full top-0 z-50 bg-white shadow-md transition-all ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <span className="text-primary text-2xl font-bold">Endorphins</span>
                <span className="text-secondary text-2xl font-medium ml-1">Health</span>
              </a>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="font-heading text-foreground hover:text-primary transition-all font-medium">
              Services
            </a>
            <a href="#team" className="font-heading text-foreground hover:text-primary transition-all font-medium">
              Our Team
            </a>
            <a href="#testimonials" className="font-heading text-foreground hover:text-primary transition-all font-medium">
              Testimonials
            </a>
            <a href="#contact" className="font-heading text-foreground hover:text-primary transition-all font-medium">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <a href="#booking">Book Now</a>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu} 
              className="text-foreground focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
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
              <div className="flex flex-col space-y-3 pt-4">
                <a 
                  href="#services" 
                  className="font-heading text-foreground hover:text-primary px-4 py-2 transition-all"
                  onClick={closeMobileMenu}
                >
                  Services
                </a>
                <a 
                  href="#team" 
                  className="font-heading text-foreground hover:text-primary px-4 py-2 transition-all"
                  onClick={closeMobileMenu}
                >
                  Our Team
                </a>
                <a 
                  href="#testimonials" 
                  className="font-heading text-foreground hover:text-primary px-4 py-2 transition-all"
                  onClick={closeMobileMenu}
                >
                  Testimonials
                </a>
                <a 
                  href="#contact" 
                  className="font-heading text-foreground hover:text-primary px-4 py-2 transition-all"
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>
                <a 
                  href="#booking" 
                  className="bg-primary text-white font-heading font-medium mx-4 py-2 rounded-md text-center transition-all"
                  onClick={closeMobileMenu}
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
