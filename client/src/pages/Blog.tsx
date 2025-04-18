import { useEffect } from "react";
import BlogSection from "../components/sections/Blog";
import { motion } from "framer-motion";

const BlogPage = () => {
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
            Health & Wellness Blog
          </motion.h1>
          <motion.p 
            className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Expert advice, tips, and wellness information from our specialists
          </motion.p>
        </div>
      </div>
      <BlogSection />
    </div>
  );
};

export default BlogPage;