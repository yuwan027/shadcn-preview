"use client";
import { cn } from "@/lib/utils";
export const CreditCard = ({ className, number, name, expiry }: { className?: string; number?: string; name?: string; expiry?: string; cvc?: string }) => (
  <div className={cn("w-80 h-48 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 text-white", className)}>
    <div className="text-lg tracking-wider mt-8">{number || "•••• •••• •••• ••••"}</div>
    <div className="flex justify-between mt-4 text-sm"><span>{name || "CARD HOLDER"}</span><span>{expiry || "MM/YY"}</span></div>
  </div>
);
export default CreditCard;
