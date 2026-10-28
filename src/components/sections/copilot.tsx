import { CopilotChatLazy } from "@/components/copilot/copilot-chat-lazy";
import { Icon } from "@/components/icon";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { copilot } from "@/content/site";

export function Copilot() {
  const live = Boolean(process.env.AI_API_KEY);

  return (
    <Section id="copilot" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-glow pointer-events-none absolute top-1/2 right-0 h-[32rem] w-[32rem] translate-x-1/3 -translate-y-1/2"
      />
      <div className="relative">
        <SectionHeading
          eyebrow={copilot.eyebrow}
          title={copilot.title}
          description={copilot.description}
        />
        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          <ul className="space-y-5">
            {copilot.capabilities.map((capability) => (
              <li key={capability.title} className="flex gap-4">
                <span className="bg-primary/10 text-primary-text flex size-9 shrink-0 items-center justify-center rounded-lg">
                  <Icon name={capability.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{capability.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {capability.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <CopilotChatLazy live={live} />
        </div>
      </div>
    </Section>
  );
}
