"use client";
import { FaInstagram } from "react-icons/fa";


export function SiteFooter() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex h-20 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} dev2build. All rights reserved.
        </p>
        <a 
          href="https://www.instagram.com/dev2build"
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="dev2build Instagram"
          className="text-muted-foreground transition-colors hover:text-accent"
        >
          <FaInstagram className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}
