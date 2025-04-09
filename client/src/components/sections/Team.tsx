import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { teamMembers } from "../../data/team";
import { ArrowLeft, ArrowRight, Mail, Phone, User } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

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

  return (
    <section 
      id="team" 
      ref={ref}
      className="relative bg-[#0a0a0a] py-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        <div className="absolute -top-10 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-3">Our Specialists</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-8">
            Our multidisciplinary team of healthcare professionals is dedicated to providing personalized care to help you achieve optimal wellness.
          </p>

          {/* Category Tabs - Mobile Scrollable */}
          <div className="mb-8 sm:mb-12 overflow-x-auto pb-2 -mx-4 px-4 md:hidden">
            <div className="flex space-x-2 min-w-max">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex-shrink-0 ${
                    activeCategory === category 
                      ? "bg-primary text-white" 
                      : "bg-[#151515] text-gray-300 hover:bg-[#1a1a1a]"
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category 
                    ? "bg-primary text-white" 
                    : "bg-[#151515] text-gray-300 hover:bg-[#1a1a1a]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
              <div className="bg-[#101010]/50 rounded-lg border border-white/5 overflow-hidden">
                {activeTeam.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="group border-b border-white/5 last:border-b-0"
                  >
                    <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 relative overflow-hidden">
                      <div className="h-10 w-10 bg-primary/10 flex items-center justify-center rounded-full shrink-0 mx-auto sm:mx-0">
                        <span className="text-primary font-bold text-lg">{member.name.charAt(0)}</span>
                      </div>
                      
                      <div className="flex-grow text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-white">{member.name}</h3>
                            <p className="text-primary font-medium text-sm">{member.title}</p>
                          </div>
                          <div className="hidden sm:block sm:text-right">
                            <span className="inline-flex items-center bg-[#151515] px-3 py-1 text-xs font-medium text-white/80">
                              {formatCategoryName(member.category)}
                            </span>
                          </div>
                        </div>
                        
                        {/* Mobile Category Badge */}
                        <div className="mt-2 mb-3 sm:hidden">
                          <span className="inline-flex items-center bg-[#151515] px-2 py-0.5 text-xs font-medium text-white/80">
                            {formatCategoryName(member.category)}
                          </span>
                        </div>
                        
                        <p className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-3 line-clamp-2 sm:line-clamp-none">{member.bio}</p>
                        
                        <div className="mt-3 sm:mt-4">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-white/80 hover:text-primary hover:bg-transparent px-0 flex items-center mx-auto sm:mx-0 group/btn"
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
                      
                      <div className="absolute top-0 right-0 h-full w-0.5 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
              className="bg-[#101010] rounded-xl overflow-hidden max-w-4xl mx-auto border border-white/10"
            >
              <Button 
                variant="ghost"
                onClick={handleCloseProfile}
                className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 sm:p-2 h-auto"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>

              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                  <div className="h-14 w-14 sm:h-16 sm:w-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                    <User className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {activeMember.name}
                    </h2>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
                      <p className="text-primary font-medium text-sm sm:text-base">{activeMember.title}</p>
                      <span className="hidden sm:inline-flex h-1 w-1 rounded-full bg-gray-500"></span>
                      <Badge variant="outline" className="border-white/20 text-white/80 text-xs">
                        {formatCategoryName(activeMember.category)}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 sm:space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">About</h3>
                    <div className="p-3 sm:p-4 bg-black/20 rounded-md border border-white/5">
                      <p className="text-sm sm:text-base text-gray-300">{activeMember.bio}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Contact Information</h3>
                    <div className="p-3 sm:p-4 bg-black/20 rounded-md border border-white/5">
                      <div className="flex items-center mb-3">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-3" />
                        <span className="text-sm sm:text-base text-gray-300">contact@endorphins.health</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-3" />
                        <span className="text-sm sm:text-base text-gray-300">(905) 555-1234</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2 sm:pt-4">
                    <motion.button 
                      className="bg-primary hover:bg-primary/90 text-white w-full text-sm sm:text-base py-2.5 sm:py-3 rounded-md flex items-center justify-center"
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
      </div>
    </section>
  );
};

export default Team;