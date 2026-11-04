import type { Metadata } from "next";
import { services } from "@/data/services";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the digital services offered by Your Dimension: Websites with social review integration, Local & Technical SEO, AI Tele Agents, WhatsApp customer communication, 3D AR dish modelling with QR, and high-ROI online advertising.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#FAFAF8] pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <FadeIn direction="up">
            <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#A0522D] mb-5">
              Our Services
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#1C1C1A] leading-tight mb-6 max-w-3xl">
              Digital solutions built around your business.
            </h1>
            <p className="font-body text-[#6B6560] text-lg leading-relaxed max-w-2xl">
              Every service we offer is rooted in the same principle: technology should solve a real business problem. We work with you to understand the problem first, then build the right solution.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services detail */}
      <section className="bg-[#FAFAF8] pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="space-y-0">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`py-16 md:py-20 border-b border-[rgba(26,26,24,0.08)] ${
                    index === services.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
                    {/* Left */}
                    <div className="lg:col-span-2">
                      <FadeIn direction="up">
                        <div className="sticky top-28">
                          <div className="w-12 h-12 rounded-xl bg-[#F5F2EC] flex items-center justify-center mb-6">
                            <Icon size={22} className="text-[#A0522D]" />
                          </div>
                          <h2 className="font-display text-3xl md:text-4xl text-[#1C1C1A] mb-4 leading-tight">
                            {service.title}
                          </h2>
                          <p className="font-body text-[#6B6560] leading-relaxed mb-6">
                            {service.shortDescription}
                          </p>
                          <p className="font-body text-sm text-[#A0522D] font-medium">
                            {service.benefit}
                          </p>
                        </div>
                      </FadeIn>
                    </div>

                    {/* Right */}
                    <div className="lg:col-span-3">
                      <FadeIn direction="up" delay={100}>
                        <div className="space-y-8">
                          {/* Problem */}
                          <div>
                            <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#9A948C] mb-3">
                              The Challenge
                            </p>
                            <p className="font-body text-[#6B6560] leading-relaxed">
                              {service.problem}
                            </p>
                          </div>

                          {/* Approach */}
                          <div>
                            <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#9A948C] mb-3">
                              Our Approach
                            </p>
                            <p className="font-body text-[#6B6560] leading-relaxed">
                              {service.approach}
                            </p>
                          </div>

                          {/* Deliverables */}
                          <div>
                            <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#9A948C] mb-4">
                              Typical Deliverables
                            </p>
                            <ul className="space-y-2.5">
                              {service.deliverables.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#A0522D] shrink-0" />
                                  <span className="font-body text-sm text-[#6B6560] leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA */}
                          <div className="pt-4">
                            <Button
                              href="/contact"
                              variant="secondary"
                              id={`service-cta-${service.id}`}
                            >
                              {service.cta}
                              <ArrowRight size={15} className="ml-2" />
                            </Button>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#1C1C1A] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <FadeIn direction="up">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Not sure which service fits?
            </h2>
            <p className="font-body text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Tell us about your business and what you&apos;re trying to achieve. We&apos;ll help you figure out the right starting point.
            </p>
            <Button
              href="/contact"
              className="bg-white text-[#1C1C1A] hover:bg-[#FAFAF8] border-white"
              size="lg"
              id="services-bottom-cta"
            >
              Request a Quote
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
