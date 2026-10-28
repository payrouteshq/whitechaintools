import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/wordmark";
import { site } from "@/content/landing";

export function Header() {
  return (
    <header className="bg-background/90 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="/" aria-label={site.name} className="text-lg">
          <Wordmark />
        </a>
        <div className="flex items-center gap-1">
          <Button variant="ghost" asChild>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
