"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "./language-context";
import { cn } from "@/lib/utils";
import { LinkedinIcon, InstagramIcon, FacebookIcon, GlobeIcon } from "@/components/icons/social-icons";

const footerLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.expertise", href: "/expertise" },
  { key: "nav.whyZybiov", href: "/why-zybiov" },
  { key: "nav.contact", href: "/contact" },
];

const socialLinks = [
  { icon: GlobeIcon, label: "Website", href: "https://www.zybiov.com", handle: "zybiov.com" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/zybiov-co-ltd-976298421", handle: "LinkedIn" },
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/zybiov.ltd", handle: "@zybiov.ltd" },
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/share/18tCP3Y4zr/", handle: "Facebook" },
];

export function Footer() {
  const { language, t, dir } = useLanguage();

  return (
    <footer className="bg-[#1E244B] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#5B43D6]/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#2B7DDC]/10 blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top bar */}
        <div className="py-14 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white px-5 py-2.5 rounded-xl inline-flex items-center justify-center shadow-md">
                <div className="relative w-[130px] h-[48px]">
                  <Image
                    src="/logo.png"
                    alt={t("brandName")}
                    fill
                    className="object-contain"
                    sizes="130px"
                  />
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              {t("footer.desc")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#5B43D6] transition-all duration-200 hover:scale-110"
                >
                  <s.icon className="w-4 h-4 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className={cn(
                      "w-3 h-3 opacity-0 transition-all duration-200 text-[#5B43D6]",
                      dir === "rtl" ? "rotate-180 translate-x-2 group-hover:translate-x-0" : "-translate-x-2 group-hover:translate-x-0",
                      "group-hover:opacity-100"
                    )} />
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">{t("footer.connect")}</h3>
            <ul className="space-y-4">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/55 text-sm hover:text-white transition-colors duration-200 group"
                  >
                    <span className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-[#5B43D6]/50 transition-colors">
                      <s.icon className="w-3.5 h-3.5" />
                    </span>
                    {s.handle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} {t("brandName")}. {t("footer.allRights")}
          </p>
          <p className="text-white/30 text-xs">
            {t("tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
