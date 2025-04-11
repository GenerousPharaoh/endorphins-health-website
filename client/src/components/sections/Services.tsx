import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "../../data/services";
import { Badge } from "../../components/ui/badge";
import { ChevronRight } from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0].id);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const serviceDetail = services.find((s) => s.id === selectedService);

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-amber-500/30 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <Badge className="bg-primary/10 text-primary mb-3">Our Specialties</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Care Services
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base">
            Our multidisciplinary team offers personalized care to help you achieve optimal health and wellness through a variety of specialized treatments.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6 sm:gap-8">
          {/* Service List for Mobile - Horizontal Scrolling Tabs */}
          <div className="md:hidden w-full overflow-x-auto pb-4">
            <div className="flex space-x-2 min-w-max px-1">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`px-4 py-3 rounded-lg transition-all duration-150 whitespace-nowrap flex-shrink-0 shadow-sm ${
                    selectedService === service.id 
                      ? "bg-primary/20 text-primary font-medium" 
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="font-medium text-sm">{service.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Service List for Desktop */}
          <div className="hidden md:block md:col-span-5 lg:col-span-4">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="space-y-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-150 flex items-center ${
                      selectedService === service.id 
                        ? "bg-primary/10 text-primary" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div>
                      <h3 className="font-medium">{service.title}</h3>
                    </div>
                    {selectedService === service.id && (
                      <ChevronRight size={16} className="ml-auto text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Service Detail */}
          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            {serviceDetail && (
              <motion.div 
                key={selectedService}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md h-full border border-gray-100"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{serviceDetail.title}</h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{serviceDetail.description}</p>

                <div className="overflow-hidden rounded-lg max-h-[200px] sm:max-h-none">
                  <img 
                    src={serviceDetail.image} 
                    alt={serviceDetail.altText}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>

                <div className="mt-4 sm:mt-6 flex justify-end">
                  <motion.a 
                    href="#booking" 
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.1 }}
                  >
                    Book Now
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="ml-1 sm:ml-2"
                    >
                      <ChevronRight size={14} className="sm:size-4" />
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;