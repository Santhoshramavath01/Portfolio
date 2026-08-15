"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import { navLinks, site } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const { activeId, scrolled } = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
        scrolled
          ? "bg-bg/75 backdrop-blur-xl border-b border-border shadow-[0_1px_0_0_rgb(var(--border-rgb)/0.06)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-3.5 sm:px-8">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2.5"
        >
          <Logo size={34} priority />
          <span className="hidden font-display text-[15px] font-medium tracking-tight text-fg sm:inline">
            {site.name}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="relative hidden items-center gap-1 rounded-full border border-border bg-card-secondary/60 p-1 backdrop-blur-sm md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = id === activeId;
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "relative z-10 block rounded-full px-4 py-1.5 font-mono text-[12.5px] tracking-tight transition-colors duration-300",
                    isActive
                      ? "text-bg"
                      : "text-fg-secondary hover:text-fg"
                  )}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 z-0 rounded-full bg-fg"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden rounded-full bg-accent px-4 py-2 font-mono text-[12.5px] font-medium text-white transition-all duration-300 hover:bg-accent-deep hover:shadow-[0_0_0_4px_var(--glow-accent)] sm:inline-flex"
          >
            Let&apos;s Connect
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <MobileMenu
        open={menuOpen}
        activeId={activeId}
        onNavigate={handleNavClick}
      />
    </header>
  );
}
