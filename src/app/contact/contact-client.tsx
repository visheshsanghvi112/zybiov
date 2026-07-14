"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact";
import { useLanguage } from "@/components/layout/language-context";
import Image from "next/image";

export function ContactClientPage() {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = language === "ar"
      ? "تواصل معنا | شركة زيبوف للأنشطة المتعددة المحدودة"
      : "Contact Us | Zybiov Multi-Activities Limited";
  }, [language]);

  return (
    <>
      <Navbar />
      <main className="pt-[80px] sm:pt-[88px]">
        {/* Page Hero Header */}
        <section
          className="relative py-20 lg:py-28 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #FFFFFF 0%, #F3F5FC 100%)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {/* Background image overlay at low opacity */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-lab.png"
              alt="Contact background"
              fill
              className="object-cover opacity-[0.04]"
              priority
              sizes="100vw"
            />
          </div>

          {/* Subtle patterns */}
          <div className="absolute inset-0 pointer-events-none opacity-40 z-10"
            style={{
              backgroundImage: "radial-gradient(var(--primary) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
            <span className="section-tag mb-5">{t("contactPage.tag")}</span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E244B] mb-6 mt-4"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {language === "en" ? (
                <>
                  Get In{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Touch
                  </span>
                </>
              ) : (
                <>
                  تواصل{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    معنا
                  </span>
                </>
              )}
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto text-[#5E647A] leading-relaxed">
              {t("contactPage.desc")}
            </p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
