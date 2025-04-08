import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";

const Hero = () => {
  // Simple fade-in animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
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
    <section className="relative bg-black py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Revitalize Your <span className="text-blue-500">Health</span> and <span className="text-blue-500">Wellness</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8">
              Endorphins Health and Wellness Centre offers multidisciplinary healthcare services to help you achieve optimal health and performance.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <Button 
                size="lg"
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <a href="#booking" className="flex items-center">
                  Book Appointment
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                asChild
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <a href="#services" className="flex items-center">
                  Our Services
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.link}
                  className="text-gray-400 hover:text-blue-500 flex items-center text-sm font-medium transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                  {service.name}
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 lg:mt-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" 
              alt="Health professionals at Endorphins Health and Wellness Centre" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;