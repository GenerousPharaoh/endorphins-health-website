import { teamMembers } from "@/data/team";
import { useState } from "react";
import { motion } from "framer-motion";

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: "chiropractic", label: "Chiropractic Care" },
    { id: "physiotherapy", label: "Physiotherapy" },
    { id: "massage-therapy", label: "Massage Therapy" }
  ];

  const filteredMembers = selectedCategory 
    ? teamMembers.filter(member => member.category === selectedCategory)
    : teamMembers;

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of highly skilled practitioners is committed to providing you with exceptional care tailored to your individual needs.
          </p>
        </motion.div>
        
        {categories.map(category => {
          const categoryMembers = teamMembers.filter(member => member.category === category.id);
          
          return categoryMembers.length > 0 ? (
            <motion.div 
              key={category.id}
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-heading text-2xl font-bold mb-8 text-primary border-b pb-2">{category.label}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryMembers.map((member, index) => (
                  <motion.div 
                    key={member.id}
                    className="team-card bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="font-heading text-xl font-bold mb-1 text-foreground">{member.name}</h4>
                      <p className="text-primary font-medium mb-4">{member.title}</p>
                      <p className="text-gray-600 mb-4">
                        {member.bio}
                      </p>
                      <div className="flex space-x-3">
                        <a href="#" className="text-gray-400 hover:text-primary transition-all">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-all">
                          <i className="fas fa-envelope"></i>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : null;
        })}
      </div>
    </section>
  );
};

export default Team;
