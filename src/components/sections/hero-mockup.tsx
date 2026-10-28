"use client";

import { m } from "motion/react";

import { Icon } from "@/components/icon";
import { KpiTile } from "@/components/mock/kpi-tile";
import { LazyRevenueChart } from "@/components/mock/lazy-revenue-chart";
import { SampleBadge } from "@/components/mock/sample-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { dashboardPageIcons, dashboardPages, heroMockup } from "@/content/site";
import { cn } from "@/lib/utils";

const rise = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export function HeroMockup() {
  return (
    <m.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.08 }}
      className="relative"
    >
      <m.div
        variants={rise}
        className="bg-card dark:ring-foreground/5 overflow-hidden rounded-xl border shadow-sm dark:shadow-none dark:ring-1"
      >
        <div className="flex items-center justify-between gap-2 border-b px-3 py-2">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="bg-muted-foreground/30 size-2.5 rounded-full" />
            <span className="bg-muted-foreground/30 size-2.5 rounded-full" />
            <span className="bg-muted-foreground/30 size-2.5 rounded-full" />
          </div>
          <Badge variant="secondary" className="font-mono text-[10px]">
            {heroMockup.network}
          </Badge>
          <SampleBadge label={heroMockup.sampleDataLabel} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[9.5rem_1fr]">
          <aside className="hidden border-r p-3 sm:block">
            <div className="bg-accent text-accent-foreground mb-3 flex items-center justify-between rounded-md px-2 py-1 text-[11px] font-medium">
              {heroMockup.testModeLabel}
              <span className="bg-primary/80 h-3 w-6 rounded-full" />
            </div>
            <ul className="space-y-0.5 text-xs">
              {dashboardPages.map((page, index) => (
                <li
                  key={page}
                  className={cn(
                    "text-muted-foreground flex items-center gap-2 rounded-md px-2 py-1.5",
                    index === 0 && "bg-secondary text-foreground",
                  )}
                >
                  <Icon name={dashboardPageIcons[page]} className="size-3.5" />
                  {page}
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-3 p-3">
            <div className="grid grid-cols-1 grid-cols-2 gap-2 sm:grid-cols-3">
              {heroMockup.kpis.map((kpi) => (
                <KpiTile key={kpi.label} {...kpi} />
              ))}
            </div>
            <div className="bg-background rounded-lg border p-3">
              <p className="text-muted-foreground mb-2 text-[11px]">
                {heroMockup.chartTitle}
              </p>
              <LazyRevenueChart className="aspect-auto h-28 w-full" />
            </div>
          </div>
        </div>
      </m.div>

      <m.div
        variants={rise}
        className="bg-popover text-popover-foreground dark:ring-foreground/5 mt-4 w-full max-w-xs rounded-xl border p-3 shadow-sm sm:absolute sm:-bottom-24 sm:-left-10 sm:mt-0 dark:shadow-none dark:ring-1"
      >
        <div className="text-primary-text mb-2 flex items-center gap-2 text-xs font-medium">
          <Icon name="Sparkles" className="size-3.5" />
          Copilot
        </div>
        <p className="text-sm">{heroMockup.copilotBubble.message}</p>
        <Button size="xs" className="mt-3">
          {heroMockup.copilotBubble.action}
        </Button>
      </m.div>
    </m.div>
  );
}
