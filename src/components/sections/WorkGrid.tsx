import { FadeIn } from "@/components/ui/FadeIn";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export function WorkGrid({ limit }: { limit?: number }) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section
      id="work"
      className="bg-[#F5F2EC] section-padding"
      aria-label="Selected work"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#A0522D] mb-4">
                Selected Work
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-[#1C1C1A] leading-tight">
                Projects we&apos;ve
                <br />
                been part of.
              </h2>
            </div>
            {limit && (
              <Link
                href="/work"
                id="work-view-all"
                className="font-body text-sm text-[#6B6560] hover:text-[#1C1C1A] flex items-center gap-2 group transition-colors duration-200 self-start md:self-auto"
              >
                View all work
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            )}
          </div>
        </FadeIn>

        {/* Notice for placeholder content */}
        <FadeIn direction="up" delay={100}>
          <div className="bg-[#A0522D]/10 border border-[#A0522D]/20 rounded-lg p-4 mb-10 flex gap-3">
            <ExternalLink size={16} className="text-[#A0522D] mt-0.5 shrink-0" />
            <p className="font-body text-sm text-[#6B6560]">
              The projects below are placeholder case studies for demonstration purposes. Replace with actual client work before launch.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={index * 80}>
              <article className="group bg-[#FAFAF8] border border-[rgba(26,26,24,0.06)] rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
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

                <div className="p-7">
                  <p className="font-body text-xs text-[#A0522D] font-medium mb-2">
                    {project.industry}
                  </p>
                  <h3 className="font-display text-xl text-[#1C1C1A] mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-[#6B6560] leading-relaxed mb-5">
                    {project.overview.slice(0, 120)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="font-body text-xs text-[#6B6560] border border-[rgba(26,26,24,0.1)] rounded-full px-3 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/work/${project.slug}`}
                    id={`project-link-${project.id}`}
                    className="font-body text-sm text-[#1C1C1A] flex items-center gap-2 group/link hover:text-[#A0522D] transition-colors duration-200"
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
  );
}
