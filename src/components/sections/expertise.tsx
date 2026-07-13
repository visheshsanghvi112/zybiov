"use client";

import Image from "next/image";
import { Reveal, StaggerContainer, fadeUpItem } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { Package, Truck, ShoppingBag, Factory, ArrowRight, CheckCircle2 } from "lucide-react";

const strategicSectors = [
  {
    icon: Truck,
    label: "Logistics and Freight Services",
  },
  {
    icon: ShoppingBag,
    label: "General Trading, Import & Export",
  },
  {
    icon: Factory,
    label: "Industrial and Technology Sectors",
  },
];

const pharmaFeatures = [
  "Importation & supply",
  "Distribution networks",
  "Regulatory compliance",
  "Quality assurance",
];

export function ExpertiseSection() {
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
          <span className="section-tag mb-4 sm:mb-5 inline-flex">Areas of Expertise</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#1E244B", fontFamily: "Manrope, sans-serif" }}
          >
            What We{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #5B43D6 0%, #28B7C7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Specialize In
            </span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "#5E647A" }}>
            Deep expertise across healthcare and high-potential growth sectors.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Medical & Pharmaceutical — Featured Card */}
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden relative"
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

              <div className="relative z-10 p-7 sm:p-10 flex flex-col h-full">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 sm:mb-8">
                  <Package className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-5" style={{ fontFamily: "Manrope, sans-serif" }}>
                    Medical & Pharmaceutical Sector
                  </h3>
                  <p className="text-white/80 leading-relaxed text-[14px] sm:text-[15px] mb-6 sm:mb-8">
                    We specialize in the importation, supply, and distribution of pharmaceuticals and medical supplies through an integrated and intelligent supply chain management system, ensuring procurement efficiency, product availability, and full compliance.
                  </p>

                  {/* Feature list */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {pharmaFeatures.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-white/80 flex-shrink-0" />
                        <span className="text-white/80 text-xs sm:text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {["Importation", "Distribution", "Supply Chain", "Quality Control"].map((tag) => (
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
            <div className="flex flex-col gap-5 sm:gap-6 h-full">
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
                  Strategic Growth Sectors
                </h3>
                <p className="text-[14px] sm:text-[15px] leading-relaxed" style={{ color: "#5E647A" }}>
                  In line with our long-term vision for sustainable growth and business diversification, we are expanding our presence across several high-potential sectors, including:
                </p>
              </motion.div>

              {/* Sector cards */}
              <StaggerContainer staggerDelay={0.12} className="flex flex-col gap-3 sm:gap-4">
                {strategicSectors.map((sector, i) => (
                  <motion.div
                    key={sector.label}
                    variants={fadeUpItem}
                    whileHover={{ x: 4, boxShadow: "0 12px 40px rgba(91,67,214,0.12)" }}
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
                    <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: "#8892A4" }} />
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
                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5">
                  <p className="text-white font-semibold text-sm">Research & Development Excellence</p>
                  <p className="text-white/60 text-xs">Strategic innovation across all sectors</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
