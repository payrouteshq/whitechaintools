import { ExternalLink } from "lucide-react";

import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/social-icons";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { team } from "@/content/site";

const socialIcons = {
  x: { Icon: XIcon, label: "X" },
  github: { Icon: GithubIcon, label: "GitHub" },
  linkedin: { Icon: LinkedinIcon, label: "LinkedIn" },
} as const;

export function Team() {
  return (
    <Section id="team">
      <SectionHeading
        eyebrow={team.eyebrow}
        title={team.title}
        description={team.description}
      />
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {team.members.map((member) => (
          <Card key={member.name} className="gap-4 py-6">
            <CardContent className="flex flex-col items-center space-y-3 px-5 text-center">
              <Avatar className="size-16">
                <AvatarFallback className="bg-accent text-accent-foreground font-semibold">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
              <div className="flex gap-1">
                {(Object.keys(socialIcons) as (keyof typeof socialIcons)[]).map(
                  (key) => {
                    const href = member.socials[key];
                    if (!href) return null;
                    const { Icon, label } = socialIcons[key];
                    return (
                      <Button key={key} variant="ghost" size="icon-sm" asChild>
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${member.name} on ${label}`}
                        >
                          <Icon className="size-4" />
                        </a>
                      </Button>
                    );
                  },
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-8 text-sm">
        <a
          href={team.linkHref}
          target="_blank"
          rel="noreferrer"
          className="text-primary-text inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline"
        >
          {team.linkLabel}
          <ExternalLink aria-hidden="true" className="size-3" />
        </a>
      </p>
    </Section>
  );
}
