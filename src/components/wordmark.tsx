import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-semibold tracking-tight", className)}>
      {site.wordmark.lead}
      <span className="text-primary-text">{site.wordmark.accent}</span>
    </span>
  );
}
