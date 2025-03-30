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
    <header className="fixed w-full top-0 z-50 transition-all">
      <div className={`bg-black text-white ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="mr-3 h-10 w-10 bg-primary flex items-center justify-center transform rotate-12 skew-y-3">
                  <span className="text-white text-xl font-black transform -rotate-12 -skew-y-3">E</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-white text-xl font-black tracking-tighter">ENDORPHINS</span>
                  <span className="text-primary text-[10px] font-bold tracking-[0.3em] mt-0.5">WELLNESS CENTER</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <a href="#services" className="group mx-1 px-3 py-5 text-white/80 hover:text-white uppercase text-sm font-bold tracking-widest transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">SERVICES</span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-primary group-hover:h-1 transition-all duration-300"></span>
              </a>
              <a href="#team" className="group mx-1 px-3 py-5 text-white/80 hover:text-white uppercase text-sm font-bold tracking-widest transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">TEAM</span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-primary group-hover:h-1 transition-all duration-300"></span>
              </a>
              <a href="#testimonials" className="group mx-1 px-3 py-5 text-white/80 hover:text-white uppercase text-sm font-bold tracking-widest transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">REVIEWS</span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-primary group-hover:h-1 transition-all duration-300"></span>
              </a>
              <a href="#contact" className="group mx-1 px-3 py-5 text-white/80 hover:text-white uppercase text-sm font-bold tracking-widest transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">CONTACT</span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-primary group-hover:h-1 transition-all duration-300"></span>
              </a>
            </nav>

            {/* Desktop Book Button */}
            <div className="hidden md:block">
              <Button 
                asChild
                className="bg-transparent border-2 border-primary hover:bg-primary text-white font-black text-xs px-6 py-2 uppercase tracking-[0.15em] transition-all duration-300"
              >
                <a href="#booking" className="flex items-center">
                  <span>Book Now</span>
                </a>
              </Button>
            </div>

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
            className="md:hidden bg-black/95 text-white overflow-hidden border-t border-primary/30"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col space-y-0 py-3">
                <a 
                  href="#services" 
                  className="border-b border-white/10 font-heading text-white hover:text-primary px-2 py-4 text-sm uppercase font-bold tracking-widest transition-all flex items-center"
                  onClick={closeMobileMenu}
                >
                  <div className="w-1 h-6 bg-primary mr-4"></div>
                  SERVICES
                </a>
                <a 
                  href="#team" 
                  className="border-b border-white/10 font-heading text-white hover:text-primary px-2 py-4 text-sm uppercase font-bold tracking-widest transition-all flex items-center"
                  onClick={closeMobileMenu}
                >
                  <div className="w-1 h-6 bg-primary mr-4"></div>
                  TEAM
                </a>
                <a 
                  href="#testimonials" 
                  className="border-b border-white/10 font-heading text-white hover:text-primary px-2 py-4 text-sm uppercase font-bold tracking-widest transition-all flex items-center"
                  onClick={closeMobileMenu}
                >
                  <div className="w-1 h-6 bg-primary mr-4"></div>
                  REVIEWS
                </a>
                <a 
                  href="#contact" 
                  className="border-b border-white/10 font-heading text-white hover:text-primary px-2 py-4 text-sm uppercase font-bold tracking-widest transition-all flex items-center"
                  onClick={closeMobileMenu}
                >
                  <div className="w-1 h-6 bg-primary mr-4"></div>
                  CONTACT
                </a>
                <div className="pt-4 pb-2">
                  <a 
                    href="#booking" 
                    className="bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold py-3 text-center transition-all flex items-center justify-center text-sm"
                    onClick={closeMobileMenu}
                  >
                    <span>BOOK NOW</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
