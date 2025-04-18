import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { teamMembers } from "../../data/team";
import { ArrowLeft, ArrowRight, Mail, Phone, User, Camera } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import treatment_room1 from "@assets/20250417_200141.jpg";
import treatment_room2 from "@assets/20250417_200153.jpg";
import treatment_room3 from "@assets/20250417_200255.jpg";
import treatment_room_wider from "@assets/IMG_20250415_205603.jpg";
import reception_area from "@assets/IMG_20250415_205609.jpg";
import waiting_area from "@assets/IMG_20250415_205604.jpg";
import hallway_art from "@assets/IMG_20250415_205556.jpg";

const Team = () => {
  // Create a group of team members by category
  const teamByCategory = teamMembers.reduce((acc, member) => {
    const category = member.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(member);
    return acc;
  }, {} as Record<string, typeof teamMembers>);

  const categories = Object.keys(teamByCategory);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeTeam, setActiveTeam] = useState(teamByCategory[activeCategory]);
  const [activeMember, setActiveMember] = useState<(typeof teamMembers)[0] | null>(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setActiveTeam(teamByCategory[category]);
    setActiveMember(null);
  };

  const handleViewProfile = (member: (typeof teamMembers)[0]) => {
    setActiveMember(member);
  };

  const handleCloseProfile = () => {
    setActiveMember(null);
  };

  // Format category name for display
  const formatCategoryName = (category: string) => {
    return category
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // State for photo gallery
  const [viewingGallery, setViewingGallery] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState('');
  
  // Curated selection of clinic photos with meaningful descriptions
  const clinicPhotos = [
    { 
      src: reception_area, 
      alt: "Welcoming reception area at Endorphins Health and Wellness Centre", 
      title: "Reception Area",
      description: "Our bright, welcoming reception area where your wellness journey begins"
    },
    { 
      src: waiting_area, 
      alt: "Comfortable patient waiting area", 
      title: "Waiting Lounge",
      description: "A relaxing space designed for your comfort before appointments"
    },
    { 
      src: treatment_room1, 
      alt: "Professional treatment room with modern equipment", 
      title: "Treatment Suite",
      description: "Equipped with state-of-the-art technology for your therapeutic needs"
    },
    { 
      src: hallway_art, 
      alt: "Thoughtfully designed interior with calming elements", 
      title: "Healing Environment",
      description: "Our clinic spaces are designed to promote tranquility and healing"
    }
  ];
  
  const openPhotoViewer = (src: string) => {
    setSelectedPhoto(src);
    setViewingGallery(true);
  };
  
  const closePhotoViewer = () => {
    setViewingGallery(false);
    setSelectedPhoto('');
  };

  return (
    <section 
      id="team" 
      ref={ref}
      className="relative bg-background py-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        <div className="absolute -top-10 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-3">Our Specialists</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            Our multidisciplinary team of healthcare professionals is dedicated to providing personalized care to help you achieve optimal wellness.
          </p>

          {/* Category Tabs - Mobile Scrollable */}
          <div className="mb-8 sm:mb-12 overflow-x-auto pb-2 -mx-4 px-4 md:hidden">
            <div className="flex space-x-2 min-w-max">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex-shrink-0 shadow-sm ${
                    activeCategory === category 
                      ? "bg-primary text-white" 
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {formatCategoryName(category)}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Category Tabs - Desktop */}
          <div className="hidden md:flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm ${
                  activeCategory === category 
                    ? "bg-primary text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-100/80"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {formatCategoryName(category)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Team Members List */}
        <AnimatePresence mode="wait">
          {!activeMember && (
            <motion.div 
              key="team-grid"
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-card rounded-lg border border-border shadow-md overflow-hidden">
                {activeTeam.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    className="group border-b border-border last:border-b-0 hover:bg-muted/50"
                  >
                    <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 relative overflow-hidden">
                      <div className="h-12 w-12 bg-primary/10 flex items-center justify-center rounded-full shrink-0 mx-auto sm:mx-0">
                        <span className="text-primary font-bold text-lg">{member.title.charAt(0)}</span>
                      </div>
                      
                      <div className="flex-grow text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-foreground">{member.name}</h3>
                            <p className="text-primary font-medium text-sm">{member.title}</p>
                          </div>
                          <div className="hidden sm:block sm:text-right">
                            <span className="inline-flex items-center bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                              {formatCategoryName(member.category)}
                            </span>
                          </div>
                        </div>
                        
                        {/* Mobile Category Badge */}
                        <div className="mt-2 mb-3 sm:hidden">
                          <span className="inline-flex items-center bg-muted/60 px-2 py-0.5 text-xs font-medium text-muted-foreground">
                            {formatCategoryName(member.category)}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground text-xs sm:text-sm mt-2 sm:mt-3 line-clamp-2 sm:line-clamp-none">{member.bio}</p>
                        
                        <div className="mt-3 sm:mt-4">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-primary hover:text-primary/90 hover:bg-transparent px-0 flex items-center mx-auto sm:mx-0 group/btn"
                            onClick={() => handleViewProfile(member)}
                          >
                            <span className="text-sm">View Details</span>
                            <motion.span
                              className="ml-1 h-4 w-4"
                              whileHover={{ x: 3 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ArrowRight className="h-4 w-4" />
                            </motion.span>
                          </Button>
                        </div>
                      </div>
                      
                      <div className="absolute top-0 right-0 h-full w-1 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Member Detail View */}
          {activeMember && (
            <motion.div
              key="member-detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-card rounded-xl overflow-hidden max-w-4xl mx-auto border border-border shadow-md"
            >
              <Button 
                variant="ghost"
                onClick={handleCloseProfile}
                className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 bg-card/90 hover:bg-card text-foreground rounded-full p-1.5 sm:p-2 h-auto shadow-sm"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>

              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                    <span className="text-primary font-bold text-2xl sm:text-3xl">{activeMember.title.charAt(0)}</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                      {activeMember.name}
                    </h2>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
                      <p className="text-primary font-medium text-sm sm:text-base">{activeMember.title}</p>
                      <span className="hidden sm:inline-flex h-1 w-1 rounded-full bg-muted-foreground/50"></span>
                      <Badge variant="outline" className="text-muted-foreground text-xs">
                        {formatCategoryName(activeMember.category)}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 sm:space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">About</h3>
                    <div className="p-3 sm:p-4 bg-muted/50 rounded-md border border-border">
                      <p className="text-sm sm:text-base text-muted-foreground">{activeMember.bio}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">Contact Information</h3>
                    <div className="p-3 sm:p-4 bg-muted/50 rounded-md border border-border">
                      <div className="flex items-center mb-3">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-3" />
                        <span className="text-sm sm:text-base text-muted-foreground">contact@endorphins.health</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-3" />
                        <span className="text-sm sm:text-base text-muted-foreground">(905) 555-1234</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2 sm:pt-4">
                    <motion.button 
                      className="bg-primary hover:bg-primary/90 text-white w-full text-sm sm:text-base py-2.5 sm:py-3 rounded-md flex items-center justify-center shadow-sm"
                      onClick={() => {
                        window.location.href = "#booking";
                        handleCloseProfile();
                      }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book an Appointment
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="ml-1.5"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Clinic Photo Gallery */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center mb-10">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-3">Photo Gallery</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              <span className="text-primary">Endorphins</span> Facility
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Experience our comfortable Burlington clinic, designed with your wellbeing in mind.
            </p>
          </div>
          
          {/* Photo Gallery with Visual Interest */}
          <div className="grid grid-cols-12 gap-3 sm:gap-5">
            {clinicPhotos.map((photo, index) => {
              // Create a visually interesting layout with varying spans
              const spans = [
                "col-span-12 sm:col-span-8 md:col-span-6 h-64 sm:h-80", // First photo larger
                "col-span-12 sm:col-span-4 md:col-span-6 h-64", // Second photo
                "col-span-6 sm:col-span-6 md:col-span-4 h-56 sm:h-64", // Third photo
                "col-span-6 sm:col-span-6 md:col-span-8 h-56 sm:h-64", // Fourth photo
              ];
              
              return (
                <motion.div
                  key={index}
                  className={`${spans[index]} relative group cursor-pointer rounded-lg overflow-hidden shadow-lg border border-border`}
                  onClick={() => openPhotoViewer(photo.src)}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.15 * index,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src={photo.src} 
                      alt={photo.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Design elements */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Accent corners */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/0 group-hover:border-white/80 transition-all duration-500 rounded-tl-sm"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/0 group-hover:border-white/80 transition-all duration-500 rounded-br-sm"></div>
                    
                    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <motion.h3 
                        className="text-white text-lg font-medium mb-1"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + 0.1 * index }}
                      >
                        {photo.title}
                      </motion.h3>
                      
                      <p className="text-white/90 text-sm line-clamp-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {photo.description}
                      </p>
                      
                      <div className="flex items-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs backdrop-blur-sm">
                          <Camera className="w-3.5 h-3.5 text-primary" />
                          View Fullscreen
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
        {/* Enhanced Fullscreen Photo Viewer with Context */}
        <AnimatePresence>
          {viewingGallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={closePhotoViewer}
            >
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-60"></div>
                <div className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
                <div className="absolute -right-20 bottom-1/4 w-40 h-40 rounded-full bg-amber-500/5 blur-3xl"></div>
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 22, stiffness: 100 }}
                className="relative max-w-6xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image container with subtle border effect */}
                <div className="relative rounded-lg overflow-hidden max-h-[75vh] w-auto border border-white/10 shadow-2xl">
                  {/* Corner decorative elements */}
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary/40 rounded-tl-md z-10 pointer-events-none"></div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary/40 rounded-br-md z-10 pointer-events-none"></div>
                  
                  <img 
                    src={selectedPhoto} 
                    alt="Endorphins Health and Wellness Centre" 
                    className="w-full h-auto max-h-[75vh] object-contain"
                  />
                </div>
                
                {/* Caption area below image */}
                <div className="mt-4 text-center max-w-2xl">
                  <p className="text-white/80 text-sm">
                    Our facility is designed to create a calming environment that promotes healing and wellness
                  </p>
                </div>
                
                {/* Close button */}
                <Button
                  onClick={closePhotoViewer}
                  className="absolute -top-2 -right-2 bg-black/60 border border-white/10 hover:bg-black/80 text-white rounded-full p-2 h-auto shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Team;