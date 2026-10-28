import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { pricing } from "@/content/site";

export function Pricing() {
  return (
    <Section id="pricing" className="bg-secondary/40">
      <Card className="mx-auto max-w-xl text-center">
        <CardContent className="space-y-3 px-8">
          <p className="text-primary-text text-xs font-semibold tracking-widest uppercase">
            {pricing.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            {pricing.title}
          </h2>
          <p className="text-lg">{pricing.body}</p>
          <p className="text-muted-foreground text-sm">{pricing.note}</p>
        </CardContent>
      </Card>
    </Section>
  );
}
