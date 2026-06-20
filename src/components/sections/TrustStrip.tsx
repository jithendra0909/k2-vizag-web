"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
  sublabel: string;
}

function StatItem({ value, suffix, decimals = 0, label, sublabel }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress);
      const currentVal = easeProgress * (end - start) + start;
      
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  const formattedCount = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 relative">
      <div className="font-display text-[#F5E000] text-4xl md:text-5xl uppercase tracking-tighter mb-1.5 flex items-baseline">
        <span>{formattedCount}</span>
        <span className="text-2xl md:text-3xl ml-0.5">{suffix}</span>
      </div>
      <p className="text-sm font-semibold uppercase tracking-wider text-[#FFFFFF]">{label}</p>
      <p className="text-xs text-[#FFFFFF]/65 mt-0.5">{sublabel}</p>

      {/* Drawing Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#F5E000]/30 origin-center"
      />
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section className="bg-[#000000] border-y border-[#F5E000]/10 py-8 relative z-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 divide-y-0 lg:divide-x divide-[#F5E000]/10">
          <StatItem
            value={4.9}
            suffix="★"
            decimals={1}
            label="Google Rating"
            sublabel="400+ customer reviews"
          />
          <StatItem
            value={400}
            suffix="+"
            label="Happy Customers"
            sublabel="Trusted local service"
          />
          <StatItem
            value={15}
            suffix="+"
            label="Services Offered"
            sublabel="One-stop digital hub"
          />
          <StatItem
            value={100}
            suffix="%"
            label="Local & Personal"
            sublabel="Owner Krishna direct support"
          />
        </div>
      </div>
    </section>
  );
}
