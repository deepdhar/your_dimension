import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects from Your Dimension — digital presence with social proof, AI tele agents, WhatsApp communication, and 3D AR experiences.",
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
};


export default function WorkPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#FAFAF8] pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <FadeIn direction="up">
            <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#A0522D] mb-5">
              Our Work
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#1C1C1A] leading-tight max-w-3xl">
              Projects we&apos;ve been part of.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Work grid */}
      <section className="bg-[#FAFAF8] pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          {/* Notice */}
          <FadeIn direction="up">
            <div className="bg-[#A0522D]/10 border border-[#A0522D]/20 rounded-lg p-4 mb-12 flex gap-3">
              <ExternalLink size={16} className="text-[#A0522D] mt-0.5 shrink-0" />
              <p className="font-body text-sm text-[#6B6560]">
                The projects below are placeholder case studies for demonstration. Replace with actual client work before launch.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <FadeIn key={project.id} direction="up" delay={index * 80}>
                <article className="group bg-[#F5F2EC] border border-[rgba(26,26,24,0.06)] rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  {/* Visual placeholder */}
                  <div className="aspect-[4/3] bg-[#E8E4DC] relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center px-6">
                        <div className="w-16 h-16 rounded-2xl bg-[#1C1C1A]/10 mx-auto mb-3 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-lg bg-[#A0522D]/30" />
                        </div>
                        <p className="font-body text-xs text-[#9A948C]">{project.industry}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="font-body text-xs font-medium bg-[#1C1C1A] text-white px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <p className="font-body text-xs text-[#A0522D] font-medium mb-2">
                      {project.industry}
                    </p>
                    <h2 className="font-display text-xl text-[#1C1C1A] mb-3 leading-tight">
                      {project.title}
                    </h2>
                    <p className="font-body text-sm text-[#6B6560] leading-relaxed mb-5 flex-1">
                      {project.overview.slice(0, 150)}...
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-body text-xs text-[#6B6560] border border-[rgba(26,26,24,0.1)] rounded-full px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/work/${project.slug}`}
                      id={`work-project-${project.id}`}
                      className="font-body text-sm text-[#1C1C1A] flex items-center gap-2 group/link hover:text-[#A0522D] transition-colors duration-200 mt-auto"
                    >
                      View case study
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform duration-200"
                      />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1C1A] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <FadeIn direction="up">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Want to be part of our next project?
            </h2>
            <Link
              href="/contact"
              id="work-bottom-cta"
              className="inline-flex items-center gap-2 font-body text-white/70 hover:text-white text-sm transition-colors duration-200 group"
            >
              Start a conversation
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
