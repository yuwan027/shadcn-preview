"use client";
import { cn } from "@/lib/utils";
export const AnimatedTooltip = ({ items, className }: { items?: any[]; className?: string }) => (
  <div className={cn("flex", className)}>
    {items?.map((item, i) => <img key={i} src={item.image} alt={item.name} className="h-10 w-10 rounded-full border-2 border-white -ml-2 first:ml-0" />)}
  </div>
);
