"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    autoPlayRef.current = handleNext;
  });

  useEffect(() => {
    if (isHovered) return;

    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };

    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const googleMapsSearchUrl = "https://www.google.com/maps/search/?api=1&query=K2+Vizag+Net+Center+%26+Customized+Gifts+Madhavadhara+Visakhapatnam";

  return (
    <section id="reviews" className="bg-[#000000] border-t border-[rgba(245,224,0,0.15)] py-20 md:py-32 relative text-[#FFFFFF] overflow-hidden">
      
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#F5E000]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Rating Summary */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <motion.span
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            viewport={{ once: true }}
            className="inline-block bg-[#F5E000] text-[#000000] px-3.5 py-1.5 text-xs uppercase tracking-widest font-mono font-bold shadow-[2px_2px_0px_#FFFFFF] -rotate-2"
          >
            Testimonials
          </motion.span>
          
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter leading-[0.95] text-[#FFFFFF]">
            400+ NEIGHBORS <span className="text-[#F5E000]">AGREE.</span>
          </h2>

          <div className="flex flex-col items-center lg:items-start gap-2 bg-[#000000] border border-[#F5E000]/20 p-6 rounded-2xl w-full max-w-[320px]">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl text-[#F5E000]">4.9</span>
              <div className="flex flex-col">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5E000] text-[#F5E000]" />
                  ))}
                </div>
                <span className="text-[10px] text-[#FFFFFF]/65 font-mono mt-0.5 uppercase tracking-wider">Google rating</span>
              </div>
            </div>
            <p className="text-xs text-[#FFFFFF]/65 leading-relaxed mt-2 text-center lg:text-left">
              Based on 400+ verified customer reviews in Visakhapatnam.
            </p>
          </div>

          <a
            href={googleMapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono font-bold text-[#F5E000] hover:text-[#FFE500] transition-colors uppercase tracking-widest underline underline-offset-4"
          >
            Read reviews on Google Maps →
          </a>
        </div>

        {/* Right Side: Animated/Interactive Carousel */}
        <div
          className="lg:col-span-8 relative w-full flex flex-col gap-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Card Container */}
          <div className="relative min-h-[300px] sm:min-h-[260px] md:min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-[#FFFFFF] text-[#000000] rounded-2xl p-8 md:p-10 shadow-2xl relative w-full flex flex-col justify-between"
              >
                {/* Big decorative quote: Yellow color */}
                <Quote className="absolute top-4 left-4 w-12 h-12 text-[#F5E000]/20 pointer-events-none rotate-180" />

                <div className="flex flex-col gap-4 relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(TESTIMONIALS[activeIndex].stars)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-[#F5E000] text-[#F5E000]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-body text-base md:text-lg italic text-[#000000] leading-relaxed">
                    &ldquo;{TESTIMONIALS[activeIndex].text}&rdquo;
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#000000]/5">
                  <div className="w-10 h-10 rounded-full bg-[#000000] flex items-center justify-center font-display text-lg text-[#F5E000] border border-[#F5E000] font-bold shadow-inner">
                    {TESTIMONIALS[activeIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display text-base uppercase tracking-wider text-[#000000]">
                      {TESTIMONIALS[activeIndex].name}
                    </h4>
                    {TESTIMONIALS[activeIndex].role === "Local Guide" ? (
                      <span className="inline-block bg-[#000000] text-[#F5E000] border border-[#F5E000] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mt-0.5">
                        Local Guide
                      </span>
                    ) : (
                      <span className="inline-block bg-[#000000] text-[#FFFFFF] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mt-0.5">
                        Verified Customer
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-4">
            {/* Slide markers */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    activeIndex === idx ? "w-6 bg-[#F5E000]" : "w-1.5 bg-[#F5E000]/25"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-md bg-[#000000] border border-[#F5E000]/20 text-[#FFFFFF] hover:text-[#F5E000] hover:border-[#F5E000]/40 transition-colors flex items-center justify-center"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-md bg-[#000000] border border-[#F5E000]/20 text-[#FFFFFF] hover:text-[#F5E000] hover:border-[#F5E000]/40 transition-colors flex items-center justify-center"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
