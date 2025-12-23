import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
export const Rating = ({ value = 0, max = 5, className }: { value?: number; max?: number; className?: string }) => (
  <div className={cn("flex gap-0.5", className)}>
    {Array.from({ length: max }).map((_, i) => <Star key={i} className={cn("w-4 h-4", i < value ? "fill-yellow-400 text-yellow-400" : "text-gray-300")} />)}
  </div>
);
