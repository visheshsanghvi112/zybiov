"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll to top instantly on pathname change
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      document.body.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    } catch (err) {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
