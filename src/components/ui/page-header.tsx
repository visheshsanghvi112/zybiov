"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Breadcrumb } from "./breadcrumb";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: React.ReactNode;
  description: string;
  tag: string;
  bgImage: string;
  breadcrumbLabel: string;
}

export function PageHeader({
  title,
  description,
  tag,
  bgImage,
  breadcrumbLabel,
}: PageHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse movement parallax values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring configurations for smooth movement
  const mouseXSpring = useSpring(x, { stiffness: 80, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 80, damping: 15 });
  
  // Map movement to subtle pixels translation
  const translateImageX = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]);
  const translateImageY = useTransform(mouseYSpring, [-0.5, 0.5], [-20, 20]);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      x.set(mouseX / width - 0.5);
      y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [x, y]);

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden border-b border-[#E4E7F2]/80 cursor-default"
      style={{
        background: "linear-gradient(135deg, #FFFFFF 0%, #F5F7FF 100%)",
      }}
    >
      {/* Dynamic Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0 select-none pointer-events-none [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
        style={{
          x: translateImageX,
          y: translateImageY,
        }}
      >
        <Image
          src={bgImage}
          alt=""
          fill
          className="object-cover opacity-[0.09] transition-transform duration-300"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Floating Glowing Orbs (Abstract Luxury UI) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Orb 1: Indigo */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#5B43D6] to-[#7C5CFC] opacity-[0.06] blur-[80px]"
        />

        {/* Orb 2: Cyan */}
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 20, -40, 0],
            scale: [1, 0.85, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#28B7C7] to-[#5B43D6] opacity-[0.05] blur-[100px]"
        />

        {/* Subtle grid layout to structure background spacing */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(#5B43D6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Content Layer with reveal staggered animations */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center"
        >
          <Breadcrumb
            items={[{ label: breadcrumbLabel }]}
            className="justify-center !mb-4"
          />

          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-tag inline-flex"
          >
            {tag}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1E244B] mb-6 mt-5 max-w-4xl"
            style={{ fontFamily: "Manrope, sans-serif", lineHeight: 1.15 }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-[#5E647A] leading-relaxed font-medium opacity-90"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
