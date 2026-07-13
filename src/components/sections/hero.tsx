"use client";

import Image from "next/image";
import Link from "next/link";
import { motion as motionFM } from "framer-motion";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";

const trustCards = [
  { key: "hero.cardQuality", delay: 0.6, position: "top-8 -left-4 lg:-left-12" },
  { key: "hero.cardPartnerships", delay: 0.8, position: "top-1/3 -right-4 lg:-right-10" },
  { key: "hero.cardCompliance", delay: 1.0, position: "bottom-1/3 -left-6 lg:-left-16" },
  { key: "hero.cardTrusted", delay: 1.2, position: "bottom-8 -right-2 lg:-right-8" },
];

export function HeroSection() {
  const { language, t, dir } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FFFFFF 0%, #F3F5FC 40%, #EEF1FB 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #5B43D6 0%, #2B7DDC 50%, transparent 80%)",
            transform: "translate(20%, -20%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #28B7C7 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Headline and Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            {/* Elegant Tag */}
            <motionFM.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 sm:mb-6 flex justify-center lg:justify-start"
            >
              <span className="section-tag">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B43D6]" />
                {t("hero.badge")}
              </span>
            </motionFM.div>

            {/* Main Headline */}
            <motionFM.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.1] tracking-tight mb-5 sm:mb-6"
              style={{ color: "#1E244B", fontFamily: language === "ar" ? "Cairo, sans-serif" : "Manrope, sans-serif" }}
            >
              {t("hero.title1")}{" "}
              <br className="hidden sm:inline" />
              {language === "en" ? "Toward " : ""}
              <span
                style={{
                  background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("hero.title2")}
              </span>
            </motionFM.h1>

            {/* Description */}
            <motionFM.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg leading-relaxed mb-7 sm:mb-8 max-w-xl mx-auto lg:mx-0 text-[#5E647A]"
            >
              {t("hero.desc")}
            </motionFM.p>

            {/* CTA Buttons */}
            <motionFM.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link href="/expertise" className="btn-primary">
                {t("hero.btnExpertise")}
                <ArrowRight className={cn("w-4 h-4", dir === "rtl" && "rotate-180")} />
              </Link>
              <Link href="/about" className="btn-outline">
                {t("hero.btnAbout")}
              </Link>
            </motionFM.div>

            {/* Mini stats */}
            <motionFM.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E4E7F2] grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0"
            >
              {[
                { k: t("hero.statGlobal"), v: t("hero.statGlobalSub") },
                { k: t("hero.statIso"), v: t("hero.statIsoSub") },
                { k: t("hero.statReliable"), v: t("hero.statReliableSub") },
              ].map((s) => (
                <div key={s.k} className="text-center lg:text-left">
                  <p className="font-bold text-xl sm:text-2xl text-[#1E244B]" style={{ fontFamily: language === "ar" ? "Cairo, sans-serif" : "Manrope, sans-serif" }}>{s.k}</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8892A4] mt-1">{s.v}</p>
                </div>
              ))}
            </motionFM.div>
          </div>

          {/* Right Column: Visual */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-4 lg:pt-0">
            {/* Soft glow behind image */}
            <motionFM.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.12, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute w-[110%] h-[110%] rounded-full -z-10"
              style={{
                background: "linear-gradient(135deg, #5B43D6 0%, #28B7C7 100%)",
                clipPath: "ellipse(45% 45% at 50% 50%)",
              }}
            />

            {/* Image Container */}
            <motionFM.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] aspect-[4/3] rounded-[24px] overflow-hidden shadow-[0_24px_70px_rgba(91,67,214,0.15)] border border-white"
            >
              <Image
                src="/hero-lab.png"
                alt="Pharmaceutical laboratory research"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E244B]/20 to-transparent" />
            </motionFM.div>

            {/* Floating Trust Cards */}
            {trustCards.map((card, i) => (
              <motionFM.div
                key={card.key}
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: card.delay,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                className={cn(
                  "absolute glass rounded-[16px] sm:rounded-[20px] px-3 sm:px-4 py-2 sm:py-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-white/60 items-center gap-2.5 z-20 hover:scale-105 transition-transform duration-300 hidden sm:flex",
                  card.position
                )}
              >
                <div
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: [
                      "linear-gradient(135deg, #5B43D6, #2B7DDC)",
                      "linear-gradient(135deg, #2B7DDC, #28B7C7)",
                      "linear-gradient(135deg, #28B7C7, #5B43D6)",
                      "linear-gradient(135deg, #5B43D6, #28B7C7)",
                    ][i],
                  }}
                >
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white stroke-[3px]" />
                </div>
                <span className="text-[11px] sm:text-[13px] font-bold text-[#1E244B] whitespace-nowrap">
                  {t(card.key)}
                </span>
              </motionFM.div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#8892A4]">
          {t("hero.explore")}
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#5B43D6]" />
      </div>
    </section>
  );
}
