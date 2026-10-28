"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type Status = "idle" | "sending" | "done" | "error";

export function WaitlistDialog() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(response.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">Join the waitlist</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join the waitlist</DialogTitle>
          <DialogDescription>
            Be one of the first merchants on WhitechainTools.
          </DialogDescription>
        </DialogHeader>
        {status === "done" ? (
          <p className="text-sm">You&apos;re on the list.</p>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-3">
            <Input
              type="email"
              required
              placeholder="you@example.com"
              aria-label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {status === "error" ? (
              <p className="text-destructive text-sm">
                Something went wrong, try again.
              </p>
            ) : null}
            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Joining" : "Join"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
