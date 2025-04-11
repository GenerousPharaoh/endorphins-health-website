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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f4f8'/%3E%3Cpath d='M100,40 L140,70 L140,150 L60,150 L60,70 Z' fill='%23e2e8f0' stroke='%23cbd5e0' stroke-width='2'/%3E%3Cpath d='M100,60 L100,130 M80,80 L120,80 M80,100 L120,100 M80,120 L120,120' stroke='%23a0aec0' stroke-width='3' stroke-linecap='round'/%3E%3Ccircle cx='100' cy='40' r='15' fill='%23f56565'/%3E%3C/svg%3E",
    rating: 5
  },
  {
    id: "testimonial2",
    quote: "After my knee surgery, the physiotherapy team at Endorphins helped me get back on my feet. Emma created a personalized recovery plan that got me back to running faster than I expected. I couldn't be happier with the results!",
    name: "Michael T.",
    title: "Physiotherapy Patient",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23ebf8ff'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%23bee3f8' stroke='%2363b3ed' stroke-width='2'/%3E%3Cpath d='M100,120 L100,160 M80,140 L120,140' stroke='%234299e1' stroke-width='4' stroke-linecap='round'/%3E%3Cpath d='M70,70 L130,90 M70,90 L130,70' stroke='%233182ce' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E",
    rating: 5
  },
  {
    id: "testimonial3",
    quote: "The massage therapy at Endorphins has been essential for managing my stress and tension. Olivia always knows exactly how to address my problem areas. I leave feeling rejuvenated every time!",
    name: "Sarah L.",
    title: "Massage Therapy Patient",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0fff4'/%3E%3Ccircle cx='70' cy='80' r='20' fill='%23c6f6d5' stroke='%2368d391' stroke-width='2'/%3E%3Ccircle cx='110' cy='80' r='20' fill='%23c6f6d5' stroke='%2368d391' stroke-width='2'/%3E%3Ccircle cx='150' cy='80' r='20' fill='%23c6f6d5' stroke='%2368d391' stroke-width='2'/%3E%3Crect x='50' y='120' width='100' height='40' rx='5' fill='%239ae6b4' stroke='%2368d391' stroke-width='2'/%3E%3C/svg%3E",
    rating: 4.5
  }
];
