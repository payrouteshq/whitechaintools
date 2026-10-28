"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { GithubIcon } from "@/components/social-icons";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "@/components/landing/waitlist-dialog";
import { heroWords, site } from "@/content/site";

function CyclingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((current) => (current + 1) % heroWords.length),
      2200,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={heroWords[index]}
        initial={{ y: 14, filter: "blur(6px)" }}
        animate={{ y: 0, filter: "blur(0px)" }}
        exit={{ y: -14, filter: "blur(6px)" }}
        transition={{ duration: 0.38 }}
        className="inline-block"
      >
        {heroWords[index]}
      </motion.span>
    </AnimatePresence>
  );
}

export function Hero() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-28 pb-20 text-center">
      <h1 className="mb-5 text-[clamp(32px,5.5vw,64px)] leading-[1.06] font-bold tracking-tight">
        Payments for your <CyclingWord />,
        <br />
        built on Whitechain.
      </h1>
      <p className="text-muted-foreground mb-10 max-w-120 text-[17px] leading-relaxed">
        {site.description}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <WaitlistDialog />
        <Button size="lg" variant="outline" asChild>
          <a href={site.github} target="_blank" rel="noreferrer">
            <GithubIcon className="size-4" />
            Star on GitHub
          </a>
        </Button>
      </div>
    </section>
  );
}
