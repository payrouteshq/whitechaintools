import { z } from "zod";

import { waitlist } from "@/content/site";

export const waitlistSchema = z.object({
  email: z.email("Enter a valid email address"),
  role: z.enum(waitlist.roles, { error: "Pick the option that fits you" }),
  building: z
    .string()
    .max(500, "Keep it under 500 characters")
    .optional()
    .or(z.literal("")),
  url: z.url("Enter a valid URL").optional().or(z.literal("")),

  company: z.string().max(0).optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
