"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhyZybiovSection } from "@/components/sections/why-zybiov";
import { AspirationsSection } from "@/components/sections/aspirations";
import { useLanguage } from "@/components/layout/language-context";
import Image from "next/image";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export function WhyZybiovClientPage() {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = language === "ar"
      ? "لماذا زيبوف | شركة زيبوف للأنشطة المتعددة المحدودة"
      : "Why Choose Zybiov | Zybiov Multi-Activities Limited";
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
              src="/patient-care.png"
              alt="Healthcare background"
              fill
              className="object-cover opacity-[0.04]"
              priority
              sizes="100vw"
            />
          </div>

          {/* Subtle patterns */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10"
            style={{
              backgroundImage: "radial-gradient(var(--accent) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
            <Breadcrumb
              items={[{ label: language === "en" ? "Why Zybiov" : "لماذا زيبيوف" }]}
              className="justify-center"
            />
            <span className="section-tag mb-5">{t("whyPage.tag")}</span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E244B] mb-6 mt-4"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {language === "en" ? (
                <>
                  Why{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #5B43D6 0%, #28B7C7 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Zybiov
                  </span>
                </>
              ) : (
                <>
                  لماذا{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #5B43D6 0%, #28B7C7 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    زيبيوف
                  </span>
                </>
              )}
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto text-[#5E647A] leading-relaxed">
              {t("whyPage.desc")}
            </p>
          </div>
        </section>

        <WhyZybiovSection />
        <AspirationsSection />
      </main>
      <Footer />
    </>
  );
}
