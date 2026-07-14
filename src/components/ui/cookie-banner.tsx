"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X } from "lucide-react";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const { language, dir } = useLanguage();

  useEffect(() => {
    // Show after 2 seconds if not yet accepted/declined
    const consent = localStorage.getItem("zybiov-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("zybiov-cookie-consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("zybiov-cookie-consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className={cn(
            "fixed bottom-5 z-[999] w-[calc(100%-2rem)] max-w-[420px] rounded-3xl p-6 border shadow-[0_20px_50px_rgba(30,36,75,0.15)] md:bottom-6",
            dir === "rtl" ? "left-4 md:left-6" : "right-4 md:right-6"
          )}
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(12px)",
            borderColor: "#E4E7F2",
          }}
        >
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B43D6] to-[#2B7DDC] flex items-center justify-center flex-shrink-0 text-white shadow-sm">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-extrabold text-[#1E244B] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>
                {language === "en" ? "Cookie Policy" : "سياسة ملفات الارتباط"}
              </h4>
              <p className="text-xs text-[#5E647A] leading-relaxed">
                {language === "en"
                  ? "We use cookies to optimize our website, analyze traffic, and personalize your experience."
                  : "نستخدم ملفات تعريف الارتباط لتحسين موقعنا، وتحليل حركة المرور، وتخصيص تجربتك."}
              </p>
            </div>
            <button
              onClick={handleDecline}
              className="text-[#8892A4] hover:text-[#1E244B] p-1 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-5">
            <button
              onClick={handleAccept}
              className="flex-1 btn-primary py-2.5 text-xs font-bold justify-center"
              style={{ background: "linear-gradient(135deg, #5B43D6, #2B7DDC)" }}
            >
              {language === "en" ? "Accept All" : "قبول الكل"}
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 btn-outline py-2.5 text-xs font-bold justify-center border-2 border-[#E4E7F2] hover:bg-[#F0F2FA] text-[#5E647A]"
            >
              {language === "en" ? "Decline" : "رفض"}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
