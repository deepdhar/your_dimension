export interface Project {
  id: string;
  title: string;
  industry: string;
  overview: string;
  services: string[];
  technologies: string[];
  slug: string;
  category: "Websites" | "AI & Automation" | "Interactive AR" | "Search & Ads";
  challenge: string;
  solution: string;
  approach: string[];
  deliverables: string[];
  outcome: string;
  imageAlt: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "sample-hospitality",
    title: "Sample Project — Replace Before Launch",
    industry: "Hospitality & Tourism",
    overview:
      "A digital presence and direct booking system for a boutique property in Siliguri. Features integrated Instagram reels reviews, YouTube guest testimonials, local Google SEO, and direct WhatsApp reservation automation. This is placeholder content that should be replaced with an actual project before the site goes live.",
    services: [
      "Website (Digital Presence)",
      "SEO (Search Engine Optimization)",
      "WhatsApp Customer Communication",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp Business API", "Google Search Console"],
    slug: "sample-hospitality-project",
    category: "Websites",
    challenge:
      "The property had an outdated website that could not display social proof and lost countless phone inquiries after hours. Booking management was manual and fragmented across WhatsApp chats. This is placeholder content.",
    solution:
      "A modern, responsive website was developed with curated social reviews from Instagram and YouTube directly on the home page. Combined with local Google SEO and automated WhatsApp confirmations, lead capture became effortless. This is placeholder content.",
    approach: [
      "Discovery — Understanding the property, its guests, and peak booking seasons",
      "Social proof curation — Integrating high-impact Instagram reels and YouTube guest reviews",
      "Web development — Fast, mobile-first responsive architecture",
      "WhatsApp automation — Direct enquiry handling and booking confirmations",
      "Local SEO — Google Business Profile optimization and local schema markup",
    ],
    deliverables: [
      "High-converting responsive website",
      "Curated social review feeds from Instagram, Facebook & YouTube",
      "Automated WhatsApp booking reply workflow",
      "Google Business Profile setup and local search optimization",
      "Google Analytics 4 and Meta Pixel tracking",
    ],
    outcome:
      "This is placeholder content. Replace with actual project outcome before launch. Do not publish fabricated metrics or results.",
    imageAlt: "Sample hospitality project — placeholder",
    featured: true,
  },
  {
    id: "sample-restaurant",
    title: "Sample Project — Replace Before Launch",
    industry: "Fine Dining & Cafes",
    overview:
      "Interactive 3D AR menu experience for a premier dining establishment in Siliguri. Guests scan table QR codes to project photorealistic 3D dishes on their table before ordering, supported by 24/7 AI voice phone reservations and targeted Instagram ad campaigns. This is placeholder content that should be replaced with an actual project before the site goes live.",
    services: [
      "Augmented Reality 3D Dish Modelling",
      "AI Tele Agent",
      "Online Advertising",
    ],
    technologies: ["WebAR", "Three.js / GLTF", "Conversational Voice AI", "Meta Ads Manager"],
    slug: "sample-dining-project",
    category: "Interactive AR",
    challenge:
      "Diners often hesitated when ordering premium signature dishes without seeing presentation or portion sizes. Meanwhile, phone staff was overwhelmed during dinner rushes, missing table booking calls. This is placeholder content.",
    solution:
      "Photorealistic 3D models of chef signature dishes were scanned and served via instant WebAR QR codes on every table. A 24/7 AI tele agent was deployed to answer incoming booking calls without putting guests on hold. This is placeholder content.",
    approach: [
      "Photogrammetry scanning — High-resolution 3D asset capture of signature dishes",
      "WebAR engineering — Frictionless browser-based viewer with zero app downloads",
      "AI tele agent configuration — Custom trained on menu, seating slots, and directions",
      "Targeted Meta Ads — Instagram reels campaign highlighting the interactive dining experience",
      "Tabletop collaterals — Custom branded QR acrylic stands and menu cards",
    ],
    deliverables: [
      "8 interactive 3D AR signature dish models",
      "Instant smartphone WebAR experience (iOS & Android compatible)",
      "Branded tabletop QR code stands and print-ready menu collaterals",
      "24/7 AI voice booking agent with instant SMS summary alerts",
      "Targeted Instagram and Facebook visual advertising campaign",
    ],
    outcome:
      "This is placeholder content. Replace with actual project outcome before launch. Do not publish fabricated metrics or results.",
    imageAlt: "Sample dining 3D AR menu project — placeholder",
    featured: true,
  },
  {
    id: "sample-clinic-coaching",
    title: "Sample Project — Replace Before Launch",
    industry: "Healthcare & Coaching Institutes",
    overview:
      "Comprehensive digital inquiry automation for a regional medical center and academy. Features a 24/7 AI tele agent handling appointment calls, automated WhatsApp student & patient reminders, and top-3 local Google SEO visibility. This is placeholder content that should be replaced with an actual project before the site goes live.",
    services: [
      "AI Tele Agent",
      "WhatsApp Customer Communication",
      "SEO (Search Engine Optimization)",
    ],
    technologies: ["Voice AI Engine", "WhatsApp Cloud API", "Google Search Console", "Next.js"],
    slug: "sample-clinic-project",
    category: "AI & Automation",
    challenge:
      "Front-desk staff spent over 4 hours daily repeating routine FAQ answers over the phone and manually confirming appointments. Many patients and prospective students missed appointments due to lack of timely reminders. This is placeholder content.",
    solution:
      "An automated AI voice tele agent was set up to answer phone inquiries and book appointments 24/7. Connected to WhatsApp, patients and students receive instant confirmations and timely reminders automatically. This is placeholder content.",
    approach: [
      "Call log analysis — Identifying top 20 repetitive questions and appointment workflows",
      "Voice AI configuration — Natural speech recognition with clinic scheduling logic",
      "WhatsApp API integration — Automated booking confirmations and 24-hour reminder broadcasts",
      "Local search audit — Optimizing Google Maps ranking and medical specialty keywords",
      "Staff onboarding and dashboard handover",
    ],
    deliverables: [
      "24/7 AI tele voice agent with automated scheduling",
      "Automated WhatsApp appointment confirmations and reminder sequences",
      "Google Business Profile optimization and local citation buildup",
      "Lead synchronization with staff management spreadsheet",
      "Dedicated staff dashboard for call recordings and summaries",
    ],
    outcome:
      "This is placeholder content. Replace with actual project outcome before launch. Do not publish fabricated metrics or results.",
    imageAlt: "Sample inquiry automation project — placeholder",
    featured: true,
  },
];
