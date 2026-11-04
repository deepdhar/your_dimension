// Site configuration
export const siteConfig = {
  name: "Your Dimension",
  tagline: "Your business. A better dimension.",
  supportingLine:
    "Digital experiences and smarter systems built around the way your business works.",
  description:
    "Your Dimension helps businesses build a stronger digital presence, simplify operations, and unlock new opportunities through thoughtful technology and design. Based in Siliguri, West Bengal.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdimension.in",
  location: {
    city: "Siliguri",
    state: "West Bengal",
    country: "India",
    pincode: "734003",
    district: "Darjeeling",
  },
  contact: {
    email: process.env.CONTACT_TO_EMAIL || "hello@yourdimension.in",
  },
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
