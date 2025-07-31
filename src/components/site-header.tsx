
"use client"

import { Code2, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import React from "react";

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

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
        <div className="flex flex-1 items-center justify-end space-x-2 md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <div className="flex flex-col h-full">
                      <div className="flex-1 flex flex-col gap-6 pt-10">
                        <Link href="/#features" onClick={() => setOpen(false)} className="text-lg font-medium text-muted-foreground transition-colors hover:text-accent">
                          Features
                        </Link>
                        <Link href="/courses" onClick={() => setOpen(false)} className="text-lg font-medium text-muted-foreground transition-colors hover:text-accent">
                          Courses
                        </Link>
                        <Link href="/about" onClick={() => setOpen(false)} className="text-lg font-medium text-muted-foreground transition-colors hover:text-accent">
                          About
                        </Link>
                        <Link href="/contact" onClick={() => setOpen(false)} className="text-lg font-medium text-muted-foreground transition-colors hover:text-accent">
                          Contact
                        </Link>
                      </div>
                      <div className="mt-auto">
                        <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/contact" onClick={() => setOpen(false)}>Join Now</Link>
                        </Button>
                      </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-end space-x-2">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Join Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
