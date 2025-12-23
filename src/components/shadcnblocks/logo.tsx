import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Logo = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("flex items-center gap-2", className)}>{children}</div>
);

export const LogoImage = ({ src, alt, className }: { src?: string; alt?: string; className?: string }) => (
  <img src={src || "/placeholder.svg"} alt={alt || "Logo"} className={cn("h-8 w-8", className)} />
);

export const LogoImageDesktop = ({ src, alt, className }: { src?: string; alt?: string; className?: string }) => (
  <img src={src || "/placeholder.svg"} alt={alt || "Logo"} className={cn("h-8 w-auto hidden md:block", className)} />
);

export const LogoImageMobile = ({ src, alt, className }: { src?: string; alt?: string; className?: string }) => (
  <img src={src || "/placeholder.svg"} alt={alt || "Logo"} className={cn("h-8 w-auto md:hidden", className)} />
);

export const LogoText = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <span className={cn("font-semibold text-lg", className)}>{children}</span>
);
