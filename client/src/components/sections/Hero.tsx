import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import reception_area from "@assets/IMG_20250415_205609.jpg";

const Hero = () => {

  // Simple fade-in animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const services = [
    { name: "Chiropractic", link: "#services" },
    { name: "Physiotherapy", link: "#services" },
    { name: "Massage Therapy", link: "#services" },
    { name: "Athletic Therapy", link: "#services" },
    { name: "Acupuncture", link: "#services" },
    { name: "Podiatry", link: "#services" },
  ];

  return (
    <section className="relative bg-background pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-border">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary gradient blob */}
        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-primary/20 blur-3xl animate-slow-pulse"></div>
        
        {/* Secondary gradient blob */}
        <div className="absolute top-1/3 -left-24 w-[25rem] h-[25rem] rounded-full bg-amber-400/15 blur-3xl animate-slow-pulse-delay"></div>
        
        {/* Additional depth elements */}
        <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl animate-slow-drift"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        
        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform rotate-[30deg] origin-top-left"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Revitalize Your <span className="text-primary">Health</span> and <span className="text-primary">Wellness</span>
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Endorphins Health and Wellness Centre offers multidisciplinary healthcare services to help you achieve optimal health and performance.
            </p>
            
            <motion.div 
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-10"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeIn}>
                <Button 
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <a href="#booking" className="flex items-center">
                    Book Appointment
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="ml-2"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <Button 
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary/50 text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                >
                  <a href="#services" className="flex items-center">
                    Our Services
                    <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-left"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {services.map((service) => (
                <motion.a
                  key={service.name}
                  href={service.link}
                  className="text-muted-foreground hover:text-primary flex items-center text-xs sm:text-sm font-medium transition-colors duration-200"
                  variants={fadeIn}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  {service.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-6 sm:mt-8 lg:mt-0 relative group"
          >
            {/* Glowing border effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-amber-500/30 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Decorative corner elements */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-primary/70 rounded-tl-md"></div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-primary/70 rounded-br-md"></div>
            
            <div className="relative rounded-lg shadow-2xl overflow-hidden border border-border">
              <img 
                src={reception_area}
                alt="Endorphins Health and Wellness Centre reception area" 
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-50"></div>
            </div>
            
            {/* Corner accent element */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary/80 rounded-full blur-xl opacity-40"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;