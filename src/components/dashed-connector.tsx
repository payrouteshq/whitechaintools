import { cn } from "@/lib/utils";

interface DashedConnectorProps {
  className?: string;
}

export function DashedConnector({ className }: DashedConnectorProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("text-border flex items-center justify-center", className)}
    >
      <svg
        className="h-8 w-2 lg:hidden"
        viewBox="0 0 8 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="4" y1="0" x2="4" y2="32" className="animate-dash" />
      </svg>
      <svg
        className="hidden h-2 w-8 lg:block"
        viewBox="0 0 32 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="0" y1="4" x2="32" y2="4" className="animate-dash" />
      </svg>
    </div>
  );
}
