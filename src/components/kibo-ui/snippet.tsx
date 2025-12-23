import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Snippet = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("rounded-lg border bg-card", className)}>{children}</div>
);

export const SnippetHeader = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("flex items-center justify-between p-3 border-b", className)}>{children}</div>
);

export const SnippetCopyButton = ({ className }: { className?: string }) => (
  <button className={cn("p-2 hover:bg-accent rounded-md", className)}>Copy</button>
);

export const SnippetTabsList = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("flex gap-2 border-b", className)}>{children}</div>
);

export const SnippetTabsTrigger = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <button className={cn("px-4 py-2 hover:bg-accent rounded-t-md", className)}>{children}</button>
);

export const SnippetTabsContent = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("p-4", className)}>{children}</div>
);
