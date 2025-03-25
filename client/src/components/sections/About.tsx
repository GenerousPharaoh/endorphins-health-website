import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Endorphins Health and Wellness Centre reception" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Welcome to Endorphins Health and Wellness Centre
            </h2>
            <p className="text-gray-600 mb-6">
              Located in Burlington, Ontario, we are a multidisciplinary clinic offering a comprehensive range of health services. Our team of qualified professionals is dedicated to providing personalized care to help you achieve your health goals.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're recovering from an injury, managing chronic pain, or seeking to improve your overall wellness, our integrated approach ensures you receive the highest standard of care in a comfortable, modern environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-primary text-xl mr-3"></i>
                <span className="text-gray-700">4631 Palladium Way (Unit 6), Burlington, ON</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-primary text-xl mr-3"></i>
                <span className="text-gray-700">(905) 555-1234</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
