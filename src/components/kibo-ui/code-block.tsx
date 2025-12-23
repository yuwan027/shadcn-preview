"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const CodeBlock = ({ children, className }: { children?: ReactNode; className?: string; language?: string }) => <pre className={cn("bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto", className)}><code>{children}</code></pre>;
export default CodeBlock;
