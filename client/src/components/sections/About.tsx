import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Welcome to Endorphins Health and Wellness Centre</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Endorphins Health and Wellness Centre reception" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300"
          >
            <p className="mb-6 text-lg">
              Located in Burlington, Ontario, we are a multidisciplinary clinic offering a comprehensive range of health services. Our team of qualified professionals is dedicated to providing personalized care to help you achieve your health goals.
            </p>
            
            <p className="mb-8">
              Whether you're recovering from an injury, managing chronic pain, or seeking to improve your overall wellness, our integrated approach ensures you receive the highest standard of care in a comfortable, modern environment.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-3">
                  <MapPin className="h-5 w-5 text-blue-500" />
                </div>
                <span>4631 Palladium Way (Unit 6), Burlington, ON</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-3">
                  <Phone className="h-5 w-5 text-blue-500" />
                </div>
                <span>(905) 555-1234</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                </div>
                <span>Mon-Fri: 7am-8pm, Sat: 8am-4pm, Sun: Closed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
