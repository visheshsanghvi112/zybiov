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
      gradient: "from-primary to-secondary",
    },
    {
      icon: ShieldCheck,
      title: t("hero.statIso"),
      sub: t("hero.statIsoSub"),
      gradient: "from-secondary to-accent",
    },
    {
      icon: Clock,
      title: t("hero.statReliable"),
      sub: t("hero.statReliableSub"),
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section className="relative py-16 bg-card border-t border-border">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-0 w-80 h-80 rounded-full opacity-[0.03] bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_70%)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="premium-card p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Side: Stats info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full lg:w-auto flex-1">
            {miniStats.map((stat, i) => (
              <Reveal key={i} delay={i * 0.1} className="text-center sm:text-start">
                <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-0">
                  <div className={cn("w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0 sm:mb-3 text-white", stat.gradient)}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-extrabold text-xl sm:text-2xl text-heading">
                      {stat.title}
                    </p>
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted mt-0.5 sm:mt-1 font-bold">
                      {stat.sub}
                    </p>
                  </div>
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
            <Link href="/about" className="btn-outline py-3.5 px-7 hover:bg-heading/5">
              {t("hero.btnAbout")}
            </Link>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
