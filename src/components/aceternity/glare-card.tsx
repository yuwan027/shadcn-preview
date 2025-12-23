"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const GlareCard = ({ children, className }: { children?: ReactNode; className?: string }) => <div className={cn("relative overflow-hidden rounded-xl", className)}>{children}</div>;
