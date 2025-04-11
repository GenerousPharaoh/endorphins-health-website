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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f7fafc'/%3E%3Cpath d='M400,80 C450,80 490,150 490,240 C490,330 450,360 400,360 C350,360 310,330 310,240 C310,150 350,80 400,80 Z' fill='%23e2e8f0' stroke='%2382a4d3' stroke-width='4'/%3E%3Cpath d='M400,120 L400,320 M365,140 L435,140 M350,180 L450,180 M340,220 L460,220 M350,260 L450,260 M365,300 L435,300' stroke='%232b6cb0' stroke-width='6' stroke-linecap='round'/%3E%3Ccircle cx='400' cy='120' r='15' fill='%23f56565'/%3E%3Ccircle cx='400' cy='180' r='8' fill='%23f56565'/%3E%3Ccircle cx='400' cy='240' r='8' fill='%23f56565'/%3E%3Ccircle cx='400' cy='300' r='8' fill='%23f56565'/%3E%3C/svg%3E",
    altText: "Abstract spine illustration"
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    description: "Our physiotherapists work with you to restore movement and function after injury, illness, or disability through exercise, manual therapy, and education.",
    icon: "P",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23ebf8ff'/%3E%3Ccircle cx='250' cy='200' r='100' fill='%23bee3f8' stroke='%2363b3ed' stroke-width='8'/%3E%3Cpath d='M250,300 L250,350 M200,325 L300,325' stroke='%234299e1' stroke-width='8' stroke-linecap='round'/%3E%3Cpath d='M550,200 L650,200 M600,150 L600,250' stroke='%234299e1' stroke-width='8' stroke-linecap='round'/%3E%3Cpath d='M400,80 L600,80 M400,140 L550,140 M400,200 L500,200' stroke='%233182ce' stroke-width='6' stroke-linecap='round'/%3E%3Cpath d='M400,260 L500,260 M400,320 L550,320' stroke='%233182ce' stroke-width='6' stroke-linecap='round'/%3E%3C/svg%3E",
    altText: "Abstract physiotherapy diagram"
  },
  {
    id: "athletic-therapy",
    title: "Athletic Therapy",
    description: "Our athletic therapists specialize in the prevention, assessment, and rehabilitation of musculoskeletal injuries, particularly for active individuals.",
    icon: "A",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23feebef'/%3E%3Cpath d='M200,150 L200,300 L300,350 L500,350 L600,300 L600,150 L500,100 L300,100 Z' fill='%23fed7e2' stroke='%23f687b3' stroke-width='4'/%3E%3Cpath d='M350,100 L350,350 M450,100 L450,350' stroke='%23d53f8c' stroke-width='6' stroke-dasharray='15,10'/%3E%3Cpath d='M200,225 L600,225' stroke='%23d53f8c' stroke-width='6' stroke-dasharray='15,10'/%3E%3Ccircle cx='350' cy='225' r='25' fill='%23f687b3' stroke='%23d53f8c' stroke-width='4'/%3E%3Ccircle cx='450' cy='225' r='25' fill='%23f687b3' stroke='%23d53f8c' stroke-width='4'/%3E%3C/svg%3E",
    altText: "Abstract sports therapy diagram"
  },
  {
    id: "massage-therapy",
    title: "Massage Therapy",
    description: "Our registered massage therapists use various techniques to reduce stress, improve circulation, relieve tension, and promote overall wellness.",
    icon: "M",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f0fff4'/%3E%3Cellipse cx='200' cy='150' rx='100' ry='60' fill='%23c6f6d5' stroke='%2368d391' stroke-width='4'/%3E%3Cellipse cx='400' cy='200' rx='100' ry='60' fill='%23c6f6d5' stroke='%2368d391' stroke-width='4'/%3E%3Cellipse cx='600' cy='250' rx='100' ry='60' fill='%23c6f6d5' stroke='%2368d391' stroke-width='4'/%3E%3Cpath d='M180,150 C250,120 350,180 420,200 C490,220 530,230 620,250' stroke='%2338a169' stroke-width='6' stroke-linecap='round' fill='none' stroke-dasharray='5,10'/%3E%3C/svg%3E",
    altText: "Abstract massage therapy waves"
  },
  {
    id: "acupuncture",
    title: "Acupuncture",
    description: "Our acupuncture treatments help alleviate pain, reduce stress, and improve overall well-being by stimulating specific points on the body.",
    icon: "A",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23fffaf0'/%3E%3Crect x='150' y='150' width='500' height='100' rx='50' fill='%23feebc8' stroke='%23f6ad55' stroke-width='4'/%3E%3Cpath d='M200,150 L200,250 M300,150 L300,250 M400,150 L400,250 M500,150 L500,250 M600,150 L600,250' stroke='%23dd6b20' stroke-width='2' stroke-dasharray='4,6'/%3E%3Ccircle cx='200' cy='200' r='10' fill='%23ed8936'/%3E%3Ccircle cx='300' cy='200' r='10' fill='%23ed8936'/%3E%3Ccircle cx='400' cy='200' r='10' fill='%23ed8936'/%3E%3Ccircle cx='500' cy='200' r='10' fill='%23ed8936'/%3E%3Ccircle cx='600' cy='200' r='10' fill='%23ed8936'/%3E%3C/svg%3E",
    altText: "Abstract acupuncture points diagram"
  },
  {
    id: "podiatry",
    title: "Podiatry",
    description: "Our podiatrists diagnose and treat conditions affecting the foot, ankle, and related structures of the leg to maintain optimal foot health.",
    icon: "P",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23e6fffa'/%3E%3Cpath d='M300,100 C400,100 500,120 550,170 C600,220 580,300 520,330 C460,360 360,350 300,330 C240,310 200,250 200,180 C200,130 250,100 300,100 Z' fill='%23b2f5ea' stroke='%234fd1c5' stroke-width='4'/%3E%3Cpath d='M280,150 C300,140 330,145 350,160 C370,175 390,210 380,240 C370,270 340,280 315,275 C290,270 275,250 270,220 C265,190 270,160 280,150 Z' fill='%234fd1c5' stroke='%2338b2ac' stroke-width='2'/%3E%3Ccircle cx='380' cy='200' r='10' fill='%2338b2ac'/%3E%3Ccircle cx='420' cy='240' r='10' fill='%2338b2ac'/%3E%3Ccircle cx='460' cy='280' r='10' fill='%2338b2ac'/%3E%3Ccircle cx='500' cy='300' r='10' fill='%2338b2ac'/%3E%3C/svg%3E",
    altText: "Abstract foot diagram"
  }
];
