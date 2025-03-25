import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="hero-gradient text-white min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Path to Wellness Begins Here
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            At Endorphins Health and Wellness Centre, we provide comprehensive care to help you achieve optimal health and well-being.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild size="lg" className="font-heading font-medium px-8 py-3 h-auto">
              <a href="#booking">Book Appointment</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white hover:bg-gray-100 text-primary font-heading font-medium px-8 py-3 h-auto">
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
