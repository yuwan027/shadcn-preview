"use client";
import { cn } from "@/lib/utils";
export const SparklesCore = ({ className, background }: { className?: string; background?: string; particleColor?: string; minSize?: number; maxSize?: number; speed?: number; particleDensity?: number; id?: string }) => <div className={cn("absolute inset-0", className)} style={{ background }} />;
