import { useEffect } from "react";
import BlogSection from "../components/sections/Blog";
import { motion } from "framer-motion";

const BlogPage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-24 pb-8 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Health & Wellness Blog
          </motion.h1>
          <motion.p 
            className="mt-4 text-center text-gray-400 max-w-2xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Expert advice, tips, and wellness information from our specialists
          </motion.p>
        </div>
      </div>
      <BlogSection />
    </motion.div>
  );
};

export default BlogPage;