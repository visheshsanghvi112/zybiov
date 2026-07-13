"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { StatsStrip } from "@/components/sections/stats-strip";
import { AspirationsSection } from "@/components/sections/aspirations";
import { Reveal } from "@/components/animations/reveal";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Users, CheckCircle2, ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/layout/language-context";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const { t, language, dir } = useLanguage();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Counter Statistics Strip */}
        <StatsStrip />

        {/* About Teaser Section */}
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-white">
          <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-[0.03] pointer-events-none"
            style={{ background: "radial-gradient(circle, #5B43D6 0%, transparent 70%)" }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left Column: Image with floating decor */}
              <Reveal direction="left" className="relative">
                <div className="relative rounded-[24px] overflow-hidden shadow-[0_24px_50px_rgba(91,67,214,0.08)] border border-[#E4E7F2]" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src="/about-pharmacist.png"
                    alt="Zybiov pharmaceutical warehousing and supply chain"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E244B]/20 to-transparent" />
                </div>
                {/* Float Badge */}
                <div className={cn(
                  "absolute -bottom-5 sm:-bottom-6 glass rounded-[16px] sm:rounded-[20px] p-4 sm:p-5 shadow-[0_12px_30px_rgba(0,0,0,0.05)] border border-white/80 max-w-[180px] sm:max-w-[200px] z-10",
                  dir === "rtl" ? "-left-3 sm:-left-4" : "-right-3 sm:-right-4"
                )}>
                  <p className="text-sm font-bold text-[#1E244B] mb-0.5">{t("aboutTeaser.floatBadgeTitle")}</p>
                  <p className="text-xs text-[#5E647A]">{t("aboutTeaser.floatBadgeDesc")}</p>
                </div>
              </Reveal>

              {/* Right Column: Description & Routing CTA */}
              <div className="flex flex-col">
                <Reveal>
                  <span className="section-tag mb-4 sm:mb-5">{t("aboutTeaser.tag")}</span>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E244B] leading-tight mb-5 sm:mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {language === "en" ? (
                      <>
                        Strengthening Healthcare Through{" "}
                        <span style={{
                          background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        }}>
                          Operational Excellence
                        </span>
                      </>
                    ) : (
                      <>
                        تعزيز الرعاية الصحية من خلال{" "}
                        <span style={{
                          background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        }}>
                          التميز التشغيلي
                        </span>
                      </>
                    )}
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-base text-[#5E647A] leading-relaxed mb-5 sm:mb-6">
                    {t("aboutTeaser.desc")}
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="space-y-2.5 sm:space-y-3 mb-7 sm:mb-8">
                    {[
                      t("aboutTeaser.bullet1"),
                      t("aboutTeaser.bullet2"),
                      t("aboutTeaser.bullet3"),
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#5B43D6] flex-shrink-0" />
                        <span className="text-sm font-semibold text-[#5E647A]">{item}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.4}>
                  <div>
                    <Link href="/about" className="btn-primary">
                      {t("aboutTeaser.cta")}
                      <ArrowRight className={cn("w-4 h-4", dir === "rtl" && "rotate-180")} />
                    </Link>
                  </div>
                </Reveal>

              </div>
            </div>
          </div>
        </section>

        {/* Areas of Expertise Teaser */}
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden" style={{ background: "#F3F5FC" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-12 sm:mb-16">
              <span className="section-tag mb-4 sm:mb-5">{t("expertise.tag")}</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E244B]" style={{ fontFamily: "Manrope, sans-serif" }}>
                {language === "en" ? (
                  <>
                    Our Primary{" "}
                    <span style={{
                      background: "linear-gradient(135deg, #2B7DDC 0%, #28B7C7 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}>
                      Sectors
                    </span>
                  </>
                ) : (
                  <>
                    قطاعاتنا{" "}
                    <span style={{
                      background: "linear-gradient(135deg, #2B7DDC 0%, #28B7C7 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}>
                      الرئيسية
                    </span>
                  </>
                )}
              </h2>
              <p className="text-base text-[#5E647A] max-w-xl mx-auto mt-4">
                {t("expertise.desc")}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
              {/* Sector Card 1: Medical & Pharma */}
              <Reveal delay={0.1}>
                <div className="premium-card rounded-[20px] p-6 sm:p-8 bg-white border border-[#E4E7F2] h-full flex flex-col justify-between">
                  <div>
                    <div className="relative rounded-2xl overflow-hidden mb-5 sm:mb-6" style={{ aspectRatio: "16/7" }}>
                      <Image
                        src="/production.png"
                        alt="Pharmaceutical production"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E244B]/30 to-transparent" />
                    </div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6" style={{ background: "linear-gradient(135deg, rgba(91,67,214,0.1), rgba(43,125,220,0.1))" }}>
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#5B43D6]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1E244B] mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
                      {t("expertise.sector1Title")}
                    </h3>
                    <p className="text-sm text-[#5E647A] leading-relaxed">
                      {t("expertise.sector1Desc")}
                    </p>
                  </div>
                  <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#E4E7F2] flex items-center justify-between text-[#5B43D6] font-bold text-sm">
                    <span>{t("expertise.sector1Stat")}</span>
                    <ChevronRight className={cn("w-4 h-4", dir === "rtl" && "rotate-180")} />
                  </div>
                </div>
              </Reveal>

              {/* Sector Card 2: Strategic Growth */}
              <Reveal delay={0.2}>
                <div className="premium-card rounded-[20px] p-6 sm:p-8 bg-white border border-[#E4E7F2] h-full flex flex-col justify-between">
                  <div>
                    <div className="relative rounded-2xl overflow-hidden mb-5 sm:mb-6" style={{ aspectRatio: "16/7" }}>
                      <Image
                        src="/team-research.png"
                        alt="Strategic growth and research"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E244B]/30 to-transparent" />
                    </div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6" style={{ background: "linear-gradient(135deg, rgba(43,125,220,0.1), rgba(40,183,199,0.1))" }}>
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#2B7DDC]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1E244B] mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
                      {t("expertise.sector2Title")}
                    </h3>
                    <p className="text-sm text-[#5E647A] leading-relaxed">
                      {t("expertise.sector2Desc")}
                    </p>
                  </div>
                  <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#E4E7F2] flex items-center justify-between text-[#2B7DDC] font-bold text-sm">
                    <span>{t("expertise.sector2Stat")}</span>
                    <ChevronRight className={cn("w-4 h-4", dir === "rtl" && "rotate-180")} />
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal className="text-center">
              <Link href="/expertise" className="btn-outline">
                {t("expertise.cta")}
                <ArrowRight className={cn("w-4 h-4", dir === "rtl" && "rotate-180")} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Why Zybiov Teaser */}
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left Column: Text & CTA */}
              <div>
                <Reveal>
                  <span className="section-tag mb-4 sm:mb-5">{t("whyChooseUs.tag")}</span>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E244B] leading-tight mb-5 sm:mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {language === "en" ? (
                      <>
                        Uncompromising Commitment to{" "}
                        <span style={{
                          background: "linear-gradient(135deg, #5B43D6 0%, #28B7C7 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}>
                          Reliability & Trust
                        </span>
                      </>
                    ) : (
                      <>
                        التزام راسخ بالـ{" "}
                        <span style={{
                          background: "linear-gradient(135deg, #5B43D6 0%, #28B7C7 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}>
                          موثوقية والثقة
                        </span>
                      </>
                    )}
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-base text-[#5E647A] leading-relaxed mb-7 sm:mb-8">
                    {t("whyChooseUs.desc")}
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-7 sm:mb-8">
                    {[
                      { title: t("whyChooseUs.feat1Title"), desc: t("whyChooseUs.feat1Desc") },
                      { title: t("whyChooseUs.feat2Title"), desc: t("whyChooseUs.feat2Desc") }
                    ].map((feat) => (
                      <div key={feat.title} className="rounded-xl border border-[#E4E7F2] p-4 sm:p-5 bg-[#FAFBFD]">
                        <p className="font-bold text-[#1E244B] mb-1">{feat.title}</p>
                        <p className="text-xs text-[#5E647A]">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.4}>
                  <div>
                    <Link href="/why-zybiov" className="btn-primary">
                      {t("whyChooseUs.cta")}
                      <ArrowRight className={cn("w-4 h-4", dir === "rtl" && "rotate-180")} />
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Visual Image Grid */}
              <Reveal direction="right" className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden col-span-2" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src="/team-research.png"
                    alt="Zybiov research team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E244B]/40 to-transparent" />
                  <div className={cn("absolute bottom-3 sm:bottom-4", dir === "rtl" ? "right-3 sm:right-4" : "left-3 sm:left-4")}>
                    <span className="text-white font-semibold text-xs sm:text-sm">{t("whyChooseUs.expertTeam")}</span>
                  </div>
                </div>
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src="/lab-digital.png"
                    alt="Digital laboratory"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E244B]/50 to-transparent" />
                  <div className={cn("absolute bottom-2 sm:bottom-3", dir === "rtl" ? "right-2 sm:right-3" : "left-2 sm:left-3")}>
                    <span className="text-white font-semibold text-[10px] sm:text-xs">{t("whyChooseUs.innovation")}</span>
                  </div>
                </div>
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src="/molecule.png"
                    alt="Pharmaceutical molecule"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E244B]/50 to-transparent" />
                  <div className={cn("absolute bottom-2 sm:bottom-3", dir === "rtl" ? "right-2 sm:right-3" : "left-2 sm:left-3")}>
                    <span className="text-white font-semibold text-[10px] sm:text-xs">{t("whyChooseUs.research")}</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Future Aspirations */}
        <AspirationsSection />

        {/* Contact Teaser Banner */}
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-[#1E244B] text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full opacity-10 bg-gradient-to-br from-[#5B43D6] to-[#28B7C7] blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center z-10">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5 sm:mb-6"
                style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.9)", border: "1px solid rgba(255,255,255,0.15)" }}>
                {t("contactTeaser.tag")}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-5 sm:mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                {t("contactTeaser.title")}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                {t("contactTeaser.desc")}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/contact" className="btn-primary" style={{ background: "linear-gradient(135deg, #5B43D6, #2B7DDC)" }}>
                  {t("contactTeaser.ctaContact")}
                  <ArrowRight className={cn("w-4 h-4", dir === "rtl" && "rotate-180")} />
                </Link>
                <Link href="/about" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:bg-white/10"
                  style={{ border: "2px solid rgba(255,255,255,0.3)", fontSize: "0.9375rem" }}>
                  {t("contactTeaser.ctaAbout")}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
