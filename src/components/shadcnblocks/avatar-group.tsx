import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export const AvatarGroup = ({ children, className }: { children?: ReactNode; className?: string }) => <div className={cn("flex -space-x-2", className)}>{children}</div>;
