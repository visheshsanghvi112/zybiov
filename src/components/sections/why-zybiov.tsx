"use client";

import Image from "next/image";
import { Reveal, StaggerContainer, fadeUpItem } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { Globe2, Settings2, TrendingUp, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: Globe2,
    title: "Global Partnerships",
    description: "We maintain a strong network of strategic partnerships with leading international manufacturers and suppliers.",
    gradient: "linear-gradient(135deg, #5B43D6, #4A31C0)",
  },
  {
    icon: Settings2,
    title: "Professional Management",
    description: "We ensure excellence through efficient supply chain management, rigorous quality control, and operational precision.",
    gradient: "linear-gradient(135deg, #2B7DDC, #1a6bc4)",
  },
  {
    icon: TrendingUp,
    title: "Scalable Business Model",
    description: "Our flexible business model is designed to adapt seamlessly to the evolving demands of regional and international markets.",
    gradient: "linear-gradient(135deg, #28B7C7, #1a9baa)",
  },
  {
    icon: FileCheck,
    title: "Full Regulatory Compliance",
    description: "We uphold the highest standards of legal and regulatory compliance, ensuring reliability, transparency, and trust with government authorities and regulatory bodies.",
    gradient: "linear-gradient(135deg, #5E35B1, #4527A0)",
  },
];

export function WhyZybiovSection() {
  return (
    <section
      id="why"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #28B7C7 0%, transparent 70%)", transform: "translate(30%, 30%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Content */}
          <div>
            <Reveal>
              <span className="section-tag mb-5 sm:mb-6 inline-flex">Why Zybiov</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                style={{ color: "#1E244B", fontFamily: "Manrope, sans-serif" }}>
                What Sets Us{" "}
                <span style={{
                  background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  Apart
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10" style={{ color: "#5E647A" }}>
                We combine world-class partnerships, professional management, and an unwavering commitment to compliance to deliver healthcare solutions that truly make a difference.
              </p>
            </Reveal>

            <StaggerContainer staggerDelay={0.1}>
              <div className="flex flex-col gap-4 sm:gap-5">
                {reasons.map((reason) => (
                  <motion.div
                    key={reason.title}
                    variants={fadeUpItem}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl border"
                    style={{
                      background: "#FAFBFD",
                      borderColor: "#E4E7F2",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
                    }}
                  >
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                      style={{ background: reason.gradient }}
                    >
                      <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[15px] sm:text-[16px] font-bold mb-1.5" style={{ color: "#1E244B" }}>
                        {reason.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#5E647A" }}>
                        {reason.description}
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
              {/* Large top — spans both columns */}
              <div className="relative rounded-3xl overflow-hidden col-span-2" style={{ aspectRatio: "16/9" }}>
                <Image
                  src="/team-research.png"
                  alt="Research team collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, transparent 50%, rgba(30,36,75,0.5) 100%)"
                }} />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <span className="text-white font-semibold text-xs sm:text-sm">Expert Team</span>
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
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, transparent 40%, rgba(30,36,75,0.55) 100%)"
                }} />
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
                  <span className="text-white font-semibold text-[10px] sm:text-xs">GMP Facilities</span>
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
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, transparent 40%, rgba(30,36,75,0.55) 100%)"
                }} />
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
                  <span className="text-white font-semibold text-[10px] sm:text-xs">Digital Innovation</span>
                </div>
              </div>

              {/* Molecule image spanning full width */}
              <div className="relative rounded-2xl overflow-hidden col-span-2" style={{ aspectRatio: "16/6" }}>
                <Image
                  src="/molecule.png"
                  alt="Pharmaceutical molecule research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, transparent 30%, rgba(30,36,75,0.6) 100%)"
                }} />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <p className="text-white font-semibold text-xs sm:text-sm">Advanced Research & Molecular Science</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
