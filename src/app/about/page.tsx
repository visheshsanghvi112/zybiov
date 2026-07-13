import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AboutSection } from "@/components/sections/about";
import { VisionMissionSection } from "@/components/sections/vision-mission";
import { CoreValuesSection } from "@/components/sections/core-values";
import { AspirationsSection } from "@/components/sections/aspirations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Zybiov Multi-Activities Limited",
  description:
    "Learn about Zybiov Multi-Activities Limited, a leading Sudanese company specializing in the importation and distribution of pharmaceuticals and medical supplies.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[68px] sm:pt-[76px]">
        {/* Page Hero Header */}
        <section
          className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #FFFFFF 0%, #F3F5FC 100%)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(var(--primary) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full opacity-[0.06] pointer-events-none"
            style={{ background: "radial-gradient(circle, #5B43D6 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-tag mb-4 sm:mb-5 inline-flex">Corporate Profile</span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E244B] mb-5 sm:mb-6 mt-4 sm:mt-5"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              About{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Zybiov
              </span>
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto text-[#5E647A] leading-relaxed">
              Strengthening the healthcare system through quality, compliance, and strategic global partnerships.
            </p>
          </div>
        </section>

        {/* Verbatim About Details */}
        <AboutSection />

        {/* Vision & Mission Card Layout */}
        <VisionMissionSection />

        {/* Core Values Grid */}
        <CoreValuesSection />

        {/* Future Aspirations CTA */}
        <AspirationsSection />
      </main>
      <Footer />
    </>
  );
}
