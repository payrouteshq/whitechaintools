"use client";

import { KpiTile } from "@/components/mock/kpi-tile";
import { LazyRevenueChart } from "@/components/mock/lazy-revenue-chart";
import { StatusPill } from "@/components/mock/status-pill";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  copilot,
  dashboardTour as tour,
  heroMockup,
  type DashboardPage,
} from "@/content/site";

function Mono({ children }: { children: React.ReactNode }) {
  return <span className="font-mono tabular-nums">{children}</span>;
}

function Overview() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {heroMockup.kpis.map((kpi) => (
          <KpiTile key={kpi.label} {...kpi} />
        ))}
      </div>
      <div className="bg-background rounded-lg border p-3">
        <p className="text-muted-foreground mb-2 text-xs">
          {heroMockup.chartTitle}
        </p>
        <LazyRevenueChart className="aspect-auto h-40 w-full" />
      </div>
    </div>
  );
}

function Products() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Interval</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tour.products.map((p) => (
          <TableRow key={p.name}>
            <TableCell className="font-medium">{p.name}</TableCell>
            <TableCell>
              <Badge variant="secondary">{p.type}</Badge>
            </TableCell>
            <TableCell>
              <Mono>{p.price}</Mono>
            </TableCell>
            <TableCell>{p.interval}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function Transactions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Token</TableHead>
          <TableHead>Tx hash</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tour.transactions.map((t) => (
          <TableRow key={t.id}>
            <TableCell>
              <StatusPill status={t.status} />
            </TableCell>
            <TableCell>
              <Mono>{t.amount}</Mono>
            </TableCell>
            <TableCell>{t.token}</TableCell>
            <TableCell className="text-primary-text font-mono underline-offset-4">
              {t.hash}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function Customers() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Wallet</TableHead>
          <TableHead>Active plan</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tour.customers.map((c) => (
          <TableRow key={c.email}>
            <TableCell className="font-medium">{c.email}</TableCell>
            <TableCell className="font-mono">{c.wallet}</TableCell>
            <TableCell>{c.plan}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function Subscriptions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Plan</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Next renewal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tour.subscriptions.map((s) => (
          <TableRow key={s.customer}>
            <TableCell className="font-medium">{s.customer}</TableCell>
            <TableCell>{s.plan}</TableCell>
            <TableCell>
              <StatusPill status={s.status} />
            </TableCell>
            <TableCell>{s.renewal}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function Payouts() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-2">
        {tour.payouts.balances.map((b) => (
          <KpiTile
            key={b.token}
            label={`${b.token} balance`}
            value={b.amount}
          />
        ))}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Token</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tour.payouts.history.map((h) => (
            <TableRow key={h.date}>
              <TableCell>{h.date}</TableCell>
              <TableCell>
                <Mono>{h.amount}</Mono>
              </TableCell>
              <TableCell>{h.token}</TableCell>
              <TableCell>
                <StatusPill status={h.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function Marketplace() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {tour.marketplace.map((app) => (
        <div
          key={app.name}
          className="bg-background flex items-center justify-between rounded-lg border p-3"
        >
          <div>
            <p className="text-sm font-medium">{app.name}</p>
            <p className="text-muted-foreground text-xs">{app.description}</p>
          </div>
          <Switch
            defaultChecked={app.installed}
            aria-label={`Toggle ${app.name}`}
          />
        </div>
      ))}
    </div>
  );
}

function CopilotMini() {
  const script = copilot.scripts[1];
  return (
    <div className="space-y-3 text-sm">
      <div className="bg-primary text-primary-foreground ml-auto w-fit max-w-[85%] rounded-lg px-3 py-2">
        {script?.prompt}
      </div>
      <div className="bg-secondary text-secondary-foreground w-fit max-w-[90%] rounded-lg px-3 py-2">
        {script?.reply}
      </div>
    </div>
  );
}

function Developers() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        {tour.developers.apiKeys.map((k) => (
          <div
            key={k.name}
            className="bg-background flex items-center justify-between rounded-lg border p-3"
          >
            <div>
              <p className="text-sm font-medium">{k.name}</p>
              <p className="text-muted-foreground font-mono text-xs">
                {k.masked}
              </p>
            </div>
            <Badge variant="secondary">{k.mode}</Badge>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {tour.developers.endpoints.map((e) => (
          <div
            key={e.url}
            className="bg-background flex items-center justify-between rounded-lg border p-3 text-sm"
          >
            <span className="truncate font-mono text-xs">{e.url}</span>
            <Mono>{e.events} events</Mono>
          </div>
        ))}
      </div>
      <ul className="space-y-1 text-xs">
        {tour.developers.deliveries.map((d) => (
          <li
            key={d.event}
            className="flex items-center justify-between font-mono"
          >
            {d.event}
            <span
              className={
                d.code === 200 ? "text-primary-text" : "text-destructive"
              }
            >
              <Mono>{d.code}</Mono>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Settings() {
  return (
    <div className="max-w-sm space-y-4 text-sm">
      <label className="block space-y-1.5">
        <span className="font-medium">Organization name</span>
        <Input defaultValue={tour.settings.orgName} />
      </label>
      <div className="flex items-center justify-between">
        <span className="font-medium">{tour.settings.twoFactorLabel}</span>
        <Switch defaultChecked aria-label={tour.settings.twoFactorLabel} />
      </div>
      <div className="space-y-1.5">
        <span className="font-medium">{tour.settings.brandingLabel}</span>
        <div className="flex gap-2">
          {["bg-primary", "bg-highlight", "bg-chart-4", "bg-chart-5"].map(
            (swatch, index) => (
              <Button
                key={swatch}
                type="button"
                variant="outline"
                size="icon-sm"
                aria-label={`Branding option ${index + 1}`}
              >
                <span className={`size-4 rounded-full ${swatch}`} />
              </Button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export const panels: Record<DashboardPage, () => React.JSX.Element> = {
  Overview,
  Products,
  Transactions,
  Customers,
  Subscriptions,
  Payouts,
  Marketplace,
  Copilot: CopilotMini,
  Developers,
  Settings,
};

export function DashboardPanel({ page }: { page: DashboardPage }) {
  const Panel = panels[page];
  return <Panel />;
}
