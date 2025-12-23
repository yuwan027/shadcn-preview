"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const GlowingStarsBackgroundCard = ({ children, className }: { children?: ReactNode; className?: string }) => <div className={cn("relative bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4 max-w-md overflow-hidden rounded-2xl", className)}>{children}</div>;
export const GlowingStarsTitle = ({ children, className }: { children?: ReactNode; className?: string }) => <h2 className={cn("font-bold text-2xl text-[#eaeaea]", className)}>{children}</h2>;
export const GlowingStarsDescription = ({ children, className }: { children?: ReactNode; className?: string }) => <p className={cn("text-base text-white mt-4 max-w-[16rem]", className)}>{children}</p>;
