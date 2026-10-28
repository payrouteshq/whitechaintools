# WhitechainTools

Landing page for WhitechainTools, modeled on stellartools.dev. Next.js, Tailwind
CSS v4 and shadcn/ui.

## Run

```bash
pnpm install
pnpm dev
```

Scripts: `pnpm build`, `pnpm lint`, `pnpm typecheck`, `pnpm format`.

## Edit

Copy and mock data live in `src/content/site.ts`. Sections are in
`src/components/landing/`. Colors come from the theme tokens in
`src/app/globals.css`, never hardcoded.

## Environment

Both optional. Without them, waitlist signups are logged on the server.

| Variable             | Purpose                                    |
| -------------------- | ------------------------------------------ |
| `RESEND_API_KEY`     | Adds waitlist signups to a Resend audience |
| `RESEND_AUDIENCE_ID` | Audience for the signups above             |
