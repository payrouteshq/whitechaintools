import { primitives } from "@/content/landing";

export function Primitives() {
  return (
    <section className="border-t px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-muted-foreground mb-3 text-[11px] font-semibold tracking-[1.6px] uppercase">
          The primitives.
        </p>
        <h2 className="mb-14 text-[clamp(26px,3vw,38px)] font-bold tracking-tight">
          Everything you need.
        </h2>
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {primitives.map((item) => (
            <div key={item.label} className="bg-background border p-6">
              <p className="mb-2 font-semibold">{item.label}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
