import { services } from "@/data/services";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-14 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-slate-800">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer a comprehensive range of health and wellness services delivered by our team of experienced professionals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden transition-all hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="h-40 overflow-hidden bg-sky-50 flex items-center justify-center">
                <img 
                  src={service.image}
                  alt={service.altText}
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold mb-2 text-slate-800">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                  {service.description}
                </p>
                <a href="#booking" className="inline-flex items-center text-primary text-sm font-medium hover:text-primary/80 transition-all">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
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
