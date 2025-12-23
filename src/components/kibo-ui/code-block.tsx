import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type BundledLanguage = string;

export const CodeBlock = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("rounded-lg border bg-card", className)}>{children}</div>
);

export const CodeBlockHeader = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("flex items-center justify-between p-3 border-b", className)}>{children}</div>
);

export const CodeBlockBody = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("p-4", className)}>{children}</div>
);

export const CodeBlockContent = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <pre className={cn("text-sm font-mono overflow-x-auto", className)}><code>{children}</code></pre>
);

export const CodeBlockCopyButton = ({ className }: { className?: string }) => (
  <button className={cn("p-2 hover:bg-accent rounded-md", className)}>Copy</button>
);

export const CodeBlockFilename = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <span className={cn("text-sm text-muted-foreground", className)}>{children}</span>
);

export const CodeBlockFiles = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("flex gap-2", className)}>{children}</div>
);

export const CodeBlockItem = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("", className)}>{children}</div>
);

export const CodeBlockSelect = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("", className)}>{children}</div>
);

export const CodeBlockSelectTrigger = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <button className={cn("p-2 rounded-md border", className)}>{children}</button>
);

export const CodeBlockSelectContent = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("bg-popover p-2 rounded-md shadow-md", className)}>{children}</div>
);

export const CodeBlockSelectItem = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("p-2 hover:bg-accent cursor-pointer", className)}>{children}</div>
);

export const CodeBlockSelectValue = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <span className={cn("", className)}>{children}</span>
);
