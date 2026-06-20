"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MessageSquare, Phone } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { getWhatsAppLink } from "@/lib/whatsapp";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Gifts", href: "#gifts" },
  { name: "Reviews", href: "#reviews" },
  { name: "Location", href: "#location" },
  { name: "FAQ", href: "#faq" }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  // Scroll animations interpolations
  const headerHeight = useTransform(scrollY, [0, 100], ["96px", "64px"]);
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.90)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 100], ["rgba(245, 224, 0, 0)", "rgba(245, 224, 0, 0.20)"]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.85]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Track active section on scroll
  useEffect(() => {
    const observers = NAV_ITEMS.map((item) => {
      const el = document.querySelector(item.href);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.href.replace("#", ""));
          }
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      style={{
        height: headerHeight,
        backgroundColor: headerBg,
        borderBottomColor: borderOpacity,
        backdropFilter: "blur(12px)",
      }}
      className="fixed top-0 left-0 w-full z-50 flex items-center border-b border-transparent transition-[height,background-color,border-color] duration-300"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center">
          <motion.div style={{ scale: logoScale }} className="relative h-11 w-11 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="K2 Vizag Logo"
              width={44}
              height={44}
              priority
              className="object-contain"
            />
          </motion.div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-sm uppercase tracking-wider font-semibold font-body py-2 flex flex-col justify-center items-center hover:-translate-y-[2px] transition-all duration-200 ${
                  isActive ? "text-[#F5E000]" : "text-[#FFFFFF] hover:text-[#F5E000]"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F5E000]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Controls */}
        <div className="flex items-center gap-3">
          {/* Header Action Button */}
          <motion.a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.06, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:flex items-center gap-2 bg-[#25D366] text-[#FFFFFF] font-body text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-md transition-colors shadow-[0_0_12px_rgba(37,211,102,0.2)]"
          >
            <MessageSquare className="w-4 h-4 fill-current text-[#FFFFFF]" />
            <span>Chat on WhatsApp</span>
          </motion.a>

          {/* Mobile WA Button - Circular and icon-only next to hamburger */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center justify-center bg-[#25D366] text-[#FFFFFF] p-2.5 rounded-full hover:scale-105 active:scale-95 shadow-[0_0_10px_rgba(37,211,102,0.3)]"
            aria-label="Chat on WhatsApp"
          >
            <Phone className="w-4 h-4 text-[#FFFFFF] fill-current" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#FFFFFF] hover:text-[#F5E000] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[64px] bg-[#000000]/98 z-40 md:hidden flex flex-col justify-between p-8"
          >
            <div className="flex flex-col gap-6 mt-8">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className={`text-2xl uppercase font-display tracking-widest ${
                      isActive ? "text-[#F5E000]" : "text-[#FFFFFF]"
                    } hover:text-[#F5E000] transition-colors`}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
            </div>

            <div className="pb-16 flex flex-col gap-4">
              <p className="text-[#FFFFFF]/60 text-xs font-mono tracking-widest uppercase text-center">
                EST. TRUSTED IN VIZAG
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-[#FFFFFF] font-body text-sm font-bold uppercase tracking-wider py-4 rounded-md shadow-lg"
              >
                <MessageSquare className="w-5 h-5 fill-current text-[#FFFFFF]" />
                <span>WhatsApp Us Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
