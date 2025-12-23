"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const CardSpotlight = ({ children, className }: { children?: ReactNode; className?: string; radius?: number; color?: string }) => <div className={cn("relative p-10 rounded-md", className)}>{children}</div>;
