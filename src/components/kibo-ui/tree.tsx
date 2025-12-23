import { cn } from "@/lib/utils";
import { ReactNode, createContext, useContext } from "react";

const TreeContext = createContext<any>({});

export const TreeProvider = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <TreeContext.Provider value={{}}><div className={cn("", className)}>{children}</div></TreeContext.Provider>
);

export const TreeView = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("", className)}>{children}</div>
);

export const TreeNode = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("pl-4", className)}>{children}</div>
);

export const TreeNodeTrigger = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <button className={cn("flex items-center gap-2 py-1 hover:bg-accent rounded px-2 w-full text-left", className)}>{children}</button>
);

export const TreeNodeContent = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("pl-6", className)}>{children}</div>
);

export const TreeIcon = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <span className={cn("", className)}>{children}</span>
);

export const TreeLabel = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <span className={cn("", className)}>{children}</span>
);

export const TreeExpander = ({ className }: { className?: string }) => (
  <span className={cn("w-4 h-4", className)}>▶</span>
);
