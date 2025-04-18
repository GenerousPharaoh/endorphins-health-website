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
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background relative">
      <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-amber-500/30 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <Badge className="bg-primary/20 text-primary mb-3">Our Specialties</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Care Services
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base">
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
                      : "bg-card/80 text-card-foreground hover:bg-muted"
                  }`}
                >
                  <span className="font-medium text-sm">{service.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Service List for Desktop */}
          <div className="hidden md:block md:col-span-5 lg:col-span-4">
            <div className="bg-card rounded-xl p-4 shadow-md border border-border">
              <div className="space-y-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-150 flex items-center ${
                      selectedService === service.id 
                        ? "bg-primary/10 text-primary" 
                        : "text-card-foreground hover:bg-muted"
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
                className="bg-card p-4 sm:p-6 rounded-xl shadow-md h-full border border-border"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-3 sm:mb-4">{serviceDetail.title}</h3>

                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{serviceDetail.description}</p>

                <div className="relative rounded-lg overflow-hidden shadow-md group border border-border">
                  <img 
                    src={serviceDetail.image}
                    alt={`${serviceDetail.title} at Endorphins Health and Wellness Centre`}
                    className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1581595219135-0c04719d1996?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
                    }}
                  />
                  
                  {/* Simple overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="mt-4 sm:mt-6 flex justify-end">
                  <a 
                    href="#booking" 
                    className="inline-flex items-center px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-md"
                  >
                    <span className="font-medium">Book Now</span>
                    <span className="ml-1 sm:ml-2">
                      <ChevronRight size={16} className="sm:h-5 sm:w-5" />
                    </span>
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