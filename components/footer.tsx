import { Github, Linkedin, Mail } from "lucide-react";
import { Logo } from "@/components/logo";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-5 py-12 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <div>
            <p className="font-display text-[14.5px] font-medium text-fg">
              {site.name}
            </p>
            <p className="font-mono text-[11px] text-fg-muted">
              {site.tagline}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-secondary transition-colors duration-300 hover:border-border-strong hover:text-fg"
          >
            <Github size={15} />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-secondary transition-colors duration-300 hover:border-border-strong hover:text-fg"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={site.links.email}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-secondary transition-colors duration-300 hover:border-border-strong hover:text-fg"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center font-mono text-[11.5px] text-fg-muted">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
