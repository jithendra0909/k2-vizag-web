"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.8;
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Mobile specific auto tooltip reveal once per session
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      const alreadyShown = sessionStorage.getItem("k2_wa_tooltip_shown");
      if (!alreadyShown) {
        const timerIn = setTimeout(() => {
          setShowTooltip(true);
          sessionStorage.setItem("k2_wa_tooltip_shown", "true");
        }, 4000);

        const timerOut = setTimeout(() => {
          setShowTooltip(false);
        }, 7000);

        return () => {
          clearTimeout(timerIn);
          clearTimeout(timerOut);
        };
      }
    }
  }, [isVisible]);

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            className="bg-[#000000] border border-[#F5E000]/30 text-[#FFFFFF] text-xs font-semibold px-3 py-2 rounded-lg shadow-xl whitespace-nowrap select-none font-body"
          >
            Chat with us! 👋
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onMouseEnter={() => {
              if (window.innerWidth >= 768) setShowTooltip(true);
            }}
            onMouseLeave={() => {
              if (window.innerWidth >= 768) setShowTooltip(false);
            }}
            aria-label="Chat with K2 Vizag on WhatsApp"
            className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.4)] text-[#FFFFFF] cursor-pointer outline-none hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-[#F5E000] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {/* Pulse Ring Behind */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-[pulseRing_2s_infinite_ease-out] pointer-events-none" />

            <MessageSquare className="w-7 h-7 fill-current text-[#FFFFFF]" />
          </motion.a>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
