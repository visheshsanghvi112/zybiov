"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Why Zybiov", href: "/why-zybiov" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_16px_rgba(30,36,75,0.05)] border-b border-[#E4E7F2]/60 py-2"
            : "bg-transparent py-4"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[76px] sm:h-[84px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="relative w-[130px] h-[48px] sm:w-[170px] sm:h-[62px] transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/logo.png"
                alt="Zybiov Multi-Activities Limited"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 130px, 170px"
              />
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-[15px] font-semibold transition-all duration-200 rounded-lg hover:text-[#5B43D6] hover:bg-[#5B43D6]/5",
                    isActive ? "text-[#5B43D6]" : "text-[#1E244B]"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 h-0.5 bg-[#5B43D6] left-4 right-4 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA — desktop only */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact" className="btn-primary text-sm py-2.5 px-6">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl text-[#1E244B] hover:bg-[#5B43D6]/5 transition-colors"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </motion.header>

      {/* Right side slide-in Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-[#1E244B]/40 backdrop-blur-sm lg:hidden"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-[340px] bg-white shadow-2xl flex flex-col h-full lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#E4E7F2]">
                <div className="relative w-[110px] h-[40px]">
                  <Image
                    src="/logo.png"
                    alt="Zybiov"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-[#1E244B] hover:bg-[#5B43D6]/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 p-6 flex-1 overflow-y-auto">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center justify-between px-4 py-3.5 text-[16px] font-bold rounded-xl transition-all duration-200",
                          isActive
                            ? "text-[#5B43D6] bg-[#5B43D6]/5"
                            : "text-[#1E244B] hover:text-[#5B43D6] hover:bg-[#5B43D6]/5"
                        )}
                      >
                        {link.label}
                        {isActive && <span className="w-2.5 h-2.5 rounded-full bg-[#5B43D6]" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Drawer Footer CTA */}
              <div className="p-6 border-t border-[#E4E7F2] bg-[#FAFBFD]">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center py-3 text-sm"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
