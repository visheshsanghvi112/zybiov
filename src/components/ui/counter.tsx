"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

export function Counter({ value, duration = 2, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: [0.25, 0.1, 0.25, 1],
      });
      return controls.stop;
    }
  }, [inView, count, value, duration]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toLocaleString() + suffix;
      }
    });
  }, [rounded, suffix]);

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
}
