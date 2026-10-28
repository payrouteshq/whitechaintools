import { Icon } from "@/components/icon";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { FeatureBadges } from "@/components/status-badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { platform, platformMap } from "@/content/site";
import { slugify } from "@/lib/utils";

export function PlatformMap() {
  const first = platformMap[0];

  return (
    <Section id="platform" className="bg-secondary/40">
      <SectionHeading
        eyebrow={platform.eyebrow}
        title={platform.title}
        description={platform.description}
      />
      <Tabs
        defaultValue={first ? slugify(first.tab) : undefined}
        className="mt-10 gap-6"
      >
        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <TabsList className="h-auto min-w-max">
            {platformMap.map(({ tab }) => (
              <TabsTrigger
                key={tab}
                value={slugify(tab)}
                className="px-3 py-1.5"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {platformMap.map(({ tab, items }) => (
          <TabsContent key={tab} value={slugify(tab)}>
            <div className="grid gap-3 md:grid-cols-2">
              {items.map((item) => (
                <Card key={item.title} className="gap-0 py-4">
                  <div className="flex items-start gap-3 px-4">
                    <div className="bg-primary/10 text-primary-text flex size-8 shrink-0 items-center justify-center rounded-md">
                      <Icon name={item.icon} className="size-4" />
                    </div>
                    <div className="min-w-0 space-y-2">
                      <div>
                        <h3 className="text-sm font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                      <FeatureBadges
                        status={item.status}
                        milestone={item.milestone}
                        shippedOnStellar={item.shippedOnStellar}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}
