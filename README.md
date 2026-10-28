# WhitechainTools

Landing page and proof of concept for WhitechainTools, the financial
infrastructure layer for Whitechain. Built with Next.js (App Router), Tailwind
CSS v4 and shadcn/ui.

This is a showcase for the Whitechain Builders Program, not the product.

## Run locally

```bash
pnpm install
cp .env.example .env.local   # optional, every variable is optional
pnpm dev
```

Open http://localhost:3000.

Other scripts:

| Command          | What it does                  |
| ---------------- | ----------------------------- |
| `pnpm build`     | Production build              |
| `pnpm lint`      | ESLint                        |
| `pnpm typecheck` | TypeScript, no emit           |
| `pnpm format`    | Prettier (sorts Tailwind too) |

## Editing content

All copy, statuses, milestones, adapters, FAQ entries and team members live in
[`src/content/site.ts`](src/content/site.ts) as typed constants. Components never
hold copy, so you can change text without touching them.

- Status badges use the `Status` type: `shipped-stellar`, `porting`, `planned`.
- Features already live on StellarTools and being ported set
  `shippedOnStellar: true` plus `status: "porting"`, which renders both badges.
- Values that need confirming before launch: the Whitechain Sepolia chain id
  (`heroMockup.network`), the Shopify adapter status, the pricing model, and
  the Whitechain figures in `whyWhitechain`.
- Team photos are initials avatars. To use photos, add images under
  `public/team/` and add an `AvatarImage` in `src/components/sections/team.tsx`.

## Theming

Colors come from shadcn theme tokens in `src/app/globals.css` (`:root` and
`.dark`). Components use semantic classes only (`bg-card`, `text-primary`,
`border-border`). Do not hardcode hex, rgb or raw palette classes. To add a
color, add a CSS variable and a `--color-*` mapping in `@theme inline`.

The one exception is `src/lib/brand-colors.ts`, used by the generated OG image
and favicon, which cannot read CSS variables.

## Environment variables

| Variable               | Purpose                                                          |
| ---------------------- | ---------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap and robots                   |
| `RESEND_API_KEY`       | Optional. Adds waitlist signups to a Resend audience             |
| `RESEND_AUDIENCE_ID`   | Optional. Audience for the signups above                         |
| `AI_API_KEY`           | Optional. Enables live "Ask WhitechainTools" chat                |
| `AI_MODEL`             | Optional. Gateway model id, default `anthropic/claude-haiku-4.5` |

Without Resend keys the waitlist route logs signups to the server console and
still returns success. Without `AI_API_KEY` the Copilot demo stays scripted and
`/api/chat` returns 404.

## Deploy

The project deploys to Vercel. Set the variables above in the project settings
and run `vercel --prod`, or connect the Git repository.
