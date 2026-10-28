import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { roadmap } from "@/content/site";
import { cn } from "@/lib/utils";

export function Roadmap() {
  return (
    <Section id="roadmap">
      <SectionHeading
        eyebrow={roadmap.eyebrow}
        title={roadmap.title}
        description={roadmap.description}
      />
      <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {roadmap.milestones.map((milestone) => (
          <li key={milestone.label}>
            <Card
              className={cn(
                "h-full gap-4",
                "current" in milestone &&
                  milestone.current &&
                  "ring-primary ring-2",
              )}
            >
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-primary-text font-mono text-sm font-semibold">
                    {milestone.label}
                  </span>
                  <StatusBadge status={milestone.status} />
                </div>
                <CardTitle className="text-base leading-snug">
                  {milestone.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-sm">
                <div>
                  <h3 className="text-muted-foreground mb-2 text-xs font-semibold tracking-wide uppercase">
                    {roadmap.deliverablesLabel}
                  </h3>
                  <ul className="marker:text-primary-text list-disc space-y-1 pl-4">
                    {milestone.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-muted-foreground mb-2 text-xs font-semibold tracking-wide uppercase">
                    {roadmap.verifyLabel}
                  </h3>
                  <ul className="marker:text-primary-text list-disc space-y-1 pl-4">
                    {milestone.verify.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
