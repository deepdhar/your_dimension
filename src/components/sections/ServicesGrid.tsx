import { FadeIn } from "@/components/ui/FadeIn";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="bg-[#FAFAF8] section-padding"
      aria-label="Services overview"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-[#A0522D] mb-4">
                What We Do
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-[#1C1C1A] leading-tight">
                Services built
                <br />
                for real business.
              </h2>
            </div>
            <Link
              href="/services"
              id="services-view-all"
              className="font-body text-sm text-[#6B6560] hover:text-[#1C1C1A] flex items-center gap-2 group transition-colors duration-200 self-start md:self-auto"
            >
              View all services
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(26,26,24,0.08)]">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.id} direction="up" delay={index * 60}>
                <div className="group bg-[#FAFAF8] p-8 md:p-10 hover:bg-[#F5F2EC] transition-colors duration-300 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[#F5F2EC] group-hover:bg-[#1C1C1A] flex items-center justify-center transition-colors duration-300 mb-5">
                      <Icon
                        size={18}
                        className="text-[#A0522D] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <h3 className="font-display text-xl text-[#1C1C1A] mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-[#6B6560] leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-[rgba(26,26,24,0.06)]">
                    <p className="font-body text-xs text-[#9A948C] mb-4 leading-relaxed">
                      {service.benefit}
                    </p>
                    <Link
                      href={`/services#${service.id}`}
                      id={`service-learn-more-${service.id}`}
                      className="font-body text-sm text-[#1C1C1A] flex items-center gap-2 group/link hover:text-[#A0522D] transition-colors duration-200"
                    >
                      Learn more
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform duration-200"
                      />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
