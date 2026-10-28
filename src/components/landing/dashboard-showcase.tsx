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
  Sparkles,
  Store,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

import { Sparkline } from "@/components/landing/sparkline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { dashboard } from "@/content/site";
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

type DockApp = (typeof dashboard.apps)[number];

function CopilotChat() {
  const { messages, confirm } = dashboard.copilot;
  return (
    <div className="space-y-3 px-4 pb-4 text-sm">
      {messages.map((message) => (
        <div
          key={message.text}
          className={cn(
            "w-fit max-w-[90%] rounded-lg px-3 py-2",
            message.role === "user"
              ? "bg-primary text-primary-foreground ml-auto"
              : "bg-secondary text-secondary-foreground",
          )}
        >
          {message.text}
        </div>
      ))}
      <div className="space-y-2 rounded-lg border p-3">
        <p className="font-medium">{confirm.title}</p>
        <div className="flex gap-2">
          <Button size="xs">{confirm.action}</Button>
          <Button size="xs" variant="outline">
            Cancel
          </Button>
        </div>
      </div>
      <p className="text-muted-foreground text-xs">
        Coming soon. Every change asks for your confirmation before it runs.
      </p>
    </div>
  );
}

function Activity({ app }: { app: DockApp }) {
  return (
    <ul className="divide-y px-4 text-sm">
      {app.activity.map((item) => (
        <li
          key={item.label}
          className="flex items-center justify-between gap-3 py-3"
        >
          <div className="min-w-0">
            <p className="font-medium">{item.label}</p>
            <p className="text-muted-foreground truncate text-xs">
              {item.detail}
            </p>
          </div>
          <span className="text-muted-foreground shrink-0 text-xs">
            {item.time}
          </span>
        </li>
      ))}
    </ul>
  );
}

function AppIcon({ app, size }: { app: DockApp; size: number }) {
  return (
    <Image
      src={app.icon}
      alt=""
      width={size}
      height={size}
      className="size-full rounded-[inherit] object-cover"
    />
  );
}

function Drawer({
  name,
  tagline,
  icon,
  onClose,
  children,
}: {
  name: string;
  tagline: string;
  icon: React.ReactNode;
  onClose: () => void;
  children: React.ReactNode;
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
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.25 }}
        className="bg-background absolute inset-x-2 top-10 bottom-14 z-50 flex flex-col overflow-hidden rounded-t-2xl shadow-2xl md:inset-x-auto md:inset-y-0 md:top-0 md:right-0 md:bottom-0 md:w-88 md:rounded-none"
      >
        <header className="flex items-center gap-3 p-4">
          <span className="bg-secondary flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg">
            {icon}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{name}</p>
            <p className="text-muted-foreground truncate text-xs">{tagline}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-muted-foreground hover:text-foreground flex size-7 shrink-0 items-center justify-center rounded-md"
          >
            <X className="size-4" />
          </button>
        </header>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </motion.aside>
    </>
  );
}

export function DashboardShowcase() {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const app = dashboard.apps.find((item) => item.name === activeApp);
  const copilotOpen = activeApp === dashboard.copilot.name;
  const close = () => setActiveApp(null);

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
          <div className="bg-card rounded-tl-4xl border-l p-5 pb-20 md:p-7 md:pb-7 lg:p-10">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg font-bold tracking-tight">Overview</p>
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

      <div className="bg-background/95 absolute inset-x-0 bottom-0 z-30 flex h-14 items-center justify-center gap-3 backdrop-blur-sm md:inset-x-auto md:top-1/2 md:right-3 md:bottom-auto md:h-auto md:-translate-y-1/2 md:flex-col md:gap-2 md:bg-transparent md:backdrop-blur-none">
        <button
          onClick={() => setActiveApp(dashboard.copilot.name)}
          title={dashboard.copilot.name}
          aria-label={dashboard.copilot.name}
          className={cn(
            "bg-background flex size-8 items-center justify-center rounded-md shadow-sm",
            copilotOpen && "ring-primary ring-2",
          )}
        >
          <Sparkles className="size-4" />
        </button>
        {dashboard.apps.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveApp(item.name)}
            title={item.name}
            aria-label={item.name}
            className={cn(
              "bg-background size-8 overflow-hidden rounded-md shadow-sm",
              activeApp === item.name && "ring-primary ring-2",
            )}
          >
            <AppIcon app={item} size={32} />
          </button>
        ))}
        <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full shadow-sm">
          <Plus className="size-4" />
        </span>
      </div>

      <AnimatePresence>
        {copilotOpen ? (
          <Drawer
            key="copilot"
            name={dashboard.copilot.name}
            tagline={dashboard.copilot.tagline}
            icon={<Sparkles className="size-4" />}
            onClose={close}
          >
            <CopilotChat />
          </Drawer>
        ) : null}
        {app ? (
          <Drawer
            key={app.name}
            name={app.name}
            tagline={app.tagline}
            icon={<AppIcon app={app} size={36} />}
            onClose={close}
          >
            <Activity app={app} />
          </Drawer>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
