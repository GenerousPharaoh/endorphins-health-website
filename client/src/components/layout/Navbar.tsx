import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "../../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, MapPin, Phone, Mail, Home as HomeIcon } from "lucide-react";
import clinic_logo from "@assets/20250417_200647.jpg";

// Helper function to check if a link is active
const isActiveLink = (currentPath: string, linkPath: string): boolean => {
  if (linkPath === "/" && currentPath === "/") return true;
  if (linkPath !== "/" && currentPath.startsWith(linkPath)) return true;
  return false;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

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
      <div className={`bg-card text-foreground border-b border-border backdrop-blur-md shadow-md ${isScrolled ? 'py-1 sm:py-2' : 'py-2 sm:py-4'} transition-all duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center">
                <div className="flex items-center">
                  <div className="relative h-10 w-10 mr-3 overflow-hidden flex items-center justify-center group shadow-sm rounded-full">
                    <img 
                      src={clinic_logo} 
                      alt="Endorphins Health & Wellness Centre logo" 
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex flex-col leading-none">
                    <motion.div className="flex items-center">
                      <motion.span 
                        className="text-foreground text-base sm:text-xl font-black tracking-tight"
                        whileHover={{ 
                          scale: 1.02,
                          transition: { duration: 0.3 }
                        }}
                      >
                        ENDORPHINS
                      </motion.span>
                    </motion.div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-[2px] bg-primary"></div>
                      <span className="text-muted-foreground text-[9px] sm:text-[11px] font-medium tracking-widest">WELLNESS CENTRE</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link href="/">
                <motion.div 
                  className={`group mx-1 px-3 py-5 ${isActiveLink(location, '/') ? 'text-primary' : 'text-foreground'} hover:text-primary uppercase text-sm font-bold tracking-widest transition-all duration-300 relative overflow-hidden cursor-pointer`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative z-10 flex items-center">
                    <HomeIcon size={16} className="mr-1" />HOME
                  </span>
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left"
                    initial={{ scaleX: isActiveLink(location, '/') ? 1 : 0 }}
                    animate={{ scaleX: isActiveLink(location, '/') ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
              {[
                { label: 'SERVICES', path: '/services' },
                { label: 'TEAM', path: '/team' },
                { label: 'BLOG', path: '/blog' },
                { label: 'CONTACT', path: '/contact' }
              ].map((item, i) => (
                <Link key={item.label} href={item.path}>
                  <motion.div 
                    className={`group mx-1 px-3 py-5 ${isActiveLink(location, item.path) ? 'text-primary' : 'text-foreground'} hover:text-primary uppercase text-sm font-bold tracking-widest transition-all duration-300 relative overflow-hidden cursor-pointer`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + ((i+1) * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left"
                      initial={{ scaleX: isActiveLink(location, item.path) ? 1 : 0 }}
                      animate={{ scaleX: isActiveLink(location, item.path) ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
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
                  className="relative overflow-hidden bg-transparent border-2 border-primary text-foreground font-black text-xs px-6 py-2 uppercase tracking-[0.15em] group shadow-sm"
                >
                  <Link href="/contact" className="flex items-center">
                    <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">Book Now</span>
                    <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu} 
                className="relative text-foreground hover:text-primary p-2 focus:outline-none transition-colors z-50"
                aria-label="Toggle mobile menu"
              >
                <motion.span
                  className="absolute inset-0 bg-primary/10 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: isMobileMenuOpen ? 1 : 0 }}
                  transition={{ duration: 0.15 }}
                />
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay Approach */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.98 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 md:hidden bg-card/95 backdrop-blur-md z-40 overflow-y-auto shadow-lg"
          >
            <motion.div 
              className="absolute top-0 left-0 w-0.5 h-full bg-primary/80"
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="container mx-auto px-6 py-20">
              <div className="flex flex-col space-y-1">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                  className="overflow-hidden border-b border-border"
                >
                  <Link href="/">
                    <motion.div 
                      className={`font-heading ${isActiveLink(location, '/') ? 'text-primary' : 'text-foreground'} hover:text-primary px-2 py-5 text-xl uppercase font-bold tracking-widest transition-all flex items-center cursor-pointer`}
                      onClick={closeMobileMenu}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-0.5 h-10 bg-primary/80 mr-6"
                        initial={{ height: 0 }}
                        animate={{ height: 40 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      />
                      <HomeIcon size={20} className="mr-2" />
                      HOME
                      <motion.div
                        className="ml-auto"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 0.5, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <ChevronRight size={20} className="text-primary/70" />
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>
                
                {[
                  { label: 'SERVICES', path: '/services' },
                  { label: 'TEAM', path: '/team' },
                  { label: 'BLOG', path: '/blog' },
                  { label: 'CONTACT', path: '/contact' }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 + ((i+1) * 0.05) }}
                    className="overflow-hidden border-b border-border"
                  >
                    <Link href={item.path}>
                      <motion.div 
                        className={`font-heading ${isActiveLink(location, item.path) ? 'text-primary' : 'text-foreground'} hover:text-primary px-2 py-5 text-xl uppercase font-bold tracking-widest transition-all flex items-center cursor-pointer`}
                        onClick={closeMobileMenu}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className="w-0.5 h-10 bg-primary/80 mr-6"
                          initial={{ height: 0 }}
                          animate={{ height: 40 }}
                          transition={{ duration: 0.3, delay: 0.1 + ((i+1) * 0.05) }}
                        />
                        {item.label}
                        <motion.div
                          className="ml-auto"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 0.5, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + ((i+1) * 0.1) }}
                        >
                          <ChevronRight size={20} className="text-primary/70" />
                        </motion.div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="pt-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  <Link href="/contact">
                    <motion.div 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-widest font-bold py-5 text-center transition-all flex items-center justify-center text-lg rounded-sm overflow-hidden relative cursor-pointer"
                      onClick={closeMobileMenu}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-white/10"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                      <span className="relative z-10 flex items-center">
                        BOOK APPOINTMENT
                        <motion.span 
                          className="ml-2"
                          animate={{ 
                            x: [0, 3, 0],
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 1.5
                          }}
                        >
                          <ChevronRight size={18} />
                        </motion.span>
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>
                
                {/* Quick Contact Info for Mobile */}
                <motion.div 
                  className="mt-12 border-t border-border pt-8 text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <div className="space-y-4">
                    <p className="flex items-center text-sm">
                      <MapPin size={16} className="mr-3 text-primary" />
                      4631 Palladium Way (Unit 6), Burlington, Ontario
                    </p>
                    <p className="flex items-center text-sm">
                      <Phone size={16} className="mr-3 text-primary" />
                      (905) 335-5300
                    </p>
                    <p className="flex items-center text-sm">
                      <Mail size={16} className="mr-3 text-primary" />
                      info@endorphins.ca
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
