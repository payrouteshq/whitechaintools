import { Plus } from "lucide-react";
import { Fragment } from "react";

import { DashedConnector } from "@/components/dashed-connector";
import { Icon } from "@/components/icon";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { FeatureBadges } from "@/components/status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { marketplace } from "@/content/site";

export function Marketplace() {
  return (
    <Section id="marketplace" className="bg-secondary/40">
      <SectionHeading
        eyebrow={marketplace.eyebrow}
        title={marketplace.title}
        description={marketplace.description}
      />

      <div className="mt-10 flex flex-col items-stretch lg:flex-row lg:items-center lg:justify-center">
        {marketplace.bridge.map((node, index) => (
          <Fragment key={node}>
            {index > 0 ? <DashedConnector /> : null}
            <div className="bg-card rounded-lg border px-5 py-3 text-center text-sm font-medium">
              {node}
            </div>
          </Fragment>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {marketplace.apps.map((app) => (
          <Card key={app.name} className="gap-4 py-5">
            <CardContent className="space-y-3 px-5">
              <div className="bg-primary/10 text-primary-text flex size-9 items-center justify-center rounded-lg">
                <Icon name={app.icon} className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold">{app.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {app.description}
                </p>
              </div>
              <FeatureBadges
                status={app.status}
                shippedOnStellar={app.shippedOnStellar}
              />
            </CardContent>
          </Card>
        ))}
        <a
          href={marketplace.build.href}
          target="_blank"
          rel="noreferrer"
          className="bg-card/50 hover:bg-accent focus-visible:ring-ring/50 flex flex-col items-start justify-center gap-2 rounded-xl border border-dashed p-5 transition-colors focus-visible:ring-[3px] focus-visible:outline-none"
        >
          <span className="bg-secondary text-secondary-foreground flex size-9 items-center justify-center rounded-lg">
            <Plus aria-hidden="true" className="size-5" />
          </span>
          <span className="font-semibold">{marketplace.build.title}</span>
          <span className="text-muted-foreground text-sm">
            {marketplace.build.description}
          </span>
        </a>
      </div>
    </Section>
  );
}
