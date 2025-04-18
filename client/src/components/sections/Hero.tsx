import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import clinic_logo from "@assets/20250417_200647.jpg";

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
          
          {/* Right Column - Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-6 sm:mt-8 lg:mt-0 relative"
          >
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 p-8 h-full shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-foreground">Why Choose Endorphins?</h3>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Multidisciplinary Approach</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive treatment from a team of diverse specialists</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Personalized Care</h4>
                    <p className="text-sm text-muted-foreground">Treatment plans tailored to your specific needs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12z"></path><path d="M12 10v4"></path><path d="M9 14h6"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Modern Facilities</h4>
                    <p className="text-sm text-muted-foreground">Comfortable environment with state-of-the-art equipment</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="#booking" 
                  className="inline-flex items-center px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-md"
                >
                  <span className="font-medium">Book Today</span>
                  <ChevronRight size={16} className="ml-2" />
                </a>
              </div>
              
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mb-20 -mr-20 z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;