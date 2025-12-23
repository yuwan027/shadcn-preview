import * as React from "react"
import { cn } from "@/lib/utils"

export const InputGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputGroup.displayName = "InputGroup"

export const InputGroupInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn("flex-1 border rounded-md px-3 py-2", className)} {...props} />
))
InputGroupInput.displayName = "InputGroupInput"

export const InputGroupAddon = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center px-3 bg-muted border border-input rounded-md", className)} {...props} />
))
InputGroupAddon.displayName = "InputGroupAddon"

export const InputGroupButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => (
  <button ref={ref} className={cn("px-4 py-2 bg-primary text-primary-foreground rounded-md", className)} {...props} />
))
InputGroupButton.displayName = "InputGroupButton"
