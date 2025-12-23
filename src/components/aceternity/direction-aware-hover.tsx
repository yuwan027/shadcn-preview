"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const DirectionAwareHover = ({ children, imageUrl, className }: { children?: ReactNode; imageUrl?: string; className?: string }) => (
  <div className={cn("relative overflow-hidden h-60 w-60", className)}>
    {imageUrl && <img src={imageUrl} alt="" className="object-cover w-full h-full" />}
    <div className="absolute inset-0 flex items-end p-4">{children}</div>
  </div>
);
