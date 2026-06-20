"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="bg-[#000000] border-t border-[rgba(245,224,0,0.15)] py-20 md:py-32 relative text-[#FFFFFF] overflow-hidden">
      
      {/* Background shape */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#F5E000]/5 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Header Stack */}
        <div className="flex flex-col items-center text-center gap-4 mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            viewport={{ once: true }}
            className="inline-block bg-[#F5E000] text-[#000000] px-3.5 py-1.5 text-xs uppercase tracking-widest font-mono font-bold shadow-[2px_2px_0px_#FFFFFF] -rotate-2"
          >
            Our Process
          </motion.span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-[#FFFFFF]">
            HOW IT <span className="text-[#F5E000]">WORKS.</span>
          </h2>
          <p className="font-body text-[#FFFFFF]/65 text-base md:text-lg max-w-[620px] leading-relaxed">
            Get your documents sorted or customized gifts printed in 4 simple, stress-free steps.
          </p>
        </div>

        {/* Horizontal Timeline on Desktop / Vertical on Mobile */}
        <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between items-start">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-[#F5E000]/25 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-[#F5E000] origin-left"
            />
          </div>

          {/* Steps */}
          {HOW_IT_WORKS.map((step, idx) => {
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left relative z-10 w-full lg:w-auto"
              >
                {/* Step badge */}
                <motion.div
                  initial={{ scale: 0.8, filter: "grayscale(100%)" }}
                  whileInView={{ scale: [0.8, 1.1, 1], filter: "grayscale(0%)" }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 + 0.3, duration: 0.6 }}
                  className="w-14 h-14 rounded-full bg-[#000000] border-2 border-[#F5E000] flex items-center justify-center text-[#F5E000] font-display text-xl font-bold shadow-[0_0_15px_rgba(245,224,0,0.15)] mb-6"
                >
                  {step.step}
                </motion.div>

                <h3 className="font-display text-xl md:text-2xl uppercase tracking-wider text-[#FFFFFF] mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-[#FFFFFF]/65 leading-relaxed max-w-[280px] mx-auto lg:mx-0">
                  {step.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
