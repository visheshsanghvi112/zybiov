"use client";

import { useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe2 } from "lucide-react";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { language, t } = useLanguage();
  
  // 3D Tilt Logic for the video card
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Slogan splitting
  const sloganText = language === "en" 
    ? "Quality in Every Step Toward Better Healthcare."
    : "الجودة في كل خطوة نحو رعاية صحية أفضل.";
  const words = sloganText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const wordVariants: any = {
    hidden: { opacity: 0, y: 30, scale: 0.9, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden py-24 pt-[120px] bg-[#0A0D17]"
    >
      {/* Aurora Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(91,67,214,0.4) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(40,183,199,0.4) 0%, transparent 70%)" }}
        />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center text-center">
        {/* Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#28B7C7] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/90">
            {language === "en" ? "Zybiov Multi-Activities Limited" : "شركة زيبوف للأنشطة المتعددة المحدودة"}
          </span>
        </motion.div>

        {/* High-End Typography Reveal */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white max-w-5xl mb-8 leading-[1.1]"
        >
          {words.map((word, index) => {
            const highlight = word.includes("Healthcare") || word.includes("صحية");
            return (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-[0.25em] rtl:ml-[0.25em] rtl:mr-0"
                style={{
                  background: highlight ? "linear-gradient(135deg, #28B7C7, #5B43D6)" : "none",
                  WebkitBackgroundClip: highlight ? "text" : "none",
                  WebkitTextFillColor: highlight ? "transparent" : "inherit",
                }}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg sm:text-xl text-white/70 max-w-2xl mb-12 font-medium"
        >
          {t("hero.desc")}
        </motion.p>

        {/* Magnetic Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Link
            href="/expertise"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0A0D17] rounded-full font-bold text-base overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10">{t("hero.btnExpertise")}</span>
            <ArrowRight className={cn("w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1", language === "ar" && "rotate-180 group-hover:-translate-x-1")} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base text-white border border-white/20 bg-white/5 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40"
          >
            {t("contactUs")}
          </Link>
        </motion.div>

        {/* 3D Tilt Video Container with Glassmorphism Badges */}
        <div className="w-full max-w-6xl relative" style={{ perspective: "2000px" }}>
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[21/10] sm:aspect-[16/7] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(91,67,214,0.3)] border border-white/10 bg-[#111]"
          >
            <video
              src="https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4"
              poster="/hero-lab.png"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            {/* Dark overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D17] via-transparent to-transparent opacity-80" />

            {/* Floating Glass Badges (Simulating 3D pop-out) */}
            <motion.div
              style={{ transform: "translateZ(50px)" }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="absolute top-6 left-6 sm:top-10 sm:left-10 flex items-center gap-3 px-4 py-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5B43D6] to-[#28B7C7] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div className="text-left rtl:text-right hidden sm:block">
                <p className="text-white font-bold text-sm leading-tight">ISO 9001</p>
                <p className="text-white/60 text-xs">Certified Quality</p>
              </div>
            </motion.div>

            <motion.div
              style={{ transform: "translateZ(80px)" }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 flex items-center gap-3 px-4 py-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Globe2 className="w-5 h-5 text-[#28B7C7]" />
              </div>
              <div className="text-left rtl:text-right hidden sm:block">
                <p className="text-white font-bold text-sm leading-tight">Global Network</p>
                <p className="text-white/60 text-xs">Trusted Worldwide</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
