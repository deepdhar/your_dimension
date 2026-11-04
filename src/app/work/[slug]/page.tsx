import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

type Params = { slug: string };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.overview,
    alternates: { canonical: `${siteConfig.url}/work/${slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-[#FAFAF8] pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <FadeIn direction="up">
            <Button
              href="/work"
              variant="ghost"
              className="mb-8 pl-0 text-[#6B6560] hover:text-[#1C1C1A] flex items-center gap-2 group"
              id="case-study-back"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
              All Work
            </Button>

            <div className="bg-[#A0522D]/10 border border-[#A0522D]/20 rounded-lg p-4 mb-10 flex gap-3 max-w-2xl">
              <ExternalLink size={16} className="text-[#A0522D] mt-0.5 shrink-0" />
              <p className="font-body text-sm text-[#6B6560]">
                This is a placeholder case study. Replace with actual project content before launch.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="font-body text-xs font-medium bg-[#1C1C1A] text-white px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="font-body text-xs text-[#A0522D] font-medium">
                {project.industry}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1C1C1A] leading-tight max-w-3xl mb-6">
              {project.title}
            </h1>
            <p className="font-body text-[#6B6560] text-lg leading-relaxed max-w-2xl">
              {project.overview}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Visual placeholder */}
      <section className="bg-[#E8E4DC] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="aspect-video rounded-2xl bg-[#D4D0C8] flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-3xl bg-[#1C1C1A]/10 mx-auto mb-4 flex items-center justify-center">
                <div className="w-10 h-10 rounded-xl bg-[#A0522D]/30" />
              </div>
              <p className="font-body text-sm text-[#9A948C]">Project image — Replace before launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case study content */}
      <section className="bg-[#FAFAF8] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <FadeIn direction="up">
                <div className="lg:sticky lg:top-28 space-y-8">
                  <div>
                    <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#9A948C] mb-3">
                      Services
                    </p>
                    <ul className="space-y-2">
                      {project.services.map((s) => (
                        <li key={s} className="font-body text-sm text-[#6B6560]">{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#9A948C] mb-3">
                      Technology
                    </p>
                    <ul className="space-y-2">
                      {project.technologies.map((t) => (
                        <li key={t} className="font-body text-sm text-[#6B6560]">{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#9A948C] mb-3">
                      Deliverables
                    </p>
                    <ul className="space-y-2">
                      {project.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[#A0522D] shrink-0" />
                          <span className="font-body text-sm text-[#6B6560]">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2 order-1 lg:order-2 space-y-12">
              <FadeIn direction="up">
                <div>
                  <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#9A948C] mb-4">
                    The Challenge
                  </p>
                  <p className="font-body text-[#6B6560] leading-relaxed text-lg">
                    {project.challenge}
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={80}>
                <div>
                  <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#9A948C] mb-4">
                    The Solution
                  </p>
                  <p className="font-body text-[#6B6560] leading-relaxed text-lg">
                    {project.solution}
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={150}>
                <div>
                  <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#9A948C] mb-4">
                    Our Approach
                  </p>
                  <ul className="space-y-3">
                    {project.approach.map((step) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#A0522D] shrink-0" />
                        <span className="font-body text-[#6B6560] leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={200}>
                <div className="bg-[#F5F2EC] rounded-2xl p-8 border border-[rgba(26,26,24,0.06)]">
                  <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#9A948C] mb-4">
                    Outcome
                  </p>
                  <p className="font-body text-[#6B6560] leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1C1A] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <FadeIn direction="up">
            <h2 className="font-display text-4xl text-white mb-6">
              Have a similar challenge?
            </h2>
            <Button
              href="/contact"
              className="bg-white text-[#1C1C1A] hover:bg-[#FAFAF8] border-white"
              size="lg"
              id="case-study-cta"
            >
              Discuss Your Project
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
