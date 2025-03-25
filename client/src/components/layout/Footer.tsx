import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-heading text-xl font-bold mb-6">Endorphins Health</h3>
            <p className="text-gray-400 mb-6">
              Providing comprehensive healthcare solutions to help you achieve optimal health and wellness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-all" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-all">Chiropractic Care</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-all">Physiotherapy</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-all">Athletic Therapy</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-all">Massage Therapy</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-all">Acupuncture</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-all">Podiatry</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-all">About Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-all">Meet The Team</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-all">Testimonials</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-white transition-all">Book Appointment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">4631 Palladium Way (Unit 6)<br />Burlington, ON</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-primary mr-3"></i>
                <span className="text-gray-400">(905) 555-1234</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-primary mr-3"></i>
                <span className="text-gray-400">info@endorphinshealth.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {currentYear} Endorphins Health and Wellness Centre. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition-all">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-all">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition-all">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
