"use client";

import React from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#000000] border-t border-[rgba(245,224,0,0.15)] py-20 md:py-32 relative text-[#FFFFFF] overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Header Stack */}
        <div className="flex flex-col items-center text-center gap-4 mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
            viewport={{ once: true }}
            className="inline-block bg-[#F5E000] text-[#000000] px-3.5 py-1.5 text-xs uppercase tracking-widest font-mono font-bold shadow-[2px_2px_0px_#FFFFFF]"
          >
            Our Promise
          </motion.span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-[#FFFFFF]">
            WHY CHOOSE US
          </h2>
          <p className="font-body text-[#FFFFFF]/65 text-base md:text-lg max-w-[620px] leading-relaxed">
            We combine high-speed digital services and top-grade customized gifts with the care and trust of a local neighborhood shop.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = (Icons as any)[item.icon] || Icons.HelpCircle;

            return (
              <div
                key={item.number}
                className="flex flex-col items-center text-center p-6 bg-[#000000] border border-[#F5E000]/20 hover:border-[#F5E000] rounded-2xl shadow-sm transition-all duration-300 relative pt-12"
              >
                {/* Stamped Number Badge - Yellow Border and text on Black Background */}
                <motion.div
                  initial={{ opacity: 0, scale: 1.4, rotate: 12 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    delay: idx * 0.15
                  }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#000000] border-2 border-[#F5E000] px-4 py-2 font-display text-2xl text-[#F5E000] uppercase tracking-wider rounded shadow-[3px_3px_0px_rgba(245,224,0,0.2)] flex items-center justify-center font-bold"
                >
                  {item.number}
                </motion.div>

                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-full border border-[#F5E000] flex items-center justify-center text-[#F5E000] mb-6 mt-2">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="font-display text-xl md:text-2xl uppercase tracking-wider text-[#FFFFFF] mb-4">
                  {item.title}
                </h3>

                <p className="font-body text-sm text-[#FFFFFF]/65 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
