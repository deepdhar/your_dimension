import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business—its customers, challenges, goals, and existing processes. No assumptions, no templates. We ask questions and listen.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We identify the right opportunities, define the solution, and agree on a scope and approach that makes sense for your business and your budget.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design, develop, test, and implement. You stay informed at every stage with clear updates, defined deliverables, and realistic timelines.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We support, optimize, and evolve the digital experience over time. Good solutions are not built once and forgotten.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-[#1C1C1A] section-padding"
      aria-label="Engagement process"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <FadeIn direction="up">
          <div className="mb-16 md:mb-20">
            <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#C07040] mb-4">
              How We Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight max-w-2xl">
              Clear thinking. Thoughtful execution. Measurable progress.
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {steps.map((step, index) => (
            <FadeIn key={step.number} direction="up" delay={index * 80}>
              <div className="bg-[#1C1C1A] p-8 md:p-10 h-full flex flex-col">
                <p className="font-display text-5xl text-white/10 mb-8 leading-none">
                  {step.number}
                </p>
                <h3 className="font-display text-2xl text-white mb-4">{step.title}</h3>
                <p className="font-body text-sm text-white/50 leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={300}>
          <div className="mt-12 pt-10 border-t border-white/10">
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-3xl">
              Clients can expect clear communication throughout, defined deliverables before work begins, realistic timelines, and solutions designed around their actual needs—not what happens to be convenient for us.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
