import { Code2 } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-accent" />
            <span className="font-bold sm:inline-block">
              dev2build
            </span>
          </Link>
        </div>
        <nav className="flex-1 items-center space-x-2 hidden md:flex">
            <Link
              href="/#features"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              Features
            </Link>
            <Link
              href="/courses"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              Contact
            </Link>
          </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild>
            <Link href="/contact">Join Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
