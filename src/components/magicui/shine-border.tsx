"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const ShineBorder = ({ children, className }: { children?: ReactNode; className?: string; borderRadius?: number; borderWidth?: number; duration?: number; color?: string[] }) => (
  <div className={cn("relative overflow-hidden rounded-lg p-[1px]", className)}>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
    <div className="relative bg-background rounded-lg p-4">{children}</div>
  </div>
);
