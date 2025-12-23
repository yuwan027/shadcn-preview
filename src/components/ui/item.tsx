import * as React from "react"
import { cn } from "@/lib/utils"

export const Item = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-start gap-4 p-4", className)} {...props} />
))
Item.displayName = "Item"

export const ItemMedia = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-shrink-0", className)} {...props} />
))
ItemMedia.displayName = "ItemMedia"

export const ItemContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-1 min-w-0", className)} {...props} />
))
ItemContent.displayName = "ItemContent"

export const ItemTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h4 ref={ref} className={cn("text-sm font-medium", className)} {...props} />
))
ItemTitle.displayName = "ItemTitle"

export const ItemDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))
ItemDescription.displayName = "ItemDescription"
