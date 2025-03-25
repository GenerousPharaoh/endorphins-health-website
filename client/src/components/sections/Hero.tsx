import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import wellnessHeroSvg from "@/assets/illustrations/wellness-hero.svg";

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Your Path to Wellness Begins Here
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg mb-6 text-sky-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At Endorphins Health and Wellness Centre, we provide comprehensive care to help you achieve optimal health and well-being.
            </motion.p>
            
            <motion.div 
              className="flex flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button asChild size="lg" className="bg-white text-primary hover:bg-sky-100 font-heading font-medium px-6 py-2 h-auto">
                <a href="#booking" className="flex items-center">
                  <span>Book Now</span>
                  <span className="ml-2 text-xs font-bold">→</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-heading font-medium px-6 py-2 h-auto">
                <a href="#services">Explore Services</a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={wellnessHeroSvg} 
              alt="Wellness illustration" 
              className="max-w-full h-auto max-h-80 md:max-h-96 object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
