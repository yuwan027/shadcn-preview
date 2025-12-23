"use client";
import { ReactNode } from "react";
export const GlowingEffect = ({ children, className }: { children?: ReactNode; className?: string; blur?: number; borderRadius?: string; spread?: number; glow?: boolean; disabled?: boolean; proximity?: number; inactiveZone?: number }) => <div className={className}>{children}</div>;
