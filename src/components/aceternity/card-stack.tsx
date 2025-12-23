"use client";
export const CardStack = ({ items }: { items?: any[]; offset?: number; scaleFactor?: number }) => <div className="relative h-60 w-60">{items?.map((item: any, i: number) => <div key={i} className="absolute bg-white dark:bg-black rounded-3xl p-4 shadow-xl border">{item.content}</div>)}</div>;
