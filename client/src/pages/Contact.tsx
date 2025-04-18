import { useEffect } from "react";
import Booking from "../components/sections/Booking";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="pt-24 pb-8 bg-background relative border-b border-border">
        {/* Background decoration elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[25rem] h-[25rem] rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-foreground text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Get in touch with our team to book an appointment or ask questions
          </motion.p>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-card p-8 rounded-xl shadow-md border border-border"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Badge className="bg-primary/10 text-primary mb-4">Contact Information</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Location</h3>
                    <p className="text-muted-foreground">4631 Palladium Way (Unit 6)</p>
                    <p className="text-muted-foreground">Burlington, Ontario</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Phone</h3>
                    <p className="text-muted-foreground">(905) 335-5300</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">info@endorphins.ca</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Get Directions <ExternalLink size={16} className="ml-2" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="relative h-[400px] rounded-xl overflow-hidden shadow-md border border-border"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.8139410249274!2d-79.79760242392836!3d43.28901897302579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b60f764d60245%3A0x754515e2b1b6ede2!2s4631%20Palladium%20Way%2C%20Burlington%2C%20ON%20L7M%200W1%2C%20Canada!5e0!3m2!1sen!2sus!4v1712621982800!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Endorphins Health and Wellness Centre Location"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      <Booking />
    </div>
  );
};

export default ContactPage;