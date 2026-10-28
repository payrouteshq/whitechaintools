"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";

import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { FeatureBadges } from "@/components/status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { adapterCategories, adapters, links } from "@/content/site";

type Filter = (typeof adapterCategories)[number];

export function Adapters() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = adapters.items.filter(
    (item) => filter === "All" || item.category === filter,
  );

  return (
    <Section id="adapters">
      <SectionHeading
        eyebrow={adapters.eyebrow}
        title={adapters.title}
        description={adapters.description}
      />
      <div className="-mx-4 mt-10 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <ToggleGroup
          type="single"
          variant="outline"
          value={filter}
          onValueChange={(value) => {
            if (value) setFilter(value as Filter);
          }}
          aria-label="Filter adapters by category"
          className="min-w-max"
        >
          {adapterCategories.map((category) => (
            <ToggleGroupItem key={category} value={category}>
              {category}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <Card key={item.name} className="gap-4 py-5">
            <CardContent className="space-y-3 px-5">
              <div className="flex items-center gap-3">
                <span className="bg-secondary text-secondary-foreground flex size-10 items-center justify-center rounded-lg font-mono text-sm font-semibold">
                  {item.monogram}
                </span>
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-muted-foreground text-xs">
                    {item.category}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
              <FeatureBadges
                status={item.status}
                milestone={item.milestone}
                shippedOnStellar={item.shippedOnStellar}
              />
              {"docsHref" in item && item.docsHref ? (
                <a
                  href={item.docsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-text inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
                >
                  {adapters.docsLabel}
                  <ExternalLink aria-hidden="true" className="size-3" />
                </a>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-sm">
        <a
          href={links.adapterPlayground}
          target="_blank"
          rel="noreferrer"
          className="text-primary-text inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline"
        >
          {adapters.playgroundLabel}
          <ExternalLink aria-hidden="true" className="size-3" />
        </a>
      </p>
    </Section>
  );
}
