import { NextResponse } from "next/server";

import { waitlistSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const parsed = waitlistSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const { company, ...entry } = parsed.data;

  if (company) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.log("[waitlist]", entry);
    return NextResponse.json({ ok: true });
  }

  const response = await fetch(
    `https://api.resend.com/audiences/${audienceId}/contacts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: entry.email, unsubscribed: false }),
    },
  );

  if (!response.ok) {
    console.error("[waitlist] resend failed", response.status);
    return NextResponse.json(
      { ok: false, error: "Could not save your signup, try again" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
