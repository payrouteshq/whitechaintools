import { Repeat2 } from "lucide-react";

import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-flex items-center gap-2 font-semibold", className)}
    >
      <span className="bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-lg">
        <Repeat2 aria-hidden="true" className="size-4" />
      </span>
      <span className="tracking-tight">
        {site.wordmark.lead}
        <span className="text-primary-text">{site.wordmark.accent}</span>
      </span>
    </span>
  );
}
