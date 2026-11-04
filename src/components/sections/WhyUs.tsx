import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle } from "lucide-react";

const differentiators = [
  {
    title: "Solutions tailored to your business",
    desc: "We don't use templates or one-size-fits-all approaches. Every project starts with understanding your specific context.",
  },
  {
    title: "Practical, outcome-oriented thinking",
    desc: "We care about what actually improves your operations or customer experience—not technology for its own sake.",
  },
  {
    title: "Modern and scalable technology",
    desc: "We use current, well-supported tools and frameworks that won't become a liability in two years.",
  },
  {
    title: "Clear communication throughout",
    desc: "You'll always know where the project stands, what's being built, and what comes next.",
  },
  {
    title: "Thoughtful design and engineering",
    desc: "Good design and solid code aren't separate things—they work together and both matter.",
  },
  {
    title: "Long-term improvement and support",
    desc: "We're interested in building lasting relationships, not just delivering a project and disappearing.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-[#FAFAF8] section-padding"
      aria-label="Why Your Dimension"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <FadeIn direction="up">
              <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#A0522D] mb-4">
                Our Approach
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-[#1C1C1A] leading-tight mb-6">
                Technology built around your business—not the other way around.
              </h2>
              <p className="font-body text-[#6B6560] leading-relaxed text-lg">
                There are many agencies and developers. What matters is whether the work they deliver genuinely helps your business. That&apos;s the question we return to throughout every engagement.
              </p>
            </FadeIn>

            {/* Visual element */}
            <FadeIn direction="up" delay={150}>
              <div className="mt-12 p-8 bg-[#F5F2EC] rounded-2xl border border-[rgba(26,26,24,0.06)]">
                <p className="font-display text-2xl text-[#1C1C1A] mb-4 italic">
                  &ldquo;Every business deserves a digital experience that works as hard as they do.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-[#A0522D]" />
                  <p className="font-body text-sm text-[#9A948C]">Your Dimension</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: differentiators */}
          <div>
            <div className="space-y-6">
              {differentiators.map((item, i) => (
                <FadeIn key={item.title} direction="up" delay={i * 60}>
                  <div className="flex gap-4 group">
                    <CheckCircle
                      size={18}
                      className="text-[#A0522D] mt-1 shrink-0"
                    />
                    <div>
                      <p className="font-body font-medium text-[#1C1C1A] mb-1">
                        {item.title}
                      </p>
                      <p className="font-body text-sm text-[#6B6560] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
