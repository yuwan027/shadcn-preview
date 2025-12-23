"use client";
import { cn } from "@/lib/utils";
export const VideoText = ({ text, className, src }: { text?: string; className?: string; src?: string }) => (
  <div className={cn("relative overflow-hidden", className)}>
    {src && <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover"><source src={src} type="video/mp4" /></video>}
    <span className="relative">{text}</span>
  </div>
);
