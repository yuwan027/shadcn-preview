"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const Safari = ({ children, className, url, src }: { children?: ReactNode; className?: string; url?: string; src?: string }) => (
  <div className={cn("rounded-lg border shadow-lg overflow-hidden", className)}>
    <div className="flex items-center gap-2 px-4 py-3 border-b bg-gray-100 dark:bg-gray-800">
      <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /></div>
      <div className="flex-1 text-center text-sm text-muted-foreground truncate">{url}</div>
    </div>
    <div className="bg-white dark:bg-gray-900">{children || (src && <img src={src} className="w-full" alt="" />)}</div>
  </div>
);
export default Safari;
