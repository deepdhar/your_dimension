import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/ui/ContactForm";
import { MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Your Dimension. Tell us about your business challenge and we'll explore how the right digital solution can help.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#FAFAF8] pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <FadeIn direction="up">
            <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#A0522D] mb-5">
              Get in Touch
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#1C1C1A] leading-tight mb-6 max-w-3xl">
              Have a business challenge in mind?
            </h1>
            <p className="font-body text-[#6B6560] text-lg leading-relaxed max-w-xl">
              Tell us what you&apos;re trying to improve. We&apos;ll explore how the right digital solution can help.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-[#FAFAF8] pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Sidebar */}
            <div className="order-2 lg:order-1">
              <FadeIn direction="up" delay={150}>
                <div className="lg:sticky lg:top-28 space-y-10">
                  <div>
                    <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#9A948C] mb-4">
                      Location
                    </p>
                    <div className="flex items-start gap-3 text-[#6B6560]">
                      <MapPin size={16} className="text-[#A0522D] mt-0.5 shrink-0" />
                      <div className="font-body text-sm leading-relaxed">
                        <p className="font-medium text-[#1C1C1A]">Your Dimension</p>
                        <p>Siliguri, West Bengal</p>
                        <p>India — 734003</p>
                        <p>District Darjeeling</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#9A948C] mb-4">
                      Response Time
                    </p>
                    <div className="flex items-start gap-3">
                      <Clock size={16} className="text-[#A0522D] mt-0.5 shrink-0" />
                      <p className="font-body text-sm text-[#6B6560] leading-relaxed">
                        We aim to respond to all enquiries within 1–2 business days.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-[#F5F2EC] rounded-xl border border-[rgba(26,26,24,0.06)]">
                    <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#9A948C] mb-3">
                      What to expect
                    </p>
                    <ul className="space-y-3">
                      {[
                        "A thorough read of your enquiry",
                        "A response with questions if needed",
                        "An exploratory call to understand your needs",
                        "A clear proposal if we're a good fit",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[#A0522D] shrink-0" />
                          <span className="font-body text-sm text-[#6B6560] leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <FadeIn direction="up">
                <ContactForm />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
