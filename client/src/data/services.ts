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
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    altText: "Spine model and chiropractic equipment"
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    description: "Our physiotherapists work with you to restore movement and function after injury, illness, or disability through exercise, manual therapy, and education.",
    icon: "P",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    altText: "Physiotherapy equipment"
  },
  {
    id: "athletic-therapy",
    title: "Athletic Therapy",
    description: "Our athletic therapists specialize in the prevention, assessment, and rehabilitation of musculoskeletal injuries, particularly for active individuals.",
    icon: "A",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    altText: "Sports therapy equipment"
  },
  {
    id: "massage-therapy",
    title: "Massage Therapy",
    description: "Our registered massage therapists use various techniques to reduce stress, improve circulation, relieve tension, and promote overall wellness.",
    icon: "M",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    altText: "Massage therapy stones and oils"
  },
  {
    id: "acupuncture",
    title: "Acupuncture",
    description: "Our acupuncture treatments help alleviate pain, reduce stress, and improve overall well-being by stimulating specific points on the body.",
    icon: "A",
    image: "https://images.unsplash.com/photo-1584211299387-d934b29947b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    altText: "Acupuncture needles"
  },
  {
    id: "podiatry",
    title: "Podiatry",
    description: "Our podiatrists diagnose and treat conditions affecting the foot, ankle, and related structures of the leg to maintain optimal foot health.",
    icon: "P",
    image: "https://images.unsplash.com/photo-1554164595-8f8276513c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    altText: "Podiatry equipment and foot model"
  }
];
