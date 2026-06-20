"use client";

import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function FinalCTA() {
  return (
    <section className="bg-[#000000] border-t border-[rgba(245,224,0,0.15)] py-24 md:py-32 relative text-[#FFFFFF] overflow-hidden flex items-center justify-center">
      
      {/* Background Rotating Backdrop - Yellow at 0.06 Opacity */}
      <motion.div
        animate={{
          rotate: [-4, -2, -4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 select-none flex items-center justify-center pointer-events-none z-0"
      >
        <span className="font-display text-[35vw] text-[#F5E000] leading-none uppercase opacity-[0.06]">
          K2
        </span>
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10 flex flex-col items-center text-center gap-8">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block bg-[#F5E000] text-[#000000] px-4 py-1.5 text-xs uppercase tracking-widest font-mono font-bold shadow-[2px_2px_0px_#FFFFFF] -rotate-3"
        >
          Get Started Today
        </motion.div>

        {/* H2 title */}
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter max-w-[800px] leading-[0.9] text-[#FFFFFF]">
          READY WHEN <br />
          <span className="text-[#F5E000] drop-shadow-[0_0_20px_rgba(245,224,0,0.25)]">YOU ARE.</span>
        </h2>

        {/* Subtext */}
        <p className="font-body text-[#FFFFFF]/65 text-base md:text-xl max-w-[580px] leading-relaxed">
          Documents, prints, or the perfect personalized gift — Krishna and the K2 Vizag team are just one message away.
        </p>

        {/* Biggest WhatsApp button */}
        <motion.a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 bg-[#25D366] text-[#FFFFFF] font-body text-base font-bold uppercase tracking-wider px-10 py-5 rounded-md transition-colors shadow-[0_10px_30px_rgba(37,211,102,0.4)] group mt-4 hover:opacity-95"
        >
          <MessageSquare className="w-6 h-6 fill-current text-[#FFFFFF]" />
          <span>Chat on WhatsApp Now</span>
          <ArrowRight className="w-5 h-5 text-[#FFFFFF] group-hover:translate-x-1.5 transition-transform duration-300" />
        </motion.a>

      </div>
    </section>
  );
}
