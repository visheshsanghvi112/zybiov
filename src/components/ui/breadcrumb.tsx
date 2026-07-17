"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/components/layout/language-context";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const { dir } = useLanguage();

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-1.5 text-xs font-semibold mb-5 sm:mb-6", className)}
    >
      <Link
        href="/"
        className="flex items-center gap-1 text-[#8892A4] hover:text-[#5B43D6] transition-colors duration-150"
      >
        <Home className="w-3 h-3" />
        <span className="hidden sm:inline">Home</span>
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight
            className={cn("w-3 h-3 text-[#D1D5E0] flex-shrink-0", dir === "rtl" && "rotate-180")}
          />
          {item.href ? (
            <Link
              href={item.href}
              className="text-[#8892A4] hover:text-[#5B43D6] transition-colors duration-150"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#5B43D6]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
