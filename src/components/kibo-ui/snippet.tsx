"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const Snippet = ({ children, className }: { children?: ReactNode; className?: string }) => <code className={cn("bg-muted px-2 py-1 rounded text-sm font-mono", className)}>{children}</code>;
export default Snippet;
