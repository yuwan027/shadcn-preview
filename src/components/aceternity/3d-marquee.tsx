"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const ThreeDMarquee = ({ children, className }: { children?: ReactNode; className?: string; images?: string[] }) => (
  <div className={cn("flex overflow-hidden", className)}>{children}</div>
);
