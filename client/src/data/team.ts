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
    name: "Dr. Sarah Johnson",
    title: "Doctor of Chiropractic",
    bio: "Dr. Johnson specializes in sports injuries and rehabilitation with over 10 years of experience helping patients achieve optimal spinal health.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "chiropractic"
  },
  {
    id: "michael-chen",
    name: "Dr. Michael Chen",
    title: "Doctor of Chiropractic",
    bio: "Dr. Chen focuses on holistic approaches to chiropractic care, integrating nutrition and lifestyle counseling with traditional adjustments.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "chiropractic"
  },
  {
    id: "emma-rodriguez",
    name: "Emma Rodriguez, PT",
    title: "Senior Physiotherapist",
    bio: "Emma specializes in orthopedic physiotherapy and post-surgical rehabilitation, helping patients return to their daily activities quickly and safely.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "physiotherapy"
  },
  {
    id: "david-wilson",
    name: "David Wilson, PT",
    title: "Physiotherapist",
    bio: "David focuses on chronic pain management and specialized exercise programs, helping patients build strength and mobility for long-term health.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "physiotherapy"
  },
  {
    id: "olivia-thompson",
    name: "Olivia Thompson, RMT",
    title: "Registered Massage Therapist",
    bio: "Olivia specializes in deep tissue and sports massage, helping athletes and active individuals recover and perform at their best.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "massage-therapy"
  },
  {
    id: "james-lee",
    name: "James Lee, RMT",
    title: "Registered Massage Therapist",
    bio: "James specializes in relaxation and therapeutic massage, focusing on stress reduction and overall wellness for his clients.",
    image: "https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "massage-therapy"
  }
];
