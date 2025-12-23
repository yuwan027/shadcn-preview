"use client";
import { cn } from "@/lib/utils";
export const Particles = ({ className }: { className?: string; quantity?: number; staticity?: number; ease?: number; size?: number; refresh?: boolean; color?: string; vx?: number; vy?: number }) => <div className={cn("absolute inset-0", className)} />;
