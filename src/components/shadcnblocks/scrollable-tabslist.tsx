import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const ScrollableTabsList = ({ children, className }: { children?: ReactNode; className?: string }) => <div className={cn("flex overflow-x-auto", className)}>{children}</div>;
