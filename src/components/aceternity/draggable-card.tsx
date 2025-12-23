"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const DraggableCardBody = ({ children, className }: { children?: ReactNode; className?: string }) => <div className={cn("relative", className)}>{children}</div>;
export const DraggableCardContainer = ({ children, className }: { children?: ReactNode; className?: string }) => <div className={cn("relative", className)}>{children}</div>;
