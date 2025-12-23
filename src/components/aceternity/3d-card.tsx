"use client";
import { cn } from "@/lib/utils";
import React, { createContext, useContext, useState, useRef, ReactNode } from "react";

const MouseEnterContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(undefined);

export const CardContainer = ({ children, className, containerClassName }: { children?: ReactNode; className?: string; containerClassName?: string }) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div className={cn("flex items-center justify-center", containerClassName)} style={{ perspective: "1000px" }}>
        <div
          onMouseEnter={() => setIsMouseEntered(true)}
          onMouseLeave={() => setIsMouseEntered(false)}
          className={cn("flex items-center justify-center relative transition-all duration-200 ease-linear", className)}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn("h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", className)}>{children}</div>;
};

export const CardItem = ({ as: Tag = "div", children, className, translateX = 0, translateY = 0, translateZ = 0, rotateX = 0, rotateY = 0, rotateZ = 0, ...rest }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useContext(MouseEnterContext) || [false];
  const transform = isMouseEntered
    ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    : `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
  return (
    <Tag ref={ref} className={cn("w-fit transition duration-200 ease-linear", className)} style={{ transform }} {...rest}>
      {children}
    </Tag>
  );
};
