"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const RainbowButton = ({ children, className, ...props }: { children?: ReactNode; className?: string; [key: string]: any }) => (
  <button className={cn("relative inline-flex h-11 items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors", className)} {...props}>{children}</button>
);
