import { Check } from "lucide-react";

import { CodeBlock } from "@/components/code-block";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { developers, webhookEvents } from "@/content/site";

export function Developers() {
  return (
    <Section id="developers" className="bg-secondary/40">
      <SectionHeading
        eyebrow={developers.eyebrow}
        title={developers.title}
        description={developers.description}
      />
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ul className="space-y-3">
          {developers.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm">
              <span className="bg-primary/10 text-primary-text mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                <Check aria-hidden="true" className="size-3" />
              </span>
              {bullet}
            </li>
          ))}
        </ul>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              {developers.eventsTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {webhookEvents.map(({ group, events }) => (
              <div key={group} className="space-y-2">
                <p className="text-muted-foreground text-xs font-medium">
                  {group}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {events.map((event) => (
                    <Badge
                      key={event}
                      variant="secondary"
                      className="font-mono text-[11px]"
                    >
                      {event}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
            <CodeBlock code={developers.envelopeCode} lang="json" />
            <p className="text-muted-foreground text-xs">
              {developers.envelopeNote}
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
