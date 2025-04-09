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
    <section id="services" className="py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary mb-3">Our Specialties</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Care Services
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Our multidisciplinary team offers personalized care to help you achieve optimal health and wellness through a variety of specialized treatments.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Service List */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="bg-gray-900 rounded-xl p-4 shadow-lg">
              <div className="space-y-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center ${
                      selectedService === service.id 
                        ? "bg-primary/20 text-primary" 
                        : "text-gray-300 hover:bg-gray-800"
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
          <div className="md:col-span-7 lg:col-span-8">
            {serviceDetail && (
              <motion.div 
                key={selectedService}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 p-6 rounded-xl shadow-lg h-full"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{serviceDetail.title}</h3>
                
                <p className="text-gray-300 mb-6">{serviceDetail.description}</p>
                
                <div className="mt-6 overflow-hidden rounded-lg">
                  <img 
                    src={serviceDetail.image} 
                    alt={serviceDetail.altText}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                
                <div className="mt-6 flex justify-end">
                  <a 
                    href="#booking" 
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Book Now
                    <ChevronRight size={16} className="ml-2" />
                  </a>
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