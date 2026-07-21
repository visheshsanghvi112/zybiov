"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/components/layout/language-context";

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, dir } = useLanguage();

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 ${dir === "rtl" ? "left-6" : "right-6"} z-50 p-4 bg-[#5B43D6] text-white rounded-full shadow-lg hover:bg-[#4934ab] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#5B43D6]/50`}
        aria-label="Toggle AI Chatbot"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-40 ${dir === "rtl" ? "left-6" : "right-6"} z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden border border-[#E4E7F2] flex flex-col transition-all duration-300 transform origin-bottom-right`}
          style={{ height: "450px" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#5B43D6] to-[#2B7DDC] p-4 flex items-center justify-between">
            <h3 className="text-white font-semibold">
              {language === "ar" ? "المساعد الذكي (AI)" : "AI Assistant"}
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-4 overflow-y-auto bg-[#F9FAFB] flex flex-col gap-4">
            <div className={`flex ${dir === "rtl" ? "justify-start" : "justify-start"}`}>
              <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm border border-[#E4E7F2] text-sm text-[#1E244B] max-w-[85%]">
                {language === "ar"
                  ? "مرحباً! أنا المساعد الذكي لشركة زيبوف. كيف يمكنني مساعدتك اليوم؟"
                  : "Hello! I'm the Zybiov AI Assistant. How can I help you today?"}
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-[#E4E7F2]">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder={language === "ar" ? "اكتب رسالتك هنا..." : "Type your message..."}
                className={`w-full bg-[#F5F4FF] border border-transparent focus:border-[#5B43D6] focus:bg-white rounded-full py-2.5 ${dir === "rtl" ? "pr-4 pl-12" : "pl-4 pr-12"} text-sm text-[#1E244B] outline-none transition-all`}
              />
              <button
                className={`absolute ${dir === "rtl" ? "left-2" : "right-2"} w-8 h-8 flex items-center justify-center bg-[#5B43D6] text-white rounded-full hover:bg-[#4934ab] transition-colors`}
              >
                <svg className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
