"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { MessageSquare, Star, ArrowDown, Fingerprint, CreditCard, Image as ImageIcon, Coffee } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { getWhatsAppLink } from "@/lib/whatsapp";

// Floating chips configurations
const FLOATING_CHIPS_DESKTOP = [
  { name: "Aadhar", icon: Fingerprint, delay: 0.1, x: "-180px", y: "-160px", speed: 5 },
  { name: "PAN Card", icon: CreditCard, delay: 0.3, x: "110px", y: "-175px", speed: 6 },
  { name: "Frames", icon: ImageIcon, delay: 0.2, x: "-195px", y: "110px", speed: 5.5 },
  { name: "Mugs", icon: Coffee, delay: 0.4, x: "100px", y: "135px", speed: 6.5 }
];

const FLOATING_CHIPS_MOBILE = [
  { name: "Aadhar", icon: Fingerprint, delay: 0.1, x: "-120px", y: "-110px", speed: 4 },
  { name: "PAN Card", icon: CreditCard, delay: 0.3, x: "40px", y: "-120px", speed: 5 },
  { name: "Frames", icon: ImageIcon, delay: 0.2, x: "-130px", y: "75px", speed: 4.5 },
  { name: "Mugs", icon: Coffee, delay: 0.4, x: "50px", y: "90px", speed: 5.5 }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasPointer, setHasPointer] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    setHasPointer(window.matchMedia("(pointer: fine)").matches);
    
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setShouldReduceMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setShouldReduceMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);
  
  // Scroll transformations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.96]);
  const bgTypoY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse parallax
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  // Map spring displacements at different depths
  const pDepth1X = useTransform(springX, (v) => hasPointer ? v * 0.08 : 0);
  const pDepth1Y = useTransform(springY, (v) => hasPointer ? v * 0.08 : 0);
  const pDepth2X = useTransform(springX, (v) => hasPointer ? v * -0.04 : 0);
  const pDepth2Y = useTransform(springY, (v) => hasPointer ? v * -0.04 : 0);
  const pDepth3X = useTransform(springX, (v) => hasPointer ? v * 0.03 : 0);
  const pDepth3Y = useTransform(springY, (v) => hasPointer ? v * 0.03 : 0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cardAnimate = {
    opacity: 1,
    scale: 1
  };

  const cardTransition = {
    delay: 0.4,
    type: "spring" as const,
    stiffness: 200,
    damping: 20
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={hasPointer ? handleMouseMove : undefined}
      onMouseLeave={hasPointer ? handleMouseLeave : undefined}
      className="relative min-h-screen bg-[#000000] overflow-hidden flex items-center justify-center pt-24 pb-16"
    >
      {/* Background Typographic Overlay - Yellow at 0.06 Opacity */}
      <div className="absolute inset-0 select-none pointer-events-none z-0 w-full h-full overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ y: bgTypoY }}
          className="w-full flex items-center justify-center"
        >
          <h2 className="font-display text-[clamp(3rem,18vw,6.5rem)] md:text-[26vw] leading-none text-[#F5E000] opacity-[0.06] -rotate-[6deg] tracking-tighter text-center w-full whitespace-nowrap">
            K2 VIZAG
          </h2>
        </motion.div>
      </div>

      {/* Grid Canvas Wrapper */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
          scale: contentScale
        }}
        className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
      >
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
          {/* Eyebrow Badge - Yellow Background with Black Text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-block bg-[#F5E000] px-3.5 py-1.5 rounded text-xs uppercase tracking-widest text-[#000000] font-mono font-bold -rotate-[3deg] shadow-[2px_2px_0px_#FFFFFF]"
          >
            ★ 4.9 RATED · 400+ HAPPY CUSTOMERS
          </motion.div>

          {/* Headline H1 */}
          <div className="flex flex-col gap-1 font-display leading-[0.9] tracking-tight text-[--text-hero]">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-[#FFFFFF]"
            >
              YOUR DOCUMENTS.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.37, duration: 0.5 }}
              className="text-[#FFFFFF]"
            >
              YOUR GIFTS.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.49, duration: 0.5 }}
              className="text-[#F5E000] drop-shadow-[0_0_15px_rgba(245,224,0,0.25)]"
            >
              ONE STOP.
            </motion.h1>
          </div>

          {/* Subheading - White with 0.65 Opacity */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-[#FFFFFF]/65 font-body text-base md:text-lg leading-relaxed max-w-[580px]"
          >
            From Aadhar to PAN, passport photos to personalized pillows — Krishna and the team at K2 Vizag handle it fast, fairly priced, and with a smile. No queues. No stress. Just WhatsApp us.
          </motion.p>

          {/* Buttons Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.75, type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-[#FFFFFF] font-body font-bold uppercase tracking-wider px-8 py-4 rounded-md transition-colors shadow-[0_4px_20px_rgba(37,211,102,0.3)] w-full sm:w-auto"
            >
              <MessageSquare className="w-5 h-5 fill-current text-[#FFFFFF]" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="#services"
              onClick={handleScrollToServices}
              className="flex items-center justify-center bg-[#000000] border-2 border-[#F5E000] hover:bg-[#F5E000]/10 text-[#F5E000] font-body font-bold uppercase tracking-wider px-8 py-4 rounded-md transition-colors w-full sm:w-auto"
            >
              View Services
            </a>
          </motion.div>

          {/* Trust Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2 border-t border-[#F5E000]/10 pt-6 w-full max-w-[500px]"
          >
            <div className="flex -space-x-3">
              {["Y", "G", "S", "K", "A"].map((init, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-[#000000] border-2 border-[#F5E000] flex items-center justify-center text-xs font-mono font-bold text-[#F5E000]"
                >
                  {init}
                </div>
              ))}
            </div>
            <div className="text-left text-xs">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F5E000] text-[#F5E000]" />
                ))}
                <span className="font-bold text-[#FFFFFF] ml-1">4.9/5 Rating</span>
              </div>
              <p className="text-[#FFFFFF]/65 mt-0.5">400+ local Google review endorsements</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Layered Parallax Logo & Chips */}
        <div className="lg:col-span-5 relative h-[360px] md:h-[450px] lg:h-[500px] flex items-center justify-center">
          {/* Logo Card Stack - Black background with Yellow glow */}
          <motion.div
            style={{
              x: pDepth1X,
              y: pDepth1Y
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={cardAnimate}
            transition={cardTransition}
            className="relative select-none pointer-events-auto z-10"
          >
            {/* Inner CSS Float Card */}
            <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] bg-[#000000] border-2 border-[#F5E000]/30 rounded-2xl p-3 md:p-5 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(245,224,0,0.15)] animate-float-logo">
              {/* Inner Logo Image Wrapper */}
              <div className="relative w-28 h-28 md:w-40 md:h-40 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="K2 Vizag Large Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Floating Orbiting Chips - Desktop View */}
          {FLOATING_CHIPS_DESKTOP.map((chip, idx) => {
            const IconComponent = chip.icon;
            const chipX = idx % 2 === 0 ? pDepth2X : pDepth3X;
            const chipY = idx % 2 === 0 ? pDepth2Y : pDepth3Y;

            return (
              <motion.div
                key={chip.name}
                style={{
                  x: chipX,
                  y: chipY,
                  left: "50%",
                  top: "50%",
                  marginLeft: chip.x,
                  marginTop: chip.y,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.7 + chip.delay,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                className="absolute hidden md:block z-20"
              >
                {/* Floating ambient animation via GPU compositor */}
                <div
                  style={{ animationDuration: `${chip.speed}s` }}
                  className="bg-[#000000] border border-[#F5E000]/20 px-3.5 py-2 rounded-lg flex items-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-md select-none text-[#FFFFFF] text-xs font-semibold whitespace-nowrap hover:border-[#F5E000] transition-colors animate-float-chip"
                >
                  <span className="w-5 h-5 rounded bg-[#F5E000] flex items-center justify-center text-[#000000]">
                    <IconComponent className="w-3.5 h-3.5" />
                  </span>
                  <span>{chip.name}</span>
                </div>
              </motion.div>
            );
          })}

          {/* Floating Orbiting Chips - Mobile View */}
          {FLOATING_CHIPS_MOBILE.map((chip) => {
            const IconComponent = chip.icon;

            return (
              <motion.div
                key={chip.name}
                style={{
                  left: "50%",
                  top: "50%",
                  marginLeft: chip.x,
                  marginTop: chip.y,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.6 + chip.delay,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                className="absolute block md:hidden z-20"
              >
                {/* Floating ambient animation via GPU compositor */}
                <div
                  style={{ animationDuration: `${chip.speed}s` }}
                  className="bg-[#000000] border border-[#F5E000]/20 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-md select-none text-[#FFFFFF] text-[10px] font-semibold whitespace-nowrap animate-float-chip"
                >
                  <span className="w-4 h-4 rounded bg-[#F5E000] flex items-center justify-center text-[#000000]">
                    <IconComponent className="w-3 h-3" />
                  </span>
                  <span>{chip.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
      >
        <span className="text-[#FFFFFF]/45 text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowDown className="w-4 h-4 text-[#F5E000]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
