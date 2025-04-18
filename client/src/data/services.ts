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
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=800&q=80",
    altText: "Spine model and chiropractic equipment"
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    description: "Our physiotherapists work with you to restore movement and function after injury, illness, or disability through exercise, manual therapy, and education.",
    icon: "P",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    altText: "Physiotherapy equipment"
  },
  {
    id: "athletic-therapy",
    title: "Athletic Therapy",
    description: "Our athletic therapists specialize in the prevention, assessment, and rehabilitation of musculoskeletal injuries, particularly for active individuals.",
    icon: "A",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    altText: "Sports therapy equipment"
  },
  {
    id: "massage-therapy",
    title: "Massage Therapy",
    description: "Our registered massage therapists use various techniques to reduce stress, improve circulation, relieve tension, and promote overall wellness.",
    icon: "M",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    altText: "Massage therapy stones and oils"
  },
  {
    id: "acupuncture",
    title: "Acupuncture",
    description: "Our acupuncture treatments help alleviate pain, reduce stress, and improve overall well-being by stimulating specific points on the body.",
    icon: "A",
    image: "https://images.unsplash.com/photo-1611073615830-9a55736f841e?auto=format&fit=crop&w=800&q=80",
    altText: "Acupuncture needles"
  },
  {
    id: "podiatry",
    title: "Podiatry",
    description: "Our podiatrists diagnose and treat conditions affecting the foot, ankle, and related structures of the leg to maintain optimal foot health.",
    icon: "P",
    image: "https://images.unsplash.com/photo-1606863505034-7023e7318128?auto=format&fit=crop&w=800&q=80",
    altText: "Podiatry equipment and foot model"
  }
];
