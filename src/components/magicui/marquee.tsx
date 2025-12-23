"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const Marquee = ({ children, className, reverse, pauseOnHover, vertical, repeat = 4 }: { children?: ReactNode; className?: string; reverse?: boolean; pauseOnHover?: boolean; vertical?: boolean; repeat?: number }) => (
  <div className={cn("flex overflow-hidden [--duration:40s] [--gap:1rem]", vertical && "flex-col", className)}>
    {Array.from({ length: repeat }).map((_, i) => (
      <div key={i} className={cn("flex shrink-0 justify-around gap-[--gap] [animation:scroll_var(--duration)_linear_infinite]", vertical && "flex-col", reverse && "[animation-direction:reverse]", pauseOnHover && "hover:[animation-play-state:paused]")}>
        {children}
      </div>
    ))}
  </div>
);
export default Marquee;
