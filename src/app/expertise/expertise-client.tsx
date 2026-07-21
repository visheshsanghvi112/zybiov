"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ExpertiseSection } from "@/components/sections/expertise";
import { AspirationsSection } from "@/components/sections/aspirations";
import { useLanguage } from "@/components/layout/language-context";
import Image from "next/image";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export function ExpertiseClientPage() {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = language === "ar"
      ? "مجالات الخبرة | شركة زيبوف للأنشطة المتعددة المحدودة"
      : "Areas of Expertise | Zybiov Multi-Activities Limited";
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
          {/* Background image overlay at visible opacity */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/production.webp"
              alt="Expertise and production background"
              fill
              className="object-cover opacity-[0.08]"
              priority
              sizes="100vw"
            />
          </div>

          {/* Subtle patterns */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10"
            style={{
              backgroundImage: "radial-gradient(var(--secondary) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
            <Breadcrumb
              items={[{ label: language === "en" ? "Expertise" : "مجالات الخبرة" }]}
              className="justify-center"
            />
            <span className="section-tag mb-5">{t("expertisePage.tag")}</span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E244B] mb-6 mt-4"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {language === "en" ? (
                <>
                  Areas of{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #2B7DDC 0%, #28B7C7 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Expertise
                  </span>
                </>
              ) : (
                <>
                  مجالات{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #2B7DDC 0%, #28B7C7 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    الخبرة
                  </span>
                </>
              )}
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto text-[#5E647A] leading-relaxed">
              {t("expertisePage.desc")}
            </p>
          </div>
        </section>

        <ExpertiseSection />
        <AspirationsSection />
      </main>
      <Footer />
    </>
  );
}
