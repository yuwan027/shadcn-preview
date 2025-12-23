"use client";
import { cn } from "@/lib/utils";
export const CanvasRevealEffect = ({ containerClassName }: { animationSpeed?: number; containerClassName?: string; colors?: any; dotSize?: number }) => <div className={cn("absolute inset-0", containerClassName)} />;
