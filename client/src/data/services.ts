import chiropracticSvg from "@/assets/illustrations/chiropractic.svg";
import physiotherapySvg from "@/assets/illustrations/physiotherapy.svg";
import athleticTherapySvg from "@/assets/illustrations/athletic-therapy.svg";
import massageTherapySvg from "@/assets/illustrations/massage-therapy.svg";
import acupunctureSvg from "@/assets/illustrations/acupuncture.svg";
import podiatrySvg from "@/assets/illustrations/podiatry.svg";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  altText: string;
}

export const services: Service[] = [
  {
    id: "chiropractic",
    title: "Chiropractic Care",
    description: "Our chiropractors specialize in diagnosing and treating neuromuscular disorders, with an emphasis on treatment through manual adjustment of the spine.",
    icon: "fas fa-spine",
    image: chiropracticSvg,
    altText: "Chiropractic Treatment Illustration"
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    description: "Our physiotherapists work with you to restore movement and function after injury, illness, or disability through exercise, manual therapy, and education.",
    icon: "fas fa-walking",
    image: physiotherapySvg,
    altText: "Physiotherapy Session Illustration"
  },
  {
    id: "athletic-therapy",
    title: "Athletic Therapy",
    description: "Our athletic therapists specialize in the prevention, assessment, and rehabilitation of musculoskeletal injuries, particularly for active individuals.",
    icon: "fas fa-running",
    image: athleticTherapySvg,
    altText: "Athletic Therapy Illustration"
  },
  {
    id: "massage-therapy",
    title: "Massage Therapy",
    description: "Our registered massage therapists use various techniques to reduce stress, improve circulation, relieve tension, and promote overall wellness.",
    icon: "fas fa-hands",
    image: massageTherapySvg,
    altText: "Massage Therapy Illustration"
  },
  {
    id: "acupuncture",
    title: "Acupuncture",
    description: "Our acupuncture treatments help alleviate pain, reduce stress, and improve overall well-being by stimulating specific points on the body.",
    icon: "fas fa-registered",
    image: acupunctureSvg,
    altText: "Acupuncture Treatment Illustration"
  },
  {
    id: "podiatry",
    title: "Podiatry",
    description: "Our podiatrists diagnose and treat conditions affecting the foot, ankle, and related structures of the leg to maintain optimal foot health.",
    icon: "fas fa-shoe-prints",
    image: podiatrySvg,
    altText: "Podiatry Treatment Illustration"
  }
];
