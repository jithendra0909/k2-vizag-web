"use client";

import React from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES_GOVERNMENT } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { 
  AadharCardMockup,
  PanCardMockup,
  VoterIdMockup,
  PassportMockup,
  PFMockup,
  RTOMockup,
  InsuranceMockup,
  PVCCardMockup
} from "@/components/ui/ServiceMockups";

const MOCKUP_MAP: Record<string, React.ComponentType> = {
  aadhar: AadharCardMockup,
  pan: PanCardMockup,
  voter: VoterIdMockup,
  passport: PassportMockup,
  pf: PFMockup,
  rto: RTOMockup,
  insurance: InsuranceMockup,
  pvc: PVCCardMockup,
};

export default function ServicesGovernment() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
  };

  const iconWiggle = {
    hover: {
      rotate: [-8, 8, -8, 8, 0],
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="services" className="bg-[#000000] border-t border-[rgba(245,224,0,0.15)] py-20 md:py-32 relative text-[#FFFFFF] overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F5E000]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Header Stack */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
            viewport={{ once: true }}
            className="inline-block bg-[#F5E000] text-[#000000] px-3.5 py-1.5 text-xs uppercase tracking-widest font-mono font-bold shadow-[2px_2px_0px_#FFFFFF]"
          >
            Government Services
          </motion.span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-[#FFFFFF]">
            Paperwork, Sorted.
          </h2>
          <p className="font-body text-[#FFFFFF]/65 text-base md:text-lg max-w-[620px] leading-relaxed">
            Skip the queues and confusion. We handle the applications, updates, and processing for all major government and identity documents.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {SERVICES_GOVERNMENT.map((srv, idx) => {
            const IconComponent = (Icons as any)[srv.icon] || Icons.HelpCircle;
            const MockupComponent = MOCKUP_MAP[srv.id] || (() => <div className="w-full h-[180px] bg-[#0a0a0a]" />);
            const isAlternate = idx % 2 === 0;

            return (
              <motion.div
                key={srv.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-[#000000] rounded-2xl flex flex-col justify-between items-start border border-[#F5E000]/20 hover:border-[#F5E000] shadow-sm transition-all duration-300 group overflow-hidden"
              >
                {/* Mockup Container */}
                <div className="w-full h-[180px] overflow-hidden relative bg-[#0a0a0a] group-hover:scale-[1.03] transition-transform duration-300">
                  <MockupComponent />
                  
                  {/* Rotating Icon Badge positioned absolutely overlapping the bottom edge */}
                  <motion.div
                    variants={iconWiggle}
                    className={`absolute -bottom-[20px] left-[20px] z-10 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg -rotate-3 group-hover:rotate-0 transition-transform duration-300 ${
                      isAlternate
                        ? "bg-[#F5E000] text-[#000000]"
                        : "bg-[#000000] text-[#F5E000] border border-[#F5E000]"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Card Content with padded text info */}
                <div className="p-6 md:p-8 pt-8 flex-1 flex flex-col justify-between w-full">
                  <div className="flex flex-col items-start gap-4">
                    <h3 className="font-display text-xl md:text-2xl uppercase tracking-wider text-[#FFFFFF] mt-2 group-hover:text-[#F5E000] transition-colors">
                      {srv.name}
                    </h3>

                    <p className="font-body text-sm text-[#FFFFFF]/65 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-8 w-full border-t border-[#F5E000]/10 pt-4">
                    <a
                      href={getWhatsAppLink(srv.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs uppercase font-mono font-bold text-[#F5E000] hover:text-[#FFE500] transition-colors group-hover:translate-x-1 duration-300"
                    >
                      <span>Enquire Now</span>
                      <Icons.ArrowRight className="w-4.5 h-4.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
