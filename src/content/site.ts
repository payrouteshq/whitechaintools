export const site = {
  name: "WhitechainTools",
  wordmark: { lead: "Whitechain", accent: "Tools" },
  title: "WhitechainTools: financial infrastructure for Whitechain",
  description:
    "Accept payments from anywhere. Open-source, Stripe-like billing on Whitechain that settles in seconds for pennies.",
  github: "https://github.com/payrouteshq/whitechaintools",
  x: "https://x.com/payrouteshq",
  linkedin: "https://www.linkedin.com/company/payrouteshq",
} as const;

export const heroWords = ["SaaS", "Agency", "Marketplace", "Startup", "Store"];

export const primitives = [
  {
    label: "Payments",
    description:
      "Price in your local currency e.g. NGN, GHS, USD and more, while customers pay in WBT, USDT, USDC, or any Whitechain asset",
  },
  {
    label: "Subscriptions",
    description:
      "Recurring billing with trial periods, pause, cancel-at-period-end, and automatic renewal",
  },
  {
    label: "Checkout",
    description:
      "Hosted payment pages with your branding. A single API call no frontend code required",
  },
  {
    label: "Customer Portal",
    description:
      "Self-service billing portal. Customers manage their own subscriptions and payment methods",
  },
  {
    label: "Webhooks",
    description:
      "Real-time events for every state change e.g. payment.confirmed, subscription.renewed, and more",
  },
  {
    label: "Marketplace Apps",
    description: "One click integrations with the tools you already use",
  },
  {
    label: "Copilot",
    description:
      "Ask about your billing in plain English from the chat in your dashboard. Set up plans, find out why renewals failed and draft recovery emails, with every change confirmed by you before it runs",
    soon: true,
  },
];

export const dashboard = {
  org: "Acme Labs",
  user: { name: "Ada Lovelace", email: "ada@acme.io", initials: "AL" },
  nav: [
    "Overview",
    "Products",
    "Transactions",
    "Customers",
    "Subscriptions",
    "Payout",
    "Marketplace",
    "Settings",
    "Developers",
  ],
  stats: [
    {
      title: "Active Trials",
      value: "16",
      subtitle: "In total",
      color: "text-chart-3",
      spark: [1, 2, 9, 2, 1, 1, 8, 2, 1, 1, 2, 1, 1, 1],
    },
    {
      title: "Active Subscriptions",
      value: "45",
      subtitle: "In total",
      color: "text-chart-2",
      spark: [2, 3, 2, 14, 3, 2, 2, 3, 2, 2, 3, 2, 2, 2],
    },
    {
      title: "MRR",
      value: "$10,639.87",
      subtitle: "Monthly Recurring Revenue",
      color: "text-chart-2",
      spark: [2, 3, 12, 6, 3, 2, 2, 2, 3, 2, 2, 2, 2, 2],
    },
    {
      title: "Gross volume",
      value: "$38,437.51",
      subtitle: "Last 30 days",
      color: "text-chart-2",
      spark: [2, 3, 14, 5, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2],
    },
    {
      title: "New Customers",
      value: "78",
      subtitle: "Last 30 days",
      color: "text-chart-4",
      spark: [3, 10, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    },
    {
      title: "Active Customers",
      value: "223",
      subtitle: "In total",
      color: "text-chart-4",
      spark: [3, 10, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    },
  ],
  copilot: {
    name: "Copilot",
    tagline: "Your billing team, in a chat box.",
    messages: [
      { role: "user", text: "Why did renewals fail this week?" },
      {
        role: "assistant",
        text: "3 renewals failed. 2 spend allowances are below your new price and 1 wallet had insufficient USDT.",
      },
      { role: "user", text: "Email them a re-approve link." },
    ],
    confirm: { title: "Send 3 emails with Resend", action: "Confirm" },
  },
  apps: [
    {
      name: "Resend",
      icon: "/apps/resend.jpg",
      tagline: "Send transactional emails to your customers.",
      activity: [
        { label: "Payment receipt", detail: "sarah@acme.io", time: "2m ago" },
        {
          label: "Subscription renewed",
          detail: "j.moreno@vertex.co",
          time: "41m ago",
        },
        {
          label: "Refund confirmation",
          detail: "hello@nebula.dev",
          time: "3h ago",
        },
      ],
    },
    {
      name: "Loops",
      icon: "/apps/loops.png",
      tagline: "Trigger lifecycle email sequences from payment events.",
      activity: [
        {
          label: "Payment received",
          detail: "Welcome sequence",
          time: "5m ago",
        },
        {
          label: "Subscription renewed",
          detail: "Upsell sequence",
          time: "1h ago",
        },
        {
          label: "Trial expiring in 3 days",
          detail: "Win-back sequence",
          time: "5h ago",
        },
      ],
    },
  ],
};
