import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";
import { ChevronRight } from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0].id);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const serviceDetail = services.find((s) => s.id === selectedService);

  return (
    <section 
      id="services" 
      className="relative py-24 bg-gradient-to-b from-black to-[#101010] overflow-hidden"
      ref={ref}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-40 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.15, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-3">Our Specialties</Badge>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Comprehensive Care <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-gray-400"
          >
            Our multidisciplinary team offers personalized care to help you achieve optimal health and wellness through a variety of specialized treatments.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
          <motion.div 
            className="lg:col-span-2 bg-[#0a0a0a] rounded-xl p-5 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-start ${
                      selectedService === service.id 
                        ? "bg-primary/10 text-primary" 
                        : "bg-[#151515] text-gray-300 hover:bg-[#1a1a1a]"
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center">
                        <span 
                          className={`inline-block w-2 h-2 rounded-full mr-3 ${
                            selectedService === service.id ? "bg-primary" : "bg-gray-500"
                          }`}
                        ></span>
                        <h3 className="font-bold text-lg">{service.title}</h3>
                      </div>
                      <p className={`mt-2 text-sm ${
                        selectedService === service.id ? "text-gray-200" : "text-gray-400"
                      }`}>
                        {service.description.substring(0, 60)}...
                      </p>
                    </div>
                    <div className={`mt-1 transform transition-transform duration-300 ${
                      selectedService === service.id ? "rotate-90" : ""
                    }`}>
                      <ChevronRight size={16} />
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-3 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {serviceDetail && (
              <motion.div 
                className="h-full"
                key={selectedService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gradient-to-r from-black to-[#101010] p-6 rounded-xl h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mr-4">
                      <span className="text-xl font-bold">{serviceDetail.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{serviceDetail.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{serviceDetail.description}</p>
                  
                  <div className="relative flex-grow mt-4 overflow-hidden rounded-lg">
                    <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg">
                      <motion.div
                        className="absolute inset-0 bg-cover bg-center rounded-lg transform transition-transform duration-5000"
                        style={{ backgroundImage: `url(${serviceDetail.image})` }}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          <Badge className="bg-primary/80 hover:bg-primary text-white mb-3">
                            {serviceDetail.title}
                          </Badge>
                          <h4 className="text-xl font-bold text-white mb-2">
                            Personalized Treatment Plans
                          </h4>
                          <p className="text-white/80 text-sm">
                            Our expert therapists create custom plans tailored to your unique needs and goals.
                          </p>
                          <motion.button
                            className="mt-4 flex items-center text-primary hover:text-white font-medium text-sm group"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <span>Learn more</span>
                            <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
                          </motion.button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <a 
              href="#booking" 
              className="inline-flex items-center text-primary hover:text-white text-lg font-semibold transition-colors duration-300"
            >
              Book a consultation session
              <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Diagonal Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0a0a0a] transform -skew-y-2 translate-y-8"></div>
    </section>
  );
};

export default Services;