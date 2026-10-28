import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const tones: Record<string, string> = {
  confirmed: "border-primary/20 bg-primary/10 text-primary",
  active: "border-primary/20 bg-primary/10 text-primary",
  paid: "border-primary/20 bg-primary/10 text-primary",
  pending:
    "border-highlight/30 bg-highlight/15 text-highlight-foreground dark:text-highlight",
  trialing:
    "border-highlight/30 bg-highlight/15 text-highlight-foreground dark:text-highlight",
  failed:
    "border-destructive/30 bg-destructive/10 text-destructive dark:bg-destructive/60 dark:text-destructive-foreground",
  canceled: "border-transparent bg-muted text-muted-foreground",
  paused: "border-transparent bg-muted text-muted-foreground",
};

export function StatusPill({ status }: { status: string }) {
  return (
    <Badge
      variant="outline"
      className={cn("capitalize", tones[status] ?? tones.paused)}
    >
      {status}
    </Badge>
  );
}
