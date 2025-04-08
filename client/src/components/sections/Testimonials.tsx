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
      className="relative py-24 bg-[#080808]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-40 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.15, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div 
          className="absolute -bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-3">Client Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Discover how our professional services have helped clients achieve their health and wellness goals.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative bg-gradient-to-r from-[#0e0e0e] to-[#141414] p-6 md:p-10 rounded-xl overflow-hidden">
            {/* Top quotation mark */}
            <div className="absolute top-4 right-4 text-primary/20">
              <Quote size={80} />
            </div>

            {/* Content */}
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
                      className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div 
                        className="w-full h-full bg-cover bg-center rounded-full border-4 border-primary/30"
                        style={{ backgroundImage: `url(${testimonials[activeIndex].image})` }}
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
                            className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} 
                          />
                        </motion.div>
                      ))}
                    </div>

                    <motion.blockquote 
                      className="text-lg md:text-xl text-white font-medium mb-6 italic"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      "{testimonials[activeIndex].quote}"
                    </motion.blockquote>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <p className="text-white font-semibold">{testimonials[activeIndex].name}</p>
                      <p className="text-primary text-sm">{testimonials[activeIndex].title}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full bg-[#0e0e0e] border-[#1a1a1a] text-white hover:bg-primary/80 hover:text-white hover:border-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-primary w-8' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full bg-[#0e0e0e] border-[#1a1a1a] text-white hover:bg-primary/80 hover:text-white hover:border-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Ready to experience the difference?
          </h3>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-6"
              onClick={() => window.location.href = "#booking"}
            >
              Book Your Appointment Today
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;