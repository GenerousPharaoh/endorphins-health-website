export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial1",
    quote: "After struggling with chronic back pain for years, Dr. Johnson's chiropractic care has been life-changing. The entire team at Endorphins is professional, caring, and dedicated to helping me feel my best.",
    name: "Jennifer W.",
    title: "Chiropractic Patient",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80", // Woman profile
    rating: 5
  },
  {
    id: "testimonial2",
    quote: "After my knee surgery, the physiotherapy team at Endorphins helped me get back on my feet. Emma created a personalized recovery plan that got me back to running faster than I expected. I couldn't be happier with the results!",
    name: "Michael T.",
    title: "Physiotherapy Patient",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80", // Man portrait
    rating: 5
  },
  {
    id: "testimonial3",
    quote: "The massage therapy at Endorphins has been essential for managing my stress and tension. Olivia always knows exactly how to address my problem areas. I leave feeling rejuvenated every time!",
    name: "Sarah L.",
    title: "Massage Therapy Patient",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80", // Woman smiling 
    rating: 4.5
  }
];
