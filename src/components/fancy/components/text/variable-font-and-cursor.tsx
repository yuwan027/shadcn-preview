"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
const VariableFontAndCursor = ({ children, className, label }: { children?: ReactNode; className?: string; label?: string }) => <span className={cn("font-bold", className)}>{children || label}</span>;
export default VariableFontAndCursor;
