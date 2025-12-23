"use client";
import { ReactNode } from "react";
export const LinkPreview = ({ children, url, className }: { children?: ReactNode; url?: string; className?: string }) => <a href={url} className={className}>{children}</a>;
