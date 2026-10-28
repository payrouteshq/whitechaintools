import type { LucideIconName } from "@/lib/icons";

export type Status = "shipped-stellar" | "porting" | "planned";
export type Milestone = "M1" | "M2" | "M3" | "M4";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIconName;
  status: Status;
  milestone?: Milestone;

  shippedOnStellar?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export const links = {
  stellartools: "https://stellartools.dev",
  docs: "https://docs.stellartools.dev",
  apiReference: "https://docs.stellartools.dev/api-reference/introduction",
  github: "https://github.com/payrouteshq/stellartools",
  adapterPlayground: "https://docs.stellartools.dev/adapter-playground",
  buildingApps: "https://docs.stellartools.dev/marketplace/building-apps",
  teamPage: "https://stellartools.dev/team",
  x: "https://x.com/devodii_",
  linkedin: "https://www.linkedin.com/in/emmanuelodii/",
} as const;

export const site = {
  name: "WhitechainTools",
  wordmark: { lead: "Whitechain", accent: "Tools" },
  title: "WhitechainTools: financial infrastructure for Whitechain",
  description:
    "Payments, subscriptions, usage billing, hosted checkout, customer portal, payouts and webhooks, with SDK framework adapters, an app marketplace and an AI copilot. Everything a business needs to get paid in WBT, USDT and USDC.",
  copyrightYear: 2026,
  email: "hello@whitechaintools.xyz",
  disclaimer:
    "WhitechainTools is an independent project and is not affiliated with or endorsed by Whitechain, WhiteBIT or W Group. Roadmap items are planned and subject to change.",
  footerTagline:
    "The financial infrastructure layer for the Whitechain economy.",
} as const;

export const statusLabels: Record<Status, string> = {
  "shipped-stellar": "Shipped on Stellar",
  porting: "Porting to Whitechain",
  planned: "Planned",
};

export const announcement = {
  text: "From the team behind StellarTools (SCF #40). Now building on Whitechain.",
  linkLabel: "See StellarTools",
  href: links.stellartools,
} as const;

export const navLinks: NavLink[] = [
  { label: "Platform", href: "#platform" },
  { label: "Developers", href: "#developers" },
  { label: "Adapters", href: "#adapters" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Copilot", href: "#copilot" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

export const primaryNavCount = 3;

export const footerColumns = {
  product: [
    { label: "Platform", href: "#platform" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Developers", href: "#developers" },
    { label: "Adapters", href: "#adapters" },
    { label: "Marketplace", href: "#marketplace" },
    { label: "Copilot", href: "#copilot" },
    { label: "Roadmap", href: "#roadmap" },
  ] satisfies NavLink[],
  stellartools: [
    { label: "StellarTools", href: links.stellartools },
    { label: "StellarTools docs", href: links.docs },
    { label: "API reference", href: links.apiReference },
    { label: "GitHub", href: links.github },
  ] satisfies NavLink[],
  contact: [
    { label: "X", href: links.x },
    { label: "LinkedIn", href: links.linkedin },
    { label: site.email, href: `mailto:${site.email}` },
  ] satisfies NavLink[],
};

export const hero = {
  eyebrow: "Building on Whitechain",
  title: "The financial infrastructure for the Whitechain economy.",
  description: site.description,
  primaryCta: { label: "Join the waitlist", href: "#waitlist" },
  secondaryCta: {
    label: "See what we shipped on Stellar",
    href: links.docs,
  },
  openSource: "Open source. Built by the StellarTools team.",
  githubLabel: "Star on GitHub",
} as const;

export const dashboardPages = [
  "Overview",
  "Products",
  "Transactions",
  "Customers",
  "Subscriptions",
  "Payouts",
  "Marketplace",
  "Copilot",
  "Developers",
  "Settings",
] as const;

export type DashboardPage = (typeof dashboardPages)[number];

export const dashboardPageIcons: Record<DashboardPage, LucideIconName> = {
  Overview: "LayoutDashboard",
  Products: "Package",
  Transactions: "ArrowLeftRight",
  Customers: "Users",
  Subscriptions: "RefreshCw",
  Payouts: "Landmark",
  Marketplace: "Store",
  Copilot: "Sparkles",
  Developers: "Code",
  Settings: "Settings",
};

export const heroMockup = {
  network: "Whitechain Sepolia · 1874",
  sampleDataLabel: "Sample data",
  testModeLabel: "Test mode",
  kpis: [
    { label: "MRR", value: "$12,000" },
    { label: "Gross volume", value: "$48,000" },
    { label: "Active subscriptions", value: "600" },
    { label: "Active trials", value: "100" },
    { label: "New customers", value: "250" },
    { label: "Renewal success rate", value: "95%" },
  ],
  chartTitle: "Recurring revenue, last 30 days",
  chartSeries: Array.from({ length: 30 }, (_, i) => ({
    day: `Day ${i + 1}`,
    revenue: 6000 + i * 200 + (i % 4) * 300,
  })),
  copilotBubble: {
    message:
      "3 renewals failed: allowance too low. Want me to email those customers?",
    action: "Draft email",
  },
} as const;

export const proof = {
  eyebrow: "Track record",
  title: "Already shipped. Now porting.",
  description:
    "Everything below is live on StellarTools today. We are bringing it to Whitechain.",
  items: [
    "TypeScript SDK on npm (@stellartools/core)",
    "REST API with versioned requests and cursor pagination",
    "Testnet and mainnet API keys",
    "Hosted checkout and customer portal",
    "Onchain subscriptions with trials, pause, cancel at period end",
    "Metered (usage-based) billing",
    "Payouts",
    "Signed webhooks with retries, delivery logs and manual resend",
    "MCP server for AI agents",
    "7 framework adapters plus a plugin SDK",
    "App marketplace (Resend, Loops)",
    "Two-factor authentication",
  ],
  footnote:
    "SCF #40 awardee · All grant milestones delivered · Vercel OSS Spring 2026",
  footnoteHref: links.stellartools,
} as const;

export const primitives = {
  id: "product",
  eyebrow: "Product",
  title: "Everything a business needs to get paid onchain.",
  description:
    "The building blocks, each with an honest status and the milestone it lands in.",
  items: [
    {
      title: "Payments",
      description:
        "Price in USD, NGN, EUR and more. Customers pay in WBT, USDT or USDC on Whitechain.",
      icon: "CreditCard",
      status: "porting",
      milestone: "M1",
    },
    {
      title: "Subscriptions",
      description:
        "Daily, weekly, monthly, yearly or custom intervals. Trials, pause, resume, cancel at period end.",
      icon: "RefreshCw",
      status: "porting",
      milestone: "M1",
    },
    {
      title: "Hosted checkout",
      description:
        "Branded payment pages from a single API call. No frontend code.",
      icon: "LayoutTemplate",
      status: "porting",
      milestone: "M1",
    },
    {
      title: "Customer portal",
      description: "Customers manage plans, wallets and invoices themselves.",
      icon: "UserCog",
      status: "porting",
      milestone: "M2",
    },
    {
      title: "Webhooks",
      description:
        "Signed events for every state change: payment.confirmed, subscription.renewed and more.",
      icon: "Webhook",
      status: "porting",
      milestone: "M1",
    },
    {
      title: "Access checks",
      description:
        "One call to know if a customer has an active plan. Powers the adapters.",
      icon: "KeyRound",
      status: "porting",
      milestone: "M1",
    },
    {
      title: "Refunds",
      description: "Refund to the customer's wallet from the dashboard or API.",
      icon: "Undo2",
      status: "porting",
      milestone: "M2",
    },
    {
      title: "Gasless for customers",
      description:
        "A paymaster sponsors gas so customers pay in stablecoins without holding WBT.",
      icon: "Fuel",
      status: "planned",
      milestone: "M2",
    },
  ] satisfies Feature[],
} as const;

export const platformMap: { tab: string; items: Feature[] }[] = [
  {
    tab: "Payments",
    items: [
      {
        title: "One-time products",
        description: "Software licenses, downloads and access passes.",
        icon: "Package",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Local-currency pricing",
        description:
          "Price in USD, NGN, GHS, KES, EUR and more; customers pay in tokens.",
        icon: "Globe",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Multi-asset",
        description:
          "WBT, USDT, USDC, plus any ERC-20 on the Whitechain token list.",
        icon: "Coins",
        status: "porting",
        milestone: "M1",
      },
      {
        title: "Hosted checkout and payment links",
        description: "Branded payment pages from one API call.",
        icon: "LayoutTemplate",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Transactions view",
        description: "The onchain transaction hash for every payment.",
        icon: "Receipt",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Refunds",
        description: "Refund to the customer's wallet.",
        icon: "Undo2",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
    ],
  },
  {
    tab: "Billing",
    items: [
      {
        title: "Subscriptions",
        description: "Daily, weekly, monthly, yearly or custom intervals.",
        icon: "RefreshCw",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Trials, pause and renewal",
        description:
          "Trials, pause, resume, cancel at period end, automatic renewal.",
        icon: "Timer",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Usage-based billing",
        description: "Metered billing for APIs, seats and anything you count.",
        icon: "Gauge",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
      {
        title: "Access checks and entitlements",
        description:
          "customers.access.verify returns whether a customer can use a product.",
        icon: "KeyRound",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
    ],
  },
  {
    tab: "Customers",
    items: [
      {
        title: "Customer records",
        description: "Customer records with custom metadata.",
        icon: "Users",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Wallet payment methods",
        description: "Wallets linked per customer.",
        icon: "Wallet",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Self-serve customer portal",
        description: "Customers manage subscriptions, wallets and invoices.",
        icon: "UserCog",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
    ],
  },
  {
    tab: "Money out",
    items: [
      {
        title: "Payouts dashboard",
        description: "Withdraw to a merchant wallet.",
        icon: "Landmark",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
      {
        title: "Fiat cash-out",
        description:
          "Cash out to local bank accounts. We will explore this with ecosystem partners.",
        icon: "Banknote",
        status: "planned",
      },
      {
        title: "Fiat on-ramp",
        description:
          "Let customers pay by card or bank transfer into a stablecoin.",
        icon: "ArrowDownToLine",
        status: "planned",
      },
    ],
  },
  {
    tab: "Developers",
    items: [
      {
        title: "REST API with cursor pagination",
        description: "limit, starting_after and ending_before on every list.",
        icon: "ListOrdered",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "API versioning",
        description: "A dated version header, pinned per key or per request.",
        icon: "Tag",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Testnet and mainnet keys",
        description: "The key encodes the environment, no flags needed.",
        icon: "Key",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "TypeScript SDK",
        description: "A typed client for every API resource.",
        icon: "Code",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "OpenAPI spec",
        description: "Generate clients in any language.",
        icon: "FileJson",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Signed webhooks",
        description:
          "Signed payloads, retries, delivery logs and manual resend.",
        icon: "Webhook",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "MCP server",
        description: "For Cursor, Claude and other agents.",
        icon: "Terminal",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
      {
        title: "Adapter playground",
        description: "Live demos of every adapter.",
        icon: "FlaskConical",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
    ],
  },
  {
    tab: "Ecosystem",
    items: [
      {
        title: "Framework adapters",
        description: "Plug into the stack you already run. See the adapters.",
        icon: "Plug",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
      {
        title: "App marketplace",
        description: "Apps that run inside the dashboard. See the marketplace.",
        icon: "Store",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
      {
        title: "Plugin SDK",
        description: "Build metered integrations on top of the platform.",
        icon: "Puzzle",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
    ],
  },
  {
    tab: "Growth and security",
    items: [
      {
        title: "AI Merchant Copilot",
        description: "Your billing team, in a chat box. See the copilot.",
        icon: "Sparkles",
        status: "planned",
        milestone: "M3",
      },
      {
        title: "Experiments and cohorts",
        description:
          "Test prices and checkout variants, build cohorts from billing events and sync with PostHog.",
        icon: "FlaskConical",
        status: "planned",
      },
      {
        title: "Two-factor authentication",
        description: "Protect the dashboard with 2FA.",
        icon: "ShieldCheck",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
      {
        title: "Team roles and org settings",
        description: "Invite teammates and control what they can do.",
        icon: "UsersRound",
        status: "planned",
      },
    ],
  },
];

export const platform = {
  eyebrow: "Platform",
  title: "One platform. Every way money moves.",
  description:
    "WhitechainTools is the whole money stack, not a single feature.",
} as const;

export const dashboardTour = {
  eyebrow: "Dashboard",
  title: "A dashboard your finance team will actually like.",
  description: "Ten pages, one place to see every payment, plan and payout.",
  sampleDataLabel: "Sample data",
  products: [
    {
      name: "Pro monthly",
      type: "Subscription",
      price: "$20.00",
      interval: "Monthly",
    },
    {
      name: "Team yearly",
      type: "Subscription",
      price: "$200.00",
      interval: "Yearly",
    },
    {
      name: "Starter license",
      type: "One-time",
      price: "$50.00",
      interval: "None",
    },
    {
      name: "API usage",
      type: "Subscription",
      price: "$0.10 / call",
      interval: "Metered",
    },
  ],
  transactions: [
    {
      id: "pay_001",
      status: "confirmed",
      amount: "20.00",
      token: "USDT",
      hash: "0x4f2a…9c1e",
    },
    {
      id: "pay_002",
      status: "pending",
      amount: "50.00",
      token: "USDC",
      hash: "0x81bd…02aa",
    },
    {
      id: "pay_003",
      status: "confirmed",
      amount: "200.00",
      token: "WBT",
      hash: "0xa7c3…55f0",
    },
    {
      id: "pay_004",
      status: "failed",
      amount: "20.00",
      token: "USDT",
      hash: "0x39e8…b4d7",
    },
  ],
  customers: [
    { email: "ada@example.com", wallet: "0x12ab…77cd", plan: "Pro monthly" },
    { email: "grace@example.com", wallet: "0x90ef…31a2", plan: "Team yearly" },
    { email: "linus@example.com", wallet: "0x5c4d…ee08", plan: "None" },
    { email: "alan@example.com", wallet: "0xb6a1…4420", plan: "Pro monthly" },
  ],
  subscriptions: [
    {
      customer: "ada@example.com",
      plan: "Pro monthly",
      status: "active",
      renewal: "Jan 12",
    },
    {
      customer: "grace@example.com",
      plan: "Team yearly",
      status: "trialing",
      renewal: "Jan 20",
    },
    {
      customer: "linus@example.com",
      plan: "Pro monthly",
      status: "paused",
      renewal: "Paused",
    },
    {
      customer: "alan@example.com",
      plan: "Pro monthly",
      status: "canceled",
      renewal: "Ended",
    },
  ],
  payouts: {
    balances: [
      { token: "USDT", amount: "4,200.00" },
      { token: "USDC", amount: "1,800.00" },
      { token: "WBT", amount: "320.00" },
    ],
    history: [
      { date: "Jan 05", amount: "2,000.00", token: "USDT", status: "paid" },
      { date: "Dec 20", amount: "1,500.00", token: "USDC", status: "paid" },
      { date: "Dec 02", amount: "800.00", token: "USDT", status: "paid" },
    ],
  },
  marketplace: [
    { name: "Resend", description: "Transactional emails", installed: true },
    { name: "Loops", description: "Lifecycle emails", installed: true },
    {
      name: "FirstPromoter",
      description: "Affiliate tracking",
      installed: false,
    },
    { name: "PostHog", description: "Product analytics", installed: false },
  ],
  developers: {
    apiKeys: [
      { name: "Test key", masked: "wct_test_••••••••3f9a", mode: "testnet" },
      { name: "Live key", masked: "wct_live_••••••••b21c", mode: "mainnet" },
    ],
    endpoints: [
      { url: "https://example.com/hooks/billing", events: 128 },
      { url: "https://example.com/hooks/email", events: 64 },
    ],
    deliveries: [
      { event: "payment.confirmed", code: 200 },
      { event: "subscription.renewed", code: 200 },
      { event: "payment.failed", code: 500 },
    ],
  },
  settings: {
    orgName: "Acme Labs",
    twoFactorLabel: "Two-factor authentication",
    brandingLabel: "Checkout branding color",
  },
} as const;

export const webhookEvents = [
  {
    group: "Customer",
    events: ["customer.created", "customer.updated", "customer.deleted"],
  },
  {
    group: "Payment method",
    events: ["payment_method.created", "payment_method.deleted"],
  },
  { group: "Checkout", events: ["checkout.created"] },
  {
    group: "Payment",
    events: ["payment.pending", "payment.confirmed", "payment.failed"],
  },
  { group: "Refund", events: ["refund.succeeded", "refund.failed"] },
  {
    group: "Subscription",
    events: [
      "subscription.created",
      "subscription.updated",
      "subscription.renewed",
      "subscription.canceled",
    ],
  },
] as const;

export const developers = {
  eyebrow: "Developers",
  title: "Built like the APIs developers already love.",
  description: "Predictable, typed and documented from day one.",
  bullets: [
    "Versioned API, pinned per key or per request",
    "Cursor pagination on every list endpoint",
    "Testnet and mainnet keys, the key encodes the environment",
    "OpenAPI spec for generated clients",
    "Typed TypeScript SDK",
    "MCP server for AI agents",
    "Rate limits documented",
  ],
  eventsTitle: "Webhook events",
  envelopeNote:
    "*.updated events include the previous values of changed fields in data.previous_attributes.",
  envelopeCode: `{
  "id": "evt_123",
  "type": "subscription.updated",
  "created": 1767225600,
  "livemode": false,
  "data": {
    "object": { "id": "sub_123", "status": "active" },
    "previous_attributes": { "status": "trialing" }
  }
}`,
} as const;

export const howItWorks = {
  eyebrow: "How it works",
  title: "Three calls to go live.",
  description: "Create a checkout, verify access, handle webhooks.",
  previewLabel: "API preview",
  steps: [
    {
      title: "Create a checkout",
      description:
        "One call returns a hosted payment page. Redirect your customer to it.",
    },
    {
      title: "Verify access",
      description:
        "Ask whether a customer has an active plan before serving the product.",
    },
    {
      title: "Handle webhooks",
      description: "Fulfil orders and keep access in sync from signed events.",
    },
  ],
  snippets: [
    {
      tab: "Create checkout",
      lang: "ts",
      code: `import { WhitechainTools } from "@whitechaintools/core";

const whitechaintools = new WhitechainTools({ apiKey: process.env.WHITECHAINTOOLS_API_KEY! });

const checkout = await whitechaintools.checkout.create({
  productId: "prod_pro_monthly",
  customerEmail: "ada@example.com",
  currencies: ["USDT", "USDC", "WBT"],
});

// redirect the customer to checkout.url`,
    },
    {
      tab: "Verify access",
      lang: "ts",
      code: `const { hasAccess, grant } = await whitechaintools.customers.access.verify(
  "cus_123",
  "prod_pro_monthly",
);

if (!hasAccess) throw new Error("No active subscription");
// grant.type is "subscription" or "one_time"`,
    },
    {
      tab: "Handle webhooks",
      lang: "ts",
      code: `export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("x-whitechaintools-signature")!;
  const event = whitechaintools.webhooks.constructEvent(body, signature, process.env.WHITECHAINTOOLS_WEBHOOK_SECRET!);

  switch (event.type) {
    case "payment.confirmed":
      // fulfil the order
      break;
    case "subscription.renewed":
      // keep access active
      break;
    case "subscription.canceled":
      // revoke access
      break;
  }
  return Response.json({ received: true });
}`,
    },
  ],
} as const;

export const mechanism = {
  eyebrow: "Mechanism",
  title: "Recurring billing without custody.",
  description: "How onchain subscriptions work, step by step.",
  steps: [
    {
      title: "Customer approves once",
      description:
        "Their smart account grants WhitechainTools a capped spend permission, e.g. 20 USDT per 30 days, revocable any time.",
      icon: "ShieldCheck",
    },
    {
      title: "Renewal runs onchain",
      description:
        "At period end, the renewal executor pulls exactly the allowed amount. It can never exceed the cap.",
      icon: "RefreshCw",
    },
    {
      title: "Gas is sponsored",
      description:
        "A paymaster covers gas in WBT so customers only hold stablecoins.",
      icon: "Fuel",
    },
    {
      title: "Merchant is notified",
      description:
        "A signed subscription.renewed webhook fires, and the payment is visible on the Whitechain explorer.",
      icon: "Webhook",
    },
    {
      title: "Customer stays in control",
      description:
        "Cancel or pause from the portal revokes or pauses the permission.",
      icon: "UserCog",
    },
  ] satisfies { title: string; description: string; icon: LucideIconName }[],
  note: "Built on ERC-4337 smart accounts and spend permissions. Every renewal is a verifiable onchain transaction.",
  noteStatus: { status: "porting", milestone: "M1" },
} as const;

export type AdapterCategory =
  "Commerce" | "Auth" | "AI" | "Files" | "Agents" | "Core";

export interface Adapter {
  name: string;
  monogram: string;
  category: AdapterCategory;
  description: string;
  status: Status;
  milestone?: Milestone;
  shippedOnStellar: boolean;
  docsHref?: string;
}

export const adapterCategories = [
  "All",
  "Commerce",
  "Auth",
  "AI",
  "Files",
  "Agents",
  "Core",
] as const;

export const adapters = {
  eyebrow: "Adapters",
  title: "Plugs into the stack you already run.",
  description: "Framework adapters and SDKs, ported from StellarTools.",
  docsLabel: "Stellar version docs",
  playgroundLabel:
    "Try every adapter live in the StellarTools Adapter Playground",
  items: [
    {
      name: "WooCommerce",
      monogram: "Wc",
      category: "Commerce",
      description: "Accept Whitechain payments in any WooCommerce store.",
      status: "porting",
      milestone: "M2",
      shippedOnStellar: true,
      docsHref: "https://docs.stellartools.dev/integrations/woocommerce",
    },
    {
      name: "Shopify",
      monogram: "Sh",
      category: "Commerce",
      description:
        "Offsite checkout for Shopify stores, subscriptions managed in WhitechainTools.",
      status: "porting",
      milestone: "M2",
      shippedOnStellar: false,
    },
    {
      name: "MedusaJS",
      monogram: "Md",
      category: "Commerce",
      description: "WhitechainTools as a payment provider in Medusa v2.",
      status: "porting",
      milestone: "M2",
      shippedOnStellar: true,
      docsHref: "https://docs.stellartools.dev/integrations/medusajs",
    },
    {
      name: "Better Auth",
      monogram: "Ba",
      category: "Auth",
      description: "Billing plugin for Better Auth apps.",
      status: "porting",
      milestone: "M2",
      shippedOnStellar: true,
      docsHref: "https://docs.stellartools.dev/integrations/betterauth",
    },
    {
      name: "Vercel AI SDK",
      monogram: "Ai",
      category: "AI",
      description: "Gate AI model access to paying subscribers.",
      status: "porting",
      milestone: "M2",
      shippedOnStellar: true,
      docsHref: "https://docs.stellartools.dev/integrations/aisdk",
    },
    {
      name: "LangChain",
      monogram: "Lc",
      category: "AI",
      description: "Gate LangChain model access to subscribers.",
      status: "porting",
      milestone: "M2",
      shippedOnStellar: true,
      docsHref: "https://docs.stellartools.dev/integrations/langchain",
    },
    {
      name: "UploadThing",
      monogram: "Ut",
      category: "Files",
      description: "Gate file uploads to subscribers.",
      status: "porting",
      milestone: "M2",
      shippedOnStellar: true,
      docsHref: "https://docs.stellartools.dev/integrations/uploadthing",
    },
    {
      name: "MCP server",
      monogram: "Mc",
      category: "Agents",
      description:
        "Let Cursor, Claude and other agents manage customers and subscriptions.",
      status: "porting",
      milestone: "M2",
      shippedOnStellar: true,
      docsHref: "https://docs.stellartools.dev/integrations/mcp",
    },
    {
      name: "TypeScript SDK",
      monogram: "Ts",
      category: "Core",
      description: "Typed client for every API resource.",
      status: "porting",
      milestone: "M1",
      shippedOnStellar: true,
      docsHref: "https://docs.stellartools.dev/integrations/typescript-sdk",
    },
    {
      name: "Plugin SDK",
      monogram: "Ps",
      category: "Core",
      description:
        "Build your own metered integration on top of WhitechainTools.",
      status: "porting",
      milestone: "M2",
      shippedOnStellar: true,
      docsHref: links.github,
    },
    {
      name: "GoHighLevel",
      monogram: "Gh",
      category: "Commerce",
      description: "Billing for GHL agencies and their sub-accounts.",
      status: "planned",
      shippedOnStellar: false,
    },
  ] satisfies Adapter[],
} as const;

export interface MarketplaceApp {
  name: string;
  description: string;
  icon: LucideIconName;
  status: Status;
  shippedOnStellar: boolean;
}

export const marketplace = {
  eyebrow: "Marketplace",
  title: "An app marketplace inside your dashboard.",
  description:
    "Apps run natively in the dashboard and react to billing events. Credentials are stored encrypted, and each app's bridge server only ever receives short-lived signed tokens, so third parties never hold the merchant's keys.",
  bridge: ["Dashboard", "JWT bridge", "App"],
  apps: [
    {
      name: "Resend",
      description: "Transactional emails on payment events.",
      icon: "Mail",
      status: "porting",
      shippedOnStellar: true,
    },
    {
      name: "Loops",
      description: "Lifecycle emails and workflows.",
      icon: "Mail",
      status: "porting",
      shippedOnStellar: true,
    },
    {
      name: "FirstPromoter",
      description: "Affiliate tracking.",
      icon: "Users",
      status: "planned",
      shippedOnStellar: false,
    },
    {
      name: "PostHog",
      description: "Product analytics and billing cohorts.",
      icon: "ChartColumn",
      status: "planned",
      shippedOnStellar: false,
    },
  ] satisfies MarketplaceApp[],
  build: {
    title: "Build your own app",
    description: "Ship an integration into every merchant's dashboard.",
    href: links.buildingApps,
  },
} as const;

export type CopilotBlock =
  | {
      kind: "plan";
      name: string;
      price: string;
      interval: string;
      trial: string;
    }
  | {
      kind: "failures";
      rows: { customer: string; reason: string }[];
    }
  | {
      kind: "email";
      subject: string;
      body: string;
      action: string;
    };

export interface CopilotScript {
  prompt: string;
  reply: string;
  block: CopilotBlock;
  followUp?: string;
}

export const copilot = {
  eyebrow: "Copilot",
  title: "Your billing team, in a chat box.",
  description:
    "WhitechainTools Copilot runs on the same tools as our MCP server. It reads your billing data and takes actions only after you confirm.",
  statusLabel: "Planned · M3",
  sampleDataLabel: "Sample data",
  inputPlaceholder: "Ask Copilot about your billing",
  demoReply:
    "This is a demo. Join the waitlist to try Copilot when it launches.",
  capabilities: [
    {
      title: "Set up in plain English",
      description: "Create a $20/month Pro plan with a 7-day trial.",
      icon: "WandSparkles",
    },
    {
      title: "Explain failures",
      description:
        "Why did renewals fail this week? Copilot reads failed renewals and explains the cause, like allowance too low or insufficient balance.",
      icon: "SearchX",
    },
    {
      title: "Recover revenue",
      description:
        "Drafts and sends win-back or dunning emails through the Resend or Loops app.",
      icon: "Mail",
    },
    {
      title: "Answer revenue questions",
      description:
        "MRR, churn and top plans, in the merchant's local currency.",
      icon: "ChartColumn",
    },
    {
      title: "Guide integrations",
      description:
        "Step-by-step setup for WooCommerce, Shopify or Medusa, generating the exact config.",
      icon: "BookOpen",
    },
    {
      title: "Safe by design",
      description:
        "Every write action shows a confirmation card with the exact change before it runs.",
      icon: "ShieldCheck",
    },
  ] satisfies { title: string; description: string; icon: LucideIconName }[],
  scripts: [
    {
      prompt: "Create a $20/month Pro plan with a 7-day trial.",
      reply: "Here's the plan. Customers can pay in USDT, USDC or WBT.",
      block: {
        kind: "plan",
        name: "Pro",
        price: "$20.00",
        interval: "Monthly",
        trial: "7-day trial",
      },
    },
    {
      prompt: "Why did renewals fail this week?",
      reply:
        "3 renewals failed. 2 customers' spend allowance is below the new price after your price change, 1 wallet had insufficient USDT.",
      block: {
        kind: "failures",
        rows: [
          { customer: "ada@example.com", reason: "Allowance too low" },
          { customer: "grace@example.com", reason: "Allowance too low" },
          { customer: "linus@example.com", reason: "Insufficient USDT" },
        ],
      },
      followUp: "Want me to email them a one-click re-approve link?",
    },
    {
      prompt: "Draft a win-back email for customers who canceled in September.",
      reply: "Here's a draft you can send to those customers.",
      block: {
        kind: "email",
        subject: "Your Pro plan misses you",
        body: "Hi there, we noticed you canceled your Pro plan in September. Come back any time and pick up right where you left off.",
        action: "Send with Resend",
      },
    },
  ] satisfies CopilotScript[],
} as const;

export const whyWhitechain = {
  eyebrow: "Why Whitechain",
  title: "Why we're building here.",
  description: "Four reasons Whitechain is the right place for this product.",

  items: [
    {
      title: "Distribution",
      description:
        "Whitechain connects to WhiteBIT's 10M+ users. Merchants on WhitechainTools can sell to people who already hold WBT and stablecoins.",
      icon: "Users",
    },
    {
      title: "Cost",
      description: "Sub-cent fees make monthly micro-subscriptions viable.",
      icon: "Coins",
    },
    {
      title: "EVM equivalent",
      description:
        "Standard Solidity, viem and wallets, so our adapters port cleanly.",
      icon: "Layers",
    },
    {
      title: "Every dapp needs to get paid",
      description:
        "We give every team in the Whitechain ecosystem billing on day one, which turns into recurring, verifiable onchain activity.",
      icon: "Rocket",
    },
  ] satisfies { title: string; description: string; icon: LucideIconName }[],
  note: "Figures from Whitechain's public materials.",
} as const;

export interface RoadmapMilestone {
  label: Milestone;
  title: string;
  status: Status;
  current?: boolean;
  deliverables: string[];
  verify: string[];
}

export const roadmap = {
  eyebrow: "Roadmap",
  title: "Milestones we'll be measured against.",
  description: "What ships when, and how you can check it yourself.",
  deliverablesLabel: "Deliverables",
  verifyLabel: "How you can verify it",
  milestones: [
    {
      label: "M1",
      title: "Core payments on Whitechain Sepolia",
      status: "porting",
      current: true,
      deliverables: [
        "Billing contracts (spend-permission subscriptions, renewal executor)",
        "One-time and subscription products",
        "Local-currency pricing",
        "Checkout for WBT, USDT, USDC and token-list ERC-20s",
        "Versioned REST API with testnet and mainnet keys",
        "@whitechaintools/core SDK",
        "Signed webhooks (full event set)",
        "Access checks",
      ],
      verify: [
        "Verified contracts on the Whitechain explorer",
        "Public npm package",
        "Public docs",
        "Open-source repo",
      ],
    },
    {
      label: "M2",
      title: "Merchant surface and adapters",
      status: "planned",
      deliverables: [
        "Full dashboard (all 10 pages)",
        "Customer portal",
        "Refunds",
        "Usage-based billing",
        "Payouts",
        "2FA",
        "Paymaster gas sponsorship",
        "All adapters and the plugin SDK ported",
        "MCP server",
        "App marketplace with Resend and Loops",
        "Adapter playground",
      ],
      verify: [
        "Adapter playground live on testnet",
        "Demo store accepting test payments end to end",
      ],
    },
    {
      label: "M3",
      title: "AI Merchant Copilot",
      status: "planned",
      deliverables: [
        "Copilot inside the dashboard built on the MCP tool layer",
        "Natural-language plan setup",
        "Failure explanations",
        "Dunning drafts",
        "Confirm-before-write actions",
      ],
      verify: [
        "Public demo video",
        "A test merchant account reviewers can use",
      ],
    },
    {
      label: "M4",
      title: "Mainnet and first merchants",
      status: "planned",
      deliverables: [
        "Security review of contracts",
        "Mainnet deployment at Whitechain mainnet launch",
        "Onboarding of first live merchants",
        "Public status page",
        "Stretch: experiments and cohorts, fiat cash-out with an ecosystem partner",
      ],
      verify: [
        "Mainnet contract addresses",
        "Onchain renewal transactions",
        "Merchant count and renewal success rate reported monthly",
      ],
    },
  ] satisfies RoadmapMilestone[],
} as const;

export const trackRecord = {
  eyebrow: "Track record",
  title: "We've done this before.",
  story:
    "StellarTools is our open-source, Stripe-like billing platform on Stellar. We were funded by the Stellar Community Fund (SCF #40), delivered every milestone, and shipped checkout, one-time and subscription billing, usage-based billing, a customer portal, payouts, versioned APIs, webhooks, an MCP server, 7 adapters, a plugin SDK, 2FA and an app marketplace. WhitechainTools takes that product to Whitechain.",
  buttons: [
    { label: "Visit StellarTools", href: links.stellartools },
    { label: "Read the docs", href: links.docs },
    { label: "View on GitHub", href: links.github },
  ],
  shipped: [
    "Hosted checkout",
    "One-time and subscription billing",
    "Usage-based billing",
    "Customer portal",
    "Payouts",
    "Versioned REST API",
    "Signed webhooks with retries",
    "MCP server",
    "7 framework adapters",
    "Plugin SDK",
    "Two-factor authentication",
    "App marketplace",
  ],
} as const;

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  socials: { x?: string; github?: string; linkedin?: string };
}

export const team = {
  eyebrow: "Team",
  title: "The team behind StellarTools.",
  description: "The same builders, now on Whitechain.",
  linkLabel: "Meet us on stellartools.dev/team",
  linkHref: links.teamPage,
  members: [
    {
      name: "Emmanuel Odii",
      role: "Founder & CEO",
      initials: "EO",
      socials: {
        x: "https://x.com/devodii_",
        github: "https://github.com/devodii",
        linkedin: "https://www.linkedin.com/in/emmanuelodii/",
      },
    },
    {
      name: "Prince Ajuzie",
      role: "Software Engineer",
      initials: "PA",
      socials: {
        x: "https://x.com/princeajuzie7",
        github: "https://github.com/princeajuzie7",
        linkedin: "https://www.linkedin.com/in/princeajuzie/",
      },
    },
    {
      name: "Lucas Svoboda",
      role: "Head of Product",
      initials: "LS",
      socials: {
        linkedin: "https://www.linkedin.com/in/lucas-s-723a73212/",
      },
    },
    {
      name: "Mauricio Iriarte Hermida",
      role: "Designer",
      initials: "MI",
      socials: {
        linkedin: "https://www.linkedin.com/in/mauiriarte/",
      },
    },
  ] satisfies TeamMember[],
} as const;

export const pricing = {
  eyebrow: "Pricing",

  title: "Simple pricing at launch.",
  body: "1% of processed volume. No seat fees, no monthly plans. Free on testnet.",
  note: "Final pricing announced at mainnet.",
} as const;

export const faq = {
  eyebrow: "FAQ",
  title: "Questions, answered.",
  items: [
    {
      question: "Is WhitechainTools live?",
      answer:
        "Not yet. We're building on Whitechain Sepolia now and launching with Whitechain mainnet. Our Stellar version, StellarTools, is live today.",
    },
    {
      question: "Is it custodial?",
      answer:
        "No. Customers pay from their own wallets and approve capped, revocable spend permissions. Funds go straight to the merchant.",
    },
    {
      question: "Which tokens can customers pay with?",
      answer: "WBT, USDT and USDC on Whitechain at launch.",
    },
    {
      question: "Do customers need WBT for gas?",
      answer:
        "No. Our paymaster sponsors gas so customers can hold only stablecoins (planned for M2).",
    },
    {
      question: "Can I use it with my existing store or app?",
      answer:
        "Yes. We're porting our WooCommerce, MedusaJS, Better Auth, AI SDK, LangChain and UploadThing adapters, plus our MCP server.",
    },
    {
      question: "Is this an official Whitechain product?",
      answer:
        "No. WhitechainTools is independent, built by the StellarTools team.",
    },
    {
      question: "Is it open source?",
      answer: "Yes, like StellarTools.",
    },
  ],
} as const;

export const waitlist = {
  eyebrow: "Waitlist",
  title: "Be one of the first merchants on WhitechainTools.",
  description: "Tell us what you are building and we will be in touch.",
  roles: [
    "Merchant / store",
    "SaaS or app developer",
    "Whitechain project",
    "Other",
  ],
  success: "You're on the list.",
} as const;
