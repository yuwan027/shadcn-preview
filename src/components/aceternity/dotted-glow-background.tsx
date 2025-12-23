"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const DottedGlowBackground = ({ children, className }: { children?: ReactNode; className?: string }) => <div className={cn("relative", className)}>{children}</div>;
