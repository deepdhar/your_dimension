import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Your Dimension — a digital solutions company based in Siliguri, West Bengal. We believe every business deserves a better digital experience.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

const values = [
  {
    title: "Start with the problem",
    desc: "Every business has its own challenges and opportunities. We learn them before suggesting any technology.",
  },
  {
    title: "Choose tools based on the problem",
    desc: "Technology should be chosen because it solves the problem well—not because it's trending.",
  },
  {
    title: "Build things that last",
    desc: "Good digital solutions should be useful, intuitive, and maintainable. Not just impressive at launch.",
  },
  {
    title: "Communicate honestly",
    desc: "Clear timelines, honest assessments, and regular updates. We say what we mean and mean what we say.",
  },
  {
    title: "Design and engineering together",
    desc: "Strong collaboration between design and development produces better outcomes than treating them as separate concerns.",
  },
  {
    title: "Long-term relationships",
    desc: "A good digital partner stays involved after launch—learning what works, improving what doesn't.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#FAFAF8] pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <FadeIn direction="up">
            <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#A0522D] mb-5">
              About Us
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#1C1C1A] leading-tight max-w-4xl">
              We believe every business deserves a better digital experience.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#F5F2EC] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <FadeIn direction="up">
              <div>
                <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#9A948C] mb-5">
                  Our Philosophy
                </p>
                <div className="space-y-5 text-[#6B6560] leading-relaxed text-lg">
                  <p>
                    Your Dimension was founded on a straightforward belief: technology should work for businesses, not the other way around.
                  </p>
                  <p>
                    Too often, companies invest in digital tools that don&apos;t fit their actual workflows, or build websites that look good but don&apos;t help their customers. The result is wasted investment and missed opportunity.
                  </p>
                  <p>
                    We engage differently. We spend time understanding how a business actually works—its customers, its processes, its goals—before suggesting any technology. Then we build something that fits.
                  </p>
                  <p>
                    Our work spans website development, custom applications, business automation, and digital transformation consulting. What stays constant is the approach: understand first, build thoughtfully, improve continuously.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={150}>
              <div className="space-y-6">
                <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#9A948C] mb-5">
                  What We Believe
                </p>
                {values.map((value) => (
                  <div key={value.title} className="pb-5 border-b border-[rgba(26,26,24,0.08)] last:border-0">
                    <p className="font-display text-lg text-[#1C1C1A] mb-1">{value.title}</p>
                    <p className="font-body text-sm text-[#6B6560] leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-[#FAFAF8] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <FadeIn direction="up">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#A0522D] mb-5">
                  Where We Are
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-[#1C1C1A] mb-6">
                  Based in Siliguri, serving businesses everywhere.
                </h2>
                <p className="font-body text-[#6B6560] leading-relaxed mb-6">
                  We&apos;re rooted in Siliguri, West Bengal, with a particular appreciation for the region&apos;s growing economy across hospitality, tourism, education, and retail. We work with businesses locally and beyond.
                </p>
                <div className="flex items-start gap-3 text-[#6B6560]">
                  <MapPin size={18} className="text-[#A0522D] mt-0.5 shrink-0" />
                  <div className="font-body text-sm leading-relaxed">
                    <p className="font-medium text-[#1C1C1A]">Your Dimension</p>
                    <p>Siliguri, West Bengal, India — 734003</p>
                    <p>District Darjeeling</p>
                  </div>
                </div>
              </div>

              {/* Visual accent */}
              <div className="relative">
                <div className="bg-[#F5F2EC] rounded-2xl p-10 border border-[rgba(26,26,24,0.06)]">
                  <div className="space-y-6">
                    {["Digital Presence", "Custom Applications", "Process Automation", "Digital Strategy"].map(
                      (item, i) => (
                        <div
                          key={item}
                          className="flex items-center gap-4"
                          style={{ opacity: 1 - i * 0.15 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-[#A0522D]" />
                          <p className="font-display text-xl text-[#1C1C1A]">{item}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1C1A] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <FadeIn direction="up">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Let&apos;s work together.
            </h2>
            <p className="font-body text-white/60 text-lg mb-8 max-w-lg mx-auto">
              Tell us what you&apos;re working on. We&apos;d be happy to explore how we can help.
            </p>
            <Button
              href="/contact"
              className="bg-white text-[#1C1C1A] hover:bg-[#FAFAF8] border-white"
              size="lg"
              id="about-cta"
            >
              Start a Conversation
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
