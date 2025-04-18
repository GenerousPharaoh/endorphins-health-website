import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import clinic_logo from "@assets/20250417_200647.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px]"></div>
        
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-primary/70 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-primary/70 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <motion.div 
            className="md:col-span-5 lg:col-span-4 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            variants={fadeInUp}
          >
            <div>
              <div className="flex items-center mb-5">
                <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center mr-3">
                  <img 
                    src={clinic_logo} 
                    alt="Endorphins Health & Wellness Centre logo" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-white font-heading text-xl font-bold tracking-tight">Endorphins Health</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
                Setting the standard in multidisciplinary healthcare. Our integrated approach ensures personalized treatment plans for optimal wellness and performance.
              </p>
            </div>
            
            <div className="space-y-5">
              <h4 className="text-white text-sm font-semibold tracking-wider uppercase">Connect With Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="h-10 w-10 bg-white/10 hover:bg-primary/20 rounded-full flex items-center justify-center text-gray-300 hover:text-primary transition-colors duration-300" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="#" className="h-10 w-10 bg-white/10 hover:bg-primary/20 rounded-full flex items-center justify-center text-gray-300 hover:text-primary transition-colors duration-300" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className="h-10 w-10 bg-white/10 hover:bg-primary/20 rounded-full flex items-center justify-center text-gray-300 hover:text-primary transition-colors duration-300" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="#" className="h-10 w-10 bg-white/10 hover:bg-primary/20 rounded-full flex items-center justify-center text-gray-300 hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <div className="md:col-span-7 lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                className="space-y-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.1 }}
                variants={fadeInUp}
              >
                <h4 className="text-white text-sm font-semibold tracking-wider uppercase">Our Services</h4>
                <ul className="space-y-4">
                  {[
                    { name: "Chiropractic Care", href: "#services" },
                    { name: "Physiotherapy", href: "#services" },
                    { name: "Athletic Therapy", href: "#services" },
                    { name: "Massage Therapy", href: "#services" },
                    { name: "Acupuncture", href: "#services" },
                    { name: "Podiatry", href: "#services" }
                  ].map((service, index) => (
                    <li key={index}>
                      <a href={service.href} className="text-gray-400 hover:text-primary transition-all flex items-center group">
                        <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 mr-0 group-hover:mr-2">
                          <ChevronRight size={16} className="text-primary" />
                        </span>
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="space-y-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.2 }}
                variants={fadeInUp}
              >
                <h4 className="text-white text-sm font-semibold tracking-wider uppercase">Quick Links</h4>
                <ul className="space-y-4">
                  {[
                    { name: "About Us", href: "#about" },
                    { name: "Meet The Team", href: "#team" },
                    { name: "Testimonials", href: "#testimonials" },
                    { name: "Book Appointment", href: "#booking" },
                    { name: "FAQ", href: "#" },
                    { name: "Careers", href: "#" }
                  ].map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-gray-400 hover:text-primary transition-all flex items-center group">
                        <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 mr-0 group-hover:mr-2">
                          <ChevronRight size={16} className="text-primary" />
                        </span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="sm:col-span-2 lg:col-span-1 space-y-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.3 }}
                variants={fadeInUp}
              >
                <h4 className="text-white text-sm font-semibold tracking-wider uppercase">Contact Information</h4>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-md text-primary mr-3 mt-1">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-gray-300">4631 Palladium Way (Unit 6)<br />Burlington, ON</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-white/10 p-2 rounded-md text-primary mr-3">
                      <Phone size={16} />
                    </div>
                    <p className="text-gray-300">(905) 555-1234</p>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-white/10 p-2 rounded-md text-primary mr-3">
                      <Mail size={16} />
                    </div>
                    <p className="text-gray-300">info@endorphinshealth.com</p>
                  </li>
                </ul>
                
                <a 
                  href="#booking"
                  className="inline-flex mt-4 items-center text-primary hover:text-primary/90 font-medium transition-colors group"
                >
                  Book a Consultation
                  <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} <span className="font-medium text-gray-300">Endorphins Health and Wellness Centre</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-all">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-all">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-all">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
