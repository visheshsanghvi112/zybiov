"use client";

import { Counter } from "@/components/ui/counter";
import { Award, Package, MapPin, Users } from "lucide-react";
import { StaggerContainer, fadeUpItem } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: Award,
    value: 10,
    suffix: "+",
    labelKey: "stats.expLabel",
    subKey: "stats.expSub",
    gradient: "linear-gradient(135deg, #5B43D6, #2B7DDC)",
  },
  {
    icon: Package,
    value: 500,
    suffix: "+",
    labelKey: "stats.prodLabel",
    subKey: "stats.prodSub",
    gradient: "linear-gradient(135deg, #2B7DDC, #28B7C7)",
  },
  {
    icon: MapPin,
    valueKey: "stats.covValue",
    isText: true,
    labelKey: "stats.covLabel",
    subKey: "stats.covSub",
    gradient: "linear-gradient(135deg, #28B7C7, #5B43D6)",
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    labelKey: "stats.partnerLabel",
    subKey: "stats.partnerSub",
    gradient: "linear-gradient(135deg, #5B43D6, #28B7C7)",
  },
];

export function StatsStrip() {
  const { language, t, dir } = useLanguage();

  return (
    <section className="relative py-10 sm:py-12 border-y border-[#E4E7F2]" style={{ background: "#FAFBFD" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelKey}
              variants={fadeUpItem}
              className="flex items-center gap-3 sm:gap-5 relative"
            >
              {/* Icon Container */}
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                style={{ background: stat.gradient }}
              >
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2px]" />
              </div>

              {/* Text Info */}
              <div className="flex-1 min-w-0">
                <div
                  className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1E244B] leading-none mb-1 flex items-center"
                  style={{ fontFamily: language === "ar" ? "Cairo, sans-serif" : "Manrope, sans-serif" }}
                >
                  {stat.isText ? (
                    <span className="text-base sm:text-xl font-bold">{t(stat.valueKey!)}</span>
                  ) : (
                    <Counter value={Number(stat.value)} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#1E244B] mb-0.5 leading-tight">{t(stat.labelKey)}</div>
                <div className="text-[10px] sm:text-xs text-[#5E647A] leading-tight hidden sm:block">{t(stat.subKey)}</div>
              </div>

              {/* Vertical Divider */}
              {i < stats.length - 1 && (
                <div className={cn(
                  "hidden lg:block absolute top-1/2 -translate-y-1/2 w-[1px] h-10 bg-[#E4E7F2]",
                  dir === "rtl" ? "left-0" : "right-0"
                )} />
              )}
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
