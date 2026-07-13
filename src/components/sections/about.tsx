"use client";

import Image from "next/image";
import { Reveal, StaggerContainer, fadeUpItem } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Long-term strategic partnerships with international manufacturers",
  "Integrated supply chain for hospitals, pharmacies & medical centers",
  "International best practices in quality management",
  "Continuous investment in technology & human capital",
];

export function AboutSection() {
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

            {/* Floating accent card — hidden on xs, visible from sm */}
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
              <p className="text-xs sm:text-sm font-semibold mb-0.5" style={{ color: "#1E244B" }}>Regulatory Compliance</p>
              <p className="text-[10px] sm:text-xs leading-relaxed hidden sm:block" style={{ color: "#5E647A" }}>Full adherence to international quality & legal standards</p>
            </motion.div>

            {/* Second accent — hidden on small screens */}
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
                  <p className="text-xs font-bold" style={{ color: "#1E244B" }}>Trusted Partner</p>
                  <p className="text-[10px]" style={{ color: "#5E647A" }}>Healthcare Sector</p>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Right: Content */}
          <div className="flex flex-col">
            <Reveal>
              <span className="section-tag mb-5 sm:mb-6 inline-flex">About Us</span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 sm:mb-6"
                style={{ color: "#1E244B", fontFamily: "Manrope, sans-serif" }}>
                A Trusted Leader in{" "}
                <span style={{
                  background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  Pharmaceutical Distribution
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#5E647A" }}>
                Zybiov Multi-Activities Limited is a leading Sudanese company specializing in the importation and distribution of pharmaceuticals and medical supplies. We are committed to delivering integrated healthcare solutions that strengthen the healthcare system through the highest standards of quality, compliance, and operational excellence.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#5E647A" }}>
                Our business is built on the conviction that access to better healthcare begins with a reliable and efficient supply chain. Therefore, we establish long-term strategic partnerships with internationally recognized pharmaceutical manufacturers and suppliers to ensure the availability of safe, high-quality products.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-base leading-relaxed mb-7 sm:mb-8" style={{ color: "#5E647A" }}>
                At Zybiov, we combine expertise, innovation, and operational efficiency to build a sustainable business model that adapts to evolving market demands while creating lasting value for our clients and partners.
              </p>
            </Reveal>

            <StaggerContainer staggerDelay={0.08}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUpItem}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#5B43D6" }} />
                    <span className="text-sm leading-snug" style={{ color: "#5E647A" }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
