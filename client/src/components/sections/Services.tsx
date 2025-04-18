import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "../../data/services";
import { Badge } from "../../components/ui/badge";
import { ChevronRight } from "lucide-react";
import treatment_room1 from "@assets/20250417_200141.jpg";
import treatment_room2 from "@assets/20250417_200153.jpg";
import treatment_room3 from "@assets/20250417_200255.jpg";
import treatment_room_wider from "@assets/IMG_20250415_205603.jpg";

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

                <motion.div 
                  initial={{ opacity: 0.9, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  key={serviceDetail.id}
                  className="relative rounded-lg overflow-hidden shadow-lg group max-h-[280px] sm:max-h-none border border-border"
                >
                  {/* Service image */}
                  <img 
                    src={
                      serviceDetail.id === "chiropractic" ? treatment_room1 : 
                      serviceDetail.id === "physiotherapy" ? treatment_room_wider : 
                      serviceDetail.id === "massage-therapy" ? treatment_room2 :
                      serviceDetail.image
                    } 
                    alt={`${serviceDetail.title} at Endorphins Health and Wellness Centre`}
                    className="w-full h-[280px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:filter group-hover:brightness-[1.05]"
                  />
                  
                  {/* Subtle overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/5 to-transparent opacity-30 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  {/* Service icon overlay */}
                  <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="text-primary w-6 h-6 flex items-center justify-center">
                      {serviceDetail.id === "chiropractic" && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
                      {serviceDetail.id === "physiotherapy" && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
                      {serviceDetail.id === "massage-therapy" && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>}
                      {serviceDetail.id === "athletic-therapy" && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>}
                    </div>
                  </div>
                </motion.div>

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