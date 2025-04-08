import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Booking from "@/components/sections/Booking";
import Blog from "@/components/sections/Blog";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Team />
        <Testimonials />
        <Blog />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
