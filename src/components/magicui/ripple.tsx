"use client";
import { cn } from "@/lib/utils";
export const Ripple = ({ className }: { className?: string; mainCircleSize?: number; mainCircleOpacity?: number; numCircles?: number }) => <div className={cn("absolute inset-0", className)} />;
