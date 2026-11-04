"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/config";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[rgba(26,26,24,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group" id="header-logo">
            <span className="font-display text-lg text-[#1C1C1A] tracking-tight group-hover:text-[#A0522D] transition-colors duration-300">
              Your Dimension
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                className={`font-body text-sm transition-colors duration-200 link-underline ${
                  pathname === link.href
                    ? "text-[#A0522D]"
                    : "text-[#6B6560] hover:text-[#1C1C1A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              href="/contact"
              size="sm"
              className="hidden md:inline-flex"
              id="header-cta"
            >
              Let&apos;s Talk
            </Button>

            <button
              className="md:hidden p-2 text-[#1C1C1A] hover:text-[#A0522D] transition-colors duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              id="mobile-menu-toggle"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="bg-[#FAFAF8] border-t border-[rgba(26,26,24,0.08)] px-6 py-8 flex flex-col gap-6"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              id={`mobile-nav-${link.label.toLowerCase()}`}
              className={`font-display text-2xl transition-colors duration-200 ${
                pathname === link.href ? "text-[#A0522D]" : "text-[#1C1C1A] hover:text-[#A0522D]"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[rgba(26,26,24,0.08)]">
            <Button
              href="/contact"
              className="w-full"
              id="mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s Talk
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
