"use client";
import { ReactNode } from "react";
const VerticalCutReveal = ({ children, className }: { children?: ReactNode; className?: string; splitBy?: string }) => <span className={className}>{children}</span>;
export default VerticalCutReveal;
