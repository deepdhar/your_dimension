import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section
      id="contact-cta"
      className="bg-[#1C1C1A] section-padding"
      aria-label="Contact call to action"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="up">
            <div>
              <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#C07040] mb-4">
                Start a Conversation
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
                Have a business challenge in mind?
              </h2>
              <p className="font-body text-white/60 text-lg leading-relaxed">
                Tell us what you&apos;re trying to improve. We&apos;ll explore how the right digital solution can help.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={150}>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
              <Button
                href="/contact"
                size="lg"
                className="bg-white text-[#1C1C1A] hover:bg-[#FAFAF8] border-white"
                id="cta-contact-link"
              >
                Start a Conversation
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button
                href="/services"
                size="lg"
                className="bg-transparent text-white border-white/30 hover:border-white hover:bg-white/5"
                id="cta-services-link"
              >
                Explore Services
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
