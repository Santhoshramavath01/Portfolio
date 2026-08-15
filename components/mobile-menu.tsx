"use client";

import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  activeId: string;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const listVariants = {
  open: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
  closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};

const itemVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
  closed: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

export function MobileMenu({ open, activeId, onNavigate }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden border-b border-border bg-bg/95 backdrop-blur-xl md:hidden"
        >
          <motion.ul
            variants={listVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex flex-col gap-1 px-5 pb-6 pt-2"
          >
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = id === activeId;
              return (
                <motion.li key={link.href} variants={itemVariants}>
                  <a
                    href={link.href}
                    onClick={(e) => onNavigate(e, link.href)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-[17px] transition-colors",
                      isActive
                        ? "bg-card-secondary text-fg"
                        : "text-fg-secondary hover:bg-card-secondary/60 hover:text-fg"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    )}
                  </a>
                </motion.li>
              );
            })}
            <motion.li variants={itemVariants} className="pt-2">
              <a
                href="#contact"
                onClick={(e) => onNavigate(e, "#contact")}
                className="flex items-center justify-center rounded-xl bg-accent px-4 py-3 font-mono text-sm font-medium text-white"
              >
                Let&apos;s Connect
              </a>
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="pt-4 text-center font-mono text-xs text-fg-muted"
            >
              {site.tagline}
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
