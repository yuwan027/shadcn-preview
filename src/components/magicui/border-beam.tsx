"use client";
import { cn } from "@/lib/utils";
export const BorderBeam = ({ className }: { className?: string; size?: number; duration?: number; borderWidth?: number; anchor?: number; colorFrom?: string; colorTo?: string; delay?: number }) => <div className={cn("absolute inset-0", className)} />;
