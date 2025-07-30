import { Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex h-20 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dev2Build Hub. All rights reserved.
        </p>
        <a 
          href="https://www.instagram.com"
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Dev2Build Instagram"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Instagram className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}
