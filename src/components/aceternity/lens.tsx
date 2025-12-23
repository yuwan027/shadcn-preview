"use client";
import { ReactNode } from "react";
export const Lens = ({ children, className }: { children?: ReactNode; className?: string; hovering?: boolean; setHovering?: (h: boolean) => void }) => <div className={className}>{children}</div>;
