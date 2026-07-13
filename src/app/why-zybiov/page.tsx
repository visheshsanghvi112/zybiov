import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhyZybiovSection } from "@/components/sections/why-zybiov";
import { AspirationsSection } from "@/components/sections/aspirations";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Why Zybiov | Zybiov Multi-Activities Limited",
  description:
    "Learn what sets Zybiov apart: global partnerships, professional management, scalability, and full regulatory compliance.",
};

export default function WhyZybiovPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px] sm:pt-[88px]">
        {/* Page Hero Header */}
        <section
          className="relative py-20 lg:py-28 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #FFFFFF 0%, #F3F5FC 100%)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {/* Background image overlay at low opacity */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/patient-care.png"
              alt="Healthcare background"
              fill
              className="object-cover opacity-[0.04]"
              priority
              sizes="100vw"
            />
          </div>

          {/* Subtle patterns */}
          <div className="absolute inset-0 pointer-events-none opacity-40 z-10"
            style={{
              backgroundImage: "radial-gradient(var(--accent) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
            <span className="section-tag mb-5">Our Strengths</span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E244B] mb-6 mt-4"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Why{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #5B43D6 0%, #28B7C7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Zybiov
              </span>
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto text-[#5E647A] leading-relaxed">
              Differentiating ourselves through global network partnerships, compliance excellence, and scalability.
            </p>
          </div>
        </section>

        <WhyZybiovSection />
        <AspirationsSection />
      </main>
      <Footer />
    </>
  );
}
