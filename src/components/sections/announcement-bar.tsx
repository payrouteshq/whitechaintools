"use client";

import { ArrowRight, X } from "lucide-react";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { announcement } from "@/content/site";

const STORAGE_KEY = "announcement-dismissed";

const EVENT = "announcement-dismissed";
let dismissedInMemory = false;

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
}

function getSnapshot() {
  if (dismissedInMemory) return true;
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function AnnouncementBar() {
  const dismissed = useSyncExternalStore(subscribe, getSnapshot, () => false);

  function dismiss() {
    dismissedInMemory = true;
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    window.dispatchEvent(new Event(EVENT));
  }

  if (dismissed) return null;

  return (
    <div className="bg-accent text-accent-foreground relative border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-10 py-2 text-center text-sm">
        <span>{announcement.text}</span>
        <a
          href={announcement.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline"
        >
          {announcement.linkLabel}
          <ArrowRight aria-hidden="true" className="size-3" />
        </a>
      </div>
      <Button
        variant="ghost"
        size="icon-xs"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute top-1/2 right-2 -translate-y-1/2"
      >
        <X />
      </Button>
    </div>
  );
}
