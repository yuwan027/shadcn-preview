"use client";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export const QuantityInput = ({ value = 1, onChange, min = 1, max = 99, className }: { value?: number; onChange?: (v: number) => void; min?: number; max?: number; className?: string }) => (
  <div className={cn("flex items-center", className)}>
    <Button variant="outline" size="icon" onClick={() => onChange?.(Math.max(min, value - 1))}><Minus className="h-4 w-4" /></Button>
    <Input type="number" value={value} onChange={(e) => onChange?.(parseInt(e.target.value) || min)} className="w-16 text-center mx-2" min={min} max={max} />
    <Button variant="outline" size="icon" onClick={() => onChange?.(Math.min(max, value + 1))}><Plus className="h-4 w-4" /></Button>
  </div>
);
export default QuantityInput;
