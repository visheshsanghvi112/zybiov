"use client";

import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, Clock } from "lucide-react";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/animations/reveal";

export function QuickActionsSection() {
  const { language, t, dir } = useLanguage();

  const miniStats = [
    {
      icon: Globe,
      title: t("hero.statGlobal"),
      sub: t("hero.statGlobalSub"),
      gradient: "from-[#5B43D6] to-[#2B7DDC]",
    },
    {
      icon: ShieldCheck,
      title: t("hero.statIso"),
      sub: t("hero.statIsoSub"),
      gradient: "from-[#2B7DDC] to-[#28B7C7]",
    },
    {
      icon: Clock,
      title: t("hero.statReliable"),
      sub: t("hero.statReliableSub"),
      gradient: "from-[#28B7C7] to-[#5B43D6]",
    },
  ];

  return (
    <section className="relative py-16 bg-[#FAFBFD] border-t border-[#E4E7F2]">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-0 w-80 h-80 rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #5B43D6 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E4E7F2] rounded-[24px] p-8 sm:p-10 lg:p-12 shadow-[0_12px_40px_rgba(30,36,75,0.04)] flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Side: Stats info */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full lg:w-auto flex-1">
            {miniStats.map((stat, i) => (
              <Reveal key={i} delay={i * 0.1} className="text-center lg:text-start">
                <div className="flex flex-col items-center lg:items-start">
                  <div className={cn("w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3 text-white", stat.gradient)}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <p className="font-extrabold text-xl sm:text-2xl text-[#1E244B]" style={{ fontFamily: language === "ar" ? "Cairo, sans-serif" : "Manrope, sans-serif" }}>
                    {stat.title}
                  </p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8892A4] mt-1 font-bold">
                    {stat.sub}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right Side: CTA Buttons */}
          <Reveal delay={0.3} className="flex flex-wrap gap-3 sm:gap-4 justify-center w-full lg:w-auto">
            <Link href="/expertise" className="btn-primary py-3.5 px-7">
              {t("hero.btnExpertise")}
              <ArrowRight className={cn("w-4 h-4", dir === "rtl" && "rotate-180")} />
            </Link>
            <Link href="/about" className="btn-outline py-3.5 px-7 border-2 hover:bg-[#1E244B]/5">
              {t("hero.btnAbout")}
            </Link>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
