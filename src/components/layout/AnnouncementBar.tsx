"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isDismissed = localStorage.getItem("k2_announcement_dismissed");
    if (isDismissed === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("k2_announcement_dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-[#F5E000] text-[#000000] border-b border-[#F5E000]/10 text-xs py-2 overflow-hidden z-[100] h-9 flex items-center">
      <div className="max-w-[1440px] mx-auto px-6 w-full flex justify-between items-center relative">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center select-none cursor-pointer pr-8 hover:text-[#000000]/80 transition-colors font-bold uppercase tracking-wider text-[10px]"
        >
          <div className="inline-flex whitespace-nowrap gap-8 animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
            <span>📍 Now serving Madhavadhara, Muralinagar, Pattabhi Reddy Thota & Industrial Estate Vizag • Fast same-day printing available! • Tap to WhatsApp us →</span>
            <span>📍 Now serving Madhavadhara, Muralinagar, Pattabhi Reddy Thota & Industrial Estate Vizag • Fast same-day printing available! • Tap to WhatsApp us →</span>
            <span>📍 Now serving Madhavadhara, Muralinagar, Pattabhi Reddy Thota & Industrial Estate Vizag • Fast same-day printing available! • Tap to WhatsApp us →</span>
          </div>
        </a>
        <button
          onClick={handleDismiss}
          className="absolute right-4 p-1 hover:opacity-75 text-[#000000] transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}
