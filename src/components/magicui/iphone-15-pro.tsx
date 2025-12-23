"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const Iphone15Pro = ({ children, className, src }: { children?: ReactNode; className?: string; src?: string }) => (
  <div className={cn("relative rounded-[3rem] border-8 border-black bg-black p-2", className)}>
    <div className="rounded-[2.5rem] overflow-hidden bg-white">{children || (src && <img src={src} className="w-full" alt="" />)}</div>
  </div>
);
export default Iphone15Pro;
