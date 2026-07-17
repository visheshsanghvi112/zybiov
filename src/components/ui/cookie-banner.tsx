"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Check, X, ChevronDown, ChevronUp, Shield, BarChart3, Settings } from "lucide-react";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";

type CookieCategory = {
  id: string;
  icon: React.ElementType;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  required?: boolean;
};

const categories: CookieCategory[] = [
  {
    id: "necessary",
    icon: Shield,
    titleEn: "Strictly Necessary",
    titleAr: "ضرورية للغاية",
    descEn: "Required for the website to function. Cannot be disabled.",
    descAr: "مطلوبة لعمل الموقع. لا يمكن تعطيلها.",
    required: true,
  },
  {
    id: "analytics",
    icon: BarChart3,
    titleEn: "Analytics",
    titleAr: "التحليلات",
    descEn: "Help us understand how visitors interact with our site.",
    descAr: "تساعدنا على فهم كيفية تفاعل الزوار مع موقعنا.",
  },
  {
    id: "preferences",
    icon: Settings,
    titleEn: "Preferences",
    titleAr: "التفضيلات",
    descEn: "Remember your settings like language and region.",
    descAr: "تتذكر إعداداتك مثل اللغة والمنطقة.",
  },
];

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    necessary: true,
    analytics: true,
    preferences: true,
  });
  const { language, dir } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("zybiov-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2200);
      return () => clearTimeout(timer);
    }
  }, []);

  const save = (value: string) => {
    localStorage.setItem("zybiov-cookie-consent", value);
    setShow(false);
  };

  const handleAcceptAll = () => save("accepted-all");
  const handleDecline = () => save("declined");
  const handleSavePreferences = () => {
    const prefs = JSON.stringify(enabled);
    save(`custom:${prefs}`);
  };

  const toggle = (id: string) => {
    if (id === "necessary") return;
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isRtl = dir === "rtl";

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop blur on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[997] bg-black/10 backdrop-blur-[2px] pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
            className={cn(
              "fixed bottom-4 sm:bottom-6 z-[998] w-[calc(100%-2rem)] max-w-[400px]",
              isRtl ? "left-4 sm:left-6" : "right-4 sm:right-6"
            )}
          >
            {/* Card */}
            <div
              className="relative rounded-[22px] overflow-hidden border"
              style={{
                background: "rgba(255,255,255,0.97)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderColor: "rgba(228,231,242,0.9)",
                boxShadow: "0 24px 64px rgba(30,36,75,0.16), 0 4px 16px rgba(30,36,75,0.06)",
              }}
            >
              {/* Top accent gradient bar */}
              <div className="h-[3px] w-full bg-gradient-to-r from-[#5B43D6] via-[#2B7DDC] to-[#28B7C7]" />

              <div className="p-5 sm:p-6">
                {/* Header row */}
                <div className="flex items-start gap-3 mb-3">
                  {/* Cookie icon with animated gradient bg */}
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                    style={{ background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)" }}
                  >
                    <Cookie className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4
                      className="text-[14px] font-extrabold text-[#1E244B] leading-snug"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {language === "en" ? "Your Privacy Matters" : "خصوصيتك تهمنا"}
                    </h4>
                    <p className="text-[11px] text-[#8892A4] mt-0.5 leading-relaxed">
                      {language === "en"
                        ? "We use cookies to improve your experience."
                        : "نستخدم الكوكيز لتحسين تجربتك."}
                    </p>
                  </div>

                  {/* Close / dismiss */}
                  <button
                    onClick={handleDecline}
                    aria-label="Dismiss"
                    className="w-7 h-7 flex items-center justify-center rounded-lg text-[#8892A4] hover:text-[#1E244B] hover:bg-[#F0F2FA] transition-all duration-150 flex-shrink-0 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Short description */}
                <p className="text-[12px] text-[#5E647A] leading-relaxed mb-4">
                  {language === "en"
                    ? "We and our partners use cookies to personalize content, analyze traffic, and provide a better experience. You can manage your preferences below."
                    : "نحن وشركاؤنا نستخدم ملفات تعريف الارتباط لتخصيص المحتوى وتحليل حركة المرور وتوفير تجربة أفضل. يمكنك إدارة تفضيلاتك أدناه."}
                </p>

                {/* Expandable preferences */}
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2 mb-4">
                        {categories.map((cat) => {
                          const Icon = cat.icon;
                          const isOn = enabled[cat.id];
                          return (
                            <div
                              key={cat.id}
                              className={cn(
                                "flex items-center gap-3 p-3 rounded-xl border transition-colors duration-200",
                                cat.required
                                  ? "bg-[#F0F2FA]/60 border-[#E4E7F2]"
                                  : "bg-white border-[#E4E7F2] hover:border-[#5B43D6]/25 cursor-pointer"
                              )}
                              onClick={() => toggle(cat.id)}
                            >
                              <div
                                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                                style={{
                                  background: cat.required
                                    ? "rgba(91,67,214,0.1)"
                                    : isOn
                                    ? "linear-gradient(135deg, #5B43D6, #2B7DDC)"
                                    : "rgba(136,146,164,0.12)",
                                }}
                              >
                                <Icon
                                  className="w-3.5 h-3.5"
                                  style={{ color: cat.required ? "#5B43D6" : isOn ? "white" : "#8892A4" }}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-[11px] font-bold text-[#1E244B] leading-snug">
                                  {language === "en" ? cat.titleEn : cat.titleAr}
                                </p>
                                <p className="text-[10px] text-[#8892A4] leading-tight mt-0.5">
                                  {language === "en" ? cat.descEn : cat.descAr}
                                </p>
                              </div>
                              {/* Toggle pill */}
                              <div
                                className={cn(
                                  "relative w-9 h-5 rounded-full flex-shrink-0 transition-colors duration-200",
                                  cat.required
                                    ? "opacity-50 cursor-not-allowed"
                                    : "cursor-pointer",
                                  isOn ? "bg-[#5B43D6]" : "bg-[#D1D5E0]"
                                )}
                              >
                                <motion.div
                                  layout
                                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                  className="absolute top-0.5 bottom-0.5 w-4 h-4 bg-white rounded-full shadow-sm"
                                  style={{ left: isOn ? "calc(100% - 18px)" : "2px" }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Toggle manage preferences link */}
                <button
                  onClick={() => setExpanded((v) => !v)}
                  className="flex items-center gap-1.5 text-[11px] font-semibold text-[#5B43D6] hover:text-[#4A35C0] transition-colors mb-4 cursor-pointer"
                >
                  {expanded
                    ? (language === "en" ? "Hide preferences" : "إخفاء التفضيلات")
                    : (language === "en" ? "Manage preferences" : "إدارة التفضيلات")}
                  {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>

                {/* Action Buttons */}
                <div className="flex items-center gap-2.5">
                  {expanded ? (
                    <>
                      <button
                        onClick={handleSavePreferences}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-[12px] font-bold text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#5B43D6]/25 active:scale-[0.98] cursor-pointer"
                        style={{ background: "linear-gradient(135deg, #5B43D6, #2B7DDC)" }}
                      >
                        <Check className="w-3.5 h-3.5" />
                        {language === "en" ? "Save preferences" : "حفظ التفضيلات"}
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={handleAcceptAll}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-[12px] font-bold text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#5B43D6]/25 active:scale-[0.98] cursor-pointer"
                        style={{ background: "linear-gradient(135deg, #5B43D6, #2B7DDC)" }}
                      >
                        <Check className="w-3.5 h-3.5" />
                        {language === "en" ? "Accept All" : "قبول الكل"}
                      </button>
                      <button
                        onClick={handleDecline}
                        className="flex-1 flex items-center justify-center py-2.5 rounded-xl text-[12px] font-bold text-[#5E647A] border border-[#E4E7F2] bg-white hover:bg-[#F0F2FA] hover:border-[#D0D4E8] transition-all duration-200 active:scale-[0.98] cursor-pointer"
                      >
                        {language === "en" ? "Decline" : "رفض"}
                      </button>
                    </>
                  )}
                </div>

                {/* Privacy notice */}
                <p className="text-[10px] text-[#8892A4] text-center mt-3 leading-relaxed">
                  {language === "en"
                    ? "By continuing, you agree to our privacy practices."
                    : "بالاستمرار، توافق على ممارسات الخصوصية لدينا."}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
