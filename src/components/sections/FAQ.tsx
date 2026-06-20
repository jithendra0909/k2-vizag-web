"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/lib/constants";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-[#F5E000]/15 py-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-4 hover:text-[#F5E000] transition-colors focus:outline-none group font-body"
        aria-expanded={isOpen}
      >
        <span className={`font-display text-lg md:text-xl uppercase tracking-wider transition-colors ${
          isOpen ? "text-[#F5E000]" : "text-[#FFFFFF] group-hover:text-[#F5E000]"
        }`}>
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#F5E000] transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-[#FFFFFF]/75 leading-relaxed pb-4 pt-2 max-w-[800px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#000000] border-t border-[rgba(245,224,0,0.15)] py-20 md:py-32 relative text-[#FFFFFF] overflow-hidden">
      
      {/* Background shape */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#F5E000]/5 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        
        {/* Header Stack */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            viewport={{ once: true }}
            className="inline-block bg-[#F5E000] text-[#000000] px-3.5 py-1.5 text-xs uppercase tracking-widest font-mono font-bold shadow-[2px_2px_0px_#FFFFFF] -rotate-2"
          >
            Support
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter text-[#FFFFFF]">
            FREQUENTLY ASKED <span className="text-[#F5E000]">QUESTIONS.</span>
          </h2>
          <p className="font-body text-[#FFFFFF]/65 text-sm md:text-base max-w-[620px] leading-relaxed">
            Have questions about document requirements, photo printing, or ordering custom gifts? Here are quick answers.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-t border-[#F5E000]/15 mt-12">
          {FAQS.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
