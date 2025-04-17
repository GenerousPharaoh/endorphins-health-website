import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/data/testimonials";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Handle autoplay
  useEffect(() => {
    if (!autoplay) return;
    
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoplay]);

  // Handle pause on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  // Navigation
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
  };

  return (
    <section 
      id="testimonials" 
      ref={ref}
      className="relative py-28 bg-background"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Enhanced background elements with animated geometric patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-40 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.15, 0.25],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div 
          className="absolute -bottom-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        />
        
        {/* Additional animated elements for depth */}
        <motion.div 
          className="absolute top-1/3 left-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
        />
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30 mb-3">Client Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-primary relative">
              Clients Say
              <motion.div 
                className="absolute bottom-1 left-0 h-1 bg-primary/30 rounded-full w-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Discover how our professional services have helped clients achieve their health and wellness goals.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Display with enhanced styling */}
          <motion.div 
            className="relative bg-gradient-to-br from-card/90 to-card p-6 md:p-10 rounded-xl overflow-hidden border border-border shadow-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Enhanced decorative elements */}
            <div className="absolute top-0 right-0 h-24 w-24 overflow-hidden">
              <div className="absolute top-0 right-0 rotate-45 transform origin-top-right">
                <div className="w-32 h-8 bg-primary/10"></div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-tr-full bg-primary/5"></div>
            
            {/* Animated quotation mark */}
            <motion.div 
              className="absolute top-4 right-4 text-primary/20"
              initial={{ scale: 0, rotate: -20, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Quote size={80} />
            </motion.div>

            {/* Content with enhanced animations */}
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="md:flex items-start gap-8"
                >
                  <div className="mb-6 md:mb-0 md:w-1/3 flex justify-center md:justify-start">
                    <motion.div 
                      className="relative w-20 h-20 md:w-28 md:h-28 rounded-lg overflow-hidden shadow-xl group"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div 
                        className="w-full h-full bg-cover bg-center border-2 border-primary/50 group-hover:border-primary transition-colors duration-300"
                        style={{ backgroundImage: `url(${testimonials[activeIndex].image})` }}
                      />
                      {/* Image glow effect */}
                      <motion.div 
                        className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.15 }}
                      />
                    </motion.div>
                  </div>

                  <div className="md:w-2/3 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(5)].map((_, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + (i * 0.1) }}
                        >
                          <Star 
                            className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} 
                          />
                        </motion.div>
                      ))}
                    </div>

                    <motion.blockquote 
                      className="text-lg md:text-xl text-card-foreground font-medium mb-6 italic relative"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <span className="relative">
                        "{testimonials[activeIndex].quote}"
                        <motion.div 
                          className="absolute -bottom-2 left-0 h-0.5 bg-primary/20 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </span>
                    </motion.blockquote>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="relative"
                    >
                      <p className="text-card-foreground font-semibold">{testimonials[activeIndex].name}</p>
                      <p className="text-primary text-sm">{testimonials[activeIndex].title}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Enhanced Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full bg-card border-border text-card-foreground hover:bg-primary/20 hover:text-primary hover:border-primary shadow-md transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-primary w-8' : 'bg-muted hover:bg-muted-foreground w-2.5'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full bg-card border-border text-card-foreground hover:bg-primary/20 hover:text-primary hover:border-primary shadow-md transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 max-w-3xl mx-auto shadow-lg">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              Ready to experience the difference?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Join our satisfied clients and start your journey to better health and wellness today.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 font-medium text-base shadow-lg"
                onClick={() => window.location.href = "#booking"}
              >
                Book Your Appointment Today
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;