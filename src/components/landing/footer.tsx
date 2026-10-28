import { GithubIcon, LinkedinIcon, XIcon } from "@/components/social-icons";
import { Wordmark } from "@/components/wordmark";
import { site } from "@/content/landing";

const social = [
  { label: "GitHub", href: site.github, Icon: GithubIcon },
  { label: "X", href: site.x, Icon: XIcon },
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer className="border-t px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-2">
          <Wordmark className="text-sm" />
          <p className="text-muted-foreground text-xs">Built for Whitechain</p>
          <p className="text-muted-foreground max-w-sm text-xs">
            {site.disclaimer}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {social.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
