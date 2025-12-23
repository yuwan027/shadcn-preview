"use client";
import { cn } from "@/lib/utils";
export const World = ({ className }: { className?: string; globeConfig?: any; data?: any }) => <div className={cn("w-full h-full rounded-full bg-gradient-to-b from-blue-400 to-blue-800", className)} />;
