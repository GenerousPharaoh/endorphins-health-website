import { testimonials } from "@/data/testimonials";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read what our patients have to say about their experiences at Endorphins Health and Wellness Centre.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              index === activeIndex && (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-yellow-400 mb-4">
                    {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                    {testimonial.rating % 1 !== 0 && (
                      <i className="fas fa-star-half-alt"></i>
                    )}
                  </div>
                  <p className="text-gray-600 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <h4 className="font-heading font-bold text-lg text-foreground">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.title}</p>
                </motion.div>
              )
            ))}
          </AnimatePresence>
          
          <button 
            className="absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-md cursor-pointer hover:bg-white"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left text-primary"></i>
          </button>
          <button 
            className="absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-md cursor-pointer hover:bg-white"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right text-primary"></i>
          </button>
        </motion.div>
        
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
