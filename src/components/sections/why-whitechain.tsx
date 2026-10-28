import { Icon } from "@/components/icon";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { whyWhitechain } from "@/content/site";

export function WhyWhitechain() {
  return (
    <Section id="why-whitechain" className="bg-secondary/40">
      <SectionHeading
        eyebrow={whyWhitechain.eyebrow}
        title={whyWhitechain.title}
        description={whyWhitechain.description}
      />
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyWhitechain.items.map((item) => (
          <Card key={item.title} className="gap-4 py-5">
            <CardContent className="space-y-3 px-5">
              <span className="bg-primary/10 text-primary-text flex size-9 items-center justify-center rounded-lg">
                <Icon name={item.icon} className="size-5" />
              </span>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-muted-foreground mt-6 text-xs">{whyWhitechain.note}</p>
    </Section>
  );
}
