import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { Industries } from "@/components/sections/Industries";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <ServicesGrid />
      <ProcessSection />
      <WorkGrid limit={3} />
      <WhyUs />
      <Industries />
      <ContactCTA />
    </>
  );
}
