import { useEffect } from "react";
import { Link } from "wouter";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Testimonials from "../components/sections/Testimonials";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <About />
      
      {/* Call to Actions Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">Our Services</h3>
              <p className="text-gray-400 mb-5">Explore our comprehensive range of health and wellness treatments.</p>
              <Link href="/services">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  View Services <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">Our Team</h3>
              <p className="text-gray-400 mb-5">Meet our skilled health professionals dedicated to your wellbeing.</p>
              <Link href="/team">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  Meet Our Team <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">Health Blog</h3>
              <p className="text-gray-400 mb-5">Read expert articles and tips for improving your health and wellness.</p>
              <Link href="/blog">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  Read Articles <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">Contact Us</h3>
              <p className="text-gray-400 mb-5">Get in touch to book an appointment or ask about our services.</p>
              <Link href="/contact">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Book Appointment <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Testimonials />
    </div>
  );
};

export default Home;