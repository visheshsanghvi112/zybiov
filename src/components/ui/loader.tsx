"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure loader runs for at least 1.5 seconds to show transition, then wait for page load
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1600);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1E244B]"
        >
          {/* Subtle grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ 
              backgroundImage: "radial-gradient(white 1px, transparent 1px)", 
              backgroundSize: "28px 28px" 
            }} 
          />

          <div className="relative flex flex-col items-center z-10">
            {/* Spinning/pulsating medical capsule animation */}
            <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
              {/* Pulse rings */}
              <div className="absolute w-20 h-20 rounded-full border border-[#5B43D6]/30 animate-ping opacity-75" />
              <div className="absolute w-24 h-24 rounded-full border border-[#28B7C7]/20 animate-ping opacity-50" style={{ animationDelay: "0.5s" }} />
              
              {/* Rotating Custom Pill/Capsule */}
              <div className="relative flex w-12 h-6 rounded-full overflow-hidden rotate-[45deg] animate-spin shadow-lg shadow-[#5B43D6]/20" style={{ animationDuration: "2.5s" }}>
                <div className="w-1/2 h-full bg-[#5B43D6]" />
                <div className="w-1/2 h-full bg-[#28B7C7]" />
              </div>

              {/* Heartbeat pulse overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-white opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M4.5 12h2.5l2.5-6 3 12 2-8 2 4h3" 
                    className="draw-path"
                  />
                </svg>
              </div>
            </div>

            {/* Glowing brand name */}
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl sm:text-3xl font-extrabold tracking-widest text-white mb-2"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              ZYBIOV
            </motion.h2>

            {/* Slogan */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-xs sm:text-sm text-[#28B7C7] font-semibold tracking-wider uppercase px-4 text-center max-w-xs sm:max-w-md leading-relaxed"
            >
              Quality in Every Step Toward Better Healthcare
            </motion.p>
          </div>

          <style jsx global>{`
            @keyframes draw {
              to {
                stroke-dashoffset: 0;
              }
            }
            .draw-path {
              stroke-dasharray: 50;
              stroke-dashoffset: 50;
              animation: draw 2s ease-in-out infinite;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
