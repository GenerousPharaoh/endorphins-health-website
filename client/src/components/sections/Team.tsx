import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { teamMembers } from "@/data/team";
import { ArrowLeft, ArrowRight, Mail, Phone, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-primary text-white" 
                    : "bg-[#151515] text-gray-300 hover:bg-[#1a1a1a]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
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
                    <div className="p-6 flex flex-col sm:flex-row sm:items-center gap-4 relative overflow-hidden">
                      <div className="h-10 w-10 bg-primary/10 flex items-center justify-center rounded-full shrink-0">
                        <span className="text-primary font-bold text-lg">{member.name.charAt(0)}</span>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <h3 className="text-lg font-bold text-white">{member.name}</h3>
                            <p className="text-primary font-medium text-sm">{member.title}</p>
                          </div>
                          <div className="sm:text-right">
                            <span className="inline-flex items-center bg-[#151515] px-3 py-1 text-xs font-medium text-white/80">
                              {formatCategoryName(member.category)}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mt-3">{member.bio}</p>
                        
                        <div className="mt-4">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-white/80 hover:text-primary hover:bg-transparent px-0 flex items-center group/btn"
                            onClick={() => handleViewProfile(member)}
                          >
                            <span>View Details</span>
                            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
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
              transition={{ duration: 0.3 }}
              className="bg-[#101010] rounded-xl overflow-hidden max-w-4xl mx-auto border border-white/10"
            >
              <Button 
                variant="ghost"
                onClick={handleCloseProfile}
                className="absolute top-4 left-4 z-10 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 h-auto"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>

              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mr-6">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">
                      {activeMember.name}
                    </h2>
                    <div className="flex items-center gap-3">
                      <p className="text-primary font-medium">{activeMember.title}</p>
                      <span className="inline-flex h-1 w-1 rounded-full bg-gray-500"></span>
                      <Badge variant="outline" className="border-white/20 text-white/80 text-xs">
                        {formatCategoryName(activeMember.category)}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">About</h3>
                    <div className="p-4 bg-black/20 rounded-md border border-white/5">
                      <p className="text-gray-300">{activeMember.bio}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Contact Information</h3>
                    <div className="p-4 bg-black/20 rounded-md border border-white/5">
                      <div className="flex items-center mb-3">
                        <Mail className="h-5 w-5 text-primary mr-3" />
                        <span className="text-gray-300">contact@endorphins.health</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-primary mr-3" />
                        <span className="text-gray-300">(905) 555-1234</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto"
                      onClick={() => {
                        window.location.href = "#booking";
                        handleCloseProfile();
                      }}
                    >
                      Book an Appointment
                    </Button>
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