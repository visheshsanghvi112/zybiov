"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { language, t, dir } = useLanguage();

  // Slogan splitting for letter/word-by-word reveal animation
  const sloganText = language === "en" 
    ? "Quality in Every Step Toward Better Healthcare."
    : "الجودة في كل خطوة نحو رعاية صحية أفضل.";

  const words = sloganText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const wordVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90dvh] flex flex-col items-center justify-center overflow-hidden py-24 sm:py-32"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F3F5FC 70%, #EEF1FB 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[850px] lg:h-[850px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #5B43D6 0%, #2B7DDC 60%, transparent 80%)",
            transform: "translate(15%, -15%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #28B7C7 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* Brand Name / Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="section-tag inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#5B43D6] bg-[#5B43D6]/8 rounded-full border border-[#5B43D6]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#28B7C7] animate-pulse" />
            {language === "en" ? "Zybiov Multi-Activities Limited" : "شركة زيبوف للأنشطة المتعددة المحدودة"}
          </span>
        </motion.div>

        {/* Animated Slogan */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight mb-6 max-w-4xl text-[#1E244B]"
          style={{ fontFamily: language === "ar" ? "Cairo, sans-serif" : "Manrope, sans-serif" }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block mr-2 md:mr-3"
              style={{
                background: i >= (words.length - 3) 
                  ? "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)" 
                  : "none",
                WebkitBackgroundClip: i >= (words.length - 3) ? "text" : "none",
                WebkitTextFillColor: i >= (words.length - 3) ? "transparent" : "inherit",
                backgroundClip: i >= (words.length - 3) ? "text" : "none",
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description / Detail about company */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base sm:text-lg leading-relaxed text-[#5E647A] max-w-2xl mb-10"
        >
          {t("hero.desc")}
        </motion.p>

        {/* Visual representation image of the company (large & cleanly animated) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 1.1,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="relative w-full max-w-4xl aspect-[21/10] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_32px_80px_rgba(91,67,214,0.18)] border-4 border-white/80 group"
        >
          <Image
            src="/hero-lab.png"
            alt="Zybiov Pharmaceutical Sourcing & Operations"
            fill
            className="object-cover transition-transform duration-[6s] group-hover:scale-105"
            priority
            sizes="100vw"
          />
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E244B]/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
