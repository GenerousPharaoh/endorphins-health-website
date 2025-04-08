import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bgControls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate background gradient shift
    const animateBackground = async () => {
      while (true) {
        await bgControls.start({
          backgroundPosition: ["0% 0%", "100% 100%"],
          transition: { duration: 20, ease: "linear" }
        });
        await bgControls.start({
          backgroundPosition: ["100% 100%", "0% 0%"],
          transition: { duration: 20, ease: "linear" }
        });
      }
    };
    
    animateBackground();
  }, [bgControls]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const services = [
    { name: "Chiropractic", link: "#services" },
    { name: "Physiotherapy", link: "#services" },
    { name: "Massage Therapy", link: "#services" },
    { name: "Athletic Therapy", link: "#services" },
    { name: "Acupuncture", link: "#services" },
    { name: "Podiatry", link: "#services" },
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden"
      animate={bgControls}
      style={{
        background: "linear-gradient(135deg, #000000 0%, #161616 100%)",
        backgroundSize: "200% 200%"
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
        <motion.div
          className="absolute top-1/3 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "mirror",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, -20, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "mirror",
            delay: 2
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="text-center lg:text-left py-4 sm:py-8 md:py-0"
          >
            <motion.h1 
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 sm:mb-6"
            >
              <div className="mb-1 md:mb-0 md:inline">Revitalize Your{" "}</div>
              <div className="relative inline-block">
                <span className="text-primary relative">
                  Health
                  <motion.span 
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-primary rounded-full" 
                    initial={{ scaleX: 0, originX: 0 }} 
                    animate={{ scaleX: 1 }} 
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
              </div>{" "}
              <div className="mt-1 md:mt-0 md:inline">and{" "}</div>
              <div className="relative inline-block">
                <span className="text-primary relative">
                  Wellness
                  <motion.span 
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-primary rounded-full" 
                    initial={{ scaleX: 0, originX: 0 }} 
                    animate={{ scaleX: 1 }} 
                    transition={{ delay: 1, duration: 0.6 }}
                  />
                </span>
              </div>
            </motion.h1>
            
            <motion.p 
              variants={item} 
              className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Endorphins Health and Wellness Centre offers multidisciplinary healthcare services to help you achieve optimal health and performance.
            </motion.p>
            
            <motion.div 
              variants={item} 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-6 px-8 rounded-md text-md"
                >
                  <a href="#booking" className="flex items-center">
                    <span>Book Appointment</span>
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild
                  variant="outline"
                  className="border-2 border-white/20 text-white font-bold py-6 px-8 rounded-md hover:bg-white/10 text-md"
                >
                  <a href="#services" className="flex items-center">
                    <span>Our Services</span>
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={item}
              className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0"
            >
              {services.map((service, index) => (
                <motion.a
                  key={service.name}
                  href={service.link}
                  className="text-gray-400 hover:text-primary flex items-center text-sm font-medium transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  whileHover={{ x: 5 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  {service.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Desktop SVG */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative z-10"
            >
              <svg
                className="w-full h-auto drop-shadow-2xl"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="250" cy="250" r="248" stroke="#ff4eab" strokeWidth="4" fill="none" />
                <path d="M250 100C167.157 100 100 167.157 100 250C100 332.843 167.157 400 250 400C332.843 400 400 332.843 400 250C400 167.157 332.843 100 250 100Z" fill="#161616" stroke="#ff4eab" strokeWidth="2" />
                <g filter="url(#filter0_d)">
                  <path d="M319.674 165.453C327.83 186.969 310.906 220.117 284.773 239.945C258.641 259.773 229.254 266.289 199.43 259.18C169.605 252.07 146.059 232.148 137.902 210.633C129.746 189.117 146.67 155.969 172.803 136.141C198.935 116.313 228.323 109.797 258.147 116.906C287.971 124.016 311.517 143.938 319.674 165.453Z" fill="#ff4eab" />
                </g>
                <circle cx="250" cy="250" r="80" fill="#161616" stroke="#ff4eab" strokeWidth="2" />
                <path d="M250 170C250 206.944 220.71 240 184.5 240C148.29 240 119 206.944 119 170C119 133.056 148.29 100 184.5 100C220.71 100 250 133.056 250 170Z" fill="#161616" stroke="#ff4eab" strokeWidth="2" />
                <path d="M382 170C382 206.944 352.71 240 316.5 240C280.29 240 251 206.944 251 170C251 133.056 280.29 100 316.5 100C352.71 100 382 133.056 382 170Z" fill="#161616" stroke="#ff4eab" strokeWidth="2" />
                <path d="M250 330C250 366.944 220.71 400 184.5 400C148.29 400 119 366.944 119 330C119 293.056 148.29 260 184.5 260C220.71 260 250 293.056 250 330Z" fill="#161616" stroke="#ff4eab" strokeWidth="2" />
                <path d="M382 330C382 366.944 352.71 400 316.5 400C280.29 400 251 366.944 251 330C251 293.056 280.29 260 316.5 260C352.71 260 382 293.056 382 330Z" fill="#161616" stroke="#ff4eab" strokeWidth="2" />
                <circle cx="250" cy="250" r="35" fill="#ff4eab" />
                <defs>
                  <filter id="filter0_d" x="126.801" y="105.891" width="204.227" height="165.203" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                  </filter>
                </defs>
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg className="w-3/4 h-auto" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter1_d)">
                  <path d="M250 150C194.772 150 150 194.772 150 250C150 305.228 194.772 350 250 350C305.228 350 350 305.228 350 250C350 194.772 305.228 150 250 150Z" fill="#161616" stroke="#ff4eab" strokeWidth="2" />
                </g>
                <path d="M270 210C270 221.046 261.046 230 250 230C238.954 230 230 221.046 230 210C230 198.954 238.954 190 250 190C261.046 190 270 198.954 270 210Z" fill="#ff4eab" />
                <path d="M310 270C310 281.046 301.046 290 290 290C278.954 290 270 281.046 270 270C270 258.954 278.954 250 290 250C301.046 250 310 258.954 310 270Z" fill="#ff4eab" />
                <path d="M230 290C230 301.046 221.046 310 210 310C198.954 310 190 301.046 190 290C190 278.954 198.954 270 210 270C221.046 270 230 278.954 230 290Z" fill="#ff4eab" />
                <defs>
                  <filter id="filter1_d" x="140" y="140" width="220" height="220" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.3 0 0 0 0 0.6 0 0 0 0.5 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                  </filter>
                </defs>
              </svg>
            </motion.div>
          </div>

          {/* Mobile SVG - Simpler version for better performance */}
          <motion.div 
            className="block lg:hidden mt-10 mb-6 px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <svg 
              className="w-full h-auto mx-auto max-w-xs" 
              viewBox="0 0 300 300" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="150" cy="150" r="140" stroke="#ff4eab" strokeWidth="3" fill="none" />
              <circle cx="150" cy="150" r="100" fill="#161616" stroke="#ff4eab" strokeWidth="2" />
              <path d="M180 90C190 110 170 145 140 155C110 165 90 155 80 135C70 115 90 80 120 70C150 60 170 70 180 90Z" fill="#ff4eab" />
              <circle cx="150" cy="150" r="50" fill="#161616" stroke="#ff4eab" strokeWidth="2" />
              <circle cx="150" cy="150" r="20" fill="#ff4eab" />
              <circle cx="110" cy="110" r="10" fill="#ff4eab" />
              <circle cx="190" cy="110" r="10" fill="#ff4eab" />
              <circle cx="150" cy="200" r="10" fill="#ff4eab" />
            </svg>
            
            <motion.div
              className="w-full flex justify-center mt-6"
              animate={{ 
                y: [0, 5, 0],
                scale: [1, 1.02, 1] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "mirror" 
              }}
            >
              <div className="bg-gradient-to-r from-primary/30 via-primary to-primary/30 text-white font-medium text-sm py-2 px-6 rounded-full">
                Personalized Treatment Plans
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden sm:flex"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-gray-400 text-sm mb-2 font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6 text-primary" />
          </motion.div>
        </motion.div>
        
        {/* Mobile scroll indicator - simplified */}
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <div className="h-10 w-6 border-2 border-primary/50 rounded-full flex items-start justify-center p-1">
              <motion.div 
                className="h-2 w-2 bg-primary rounded-full"
                animate={{
                  y: [0, 12, 0]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;