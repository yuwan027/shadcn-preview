import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type PriceType = "monthly" | "yearly" | "one-time";

export const Price = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("flex items-baseline gap-1", className)}>{children}</div>
);

export const PriceValue = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <span className={cn("text-3xl font-bold", className)}>{children}</span>
);

export const PriceType = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <span className={cn("text-muted-foreground", className)}>{children}</span>
);
