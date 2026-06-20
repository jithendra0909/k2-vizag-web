"use client";

import React, { useEffect, useState, useRef } from "react";
import { MapPin, Clock, Navigation, MessageSquare } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { ADDRESS, MAPS_DIRECTIONS_URL, MAPS_EMBED_URL, HOURS_FOOTNOTE, HOURS_WEEKDAYS } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";

const DAYS_OF_WEEK = [
  { day: "Sunday", index: 0 },
  { day: "Monday", index: 1 },
  { day: "Tuesday", index: 2 },
  { day: "Wednesday", index: 3 },
  { day: "Thursday", index: 4 },
  { day: "Friday", index: 5 },
  { day: "Saturday", index: 6 }
];

export default function LocationHours() {
  const [mounted, setMounted] = useState(false);
  const [currentDayIndex, setCurrentDayIndex] = useState(-1);
  const [isOpenNow, setIsOpenNow] = useState(false);
  
  const mapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isMapInView = useInView(mapRef, { once: true, margin: "-100px" });
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

  useEffect(() => {
    setMounted(true);
    const now = new Date();
    const currentDay = now.getDay();
    setCurrentDayIndex(currentDay);

    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const timeInHours = currentHour + currentMinute / 60;

    if (timeInHours >= HOURS_WEEKDAYS.open && timeInHours < HOURS_WEEKDAYS.close) {
      setIsOpenNow(true);
    } else {
      setIsOpenNow(false);
    }
  }, []);

  return (
    <section id="location" className="bg-[#000000] border-t border-[rgba(245,224,0,0.15)] py-20 md:py-32 relative text-[#FFFFFF] overflow-hidden">
      
      {/* Decorative background visual */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#F5E000]/5 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Google Maps Embed with Clip Path Animation */}
        <div ref={mapRef} className="lg:col-span-6 w-full h-[350px] md:h-[450px] relative rounded-2xl overflow-hidden shadow-lg border border-[#F5E000]/20">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={isMapInView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
            transition={{ duration: 1.0, ease: [0.77, 0, 0.175, 1] }}
            className="w-full h-full"
          >
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="K2 Vizag Google Maps Location"
              className="grayscale invert brightness-[0.85] contrast-[1.2]"
            />
          </motion.div>
        </div>

        {/* Right Column: Address, Hours table, Actions */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, x: 40 }}
          animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col gap-8"
        >
          {/* Section label */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#F5E000] text-[#000000] px-3 py-1 text-xs uppercase tracking-widest font-mono font-bold shadow-[2px_2px_0px_#FFFFFF] -rotate-3">
              Location
            </span>

            {/* Live status badge */}
            {mounted && (
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                isOpenNow 
                  ? "bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20" 
                  : "bg-[#000000] text-[#FFFFFF]/65 border border-[#FFFFFF]/10"
              }`}>
                <span className={`w-2 h-2 rounded-full ${isOpenNow ? "bg-[#25D366]" : "bg-[#FFFFFF]/45"} animate-pulse`} />
                <span>{isOpenNow ? "Open Now" : "Closed — Opens 9:00 AM"}</span>
              </div>
            )}
          </div>

          <div>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter text-[#FFFFFF] mb-4">
              FIND US IN VIZAG.
            </h2>
            
            <div className="flex gap-3 text-sm text-[#FFFFFF]/65 mt-2">
              <MapPin className="w-5 h-5 shrink-0 text-[#F5E000] mt-0.5" />
              <div>
                <p className="font-semibold text-[#FFFFFF]">K2 Vizag Net Center & Customized Gifts</p>
                <p className="mt-1 leading-relaxed">{ADDRESS}</p>
                <p className="text-xs text-[#FFFFFF]/65 mt-1.5 font-semibold">📍 Nearby Landmarks: Madhavadhara, Muralinagar, Pattabhi Reddy Thota</p>
              </div>
            </div>
          </div>

          {/* Operating Hours Table */}
          <div className="border border-[#F5E000]/20 bg-[#000000] rounded-xl overflow-hidden shadow-inner">
            <div className="bg-[#000000] text-[#F5E000] border-b border-[#F5E000]/20 font-mono text-xs uppercase tracking-widest px-4 py-2 flex justify-between font-bold">
              <span>Day</span>
              <span>Hours</span>
            </div>
            <div className="divide-y divide-[#F5E000]/10">
              {DAYS_OF_WEEK.map((item) => {
                const isToday = mounted && currentDayIndex === item.index;
                return (
                  <div
                    key={item.day}
                    className={`px-4 py-2.5 flex justify-between text-sm transition-colors ${
                      isToday 
                        ? "bg-[#F5E000]/10 font-bold border-l-4 border-[#F5E000] text-[#F5E000]" 
                        : "text-[#FFFFFF]/65"
                    }`}
                  >
                    <span>{item.day}</span>
                    <span>9:00 AM — 9:00 PM</span>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-xs text-[#FFFFFF]/65 italic font-mono">
            * {HOURS_FOOTNOTE}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 border-t border-[#F5E000]/10 pt-6 mt-2">
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#000000] border border-[#F5E000] text-[#F5E000] hover:bg-[#F5E000]/10 font-body text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-md transition-colors shadow-md"
            >
              <Navigation className="w-4.5 h-4.5" />
              <span>Get Directions</span>
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-[#FFFFFF] font-body text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-md transition-opacity hover:opacity-95"
            >
              <MessageSquare className="w-4.5 h-4.5 fill-current text-[#FFFFFF]" />
              <span>Confirm Holiday Hours</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
