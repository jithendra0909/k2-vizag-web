"use client";

import React from "react";
import * as Icons from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GIFTS } from "@/lib/constants";
import { getWhatsAppLink, getWhatsAppCatalogLink } from "@/lib/whatsapp";

interface GiftTileProps {
  id: string;
  name: string;
  description: string;
  message: string;
  className?: string;
  aspectClass: string;
  imgSrc: string;
}

function GiftTile({ name, description, message, className = "", aspectClass, imgSrc }: GiftTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
        }
      }}
      role="button"
      tabIndex={0}
      className={`relative overflow-hidden rounded-2xl border border-[#F5E000]/20 hover:border-[#F5E000] bg-[#000000] group cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F5E000] ${aspectClass} ${className}`}
    >
      {/* Background Graphic Mockup Image */}
      <motion.div
        variants={{
          hover: { scale: 1.05 }
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0 animate-none"
      >
        <Image
          src={imgSrc}
          alt={`K2 Vizag customized ${name} product mockup`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dark Overlay gradient - always visible on mobile, hover-only on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/70 to-transparent opacity-90 [@media(pointer:fine)]:opacity-60 [@media(pointer:fine)]:group-hover:opacity-90 transition-opacity duration-300 pointer-events-none z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-20">
        <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wider text-[#FFFFFF] group-hover:text-[#F5E000] transition-colors mb-2">
          {name}
        </h3>
        <p className="font-body text-xs md:text-sm text-[#FFFFFF]/85 leading-relaxed mb-4 max-w-[420px] opacity-100 [@media(pointer:fine)]:opacity-0 [@media(pointer:fine)]:group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
        <div className="w-full md:w-auto opacity-100 translate-y-0 [@media(pointer:fine)]:opacity-0 [@media(pointer:fine)]:translate-y-4 [@media(pointer:fine)]:group-hover:opacity-100 [@media(pointer:fine)]:group-hover:translate-y-0 transition-all duration-300">
          <div className="inline-flex items-center gap-2 bg-[#25D366] text-[#FFFFFF] font-body text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-md">
            <Icons.MessageSquare className="w-4 h-4 fill-current text-[#FFFFFF]" />
            <span>Order this</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function GiftsShowcase() {
  const photoFrameData = GIFTS.find(g => g.id === "frames")!;
  const mugData = GIFTS.find(g => g.id === "mugs")!;
  const pillowData = GIFTS.find(g => g.id === "pillows")!;
  const generalData = GIFTS.find(g => g.id === "general-gifts")!;

  return (
    <section id="gifts" className="bg-[#000000] border-t border-[rgba(245,224,0,0.15)] py-20 md:py-32 relative text-[#FFFFFF] overflow-hidden">
      
      {/* Background typographic "MEMORIES" watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] flex items-center justify-center">
        <span className="font-display text-[22vw] select-none text-[#F5E000] leading-none uppercase rotate-[6deg]">
          MEMORIES
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Header Stack */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            viewport={{ once: true }}
            className="inline-block bg-[#F5E000] text-[#000000] px-3.5 py-1.5 text-xs uppercase tracking-widest font-mono font-bold shadow-[2px_2px_0px_#FFFFFF] -rotate-2"
          >
            Customized Gifts
          </motion.span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-[#FFFFFF]">
            MAKE IT <span className="text-[#F5E000]">PERSONAL.</span>
          </h2>
          <p className="font-body text-[#FFFFFF]/65 text-base md:text-lg max-w-[620px] leading-relaxed">
            Turn your favorite memories into something you can hold. Custom photo frames, printed mugs, personalized pillows, and gifts made exactly the way you imagine.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <GiftTile
            id={photoFrameData.id}
            name={photoFrameData.name}
            description={photoFrameData.description}
            message={photoFrameData.message}
            aspectClass="aspect-[4/5] md:aspect-auto md:h-[600px] lg:col-span-1 lg:row-span-2"
            imgSrc="/gallery/gifts/photo-frame-hero.jpg"
          />

          <GiftTile
            id={mugData.id}
            name={mugData.name}
            description={mugData.description}
            message={mugData.message}
            aspectClass="aspect-square"
            imgSrc="/gallery/gifts/mug-hero.jpg"
          />

          <GiftTile
            id={pillowData.id}
            name={pillowData.name}
            description={pillowData.description}
            message={pillowData.message}
            aspectClass="aspect-square"
            imgSrc="/gallery/gifts/pillow-hero.jpg"
          />

          <GiftTile
            id={generalData.id}
            name={generalData.name}
            description={generalData.description}
            message={generalData.message}
            aspectClass="aspect-[4/3] md:aspect-auto md:h-[260px] md:col-span-2 lg:col-span-2"
            imgSrc="/gallery/gifts/general-gifts.jpg"
          />
        </div>

        {/* Closing CTA */}
        <div className="flex flex-col items-center text-center mt-16 md:mt-24 bg-[#000000] border border-[#F5E000]/20 rounded-2xl p-8 md:p-12 max-w-[800px] mx-auto">
          <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wider text-[#FFFFFF] mb-4">
            Want to see more designs?
          </h3>
          <p className="font-body text-[#FFFFFF]/65 text-sm md:text-base leading-relaxed mb-6 max-w-[500px]">
            Check out our updated business price list catalog on WhatsApp to browse our complete collection of customizable gifts, frames, and print designs.
          </p>
          <a
            href={getWhatsAppCatalogLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-[#FFFFFF] font-body text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-md transition-opacity hover:opacity-95"
          >
            <Icons.BookOpen className="w-4.5 h-4.5 text-[#FFFFFF]" />
            <span>View Full Catalog on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
