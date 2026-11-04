import { FadeIn } from "@/components/ui/FadeIn";

export function BrandStatement() {
  return (
    <section
      id="brand-statement"
      className="bg-[#F5F2EC] section-padding"
      aria-label="Brand statement"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Headline */}
          <div>
            <FadeIn direction="up">
              <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#A0522D] mb-6">
                Our Perspective
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1C1C1A] leading-tight">
                Technology should move your business forward.
              </h2>
            </FadeIn>
          </div>

          {/* Right: Body text */}
          <div className="flex flex-col justify-center">
            <FadeIn direction="up" delay={150}>
              <div className="space-y-5 text-[#6B6560] leading-relaxed">
                <p className="text-lg">
                  Many businesses operate with fragmented systems, outdated websites, manual workflows, or digital experiences that don&apos;t meet what their customers expect. The gap between where a business is and where it could be is often a technology gap—but it&apos;s also a strategy gap.
                </p>
                <p>
                  Your Dimension helps identify these gaps and build practical solutions designed around the actual business—not generic templates or one-size-fits-all platforms. We ask the right questions, understand the context, and then build something that fits.
                </p>
                <p>
                  Whether you need a high-converting website with social proof, automated WhatsApp communication, a 24/7 AI voice tele agent, or 3D AR dish visualization, we focus on outcomes that matter to your business—not technical complexity for its own sake.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats-free metrics - outcomes instead */}
        <FadeIn direction="up" delay={200}>
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(26,26,24,0.1)] border border-[rgba(26,26,24,0.1)]">
            {[
              {
                label: "Understand First",
                desc: "Every engagement begins with understanding your business, not selling a package.",
              },
              {
                label: "Practical Outcomes",
                desc: "We focus on what moves the needle—useful, maintainable, and affordable.",
              },
              {
                label: "Long-term Thinking",
                desc: "Solutions built to grow with your business, not just solve today's problem.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-[#F5F2EC] p-8 md:p-10">
                <p className="font-display text-xl text-[#1C1C1A] mb-3">{item.label}</p>
                <p className="font-body text-sm text-[#6B6560] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
