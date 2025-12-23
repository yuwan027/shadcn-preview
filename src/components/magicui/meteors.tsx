"use client";
import { cn } from "@/lib/utils";
export const Meteors = ({ className }: { number?: number; className?: string }) => <div className={cn("absolute inset-0 overflow-hidden", className)} />;
