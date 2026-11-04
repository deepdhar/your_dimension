import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-[#FAFAF8] overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#1C1C1A 1px, transparent 1px), linear-gradient(90deg, #1C1C1A 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Warm accent circle */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #A0522D 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-3">
            <FadeIn direction="up" delay={100}>
              <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#A0522D] mb-6">
                Digital Solutions · Siliguri
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={200}>
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#1C1C1A] leading-[0.95] tracking-tight mb-4">
                Your <span className="text-[#A0522D]">Dimension</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={300}>
              <p className="font-display text-2xl sm:text-3xl md:text-4xl text-[#1C1C1A]/80 italic mb-6 leading-tight">
                A better dimension for your business.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={400}>
              <p className="font-body text-[#6B6560] text-base md:text-lg leading-relaxed max-w-lg mb-10">
                From modern websites with live social reviews and local SEO to 24/7 AI tele agents, automated WhatsApp communication, and interactive 3D AR dish menus—we build technology that drives tangible customer growth.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={450}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="/contact"
                  size="lg"
                  id="hero-cta-primary"
                >
                  Let&apos;s Talk
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button
                  href="/services"
                  size="lg"
                  variant="secondary"
                  id="hero-cta-services"
                >
                  Explore Services
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right: Visual */}
          <div className="lg:col-span-2 hidden lg:block">
            <FadeIn direction="left" delay={300}>
              <div className="relative">
                {/* Abstract composition */}
                <div className="relative w-full aspect-square max-w-sm ml-auto">
                  {/* Main rectangle */}
                  <div className="absolute inset-0 rounded-2xl bg-[#F5F2EC] border border-[rgba(26,26,24,0.06)]" />

                  {/* Inner composition */}
                  <div className="absolute inset-6 flex flex-col gap-3">
                    <div className="flex gap-3 flex-1">
                      <div className="flex-1 rounded-xl bg-[#1C1C1A]" />
                      <div className="w-1/3 rounded-xl bg-[#E8E4DC]" />
                    </div>
                    <div className="flex gap-3 flex-1">
                      <div className="w-2/5 rounded-xl bg-[#C07040]/20" />
                      <div className="flex-1 rounded-xl bg-[#E8E4DC]" />
                    </div>
                    <div className="rounded-xl bg-[#A0522D]/10 h-16 flex items-center px-4">
                      <div className="w-24 h-2 rounded-full bg-[#A0522D]/30" />
                    </div>
                  </div>

                  {/* Floating card */}
                  <div className="absolute -bottom-4 -left-6 bg-white rounded-xl p-4 shadow-lg border border-[rgba(26,26,24,0.06)]">
                    <p className="font-body text-xs text-[#6B6560] mb-1">Interactive Experience</p>
                    <p className="font-display text-sm text-[#1C1C1A]">AI Agents &amp; 3D AR Menus</p>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-3 -right-3 bg-[#A0522D] text-white rounded-full px-4 py-1.5">
                    <p className="font-body text-xs font-medium">Web · SEO · AI · AR</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="mt-20 hidden md:flex items-center gap-3 text-[#9A948C]">
          <div className="w-8 h-px bg-[#9A948C]" />
          <p className="font-body text-xs tracking-widest-custom uppercase">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
}
