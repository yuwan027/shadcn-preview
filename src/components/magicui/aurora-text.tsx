"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const AuroraText = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <span className={cn("bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent", className)}>{children}</span>
);
