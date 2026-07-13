"use client";

import { useState } from "react";
import { Reveal } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, Building2, MessageSquare, MapPin, Globe } from "lucide-react";
import { LinkedinIcon, InstagramIcon, FacebookIcon, GlobeIcon } from "@/components/icons/social-icons";

const socialLinks = [
  { icon: GlobeIcon, label: "Website", href: "https://www.zybiov.com", handle: "www.zybiov.com" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/zybiov-co-ltd-976298421", handle: "LinkedIn Profile" },
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/zybiov.ltd", handle: "@zybiov.ltd" },
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/share/18tCP3Y4zr/", handle: "Facebook Page" },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #5B43D6 0%, transparent 70%)", transform: "translate(-30%, -30%)" }} />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #2B7DDC 0%, transparent 70%)", transform: "translate(20%, 20%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-12 sm:mb-16">
          <span className="section-tag mb-4 sm:mb-5 inline-flex">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#1E244B", fontFamily: "Manrope, sans-serif" }}>
            Let&apos;s{" "}
            <span style={{
              background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Connect
            </span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "#5E647A" }}>
            Reach out to learn more about our pharmaceutical distribution solutions and partnership opportunities.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Left: Info */}
          <Reveal direction="left" className="lg:col-span-2">
            <div className="flex flex-col gap-6 h-full">
              {/* Info card */}
              <div className="rounded-3xl p-6 sm:p-8 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                  boxShadow: "0 20px 60px rgba(91,67,214,0.25)"
                }}>
                <div className="absolute inset-0 opacity-[0.05] rounded-3xl overflow-hidden"
                  style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-5 sm:mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] sm:text-xs mb-0.5">Location</p>
                      <p className="text-white text-xs sm:text-sm font-medium">Sudan — Regional & International Operations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] sm:text-xs mb-0.5">Website</p>
                      <a href="https://www.zybiov.com" target="_blank" rel="noopener noreferrer"
                        className="text-white text-xs sm:text-sm font-medium hover:text-[#28B7C7] transition-colors">
                        www.zybiov.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="rounded-3xl p-6 sm:p-8 border flex-1"
                style={{ background: "#FAFBFD", borderColor: "#E4E7F2", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
                <h3 className="text-sm sm:text-[16px] font-bold mb-4 sm:mb-5" style={{ color: "#1E244B" }}>Follow Us</h3>
                <div className="space-y-3 sm:space-y-4">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 sm:gap-4 group"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                        style={{ background: "linear-gradient(135deg, #5B43D6, #2B7DDC)" }}>
                        <s.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold" style={{ color: "#1E244B" }}>{s.label}</p>
                        <p className="text-[10px] sm:text-xs" style={{ color: "#8892A4" }}>{s.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal delay={0.15} direction="right" className="lg:col-span-3">
            <div className="rounded-3xl p-6 sm:p-8 lg:p-10 border h-full"
              style={{ background: "#FAFBFD", borderColor: "#E4E7F2", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[300px] sm:min-h-[400px] text-center"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ background: "linear-gradient(135deg, #5B43D6, #28B7C7)" }}>
                    <Send className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: "#1E244B", fontFamily: "Manrope, sans-serif" }}>
                    Message Sent!
                  </h3>
                  <p className="text-sm sm:text-base" style={{ color: "#5E647A" }}>Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2" style={{ color: "#1E244B", fontFamily: "Manrope, sans-serif" }}>
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Name */}
                    <div className="relative">
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#5E647A" }}>Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#8892A4" }} />
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="form-input pl-11"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#5E647A" }}>Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#8892A4" }} />
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="form-input pl-11"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#5E647A" }}>Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#8892A4" }} />
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+249 ..."
                          className="form-input pl-11"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#5E647A" }}>Company / Organization</label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#8892A4" }} />
                        <input
                          id="contact-company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="form-input pl-11"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#5E647A" }}>Message *</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4" style={{ color: "#8892A4" }} />
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your needs or inquiry..."
                        rows={5}
                        className="form-input pl-11 resize-none"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01, boxShadow: "0 12px 36px rgba(91,67,214,0.4)" }}
                    whileTap={{ scale: 0.99 }}
                    className="btn-primary justify-center mt-2 w-full sm:w-auto self-start"
                    id="contact-submit"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
