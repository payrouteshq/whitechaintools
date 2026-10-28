"use client";

import {
  ArrowLeftRight,
  Code,
  Info,
  Landmark,
  LayoutDashboard,
  Package,
  Plus,
  RefreshCw,
  SlidersHorizontal,
  Store,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { Sparkline } from "@/components/landing/sparkline";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { dashboard } from "@/content/landing";
import { cn } from "@/lib/utils";

const navIcons: Record<string, LucideIcon> = {
  Overview: LayoutDashboard,
  Products: Package,
  Transactions: ArrowLeftRight,
  Customers: Users,
  Subscriptions: RefreshCw,
  Payout: Landmark,
  Marketplace: Store,
  Settings: SlidersHorizontal,
  Developers: Code,
};

function AppDrawer({
  app,
  onClose,
}: {
  app: (typeof dashboard.apps)[number];
  onClose: () => void;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-overlay absolute inset-0 z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="bg-background absolute inset-y-0 right-0 z-50 flex w-[min(22rem,85%)] flex-col shadow-2xl"
      >
        <header className="flex items-center gap-3 p-4">
          <span className="bg-secondary flex size-9 items-center justify-center rounded-lg text-sm font-semibold">
            {app.monogram}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{app.name}</p>
            <p className="text-muted-foreground text-xs">{app.tagline}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-muted-foreground hover:text-foreground flex size-7 items-center justify-center rounded-md"
          >
            <X className="size-4" />
          </button>
        </header>
        <ul className="divide-y overflow-y-auto px-4 text-sm">
          {app.activity.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between py-3"
            >
              <div>
                <p className="font-medium">{item.label}</p>
                <p className="text-muted-foreground text-xs">{item.detail}</p>
              </div>
              <span className="text-muted-foreground text-xs">{item.time}</span>
            </li>
          ))}
        </ul>
      </motion.aside>
    </>
  );
}

export function DashboardShowcase() {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const app = dashboard.apps.find((item) => item.name === activeApp);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="bg-muted/30 relative overflow-hidden rounded-2xl border shadow-2xl"
    >
      <div className="bg-primary text-primary-foreground flex items-center justify-center gap-2 px-6 py-1 text-xs">
        <Info className="size-3.5" />
        You are in <span className="font-medium">Test mode</span>
      </div>

      <div className="flex">
        <aside className="hidden w-56 shrink-0 flex-col justify-between p-2 md:flex">
          <div>
            <div className="flex items-center gap-2 p-2">
              <span className="bg-secondary flex size-6 items-center justify-center rounded-sm text-[10px] font-semibold">
                {dashboard.org[0]}
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">{dashboard.org}</p>
                <p className="text-muted-foreground text-xs">
                  Your organization
                </p>
              </div>
            </div>
            <nav className="mt-2 space-y-0.5">
              {dashboard.nav.map((item, index) => {
                const NavIcon = navIcons[item] ?? LayoutDashboard;
                return (
                  <div
                    key={item}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm",
                      index === 0 && "bg-secondary font-medium",
                    )}
                  >
                    <NavIcon className="size-4" />
                    {item}
                  </div>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center gap-2 p-2">
            <span className="bg-secondary flex size-8 items-center justify-center rounded-lg text-xs font-semibold">
              {dashboard.user.initials}
            </span>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-semibold">
                {dashboard.user.name}
              </p>
              <p className="text-muted-foreground truncate text-xs">
                {dashboard.user.email}
              </p>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="flex h-14 items-center justify-end gap-2 px-6">
            <Switch checked disabled aria-label="Sandbox data" />
            <span className="text-muted-foreground text-xs">Sandbox data</span>
          </div>
          <div className="bg-card rounded-tl-4xl border-l p-5 md:p-7 lg:p-10">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-bold tracking-tight">Overview</h3>
              <div className="flex gap-2">
                {["Last 30 days", "US Dollar (USD)"].map((chip) => (
                  <span
                    key={chip}
                    className="text-muted-foreground rounded-lg border px-3 py-1.5 text-xs"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {dashboard.stats.map((stat) => (
                <Card key={stat.title} className="gap-0 overflow-hidden py-0">
                  <CardContent className="space-y-1.5 px-5 pt-5 pb-0">
                    <p className="text-muted-foreground text-[10px] font-medium tracking-wider uppercase">
                      {stat.title}
                    </p>
                    <p className="text-xl font-bold tracking-tight tabular-nums">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground flex items-center gap-1.5 text-[10px]">
                      <Info className="size-3" aria-hidden="true" />
                      {stat.subtitle}
                    </p>
                    <Sparkline
                      data={stat.spark}
                      className={cn(
                        "-mx-5 mt-2 h-16 w-[calc(100%+2.5rem)]",
                        stat.color,
                      )}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-3 z-30 flex -translate-y-1/2 flex-col items-center gap-2">
        {dashboard.apps.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveApp(item.name)}
            title={item.name}
            className={cn(
              "bg-background flex size-8 items-center justify-center rounded-md text-xs font-semibold shadow-sm",
              activeApp === item.name && "ring-primary ring-2",
            )}
          >
            {item.monogram}
          </button>
        ))}
        <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full shadow-sm">
          <Plus className="size-4" />
        </span>
      </div>

      <AnimatePresence>
        {app ? (
          <AppDrawer
            key={app.name}
            app={app}
            onClose={() => setActiveApp(null)}
          />
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
