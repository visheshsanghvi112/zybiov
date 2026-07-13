"use client";

import Image from "next/image";
import { Reveal, StaggerContainer, fadeUpItem } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { Package, Truck, ShoppingBag, Factory, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";

export function ExpertiseSection() {
  const { t, language, dir } = useLanguage();

  const labels = {
    tag: { en: "Areas of Expertise", ar: "مجالات الخبرة" },
    title: { en: "What We", ar: "ما نتخصص" },
    titleHighlight: { en: "Specialize In", ar: "فيه" },
    subtitle: {
      en: "Deep expertise across healthcare and high-potential growth sectors.",
      ar: "خبرة عميقة عبر قطاع الرعاية الصحية والقطاعات الواعدة ذات الإمكانات العالية للنمو."
    },
    medSectorTitle: { en: "Medical & Pharmaceutical Sector", ar: "القطاع الطبي والدوائي" },
    medSectorDesc: {
      en: "We specialize in the importation, supply, and distribution of pharmaceuticals and medical supplies through an integrated and intelligent supply chain management system, ensuring procurement efficiency, product availability, and full compliance.",
      ar: "نتخصص في استيراد وتوريد وتوزيع الأدوية والمستلزمات الطبية من خلال نظام إدارة سلسلة إمداد متكامل وذكي، مما يضمن كفاءة الشراء وتوافر المنتجات والامتثال التام."
    },
    growthSectorTitle: { en: "Strategic Growth Sectors", ar: "قطاعات النمو الاستراتيجي" },
    growthSectorDesc: {
      en: "In line with our long-term vision for sustainable growth and business diversification, we are expanding our presence across several high-potential sectors, including:",
      ar: "تماشياً مع رؤيتنا طويلة المدى للنمو المستدام وتنويع الأعمال، نقوم بتوسيع وجودنا عبر العديد من القطاعات ذات الإمكانات العالية، بما في ذلك:"
    },
    rdTitle: { en: "Research & Development Excellence", ar: "التميز في البحث والتطوير" },
    rdSub: { en: "Strategic innovation across all sectors", ar: "الابتكار الاستراتيجي عبر جميع القطاعات" },
  };

  const getLabel = (key: keyof typeof labels) => {
    return language === "en" ? labels[key].en : labels[key].ar;
  };

  const strategicSectors = [
    {
      icon: Truck,
      label: language === "en" ? "Logistics and Freight Services" : "الخدمات اللوجستية والشحن",
    },
    {
      icon: ShoppingBag,
      label: language === "en" ? "General Trading, Import & Export" : "التجارة العامة، الاستيراد والتصدير",
    },
    {
      icon: Factory,
      label: language === "en" ? "Industrial and Technology Sectors" : "القطاعات الصناعية والتكنولوجية",
    },
  ];

  const pharmaFeatures = [
    language === "en" ? "Importation & supply" : "الاستيراد والتوريد",
    language === "en" ? "Distribution networks" : "شبكات التوزيع",
    language === "en" ? "Regulatory compliance" : "الامتثال التنظيمي",
    language === "en" ? "Quality assurance" : "ضمان الجودة",
  ];

  const pharmaTags = [
    language === "en" ? "Importation" : "الاستيراد",
    language === "en" ? "Distribution" : "التوزيع",
    language === "en" ? "Supply Chain" : "سلسلة الإمداد",
    language === "en" ? "Quality Control" : "رقابة الجودة",
  ];

  return (
    <section
      id="expertise"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "#F3F5FC" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #5B43D6 0%, transparent 70%)", transform: "translate(-40%, -50%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-12 sm:mb-16">
          <span className="section-tag mb-4 sm:mb-5 inline-flex">{getLabel("tag")}</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#1E244B", fontFamily: "Manrope, sans-serif" }}
          >
            {getLabel("title")}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #5B43D6 0%, #28B7C7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {getLabel("titleHighlight")}
            </span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "#5E647A" }}>
            {getLabel("subtitle")}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Medical & Pharmaceutical — Featured Card */}
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden relative h-full"
              style={{
                background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                boxShadow: "0 20px 60px rgba(91,67,214,0.25)",
                minHeight: "420px",
              }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src="/production.png"
                  alt="Pharmaceutical production facility"
                  fill
                  className="object-cover opacity-20"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Decorations */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

              <div className="relative z-10 p-7 sm:p-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 sm:mb-8">
                    <Package className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-5" style={{ fontFamily: "Manrope, sans-serif" }}>
                      {getLabel("medSectorTitle")}
                    </h3>
                    <p className="text-white/85 leading-relaxed text-[14px] sm:text-[15px] mb-6 sm:mb-8">
                      {getLabel("medSectorDesc")}
                    </p>

                    {/* Feature list */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                      {pharmaFeatures.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-white/85 flex-shrink-0" />
                          <span className="text-white/85 text-xs sm:text-sm font-medium">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                  {pharmaTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Strategic Growth Sectors */}
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-5 sm:gap-6 h-full justify-between">
              {/* Header card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl p-7 sm:p-8 relative overflow-hidden"
                style={{
                  background: "#FAFBFD",
                  border: "1.5px solid #E4E7F2",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-[0.06]"
                  style={{ background: "radial-gradient(circle, #5B43D6 0%, transparent 70%)", transform: "translate(20%, -20%)" }} />
                <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "#1E244B", fontFamily: "Manrope, sans-serif" }}>
                  {getLabel("growthSectorTitle")}
                </h3>
                <p className="text-[14px] sm:text-[15px] leading-relaxed" style={{ color: "#5E647A" }}>
                  {getLabel("growthSectorDesc")}
                </p>
              </motion.div>

              {/* Sector cards */}
              <StaggerContainer staggerDelay={0.12} className="flex flex-col gap-3 sm:gap-4">
                {strategicSectors.map((sector, i) => (
                  <motion.div
                    key={sector.label}
                    variants={fadeUpItem}
                    whileHover={{ x: dir === "rtl" ? -4 : 4, boxShadow: "0 12px 40px rgba(91,67,214,0.12)" }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-4 sm:gap-5 rounded-2xl p-4 sm:p-5 cursor-default"
                    style={{
                      background: "#FFFFFF",
                      border: "1.5px solid #E4E7F2",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: [
                          "linear-gradient(135deg, #5B43D6, #2B7DDC)",
                          "linear-gradient(135deg, #2B7DDC, #28B7C7)",
                          "linear-gradient(135deg, #28B7C7, #5B43D6)",
                        ][i],
                      }}
                    >
                      <sector.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className="text-[14px] sm:text-[15px] font-semibold flex-1" style={{ color: "#1E244B" }}>
                      {sector.label}
                    </span>
                    <ArrowRight className={cn("w-4 h-4 flex-shrink-0", dir === "rtl" && "rotate-180")} style={{ color: "#8892A4" }} />
                  </motion.div>
                ))}
              </StaggerContainer>

              {/* Image card */}
              <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[160px] sm:min-h-[200px]">
                <Image
                  src="/team-research.png"
                  alt="Research and development team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, transparent 30%, rgba(30,36,75,0.65) 100%)"
                }} />
                <div className={cn("absolute bottom-4 sm:bottom-5 px-5", dir === "rtl" ? "right-4 sm:right-5" : "left-4 sm:left-5")}>
                  <p className="text-white font-semibold text-sm">{getLabel("rdTitle")}</p>
                  <p className="text-white/60 text-xs">{getLabel("rdSub")}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
