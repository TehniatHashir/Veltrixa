
import tagPeak from "@/assets/tag-peak.webp";
import chimney from "@/assets/chimney-fire-place.webp";
import vet from "@/assets/veterinarian-clinic.webp";
import driveRoad from "@/assets/drive-road-side.webp";
import towing from "@/assets/cheap-towing-dallas.webp";
import sweetRides from "@/assets/sweet-rides-cent.webp";
import menaCashback from "@/assets/mena-cashback.webp";
import eliteAuto from "@/assets/elite-auto-claims.webp";
import codeaxisCashback from "@/assets/codeaxis-cashback.webp";
import tm from "@/assets/tm.jpg";
import tm2 from "@/assets/tm2.jpg";
import tm3 from "@/assets/tm3.jpg";
import tm4 from "@/assets/tm4.jpg";


export const contact = {
  location: "Gulberg Islamabad, Pakistan",
  email: "info@veltrixa.com",
  personName: "Tehniat Hashir",
  phone: "+92 336 0925493",
  phoneHref: "+92 336 0925493",
  hours: "Available 24/7 to Serve You Anytime",
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    description:
      "Smart AI-powered automation systems that reduce manual work and improve business efficiency.",
    points: [
      "AI chat that replies to customers while you sleep",
      "Repetitive tasks handled automatically, end to end",
      "Leads followed up on instantly — no more cold inquiries",
      "Reports generated and delivered without lifting a finger",
    ],
  },
  {
    slug: "custom-development",
    title: "Custom Development",
    description:
      "Tailored web solutions designed specifically for contractors and service businesses.",
    points: [
      "Interactive maps showing exactly where you operate",
      "Let customers book you without picking up the phone",
      "Private portals where clients track their own projects",
      "A gallery built to make your best work impossible to ignore",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Crafting user-centric designs that enhance digital experiences and drive engagement.",
    points: [
      "Real people shaping every decision — not assumptions",
      "Map every click and screen before development starts",
      "Working prototypes you can test, share, and approve",
      "Built mobile-first, then perfected for every screen size",
    ],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    description: "Tailored e-commerce platforms to boost sales and engagement.",
    points: [
      "Product catalogs built to be browsed, not just listed",
      "Checkout that's secure, fast, and friction-free",
      "A cart flow engineered to stop people from bailing",
      "Stock and orders tracked in real time, always accurate",
    ],
  },
  {
    slug: "local-seo-optimization",
    title: "Local Seo Optimization",
    description:
      "Automated city-specific landing pages with local SEO optimization to target multiple service areas effectively.",
    points: [
      "A dedicated landing page for every city you serve — not a copy-paste template",
      'Ranks where it matters: local search and "near me" results',
      "Built-in meta tags that search engines actually reward",
      "Reaches the exact customers searching in your service areas",
    ],
  },
  {
    slug: "lead-generation-system",
    title: "Lead Generation System",
    description:
      "Advanced quote request forms with intelligent routing and follow-up automation.",
    points: [
      "Forms designed to convert browsers into booked leads",
      "Know the moment someone reaches out — instant alerts, zero delay",
      "One dashboard to track every lead from first click to close",
      "Looks and works flawlessly on any device",
    ],
  },
  {
    slug: "review-integration",
    title: "Review Integration",
    description:
      "Seamless integration of customer reviews from multiple platforms to build trust and credibility.",
    points: [
      "Reviews pulled live from Google and beyond — always current",
      "Real, verified feedback that turns visitors into customers",
      "Manage your entire reputation from a single screen",
      "Rating displays that fit naturally into any page",
    ],
  },
];

export const features = [
  {
    title: "Software Development",
    description:
      "Build powerful, efficient software solutions with custom-designed themes and templates that enhance functionality and performance.",
  },
  {
    title: "UI/UX design",
    description:
      "Craft intuitive, engaging user interfaces with custom designs that provide seamless experiences and drive customer satisfaction.",
  },
  {
    title: "Dedicated Support",
    description:
      "Receive expert support with personalized assistance, ensuring your projects run smoothly and challenges are addressed promptly.",
  },
];

export type ProjectCategory = "Web" | "Cashback" | "Local Business";

export type Project = {
  title: string;
  image: string;
  category: ProjectCategory;
  url: string;
};

export const projects: Project[] = [
  { title: "Tag Peak", image: tagPeak, category: "Web", url: "https://tagpeak.com/" },
  {
    title: "Chimney Fire Place",
    image: chimney,
    category: "Local Business",
    url: "https://chimneyfireplacesurrey.ca/",
  },
  {
    title: "Veterinarian Clinic",
    image: vet,
    category: "Local Business",
    url: "https://www.georgeveterinaryclinic.com/",
  },
  {
    title: "Drive Road Side",
    image: driveRoad,
    category: "Local Business",
    url: "https://driveroadside.com/",
  },
  {
    title: "Cheap Towing Dallas",
    image: towing,
    category: "Local Business",
    url: "https://www.cheaptowingdallas.com/",
  },
  { title: "Sweet Rides Cent", image: sweetRides, category: "Web", url: "https://sweetridescent.com/" },
  { title: "Mena Cashback", image: menaCashback, category: "Cashback", url: "https://www.menacashback.com/" },
  { title: "Elite Auto Claims", image: eliteAuto, category: "Web", url: "https://eliteautoclaims.co.uk/" },
  { title: "Cashback", image: codeaxisCashback, category: "Cashback", url: "https://cpdemo.cashbackproject.com/" },
];

export const projectCategories = ["All", "Web", "Cashback", "Local Business"] as const;

export const testimonials = [
  {
    name: "Michael Chen",
    role: "Business Owner",
    quote:
      "Outstanding electrical work! They helped upgrade our entire office building and the service was impeccable.",
  },
  {
    name: "Emily Rodriguez",
    role: "Property Manager",
    quote:
      "We use them for all our properties. Their plumbing services are reliable, and they always respond quickly to emergencies.",
  },
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    quote:
      "The team was professional, punctual, and did an amazing job with our HVAC installation. Highly recommended!",
  },
];

export const team = [
  { name: "Tehniat Hashir", role: "Founder & CEO", image: tm2 },
  { name: "Bilal Ahmed", role: "Lead Designer", image: tm },
  { name: "Ahmed Ali", role: "Full Stack Developer", image: tm3 },
  { name: "Sana Malik", role: "SEO Strategist", image: tm4 },
];

export const stats = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 60, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;
