import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const CreditCard = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("relative w-96 h-56 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6", className)}>{children}</div>
);

export const CreditCardFront = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("absolute inset-0 backface-hidden", className)}>{children}</div>
);

export const CreditCardBack = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("absolute inset-0 backface-hidden rotate-y-180", className)}>{children}</div>
);

export const CreditCardFlipper = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("preserve-3d transition-transform duration-500", className)}>{children}</div>
);

export const CreditCardChip = ({ className }: { className?: string }) => (
  <div className={cn("w-12 h-10 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-md", className)} />
);

export const CreditCardNumber = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("text-xl tracking-widest font-mono mt-8", className)}>{children}</div>
);

export const CreditCardName = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("text-sm uppercase tracking-wider mt-4", className)}>{children}</div>
);

export const CreditCardExpiry = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("text-sm", className)}>{children}</div>
);

export const CreditCardCvv = ({ children, className }: { children?: ReactNode; className?: string }) => (
  <div className={cn("text-lg font-mono", className)}>{children}</div>
);

export const CreditCardMagStripe = ({ className }: { className?: string }) => (
  <div className={cn("w-full h-12 bg-gray-950 mt-4", className)} />
);
