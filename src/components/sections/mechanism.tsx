import { Fragment } from "react";

import { DashedConnector } from "@/components/dashed-connector";
import { Icon } from "@/components/icon";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { mechanism } from "@/content/site";

export function Mechanism() {
  return (
    <Section id="mechanism" className="bg-secondary/40">
      <SectionHeading
        eyebrow={mechanism.eyebrow}
        title={mechanism.title}
        description={mechanism.description}
      />
      <div className="mt-12 flex flex-col items-stretch lg:flex-row lg:items-stretch">
        {mechanism.steps.map((step, index) => (
          <Fragment key={step.title}>
            {index > 0 ? <DashedConnector /> : null}
            <div className="lg:flex-1">
              <Card className="h-full gap-3 py-5">
                <CardContent className="space-y-2 px-5">
                  <div className="flex items-center gap-2">
                    <span className="bg-primary/10 text-primary-text flex size-8 items-center justify-center rounded-lg">
                      <Icon name={step.icon} className="size-4" />
                    </span>
                    <span className="text-muted-foreground font-mono text-xs">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </Fragment>
        ))}
      </div>
      <Card className="mt-8 gap-3 py-5">
        <CardContent className="flex flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground text-sm">{mechanism.note}</p>
          <StatusBadge
            status={mechanism.noteStatus.status}
            milestone={mechanism.noteStatus.milestone}
          />
        </CardContent>
      </Card>
    </Section>
  );
}
