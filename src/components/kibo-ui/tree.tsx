"use client";
import { cn } from "@/lib/utils";
export const Tree = ({ data, className }: { data?: any[]; className?: string }) => <div className={cn("text-sm", className)}>{JSON.stringify(data, null, 2)}</div>;
export default Tree;
