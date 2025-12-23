"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const OrbitingCircles = ({ children, className, reverse, duration = 20, delay = 0, radius = 50 }: { children?: ReactNode; className?: string; reverse?: boolean; duration?: number; delay?: number; radius?: number; path?: boolean }) => (
  <div className={cn("absolute flex items-center justify-center rounded-full", className)} style={{ width: radius * 2, height: radius * 2 }}>{children}</div>
);
