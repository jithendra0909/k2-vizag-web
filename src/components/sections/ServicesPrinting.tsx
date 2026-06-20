"use client";

import React, { useRef, useEffect, useState } from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES_PRINTING } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { 
  PrintMockup,
  PassportPhotoMockup,
  SpiralBindingMockup,
  LaminationMockup,
  DocumentMockup
} from "@/components/ui/ServiceMockups";

const MOCKUP_MAP: Record<string, React.ComponentType> = {
  prints: PrintMockup,
  photos: PassportPhotoMockup,
  binding: SpiralBindingMockup,
  lamination: LaminationMockup,
  "doc-printing": DocumentMockup,
};

export default function ServicesPrinting() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  // Monitor active slide inside mobile carousel
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollPos = el.scrollLeft;
      const cardWidth = el.offsetWidth;
      const index = Math.round(scrollPos / cardWidth);
      setActiveDot(index);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDotClick = (idx: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth;
    el.scrollTo({
      left: idx * cardWidth,
      behavior: "smooth"
    });
  };

  return (
    <section className="bg-[#000000] border-t border-[rgba(245,224,0,0.15)] py-20 md:py-32 relative text-[#FFFFFF] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Header Stack */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            viewport={{ once: true }}
            className="inline-block bg-[#F5E000] text-[#000000] px-3.5 py-1.5 text-xs uppercase tracking-widest font-mono font-bold shadow-[2px_2px_0px_#FFFFFF] -rotate-2"
          >
            Print & Process
          </motion.span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-[#FFFFFF]">
            PRINTS DONE <span className="text-[#F5E000]">RIGHT.</span>
          </h2>
          <p className="font-body text-[#FFFFFF]/65 text-base md:text-lg max-w-[620px] leading-relaxed">
            Color prints, passport photos, spiral binding, lamination — whatever you need printed, bound, or sealed, we&apos;ve got the equipment and the eye for quality.
          </p>
        </div>

        {/* Desktop 5-Column Grid */}
        <div className="hidden lg:grid grid-cols-5 gap-6">
          {SERVICES_PRINTING.map((srv, idx) => {
            const IconComponent = (Icons as any)[srv.icon] || Icons.HelpCircle;
            const MockupComponent = MOCKUP_MAP[srv.id] || (() => <div className="w-full h-[180px] bg-[#0a0a0a]" />);
            const isAlternate = idx % 2 === 0;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  y: -8,
                  borderColor: "#F5E000",
                  boxShadow: "0 0 25px rgba(245, 224, 0, 0.15)"
                }}
                className="bg-[#000000] rounded-2xl flex flex-col justify-between items-start border border-[#F5E000]/20 transition-all duration-300 group overflow-hidden"
              >
                {/* Mockup Container */}
                <div className="w-full h-[180px] overflow-hidden relative bg-[#0a0a0a] group-hover:scale-[1.03] transition-transform duration-300">
                  <MockupComponent />
                  
                  {/* Rotating Icon Overlap Badge */}
                  <div
                    className={`absolute -bottom-[20px] left-[20px] z-10 w-11 h-11 rounded-lg flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform duration-300 ${
                      isAlternate
                        ? "bg-[#F5E000] text-[#000000]"
                        : "bg-[#000000] text-[#F5E000] border border-[#F5E000]"
                    }`}
                  >
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>
                </div>

                {/* Card Content with padded text info */}
                <div className="p-5 pt-8 flex-1 flex flex-col justify-between w-full">
                  <div className="flex flex-col items-start gap-4">
                    <h3 className="font-display text-lg uppercase tracking-wider text-[#FFFFFF] mt-2 group-hover:text-[#F5E000] transition-colors">
                      {srv.name}
                    </h3>
                    <p className="font-body text-xs text-[#FFFFFF]/65 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-8 w-full border-t border-[#F5E000]/10 pt-4">
                    <a
                      href={getWhatsAppLink(srv.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] uppercase font-mono font-bold text-[#F5E000] hover:text-[#FFE500] transition-colors"
                    >
                      <span>Request Service</span>
                      <Icons.ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile / Tablet Horizontal Carousel */}
        <div className="lg:hidden flex flex-col items-center">
          <div
            ref={scrollContainerRef}
            className="w-full flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6"
            style={{ scrollbarWidth: "none" }}
          >
            {SERVICES_PRINTING.map((srv, idx) => {
              const IconComponent = (Icons as any)[srv.icon] || Icons.HelpCircle;
              const MockupComponent = MOCKUP_MAP[srv.id] || (() => <div className="w-full h-[180px] bg-[#0a0a0a]" />);
              const isAlternate = idx % 2 === 0;

              return (
                <div
                  key={srv.id}
                  className="w-full sm:w-[320px] shrink-0 snap-center bg-[#000000] rounded-2xl border border-[#F5E000]/20 flex flex-col justify-between items-start overflow-hidden"
                >
                  {/* Mockup Container */}
                  <div className="w-full h-[180px] overflow-hidden relative bg-[#0a0a0a] self-stretch">
                    <MockupComponent />
                    
                    {/* Rotating Icon Overlap Badge */}
                    <div
                      className={`absolute -bottom-[20px] left-[20px] z-10 w-11 h-11 rounded-lg flex items-center justify-center -rotate-3 ${
                        isAlternate
                          ? "bg-[#F5E000] text-[#000000]"
                          : "bg-[#000000] text-[#F5E000] border border-[#F5E000]"
                      }`}
                    >
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>
                  </div>

                  {/* Card Content with padded text info */}
                  <div className="p-5 pt-8 flex-1 flex flex-col justify-between w-full">
                    <div className="flex flex-col items-start gap-4">
                      <h3 className="font-display text-lg uppercase tracking-wider text-[#FFFFFF] mt-2">
                        {srv.name}
                      </h3>
                      <p className="font-body text-xs text-[#FFFFFF]/65 leading-relaxed">
                        {srv.description}
                      </p>
                    </div>

                    <div className="mt-8 w-full border-t border-[#F5E000]/10 pt-4">
                      <a
                        href={getWhatsAppLink(srv.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[10px] uppercase font-mono font-bold text-[#F5E000]"
                      >
                        <span>Request Service</span>
                        <Icons.ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dot Pagination indicators */}
          <div className="flex items-center gap-2 mt-4">
            {SERVICES_PRINTING.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  activeDot === idx ? "w-6 bg-[#F5E000]" : "w-1.5 bg-[#F5E000]/25"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
