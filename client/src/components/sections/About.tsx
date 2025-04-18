import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import clinic_exterior from "@assets/20250417_200635.jpg";
import clinic_logo from "@assets/20250417_200647.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      {/* Background patterns and gradients for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.15, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        />
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" 
              style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E')" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30 mb-3">Our Story</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Welcome to <span className="text-primary relative inline-block">
              Endorphins
              <motion.div 
                className="absolute bottom-1 left-0 h-1 bg-primary/30 rounded-full w-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
            </span> Health and Wellness Centre
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Your partner in achieving optimal health and performance through personalized, multidisciplinary care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="relative group"
          >
            {/* Photo frame with dynamic effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-amber-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700"></div>
            
            <div className="relative p-2 bg-card rounded-lg shadow-xl overflow-hidden border border-border/60 group-hover:border-primary/40 transition-colors duration-500">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-10"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100 z-10"></div>
              
              {/* Main image with refined hover effects */}
              <div className="relative overflow-hidden rounded-md">
                <img 
                  src={clinic_exterior} 
                  alt="Endorphins Health and Wellness Centre exterior" 
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>
                
                {/* Logo badge with enhanced positioning and animation */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-20 h-20 bg-white p-1 rounded-lg shadow-xl overflow-hidden z-10 border-2 border-white/80"
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.4, type: "spring" }}
                >
                  <img 
                    src={clinic_logo}
                    alt="Endorphins logo"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              {/* Accent element */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/60 transition-colors duration-500 rounded-tl-md"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/60 transition-colors duration-500 rounded-br-md"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-foreground"
          >
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-card-foreground leading-relaxed" 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                Located in Burlington, Ontario, we are a multidisciplinary clinic offering a comprehensive range of health services. Our team of qualified professionals is dedicated to providing personalized care to help you achieve your health goals.
              </motion.p>
              
              <motion.p 
                className="text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Whether you're recovering from an injury, managing chronic pain, or seeking to improve your overall wellness, our integrated approach ensures you receive the highest standard of care in a comfortable, modern environment.
              </motion.p>
              
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg space-y-5">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">Contact Information</h3>
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  <div className="flex items-center group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-card-foreground group-hover:text-primary transition-colors duration-300">4631 Palladium Way (Unit 6), Burlington, ON</span>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-card-foreground group-hover:text-primary transition-colors duration-300">(905) 555-1234</span>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-card-foreground group-hover:text-primary transition-colors duration-300">Mon-Fri: 7am-8pm, Sat: 8am-4pm, Sun: Closed</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
