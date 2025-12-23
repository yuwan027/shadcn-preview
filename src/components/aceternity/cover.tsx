"use client";
import { ReactNode } from "react";
export const Cover = ({ children, className }: { children?: ReactNode; className?: string }) => <span className={className}>{children}</span>;
