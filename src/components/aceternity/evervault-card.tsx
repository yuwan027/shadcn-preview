"use client";
import { cn } from "@/lib/utils";
export const EvervaultCard = ({ text, className }: { text?: string; className?: string }) => <div className={cn("p-4 border rounded h-52 relative", className)}><p className="absolute bottom-4 left-4">{text}</p></div>;
