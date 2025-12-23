import * as React from "react"
import { cn } from "@/lib/utils"
export const Empty = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col items-center justify-center p-8 text-center", className)} {...props}>{children}</div>
))
Empty.displayName = "Empty"
