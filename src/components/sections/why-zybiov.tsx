"use client";

import Image from "next/image";
import { Reveal, StaggerContainer, fadeUpItem } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { Globe2, Settings2, TrendingUp, FileCheck } from "lucide-react";
import { useLanguage } from "../layout/language-context";

const reasons = [
  {
    icon: Globe2,
    titleKey: "why.r1Title",
    descKey: "why.r1Desc",
    gradient: "bg-gradient-to-br from-primary to-primary-dark",
  },
  {
    icon: Settings2,
    titleKey: "why.r2Title",
    descKey: "why.r2Desc",
    gradient: "bg-gradient-to-br from-secondary to-[#1a6bc4]",
  },
  {
    icon: TrendingUp,
    titleKey: "why.r3Title",
    descKey: "why.r3Desc",
    gradient: "bg-gradient-to-br from-accent to-[#1a9baa]",
  },
  {
    icon: FileCheck,
    titleKey: "why.r4Title",
    descKey: "why.r4Desc",
    gradient: "bg-gradient-to-br from-[#5E35B1] to-[#4527A0]",
  },
];

export function WhyZybiovSection() {
  const { language, t, dir } = useLanguage();

  return (
    <section
      id="why"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full opacity-[0.04] bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)]"
          style={{ transform: "translate(30%, 30%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Content */}
          <div>
            <Reveal>
              <span className="section-tag mb-5 sm:mb-6 inline-flex">{t("why.badge")}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-heading">
                {t("why.title")}{" "}
                <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  {t("why.titleAccent")}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 text-body">
                {t("why.sub")}
              </p>
            </Reveal>

            <StaggerContainer staggerDelay={0.1}>
              <div className="flex flex-col gap-4 sm:gap-5">
                {reasons.map((reason) => (
                  <motion.div
                    key={reason.titleKey}
                    variants={fadeUpItem}
                    whileHover={{ x: dir === "rtl" ? -4 : 4 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 premium-card"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md ${reason.gradient}`}
                    >
                      <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[15px] sm:text-[16px] font-bold mb-1.5 text-heading">
                        {t(reason.titleKey)}
                      </h3>
                      <p className="text-sm leading-relaxed text-body">
                        {t(reason.descKey)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </StaggerContainer>
          </div>

          {/* Right: Image collage */}
          <Reveal direction="right">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Large top */}
              <div className="relative rounded-3xl overflow-hidden col-span-2" style={{ aspectRatio: "16/9" }}>
                <Image
                  src="/team-research.png"
                  alt="Research team collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heading/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <span className="text-white font-semibold text-xs sm:text-sm">{t("why.collageTeam")}</span>
                </div>
              </div>

              {/* Bottom-left */}
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/production.png"
                  alt="Pharmaceutical production"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heading/55 via-transparent to-transparent" />
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                  <span className="text-white font-semibold text-[10px] sm:text-xs">{t("why.collageGmp")}</span>
                </div>
              </div>

              {/* Bottom-right */}
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/lab-digital.png"
                  alt="Digital health lab"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heading/55 via-transparent to-transparent" />
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                  <span className="text-white font-semibold text-[10px] sm:text-xs">{t("why.collageDigital")}</span>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
