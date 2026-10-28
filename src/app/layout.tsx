import type { Metadata } from "next";
import { Onest } from "next/font/google";

import { site } from "@/content/site";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  fallback: ["sans-serif"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: { icon: "data:," },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={onest.variable} suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
