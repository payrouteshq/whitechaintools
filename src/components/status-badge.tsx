import { ArrowRightLeft, CircleCheck, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { statusLabels, type Milestone, type Status } from "@/content/site";
import { cn } from "@/lib/utils";

const styles: Record<Status, string> = {
  "shipped-stellar": "border-primary/20 bg-primary/10 text-primary-text",
  porting:
    "border-highlight/30 bg-highlight/15 text-highlight-foreground dark:text-highlight",
  planned: "border-transparent bg-muted text-muted-foreground",
};

const icons = {
  "shipped-stellar": CircleCheck,
  porting: ArrowRightLeft,
  planned: Clock,
} satisfies Record<Status, unknown>;

interface StatusBadgeProps {
  status: Status;
  milestone?: Milestone;
  className?: string;
}

export function StatusBadge({
  status,
  milestone,
  className,
}: StatusBadgeProps) {
  const IconComponent = icons[status];

  return (
    <Badge variant="outline" className={cn(styles[status], className)}>
      <IconComponent aria-hidden="true" className="size-3" />
      {statusLabels[status]}
      {milestone ? <span className="font-mono">· {milestone}</span> : null}
    </Badge>
  );
}

interface FeatureBadgesProps {
  status: Status;
  milestone?: Milestone;
  shippedOnStellar?: boolean;
}

export function FeatureBadges({
  status,
  milestone,
  shippedOnStellar,
}: FeatureBadgesProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {shippedOnStellar ? <StatusBadge status="shipped-stellar" /> : null}
      <StatusBadge status={status} milestone={milestone} />
    </div>
  );
}
