"use client";
import { ReactNode } from "react";
export const PointerHighlight = ({ children, className }: { children?: ReactNode; className?: string }) => <span className={className}>{children}</span>;
