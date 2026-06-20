"use client";

import React, { useState } from "react";
import * as Icons from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppLink } from "@/lib/whatsapp";

const CATEGORIES = [
  { id: "all", label: "All Completed Work" },
  { id: "frames", label: "Photo Frames" },
  { id: "mugs", label: "Mug Printing" },
  { id: "pillows", label: "Pillow Printing" },
  { id: "docs", label: "Documents & Prints" }
];

const GALLERY_ITEMS = [
  { 
    id: 1, 
    category: "frames", 
    title: "Customized Photo Frame", 
    aspect: "aspect-[4/5]", 
    imgSrc: "/gallery/work/photo-frame-custom.jpg", 
    desc: "A4 Matte Frame", 
    msg: "Hi Krishna! I am looking to order a Customized Photo Frame." 
  },
  { 
    id: 2, 
    category: "mugs", 
    title: "Personalized Magic Mug", 
    aspect: "aspect-square", 
    imgSrc: "/gallery/work/magic-mug.jpg", 
    desc: "Color Change Mug", 
    msg: "Hi Krishna! I'd like to customize a Magic Mug." 
  },
  { 
    id: 3, 
    category: "pillows", 
    title: "Satin Pillow Print", 
    aspect: "aspect-[4/5]", 
    imgSrc: "/gallery/work/satin-pillow.jpg", 
    desc: "Custom Satin Pillow", 
    msg: "Hi Krishna! I want to order a Customized Printed Pillow." 
  },
  { 
    id: 4, 
    category: "docs", 
    title: "Color Document Printing", 
    aspect: "aspect-[4/5]", 
    imgSrc: "/gallery/work/color-document-printing.jpg", 
    desc: "Bulk Laser Print", 
    msg: "Hi Krishna! I have document printing work." 
  },
  { 
    id: 5, 
    category: "docs", 
    title: "Spiral Bound Manuals", 
    aspect: "aspect-[4/5]", 
    imgSrc: "/gallery/work/spiral-bound-manual.jpg", 
    desc: "Project Spiral Binding", 
    msg: "Hi Krishna! I need spiral binding services." 
  },
  { 
    id: 6, 
    category: "frames", 
    title: "Collage Frame Design", 
    aspect: "aspect-[4/5]", 
    imgSrc: "/gallery/work/collage-frame.jpg", 
    desc: "Multi-Photo Frame", 
    msg: "Hi Krishna! I'd like to get a Customized Collage Frame." 
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filteredItems = activeFilter === "all" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section className="bg-[#000000] border-t border-[rgba(245,224,0,0.15)] py-20 md:py-32 relative text-[#FFFFFF] overflow-hidden">
      
      {/* Background shape */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F5E000]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Header Stack */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            viewport={{ once: true }}
            className="inline-block bg-[#F5E000] text-[#000000] px-3.5 py-1.5 text-xs uppercase tracking-widest font-mono font-bold shadow-[2px_2px_0px_#FFFFFF] -rotate-2"
          >
            Showcase
          </motion.span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-[#FFFFFF]">
            COMPLETED <span className="text-[#F5E000]">WORK.</span>
          </h2>
          <p className="font-body text-[#FFFFFF]/65 text-base md:text-lg max-w-[620px] leading-relaxed">
            Take a look at some of the customized gifts and high-quality print documents we have created for our neighbors.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 md:mb-16">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`relative text-xs uppercase font-mono tracking-widest font-bold px-5 py-3 rounded-md transition-all border duration-300 ${
                  isActive
                    ? "bg-[#F5E000] text-[#000000] border-[#F5E000] shadow-[0_4px_12px_rgba(245,224,0,0.15)]"
                    : "bg-[#000000] text-[#FFFFFF] border-[#F5E000]/20 hover:border-[#F5E000]/40"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid Layout with Reflow Animations */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedItem(item)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedItem(item);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid relative overflow-hidden rounded-2xl border border-[#F5E000]/20 hover:border-[#F5E000] bg-[#000000] group transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F5E000]"
                >
                  {/* Image Graphic */}
                  <div className={`w-full ${item.aspect} relative overflow-hidden select-none z-0`}>
                    <Image
                      src={item.imgSrc}
                      alt={`K2 Vizag completed work: ${item.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>

                  {/* Hover Overlay - always visible on mobile, hover-only on pointer fine devices */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/70 to-transparent opacity-90 [@media(pointer:fine)]:opacity-0 [@media(pointer:fine)]:group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                    <span className="text-[10px] text-[#F5E000] font-mono uppercase tracking-widest mb-1">
                      {item.desc}
                    </span>
                    <h3 className="font-display text-lg uppercase tracking-wider text-[#FFFFFF] mb-3">
                      {item.title}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] bg-[#25D366] hover:opacity-95 px-4 py-2 rounded-md transition-all w-fit">
                      <Icons.MessageSquare className="w-4 h-4 fill-current text-[#FFFFFF]" />
                      <span>View Details</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#000000]/95 z-[200] flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedItem(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 text-[#FFFFFF]/75 hover:text-[#FFFFFF] bg-[#111111] p-2.5 rounded-full border border-[#FFFFFF]/10 hover:border-[#F5E000] transition-colors cursor-pointer z-50"
              aria-label="Close lightbox"
            >
              <Icons.X className="w-6 h-6" />
            </button>

            {/* Modal Content Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="max-w-[700px] w-full bg-[#0c0c0c] border border-[#F5E000]/20 rounded-3xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(245,224,0,0.1)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] bg-[#000000] overflow-hidden select-none">
                <Image
                  src={selectedItem.imgSrc}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text & Action */}
              <div className="p-6 md:p-8 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-[#F5E000] font-mono uppercase tracking-widest">
                    {selectedItem.desc}
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-[#FFFFFF]">
                    {selectedItem.title}
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <a
                    href={getWhatsAppLink(selectedItem.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow flex items-center justify-center gap-2 bg-[#25D366] text-[#FFFFFF] font-body font-bold uppercase tracking-wider py-3.5 px-6 rounded-md hover:opacity-95 transition-opacity"
                  >
                    <Icons.MessageSquare className="w-5 h-5 fill-current text-[#FFFFFF]" />
                    <span>Order Similar</span>
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="flex-grow border border-[#FFFFFF]/10 hover:border-[#F5E000] text-[#FFFFFF] font-body font-bold uppercase tracking-wider py-3.5 px-6 rounded-md hover:bg-[#FFFFFF]/5 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
