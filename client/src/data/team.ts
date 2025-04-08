export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  category: 'chiropractic' | 'physiotherapy' | 'massage-therapy' | 'athletic-therapy' | 'acupuncture' | 'podiatry';
}

export const teamMembers: TeamMember[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    title: "Doctor of Chiropractic",
    bio: "Sarah specializes in sports injuries and rehabilitation with over 10 years of experience helping patients achieve optimal spinal health.",
    image: "/placeholder",
    category: "chiropractic"
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    title: "Doctor of Chiropractic",
    bio: "Michael focuses on holistic approaches to chiropractic care, integrating nutrition and lifestyle counseling with traditional adjustments.",
    image: "/placeholder",
    category: "chiropractic"
  },
  {
    id: "emma-rodriguez",
    name: "Emma Rodriguez",
    title: "Senior Physiotherapist",
    bio: "Emma specializes in orthopedic physiotherapy and post-surgical rehabilitation, helping patients return to their daily activities quickly and safely.",
    image: "/placeholder",
    category: "physiotherapy"
  },
  {
    id: "david-wilson",
    name: "David Wilson",
    title: "Physiotherapist",
    bio: "David focuses on chronic pain management and specialized exercise programs, helping patients build strength and mobility for long-term health.",
    image: "/placeholder",
    category: "physiotherapy"
  },
  {
    id: "olivia-thompson",
    name: "Olivia Thompson",
    title: "Registered Massage Therapist",
    bio: "Olivia specializes in deep tissue and sports massage, helping athletes and active individuals recover and perform at their best.",
    image: "/placeholder",
    category: "massage-therapy"
  },
  {
    id: "james-lee",
    name: "James Lee",
    title: "Registered Massage Therapist",
    bio: "James specializes in relaxation and therapeutic massage, focusing on stress reduction and overall wellness for his clients.",
    image: "/placeholder",
    category: "massage-therapy"
  }
];
