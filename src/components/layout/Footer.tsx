"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ADDRESS, MAPS_DIRECTIONS_URL, HOURS_DISPLAY, HOURS_FOOTNOTE, PHONE_NUMBER_DISPLAY } from "@/lib/constants";
import { getWhatsAppLink, getWhatsAppCatalogLink } from "@/lib/whatsapp";

const servicesList = [
  { name: "Aadhar & PAN Cards", href: "#services" },
  { name: "Passport & PF Support", href: "#services" },
  { name: "Vehicle & RTO Works", href: "#services" },
  { name: "Spiral Binding & Prints", href: "#services" },
  { name: "Customized Gift Frames", href: "#gifts" },
  { name: "Mugs & Pillows Printing", href: "#gifts" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        ease: "easeOut" as const
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#000000] border-t border-[rgba(245,224,0,0.15)] text-[#FFFFFF] pt-20 pb-10 overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] flex items-center justify-center">
        <span className="font-display text-[15vw] select-none text-[#F5E000] leading-none uppercase -rotate-[6deg]">
          K2 VIZAG
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Column 1: Brand Info */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <a href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="inline-block max-w-[150px]">
              <Image
                src="/logo.png"
                alt="K2 Vizag Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </a>
            <p className="text-[#FFFFFF]/65 text-sm leading-relaxed max-w-[280px]">
              Visakhapatnam&apos;s leading local net center, document processing hub, and personalized gifting studio. Quality service at fair prices.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h3 className="font-display text-lg uppercase tracking-wider text-[#FFFFFF]">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {servicesList.map((srv) => (
                <li key={srv.name}>
                  <a
                    href={srv.href}
                    onClick={(e) => handleScrollTo(e, srv.href)}
                    className="text-sm text-[#FFFFFF]/65 hover:text-[#F5E000] transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#F5E000] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span>{srv.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h3 className="font-display text-lg uppercase tracking-wider text-[#FFFFFF]">
              Visit & Contact
            </h3>
            <div className="flex flex-col gap-4 text-sm text-[#FFFFFF]/65">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-[#F5E000]" />
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5E000] transition-colors leading-relaxed"
                >
                  {ADDRESS}
                </a>
              </div>
              <div className="flex gap-3">
                <MessageSquare className="w-5 h-5 shrink-0 text-[#25D366]" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] font-bold text-[#FFFFFF] transition-colors"
                >
                  WhatsApp: {PHONE_NUMBER_DISPLAY}
                </a>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 shrink-0 text-[#F5E000]" />
                <div>
                  <p className="text-[#FFFFFF] font-semibold">{HOURS_DISPLAY}</p>
                  <p className="text-xs text-[#FFFFFF]/65 mt-1">{HOURS_FOOTNOTE}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 4: Quick Actions */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h3 className="font-display text-lg uppercase tracking-wider text-[#FFFFFF]">
              Quick Actions
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-[#FFFFFF] font-body text-xs font-bold uppercase tracking-wider py-3 rounded-md hover:opacity-90 transition-opacity shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current text-[#FFFFFF]" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#000000] border border-[#F5E000] text-[#F5E000] font-body text-xs font-bold uppercase tracking-wider py-3 rounded-md hover:bg-[#F5E000]/10 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
              <a
                href={getWhatsAppCatalogLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-center font-bold text-[#FFFFFF]/65 hover:text-[#F5E000] transition-colors uppercase tracking-widest mt-2"
              >
                View Price List Catalog
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(245,224,0,0.15)] pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#FFFFFF]/45 font-mono">
          <p className="text-center sm:text-left">
            &copy; {currentYear} K2 Vizag Net Center & Customized Gifts. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#F5E000] transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-[#FFFFFF]/20">|</span>
            <span>Crafted with care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
