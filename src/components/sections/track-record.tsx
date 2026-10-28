import { CircleCheck, ExternalLink } from "lucide-react";

import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { trackRecord } from "@/content/site";

export function TrackRecord() {
  return (
    <Section id="track-record" className="bg-secondary/40">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading
            eyebrow={trackRecord.eyebrow}
            title={trackRecord.title}
          />
          <p className="text-muted-foreground text-pretty">
            {trackRecord.story}
          </p>
          <div className="flex flex-wrap gap-3">
            {trackRecord.buttons.map((button, index) => (
              <Button
                key={button.label}
                variant={index === 0 ? "default" : "outline"}
                asChild
              >
                <a href={button.href} target="_blank" rel="noreferrer">
                  {button.label}
                  <ExternalLink />
                </a>
              </Button>
            ))}
          </div>
        </div>
        <ul className="space-y-3 border-l pl-6">
          {trackRecord.shipped.map((item) => (
            <li key={item} className="relative flex items-center gap-3 text-sm">
              <span className="bg-background text-primary-text absolute -left-[2.1rem] flex size-5 items-center justify-center rounded-full">
                <CircleCheck aria-hidden="true" className="size-5" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
