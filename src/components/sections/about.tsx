"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerContainer, fadeUpItem } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const { t } = useLanguage();

  const highlights = [
    t("about.h1Desc"),
    t("about.h2Desc"),
    t("about.h3Desc"),
    t("about.h4Desc"),
  ];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #5B43D6 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <Reveal direction="left" className="relative">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(91,67,214,0.12)]" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/about-pharmacist.png"
                alt="Zybiov pharmacist ensuring medication quality"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(180deg, transparent 60%, rgba(30,36,75,0.15) 100%)"
              }} />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 lg:-right-10 glass rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/70 max-w-[180px] sm:max-w-[220px]"
            >
              <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: "#5B43D6", fontFamily: "Manrope, sans-serif" }}>
                100%
              </div>
              <p className="text-xs sm:text-sm font-semibold mb-0.5" style={{ color: "#1E244B" }}>{t("about.badgeCompliance")}</p>
              <p className="text-[10px] sm:text-xs leading-relaxed hidden sm:block" style={{ color: "#5E647A" }}>{t("about.badgeComplianceSub")}</p>
            </motion.div>

            {/* Second accent */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="absolute -top-4 -left-4 sm:-left-6 lg:-left-8 glass rounded-2xl p-3 sm:p-4 shadow-xl border border-white/70 hidden sm:block"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #5B43D6, #28B7C7)" }}>
                  <span className="text-white text-xs font-bold">ZB</span>
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ color: "#1E244B" }}>{t("about.badgePartner")}</p>
                  <p className="text-[10px]" style={{ color: "#5E647A" }}>{t("about.badgeSector")}</p>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Right: Content */}
          <div className="flex flex-col">
            <Reveal>
              <span className="section-tag mb-5 sm:mb-6 inline-flex">{t("about.whoWeAre")}</span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 sm:mb-6"
                style={{ color: "#1E244B", fontFamily: "Manrope, sans-serif" }}>
                {t("about.titleMain")}{" "}
                <span style={{
                  background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  {t("about.titleHighlight")}
                </span>
              </h2>
            </Reveal>

            <div className="space-y-5 mb-8">
              <Reveal delay={0.15}>
                <p className="text-[15px] sm:text-base leading-relaxed" style={{ color: "#5E647A" }}>
                  {t("about.desc1")}
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-[15px] sm:text-base leading-relaxed" style={{ color: "#5E647A" }}>
                  {t("about.desc2")}
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <p className="text-[15px] sm:text-base leading-relaxed" style={{ color: "#5E647A" }}>
                  {t("about.desc3")}
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="text-[15px] sm:text-base leading-relaxed" style={{ color: "#5E647A" }}>
                  {t("about.desc4")}
                </p>
              </Reveal>
            </div>

            <StaggerContainer staggerDelay={0.08}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E4E7F2]">
                {highlights.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUpItem}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#5B43D6]" />
                    <span className="text-sm leading-snug font-semibold text-[#5E647A]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </StaggerContainer>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8"
            >
              <Link
                href="/why-zybiov"
                className={cn(
                  "btn-primary text-sm"
                )}
              >
                {t("whyChooseUs.cta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
