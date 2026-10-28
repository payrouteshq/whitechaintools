import { Icon } from "@/components/icon";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { primitives } from "@/content/site";

export function Primitives() {
  return (
    <Section id={primitives.id}>
      <SectionHeading
        eyebrow={primitives.eyebrow}
        title={primitives.title}
        description={primitives.description}
      />
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {primitives.items.map((item) => (
          <Card key={item.title} className="gap-4 py-5">
            <CardContent className="space-y-3 px-5">
              <div className="bg-primary/10 text-primary-text flex size-9 items-center justify-center rounded-lg">
                <Icon name={item.icon} className="size-5" />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
              <StatusBadge status={item.status} milestone={item.milestone} />
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
