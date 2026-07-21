"use client";

import { Reveal, StaggerContainer, fadeUpItem } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { Star, Shield, Lightbulb, ClipboardCheck, Users } from "lucide-react";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";

export function CoreValuesSection() {
  const { t, language, dir } = useLanguage();

  const coreValues = [
    {
      icon: Star,
      title: t("coreValues.v1Title"),
      desc: t("coreValues.v1Desc"),
      gradient: "linear-gradient(135deg, #5B43D6, #4A31C0)",
      lightBg: "rgba(91,67,214,0.06)",
      borderColor: "rgba(91,67,214,0.12)",
    },
    {
      icon: Shield,
      title: t("coreValues.v2Title"),
      desc: t("coreValues.v2Desc"),
      gradient: "linear-gradient(135deg, #2B7DDC, #1a6bc4)",
      lightBg: "rgba(43,125,220,0.06)",
      borderColor: "rgba(43,125,220,0.12)",
    },
    {
      icon: Lightbulb,
      title: t("coreValues.v3Title"),
      desc: t("coreValues.v3Desc"),
      gradient: "linear-gradient(135deg, #28B7C7, #1a9baa)",
      lightBg: "rgba(40,183,199,0.06)",
      borderColor: "rgba(40,183,199,0.12)",
    },
    {
      icon: ClipboardCheck,
      title: t("coreValues.v4Title"),
      desc: t("coreValues.v4Desc"),
      gradient: "linear-gradient(135deg, #5E35B1, #4527A0)",
      lightBg: "rgba(94,53,177,0.06)",
      borderColor: "rgba(94,53,177,0.12)",
    },
    {
      icon: Users,
      title: t("coreValues.v5Title"),
      desc: t("coreValues.v5Desc"),
      gradient: "linear-gradient(135deg, #EC4899, #D946EF)",
      lightBg: "rgba(236,72,153,0.06)",
      borderColor: "rgba(236,72,153,0.12)",
    },
  ];

  return (
    <section
      id="values"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#5B43D6 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <Reveal className="text-center mb-12 sm:mb-16">
          <span className="section-tag mb-4 sm:mb-5 inline-flex">{t("coreValues.badge")}</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#1E244B", fontFamily: "Manrope, sans-serif" }}
          >
            {t("coreValues.title")}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t("coreValues.titleAccent")}
            </span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#5E647A" }}>
            {t("coreValues.sub")}
          </p>
        </Reveal>

        {/* Values grid */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="premium-card rounded-3xl p-7 sm:p-8 border flex flex-col justify-between"
                style={{
                  background: value.lightBg,
                  borderColor: value.borderColor,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                }}
              >
                <div>
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 shadow-lg"
                    style={{ background: value.gradient }}
                  >
                    <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-bold mb-3"
                    style={{ color: "#1E244B", fontFamily: "Manrope, sans-serif" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] leading-relaxed" style={{ color: "#5E647A" }}>
                    {value.desc}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className={cn("mt-5 sm:mt-6 h-1 w-10 sm:w-12 rounded-full", dir === "rtl" ? "mr-0" : "ml-0")}
                  style={{ background: value.gradient }}
                />
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
