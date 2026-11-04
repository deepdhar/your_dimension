import Link from "next/link";
import { MapPin, Mail, ExternalLink } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/config";
import { services } from "@/data/services";

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-[#1C1C1A] text-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4" id="footer-logo">
              <span className="font-display text-2xl text-white">Your Dimension</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Digital Solutions & Business Transformation
            </p>
            <div className="flex items-start gap-2 text-white/50 text-sm mb-6">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[#C07040]" />
              <span className="leading-relaxed">
                Siliguri, West Bengal, India — 734003
                <br />
                District Darjeeling
              </span>
            </div>
            {siteConfig.contact.email && siteConfig.contact.email !== "hello@yourdimension.in" && (
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200"
                id="footer-email"
              >
                <Mail size={15} />
                {siteConfig.contact.email}
              </a>
            )}
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-white/40 mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    id={`footer-nav-${link.label.toLowerCase()}`}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200 link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  id="footer-privacy"
                  className="text-white/60 hover:text-white text-sm transition-colors duration-200 link-underline"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-body text-xs font-medium tracking-widest-custom uppercase text-white/40 mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    id={`footer-service-${service.id}`}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200 link-underline"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {year} Your Dimension. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={siteConfig.social.linkedin}
              id="footer-linkedin"
              aria-label="LinkedIn"
              className="text-white/40 hover:text-white transition-colors duration-200 font-body text-xs flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} />
              LinkedIn
            </a>
            <a
              href={siteConfig.social.instagram}
              id="footer-instagram"
              aria-label="Instagram"
              className="text-white/40 hover:text-white transition-colors duration-200 font-body text-xs flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
