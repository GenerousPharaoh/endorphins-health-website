export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  category: 'chiropractic' | 'physiotherapy' | 'massage-therapy' | 'athletic-therapy' | 'acupuncture' | 'podiatry' | 'chiropody';
}

export const teamMembers: TeamMember[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    title: "Doctor of Chiropractic",
    bio: "Sarah specializes in sports injuries and rehabilitation with over 10 years of experience helping patients achieve optimal spinal health.",
    image: "spine",
    category: "chiropractic"
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    title: "Doctor of Chiropractic",
    bio: "Michael focuses on holistic approaches to chiropractic care, integrating nutrition and lifestyle counseling with traditional adjustments.",
    image: "holistic",
    category: "chiropractic"
  },
  {
    id: "emma-rodriguez",
    name: "Emma Rodriguez",
    title: "Senior Physiotherapist",
    bio: "Emma specializes in orthopedic physiotherapy and post-surgical rehabilitation, helping patients return to their daily activities quickly and safely.",
    image: "orthopedic",
    category: "physiotherapy"
  },
  {
    id: "david-wilson",
    name: "David Wilson",
    title: "Physiotherapist",
    bio: "David focuses on chronic pain management and specialized exercise programs, helping patients build strength and mobility for long-term health.",
    image: "exercise",
    category: "physiotherapy"
  },
  {
    id: "olivia-thompson",
    name: "Olivia Thompson",
    title: "Registered Massage Therapist",
    bio: "Olivia specializes in deep tissue and sports massage, helping athletes and active individuals recover and perform at their best.",
    image: "massage",
    category: "massage-therapy"
  },
  {
    id: "james-lee",
    name: "James Lee",
    title: "Registered Massage Therapist",
    bio: "James specializes in relaxation and therapeutic massage, focusing on stress reduction and overall wellness for his clients.",
    image: "relaxation",
    category: "massage-therapy"
  },
  {
    id: "alex-mitchell",
    name: "Alex Mitchell",
    title: "Athletic Therapist",
    bio: "Alex specializes in sports-related injuries and rehabilitation for athletes of all levels, helping them return to peak performance safely and effectively.",
    image: "athletic",
    category: "athletic-therapy"
  },
  {
    id: "sophia-patel",
    name: "Sophia Patel",
    title: "Certified Athletic Therapist",
    bio: "Sophia combines strength training and therapeutic techniques to treat sports injuries and enhance athletic performance for competitive and recreational athletes.",
    image: "strength",
    category: "athletic-therapy"
  },
  {
    id: "daniel-rivera",
    name: "Daniel Rivera",
    title: "Chiropodist",
    bio: "Daniel specializes in diagnosing and treating conditions of the foot and ankle, offering comprehensive foot care for patients of all ages.",
    image: "foot",
    category: "chiropody"
  },
  {
    id: "rachel-kim",
    name: "Rachel Kim",
    title: "Registered Chiropodist",
    bio: "Rachel provides expert foot care including nail surgery, custom orthotics, and diabetic foot assessments to help patients maintain optimal foot health.",
    image: "orthotic",
    category: "chiropody"
  }
];
