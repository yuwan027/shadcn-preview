"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const LineShadowText = ({ children, className, shadowColor }: { children?: ReactNode; className?: string; shadowColor?: string }) => {
  const shadow = shadowColor ? `2px 2px 0 ${shadowColor}` : "2px 2px 0 #000";
  return <span className={cn("relative", className)} style={{ textShadow: shadow }}>{children}</span>;
};
