import { useEffect } from "react";
import Services from "../components/sections/Services";
import { motion } from "framer-motion";

const ServicePage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="pt-20 pb-6 sm:pt-24 sm:pb-8 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="mt-3 sm:mt-4 text-sm sm:text-base text-center text-gray-600 max-w-2xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Comprehensive health and wellness treatments tailored to your needs
          </motion.p>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default ServicePage;