export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // We'll use this for SVG icons
  image: string;
  altText: string;
}

export const services: Service[] = [
  {
    id: "chiropractic",
    title: "Chiropractic Care",
    description: "Our chiropractors specialize in diagnosing and treating neuromuscular disorders, with an emphasis on treatment through manual adjustment of the spine.",
    icon: "C",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    altText: "Chiropractic Treatment"
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    description: "Our physiotherapists work with you to restore movement and function after injury, illness, or disability through exercise, manual therapy, and education.",
    icon: "P",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    altText: "Physiotherapy Session"
  },
  {
    id: "athletic-therapy",
    title: "Athletic Therapy",
    description: "Our athletic therapists specialize in the prevention, assessment, and rehabilitation of musculoskeletal injuries, particularly for active individuals.",
    icon: "A",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    altText: "Athletic Therapy"
  },
  {
    id: "massage-therapy",
    title: "Massage Therapy",
    description: "Our registered massage therapists use various techniques to reduce stress, improve circulation, relieve tension, and promote overall wellness.",
    icon: "M",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    altText: "Massage Therapy"
  },
  {
    id: "acupuncture",
    title: "Acupuncture",
    description: "Our acupuncture treatments help alleviate pain, reduce stress, and improve overall well-being by stimulating specific points on the body.",
    icon: "A",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    altText: "Acupuncture Treatment"
  },
  {
    id: "podiatry",
    title: "Podiatry",
    description: "Our podiatrists diagnose and treat conditions affecting the foot, ankle, and related structures of the leg to maintain optimal foot health.",
    icon: "P",
    image: "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    altText: "Podiatry Treatment"
  }
];
