import { Globe, Search, PhoneCall, MessageCircle, QrCode, Megaphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  benefit: string;
  slug: string;
  problem: string;
  deliverables: string[];
  approach: string;
  cta: string;
}

export const services: Service[] = [
  {
    id: "website-digital-presence",
    title: "Website (Digital Presence)",
    shortDescription:
      "Modern, high-converting websites integrated with live customer reviews from Instagram, Facebook, and YouTube to turn social proof into paying customers.",
    icon: Globe,
    benefit: "Showcase genuine customer love and video reviews from Instagram, Facebook, and YouTube directly on your website to build immediate trust.",
    slug: "website-digital-presence",
    problem:
      "Most traditional business websites feel static and disconnected from the active conversations happening on social media. Modern customers verify credibility through authentic Instagram reels, Facebook comments, and YouTube video reviews before making decisions—without these, visitors hesitate and leave.",
    deliverables: [
      "Custom responsive website design (mobile, tablet, desktop)",
      "Curated social review feeds from Instagram, Facebook & YouTube",
      "Video testimonial carousels and UGC social proof embeds",
      "High-speed performance and Core Web Vitals optimization",
      "Seamless enquiry, booking, and WhatsApp contact buttons",
      "Google Analytics 4 and Meta Pixel integration",
      "Domain setup, SSL certificate, and managed cloud hosting",
    ],
    approach:
      "We design an editorial, mobile-first website tailored to your brand, then seamlessly integrate genuine social proof—reviews, video testimonials, and user-generated content from Instagram, Facebook, and YouTube—creating undeniable credibility the moment visitors arrive.",
    cta: "Build Your Website",
  },
  {
    id: "search-engine-optimization",
    title: "SEO (Search Engine Optimization)",
    shortDescription:
      "Comprehensive search engine and local Google Business Profile optimization to ensure your business ranks at the top when high-intent customers search.",
    icon: Search,
    benefit: "Get discovered on Google by local customers and travelers at the exact moment they are looking for your services.",
    slug: "search-engine-optimization",
    problem:
      "Without systematic SEO and local search optimization, your business remains virtually invisible to customers searching on Google for hotels, cafes, clinics, retail shops, and professional services in your area. Your competitors win those customers simply by ranking first.",
    deliverables: [
      "In-depth local keyword research and competitor ranking analysis",
      "On-page technical SEO, schema markup, and meta tag architecture",
      "Google Business Profile (GBP) complete setup, verification & ranking audit",
      "Local citation building and regional directory optimization",
      "Google Search Console & Google Analytics 4 performance tracking",
      "Content structure recommendations to capture high-intent search terms",
      "Monthly search visibility and keyword progress reports",
    ],
    approach:
      "We optimize your website's technical foundation, structured data, and Google Business Profile for high-intent queries, ensuring your business consistently appears in Google's Local 3-Pack and organic search results.",
    cta: "Boost Your Search Ranking",
  },
  {
    id: "ai-tele-agent",
    title: "AI Tele Agent",
    shortDescription:
      "Intelligent 24/7 conversational voice AI tele agents that answer phone calls, manage table and room bookings, answer customer queries, and qualify leads automatically.",
    icon: PhoneCall,
    benefit: "Never miss a reservation, client call, or urgent enquiry again—even after hours or during peak rushes.",
    slug: "ai-tele-agent",
    problem:
      "Busy hotels, restaurants, healthcare centers, and service businesses regularly miss customer calls during peak hours, weekends, or late evenings. Every unanswered call is a lost customer who books with a competitor instead, while round-the-clock reception staff is costly and difficult to maintain.",
    deliverables: [
      "Custom conversational AI voice agent configured for your business",
      "Automated table, room, or consultation reservation workflows",
      "Intelligent FAQ resolution (pricing, hours, location, amenities, menus)",
      "Natural, human-sounding speech with multi-lingual voice recognition",
      "Instant call summaries and lead alerts dispatched via SMS or email",
      "Smart live-staff transfer fallback for specialized escalations",
      "Integration with your calendar, CRM, or booking management system",
    ],
    approach:
      "We train a custom conversational voice agent on your business knowledge base, services, menus, and booking policies. The agent answers inbound calls with zero hold time, handles enquiries naturally, confirms bookings, and logs customer information seamlessly.",
    cta: "Deploy an AI Voice Agent",
  },
  {
    id: "whatsapp-communication",
    title: "WhatsApp Customer Communication",
    shortDescription:
      "Direct WhatsApp Business automation for instant booking confirmations, order and service updates, automated lead follow-ups, and customer engagement.",
    icon: MessageCircle,
    benefit: "Engage customers on India's #1 communication platform with 98% open rates and instantaneous response times.",
    slug: "whatsapp-communication",
    problem:
      "Customers rarely check emails or answer calls from unknown numbers, causing enquiries to go cold and appointments to be forgotten. WhatsApp is where people read messages within minutes, but answering chats manually all day is impossible as a business grows.",
    deliverables: [
      "Official WhatsApp Business API setup and verification guidance",
      "Automated greeting, menu navigation, and lead qualification flows",
      "Automated booking confirmations, appointment reminders, and receipts",
      "Broadcast updates for special offers, seasonal promotions, and events",
      "Shared multi-agent team inbox for your staff to collaborate on chats",
      "Website chat widget linking visitors directly to WhatsApp",
      "Lead synchronization with your CRM or Google Sheets",
    ],
    approach:
      "We connect your business touchpoints to the WhatsApp Business API with automated conversational workflows. From instant enquiry responses to pre-arrival reminders and review requests, we turn WhatsApp into your highest-converting engagement channel.",
    cta: "Set Up WhatsApp Automation",
  },
  {
    id: "ar-3d-modelling-dishes",
    title: "Augmented Reality 3D Dish Modelling & QR",
    shortDescription:
      "Interactive 3D AR food menus where diners scan a table QR code with their smartphone to view photorealistic 3D dishes on their table before ordering.",
    icon: QrCode,
    benefit: "Boost average order value by 20–35% and mesmerize guests with realistic 3D food previews right on their phone—no app download required.",
    slug: "ar-3d-modelling-dishes",
    problem:
      "Traditional text or PDF menus fail to show diners what specialty dishes look like, causing ordering hesitation, slower table turns, and repetitive questions to waitstaff. Customers eat with their eyes, especially the younger, social-media-active generation that loves visual experiences.",
    deliverables: [
      "High-precision photogrammetry 3D scanning and digital modelling of dishes",
      "Instant browser-based WebAR viewer (works on iOS Safari and Android Chrome)",
      "Custom branded tabletop QR code displays, acrylic stands, and physical menu inserts",
      "Full 360° dish rotation, realistic textures, and portion visualization",
      "Dish descriptions, allergy information, and price integration",
      "Engagement analytics tracking QR scans and popular dish views",
      "Seasonal 3D menu updates and new dish additions",
    ],
    approach:
      "We create photorealistic 3D digital replicas of your restaurant or cafe's signature dishes and embed them into a frictionless WebAR viewer. Guests simply scan the QR code with their phone camera to project life-size dishes directly onto their table.",
    cta: "Explore 3D AR Menus",
  },
  {
    id: "online-advertising",
    title: "Online Advertising (Meta & Google Ads)",
    shortDescription:
      "Targeted digital advertising across Instagram, Facebook, and Google Search designed to drive predictable customer visits, inquiries, and revenue.",
    icon: Megaphone,
    benefit: "Transform ad budgets into reliable foot traffic, direct bookings, and qualified business inquiries with transparent ROI.",
    slug: "online-advertising",
    problem:
      "Many businesses waste marketing budgets boosting random social media posts with no targeting, conversion tracking, or creative strategy. Without a structured campaign funnel, ad spend disappears without generating verifiable customers.",
    deliverables: [
      "Meta Ads campaigns across Instagram & Facebook (Feeds, Reels & Stories)",
      "Google Search & Local Services targeted keyword advertising",
      "Compelling visual ad creatives, copywriting, and promotion designs",
      "Precise geofencing and demographic audience targeting",
      "Meta Pixel & Google Conversion tracking for transparent ROI measurement",
      "A/B creative testing to maximize click-through and conversion rates",
      "Clear bi-weekly performance reporting with cost-per-lead metrics",
    ],
    approach:
      "We design laser-targeted campaigns focused on high-intent local customers and visitors in your region. By combining high-quality creatives with rigorous audience testing and tracking, we ensure every rupee invested delivers measurable growth.",
    cta: "Launch Online Ads",
  },
];
