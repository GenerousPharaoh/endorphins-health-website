import { services } from "@/data/services";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of health and wellness services delivered by our team of experienced professionals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card bg-white rounded-lg shadow-md overflow-hidden transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.altText}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-primary text-3xl mb-4">
                  <i className={service.icon}></i>
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <a href="#booking" className="inline-block text-primary font-medium hover:text-primary/80 transition-all">
                  Learn More <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
