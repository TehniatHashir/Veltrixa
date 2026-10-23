import {
  Bot,
  Brush,
  Code2,
  MapPin,
  ShoppingCart,
  Star,
  Target,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/site";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  bulletPoints: string[];
  icon: LucideIcon;
  benefits: string[];
  whoItsFor: string;
  faqs: ServiceFaq[];
  relatedSlugs: string[];
};

type ServiceExtras = {
  icon: LucideIcon;
  fullDescription: string;
  benefits: string[];
  whoItsFor: string;
  faqs: ServiceFaq[];
  relatedSlugs: string[];
};

const extras: Record<string, ServiceExtras> = {
  "local-seo-optimization": {
    icon: MapPin,
    fullDescription:
      "We build city-specific landing pages and optimise every technical signal search engines look for, so your business shows up first in the areas you actually serve. From dynamic location content and local keyword research to geographic targeting and structured meta data, each page is engineered to rank and convert local searchers into booked jobs.",
    benefits: [
      'Rank higher in local map results and "near me" searches',
      "Capture leads from every city or service area you operate in",
      "Build long-term organic traffic without ongoing ad spend",
      "Stand out from competitors who only target one location",
    ],
    whoItsFor:
      "Perfect for contractors, home service businesses, and multi-location companies that want to dominate search results across every city they serve — not just their headquarters.",
    faqs: [
      {
        question: "How long does it take to see SEO results?",
        answer:
          "Most clients start seeing improved local rankings within 6-8 weeks, with significant traffic growth by month 3-4 as pages get indexed and gain authority.",
      },
      {
        question: "Do I need a separate page for every city I serve?",
        answer:
          "Yes — we build dynamic, unique location pages for each service area so search engines see genuinely relevant content, not duplicated pages.",
      },
      {
        question: "Will this replace my need for paid ads?",
        answer:
          "It reduces dependency on ads over time, but the two work best together — SEO builds long-term traffic while ads fill the gap while rankings grow.",
      },
      {
        question: "Can you optimize an existing website, or do I need a new one?",
        answer:
          "Both — we can optimize your current site's structure and content, or build new location pages if you're expanding into new service areas.",
      },
    ],
    relatedSlugs: ["lead-generation-system", "review-integration"],
  },
  "lead-generation-system": {
    icon: Target,
    fullDescription:
      "Traffic only matters when it turns into enquiries. We design intelligent quote request forms with smart validation, instant email notifications and automated follow-up, backed by a lead tracking dashboard so you always know where every opportunity stands — on desktop and mobile alike.",
    benefits: [
      "Capture more leads with forms optimized for conversion",
      "Route inquiries instantly to the right person or team",
      "Never miss a lead with automated email/SMS notifications",
      "Track every inquiry in one organized dashboard",
    ],
    whoItsFor:
      "Ideal for service-based businesses that rely on quote requests and inquiries as their primary source of new business, and want to stop losing leads to slow response times.",
    faqs: [
      {
        question: "Can the system integrate with my existing CRM?",
        answer:
          "Yes, we can connect lead data to most popular CRMs, or set up a simple dashboard if you don't use one yet.",
      },
      {
        question: "What happens when someone submits a form?",
        answer:
          "You get an instant notification, the lead is logged in your dashboard, and — if configured — an automated confirmation email goes to the customer.",
      },
      {
        question: "Can forms be customized per service or landing page?",
        answer:
          "Yes, each form can be tailored with different fields depending on which service or page it's placed on.",
      },
      {
        question: "Is spam protection included?",
        answer:
          "Yes, all forms include validation and spam filtering so you only receive genuine inquiries.",
      },
    ],
    relatedSlugs: ["local-seo-optimization", "review-integration"],
  },
  "review-integration": {
    icon: Star,
    fullDescription:
      "Social proof shortens the path to a decision. We pull verified reviews from Google and other platforms directly into your site with rating widgets and review management tools, so new visitors see real customer trust the moment they land.",
    benefits: [
      "Build instant trust with visible, verified customer reviews",
      "Pull reviews automatically from Google, Yelp, and other platforms",
      "Boost conversion rates by showing social proof site-wide",
      "Manage and respond to reviews from one place",
    ],
    whoItsFor:
      "Great for businesses where trust and reputation drive buying decisions — home services, clinics, auto shops, and any business competing on credibility.",
    faqs: [
      {
        question: "Which platforms can you pull reviews from?",
        answer:
          "We commonly integrate Google Reviews and Yelp, and can add other platforms depending on your industry.",
      },
      {
        question: "Do reviews update automatically?",
        answer:
          "Yes, new reviews sync automatically so your site always reflects your latest reputation without manual updates.",
      },
      {
        question: "Can I choose which reviews to feature?",
        answer:
          "Yes, you can highlight specific reviews on key pages while still displaying your full rating elsewhere.",
      },
      {
        question: "Will this slow down my website?",
        answer:
          "No, reviews are loaded efficiently so they don't impact your site's speed or performance.",
      },
    ],
    relatedSlugs: ["lead-generation-system", "custom-development"],
  },
  "custom-development": {
    icon: Code2,
    fullDescription:
      "When off-the-shelf tools fall short, we build exactly what your business needs: service area maps, appointment scheduling, customer portals and project galleries — all developed cleanly, documented and built to scale with you.",
    benefits: [
      "Get a website built around your exact business workflow",
      "Scale features as your business grows, without starting over",
      "Avoid the limitations of generic templates and page builders",
      "Own a fully custom codebase built for performance",
    ],
    whoItsFor:
      "Best for businesses whose needs go beyond a template — service area maps, booking systems, customer portals, or anything requiring custom logic.",
    faqs: [
      {
        question: "How is this different from a template-based website?",
        answer:
          "Custom development is built specifically around your business logic and workflows, rather than adapting your business to fit a pre-built template's limitations.",
      },
      {
        question: "How long does a custom project typically take?",
        answer:
          "Timelines vary by scope, but most custom builds take 4-8 weeks from planning to launch.",
      },
      {
        question: "Can you add features later as my business grows?",
        answer:
          "Yes, custom-built sites are designed to be extended — new features can be added without rebuilding the foundation.",
      },
      {
        question: "Do I own the code?",
        answer:
          "Yes, you have full ownership of the codebase once the project is delivered.",
      },
    ],
    relatedSlugs: ["ui-ux-design", "ecommerce-solutions"],
  },
  "ui-ux-design": {
    icon: Brush,
    fullDescription:
      "Great design removes friction. We map user journeys, wireframe and prototype interactions, then deliver responsive, mobile-first interfaces validated through usability testing so every screen feels effortless and drives engagement.",
    benefits: [
      "Increase engagement with interfaces designed around real user behavior",
      "Reduce bounce rates with intuitive, frictionless navigation",
      "Build brand trust through consistent, professional visual design",
      "Validate design decisions with prototypes before development",
    ],
    whoItsFor:
      "For businesses that want their website or product to feel as professional as the service they provide — where first impressions and ease of use directly impact conversions.",
    faqs: [
      {
        question: "Do you design before or during development?",
        answer:
          "We design and prototype first, so you can review and approve the experience before any code is written.",
      },
      {
        question: "Can you redesign my existing site without starting from scratch?",
        answer:
          "Yes, we can work within your current structure and content while improving the visual design and user experience.",
      },
      {
        question: "Will the design work well on mobile?",
        answer:
          "Yes, every design is mobile-first and tested across screen sizes before development begins.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "We iterate closely with you through the prototype stage until the design is fully approved.",
      },
    ],
    relatedSlugs: ["custom-development", "ecommerce-solutions"],
  },
  "ecommerce-solutions": {
    icon: ShoppingCart,
    fullDescription:
      "We build storefronts designed to sell: custom product catalogues, secure payment gateway integrations, optimised carts and checkout flows, plus order management that keeps fulfilment simple as your volume grows.",
    benefits: [
      "Sell products online with a fast, conversion-optimized store",
      "Accept payments securely with integrated payment gateways",
      "Manage inventory and orders from one dashboard",
      "Scale from a handful of products to a full catalog",
    ],
    whoItsFor:
      "Suited for businesses ready to sell products online — from small catalogs to growing stores that need reliable checkout and order management.",
    faqs: [
      {
        question: "Which payment gateways can you integrate?",
        answer:
          "We integrate major payment providers depending on your region and preference, ensuring secure, reliable checkout.",
      },
      {
        question: "Can I manage products and orders myself after launch?",
        answer:
          "Yes, you get access to a dashboard to manage your product catalog, inventory, and incoming orders.",
      },
      {
        question: "Can the store integrate with my existing business tools?",
        answer:
          "Yes, we can connect your store to accounting, shipping, or inventory tools you already use.",
      },
      {
        question: "Is the store optimized for mobile shopping?",
        answer:
          "Yes, every store is built mobile-first since most shopping traffic comes from phones.",
      },
    ],
    relatedSlugs: ["custom-development", "ui-ux-design"],
  },
  "ai-automation": {
    icon: Bot,
    fullDescription:
      "Automation gives your team back its time. We connect AI chatbots, workflow automation, CRM and lead follow-up sequences, plus automated reporting and notifications, so repetitive manual work disappears and nothing slips through the cracks.",
    benefits: [
      "Save hours weekly by automating repetitive manual tasks",
      "Respond to customers instantly with AI chatbots",
      "Automate lead follow-up so no inquiry goes cold",
      "Get automated reports without manual data pulling",
    ],
    whoItsFor:
      "Best for businesses looking to reduce manual workload — automating customer responses, lead follow-up, and internal reporting so your team can focus on higher-value work.",
    faqs: [
      {
        question: "What kind of tasks can be automated?",
        answer:
          "Common examples include customer chat responses, lead follow-up sequences, internal notifications, and recurring reports.",
      },
      {
        question: "Do I need technical knowledge to manage the automations?",
        answer:
          "No, automations are set up to run in the background — you don't need to manage or code anything after launch.",
      },
      {
        question: "Can AI automation work alongside my existing CRM or tools?",
        answer:
          "Yes, automations are built to connect with the tools you already use rather than replace them.",
      },
      {
        question: "Is this only chatbots, or does it cover more?",
        answer:
          "It covers much more — workflow automation, follow-up sequences, and reporting, in addition to AI chat if needed.",
      },
    ],
    relatedSlugs: ["lead-generation-system", "review-integration"],
  },
};

export const serviceDetails: ServiceDetail[] = services.map((service) => {
  const extra = extras[service.slug];
  return {
    slug: service.slug,
    title: service.title,
    shortDescription: service.description,
    fullDescription: extra?.fullDescription ?? service.description,
    bulletPoints: service.points,
    icon: extra?.icon ?? Code2,
    benefits: extra?.benefits ?? service.points,
    whoItsFor: extra?.whoItsFor ?? "",
    faqs: extra?.faqs ?? [],
    relatedSlugs: extra?.relatedSlugs ?? [],
  };
});

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}

export const processSteps = [
  { title: "Discover", text: "We learn your goals, audience and competitors before writing a line of code." },
  { title: "Design", text: "Wireframes and prototypes so you see and shape the experience early." },
  { title: "Build", text: "Clean, fast development with automation and SEO baked in from day one." },
  { title: "Launch", text: "Go live, measure, and keep improving with 24/7 support behind you." },
];
