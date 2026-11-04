import { FadeIn } from "@/components/ui/FadeIn";
import { Hotel, Utensils, GraduationCap, ShoppingBag, Briefcase, TrendingUp } from "lucide-react";

const industries = [
  {
    icon: Hotel,
    title: "Hotels & Resorts",
    desc: "Boutique properties and resorts benefit from high-converting websites, authentic social reviews from Instagram and YouTube, and 24/7 AI booking agents.",
  },
  {
    icon: Utensils,
    title: "Restaurants & Cafes",
    desc: "Dining establishments mesmerize diners with interactive 3D AR dish menus via table QR codes, social proof embeds, and automated reservation management.",
  },
  {
    icon: GraduationCap,
    title: "Education & Coaching",
    desc: "Institutes and academies reduce admin overload with automated WhatsApp student updates, AI phone inquiry handling, and top local SEO visibility.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Showrooms",
    desc: "Local retailers attract more shoppers through top Google Search rankings, targeted online Meta ads, and direct WhatsApp customer communication.",
  },
  {
    icon: Briefcase,
    title: "Healthcare & Clinics",
    desc: "Specialists and healthcare providers ensure no patient call goes unanswered with 24/7 AI voice scheduling and timely automated appointment reminders.",
  },
  {
    icon: TrendingUp,
    title: "Growing Startups & SMEs",
    desc: "Growing companies accelerate customer acquisition with targeted online advertising, professional SEO, and automated lead nurturing funnels.",
  },
];

export function Industries() {
  return (
    <section
      id="industries"
      className="bg-[#F5F2EC] section-padding"
      aria-label="Industries we serve"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <FadeIn direction="up">
          <div className="mb-16">
            <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#A0522D] mb-4">
              Industries
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-[#1C1C1A] leading-tight">
              Built for businesses
              <br />
              across sectors.
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <FadeIn key={industry.title} direction="up" delay={i * 60}>
                <div className="bg-[#FAFAF8] border border-[rgba(26,26,24,0.06)] rounded-xl p-7 hover:border-[rgba(26,26,24,0.15)] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-[#A0522D]/10 flex items-center justify-center mb-5">
                    <Icon size={18} className="text-[#A0522D]" />
                  </div>
                  <h3 className="font-display text-xl text-[#1C1C1A] mb-3">{industry.title}</h3>
                  <p className="font-body text-sm text-[#6B6560] leading-relaxed">{industry.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
