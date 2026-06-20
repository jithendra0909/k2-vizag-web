"use client";

import React from "react";
import { motion } from "framer-motion";

// Global texture overlay child
const TextureOverlay = () => (
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `repeating-linear-gradient(45deg, rgba(245,224,0,0.03) 0px, rgba(245,224,0,0.03) 1px, transparent 1px, transparent 8px)`
    }}
  />
);

// Global mock indicator label
const MockLabel = () => (
  <span className="absolute bottom-1.5 right-2 z-10 text-[9px] text-[#FFFFFF]/20 font-mono tracking-widest pointer-events-none select-none">
    MOCK
  </span>
);

export function AadharCardMockup() {
  return (
    <div className="relative w-full h-[180px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <TextureOverlay />
      
      {/* Background large Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none font-display text-[72px] text-[#F5E000]/4 tracking-widest">
        AADHAR
      </div>

      {/* Aadhar Card Container */}
      <div 
        className="w-[75%] h-[110px] bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#F5E000]/40 rounded-lg shadow-[0_8px_32px_rgba(245,224,0,0.15)] relative p-3 flex flex-col justify-between z-10"
      >
        {/* Tri-color header mock */}
        <div className="absolute top-0 left-0 right-0 h-[6px] bg-[#F5E000] rounded-t-lg flex flex-col justify-end">
          <div className="h-[2px] bg-[#FFFFFF]" />
        </div>

        {/* Card Content Row */}
        <div className="flex gap-3 items-start mt-1.5">
          {/* Avatar Photo Frame */}
          <div className="w-[28px] h-[28px] rounded bg-[#FFFFFF]/8 border border-[#FFFFFF]/15 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-[#FFFFFF]/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>

          {/* Details lines */}
          <div className="flex-1 flex flex-col gap-1.5 pt-0.5">
            <div className="w-[80%] h-[2px] bg-[#FFFFFF]/30" />
            <div className="w-[60%] h-[2px] bg-[#FFFFFF]/30" />
            <div className="w-[70%] h-[2px] bg-[#FFFFFF]/30" />
          </div>
        </div>

        {/* Bottom Details Row */}
        <div className="flex justify-between items-end">
          {/* Mock UID numbers */}
          <div className="font-mono text-[8px] text-[#FFFFFF]/50 tracking-[2px] font-bold">
            XXXX XXXX XXXX
          </div>
          
          {/* Fake Fingerprint Concentric Rings */}
          <div className="w-4.5 h-4.5 rounded-full border border-[#F5E000]/30 flex items-center justify-center relative opacity-70">
            <div className="w-3.5 h-3.5 rounded-full border border-[#F5E000]/30" />
            <div className="w-2.5 h-2.5 rounded-full border border-[#F5E000]/30" />
            <div className="w-1.5 h-1.5 rounded-full border border-[#F5E000]/30" />
          </div>
        </div>
      </div>

      <MockLabel />
    </div>
  );
}

export function PanCardMockup() {
  return (
    <div className="relative w-full h-[180px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <TextureOverlay />
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none font-display text-[80px] text-[#F5E000]/4 tracking-wider">
        PAN
      </div>

      {/* Card Container */}
      <div className="w-[75%] h-[110px] bg-gradient-to-br from-[#161616] to-[#0d0d0d] border border-[#F5E000]/40 rounded-lg shadow-[0_8px_32px_rgba(245,224,0,0.15)] relative p-3 flex flex-col justify-between z-10">
        {/* Header Ribbon mock */}
        <div className="absolute top-0 left-0 right-0 h-[8px] rounded-t-lg flex">
          <div className="w-[60%] bg-[#F5E000] h-full" />
          <div className="w-[40%] bg-[#FFFFFF] h-full" />
        </div>

        <div className="flex justify-between items-start mt-2">
          {/* Top Title text */}
          <div className="font-mono text-[5px] text-[#FFFFFF]/40 tracking-wider">
            INCOME TAX DEPARTMENT
          </div>
          {/* Hologram Box */}
          <div className="w-3 h-3 border border-[#F5E000]/30 rounded bg-[#F5E000]/5 shrink-0" />
        </div>

        {/* PAN Value Text Block */}
        <div className="flex flex-col gap-0.5 my-1">
          <div className="font-mono text-[4px] text-[#FFFFFF]/30 uppercase">PERMANENT ACCOUNT NUMBER</div>
          <div className="font-display text-[14px] text-[#F5E000] tracking-[3px] font-bold leading-none">
            ABCDE1234F
          </div>
        </div>

        {/* Footer info details lines */}
        <div className="flex flex-col gap-1">
          <div className="w-[70%] h-[2px] bg-[#FFFFFF]/20" />
          <div className="w-[55%] h-[2px] bg-[#FFFFFF]/20" />
          <div className="w-[40%] h-[2px] bg-[#FFFFFF]/20" />
        </div>
      </div>

      <MockLabel />
    </div>
  );
}

export function VoterIdMockup() {
  return (
    <div className="relative w-full h-[180px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <TextureOverlay />
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none font-display text-[80px] text-[#F5E000]/4 tracking-widest">
        VOTE
      </div>

      {/* Card Container */}
      <div className="w-[75%] h-[110px] bg-[#000000] border border-[#F5E000]/40 rounded-lg shadow-[0_8px_32px_rgba(245,224,0,0.15)] relative p-3 flex flex-col justify-between z-10 overflow-hidden">
        {/* Yellow Header Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-[10px] bg-[#F5E000] flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
        </div>

        <div className="mt-2.5 text-center">
          <div className="font-mono text-[5px] text-[#FFFFFF]/35 tracking-wider">
            ELECTION COMMISSION OF INDIA
          </div>
        </div>

        {/* Content rows */}
        <div className="flex gap-2 items-center my-1">
          {/* Photo Box */}
          <div className="w-[24px] h-[30px] rounded bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 flex items-center justify-center shrink-0">
            <svg className="w-4.5 h-4.5 text-[#FFFFFF]/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <div className="w-full h-[2px] bg-[#FFFFFF]/20" />
            <div className="w-[80%] h-[2px] bg-[#FFFFFF]/20" />
            <div className="font-mono text-[7px] text-[#F5E000]/50 font-bold leading-none mt-1">
              EPIC: XXX0000000
            </div>
          </div>
        </div>

        {/* Barcode representation */}
        <div className="flex justify-center items-end gap-[1.5px] h-3 mt-1">
          {[1.2, 0.6, 1, 0.4, 1.2, 0.8, 0.5, 1, 0.7, 1.2, 0.4, 0.9].map((height, idx) => (
            <div
              key={idx}
              className="w-[1.5px] bg-[#FFFFFF]/25"
              style={{ height: `${height * 100}%` }}
            />
          ))}
        </div>
      </div>

      <MockLabel />
    </div>
  );
}

export function PassportMockup() {
  return (
    <div className="relative w-full h-[180px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <TextureOverlay />
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none font-display text-[52px] text-[#F5E000]/4 tracking-wide">
        PASSPORT
      </div>

      {/* Passport Book (Tilted) */}
      <div 
        className="w-[65%] h-[105px] bg-[#111111] border border-[#F5E000]/30 rounded-lg shadow-[4px_8px_20px_rgba(245,224,0,0.12)] relative p-3 flex flex-col justify-between z-10 rotate-[-8deg] origin-center"
      >
        {/* Gold Spine */}
        <div className="absolute top-0 bottom-0 left-0 w-[8px] bg-[#F5E000]/80 rounded-l-md" />

        {/* Starburst Chakra and emblem texts */}
        <div className="flex flex-col items-center gap-1.5 ml-2">
          {/* Starburst SVG */}
          <div className="w-8 h-8 rounded-full border-1.5 border-[#F5E000]/50 flex items-center justify-center">
            <svg className="w-5 h-5 text-[#FFFFFF]/30 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
          
          <div className="font-display text-[10px] text-[#FFFFFF]/50 tracking-[3px] text-center font-bold">
            PASSPORT
          </div>
        </div>

        <div className="font-mono text-[5px] text-[#FFFFFF]/25 tracking-widest text-center ml-2">
          REPUBLIC OF INDIA
        </div>
      </div>

      <MockLabel />
    </div>
  );
}

export function PFMockup() {
  return (
    <div className="relative w-full h-[180px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <TextureOverlay />
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none font-display text-[90px] text-[#F5E000]/4 leading-none">
        ₹
      </div>

      <div className="flex items-center gap-6 z-10 relative">
        {/* Passbook Booklet */}
        <div className="w-[50px] h-[70px] bg-[#1a1a1a] border border-[#F5E000]/30 rounded shadow-md relative p-2 flex flex-col justify-between rotate-[-4deg]">
          {/* Spine */}
          <div className="absolute top-0 bottom-0 left-0 w-[5px] bg-[#F5E000] rounded-l" />
          
          <div className="font-mono text-[4px] text-[#FFFFFF]/30 uppercase text-right leading-none">
            PF PASSBOOK
          </div>

          <div className="flex flex-col gap-1 ml-1.5 my-2">
            <div className="w-full h-[2px] bg-[#FFFFFF]/15" />
            <div className="w-[80%] h-[2px] bg-[#FFFFFF]/15" />
            <div className="w-full h-[2px] bg-[#F5E000]/40" /> {/* Highlighted line */}
            <div className="w-[60%] h-[2px] bg-[#FFFFFF]/15" />
            <div className="w-[70%] h-[2px] bg-[#FFFFFF]/15" />
          </div>
        </div>

        {/* Stack of Coins */}
        <div className="relative flex flex-col items-center h-[52px] w-8">
          {/* Coin 3 (Bottom) */}
          <div className="absolute bottom-0 w-7 h-5 rounded-full border-2 border-[#F5E000] bg-[#F5E000]/8 flex items-center justify-center shadow-md z-1" />
          
          {/* Coin 2 (Middle) */}
          <div className="absolute bottom-[8px] w-7 h-5 rounded-full border-2 border-[#F5E000] bg-[#F5E000]/8 flex items-center justify-center shadow-md z-2" />

          {/* Coin 1 (Top) */}
          <div className="absolute bottom-[16px] w-7 h-5 rounded-full border-2 border-[#F5E000] bg-[#F5E000]/8 flex items-center justify-center shadow-md z-3">
            <span className="font-display text-[9px] text-[#F5E000] font-bold leading-none">₹</span>
          </div>
        </div>
      </div>

      <MockLabel />
    </div>
  );
}

export function RTOMockup() {
  return (
    <div className="relative w-full h-[180px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <TextureOverlay />
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none font-display text-[80px] text-[#F5E000]/5">
        RTO
      </div>

      <div className="flex flex-col items-center gap-3.5 z-10 relative">
        {/* Car Silhouette SVG */}
        <div className="relative w-[60px] h-[28px] rounded-lg bg-[#F5E000]/10 border-1.5 border-[#F5E000]/60 flex items-center justify-center">
          {/* Windshield */}
          <div className="absolute top-[3px] left-[15px] right-[15px] h-[6px] border border-[#FFFFFF]/25 rounded-sm" />
          {/* Wheels */}
          <div className="absolute -top-[3px] left-2 w-2 h-1 bg-[#F5E000]/40 rounded-t-sm" />
          <div className="absolute -top-[3px] right-2 w-2 h-1 bg-[#F5E000]/40 rounded-t-sm" />
          <div className="absolute -bottom-[3px] left-2 w-2 h-1 bg-[#F5E000]/40 rounded-b-sm" />
          <div className="absolute -bottom-[3px] right-2 w-2 h-1 bg-[#F5E000]/40 rounded-b-sm" />
        </div>

        {/* License Plate */}
        <div className="w-[54px] h-[14px] bg-[#F5E000] rounded border border-[#000000]/25 flex items-center justify-center shadow">
          <span className="font-mono text-[6px] text-[#000000] font-bold tracking-wider leading-none">
            AP 31 XX 0000
          </span>
        </div>
      </div>

      <MockLabel />
    </div>
  );
}

export function InsuranceMockup() {
  return (
    <div className="relative w-full h-[180px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <TextureOverlay />
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none font-display text-[60px] text-[#F5E000]/4 tracking-wider">
        INSURED
      </div>

      {/* Faint Car Background Silhouette */}
      <div className="absolute opacity-[0.06] w-[75px] h-[34px] rounded bg-[#FFFFFF] border border-[#FFFFFF] top-12 left-1/2 -translate-x-1/2 pointer-events-none z-0" />

      {/* Shield SVG */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <svg className="w-15 h-16 text-[#F5E000]/70 filter drop-shadow-[0_0_12px_rgba(245,224,0,0.15)]" fill="rgba(245,224,0,0.08)" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>

        <span className="font-mono text-[7px] text-[#FFFFFF]/30 tracking-[4px] uppercase font-bold mt-1">
          INSURED
        </span>
      </div>

      <MockLabel />
    </div>
  );
}

export function PVCCardMockup() {
  return (
    <div className="relative w-full h-[180px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <TextureOverlay />
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none font-display text-[80px] text-[#F5E000]/4">
        PVC
      </div>

      {/* Stack of Cards */}
      <div className="relative w-[130px] h-[90px] flex items-center justify-center z-10">
        
        {/* Card 3 (Back) */}
        <div 
          className="absolute w-[90px] h-[58px] bg-[#1a1a1a] border border-[#F5E000]/20 rounded-md rotate-[-12deg] translate-y-2.5 -translate-x-2 z-1 shadow-md"
        />

        {/* Card 2 (Middle) */}
        <div 
          className="absolute w-[90px] h-[58px] bg-[#141414] border border-[#F5E000]/35 rounded-md rotate-[-5deg] translate-y-1.5 -translate-x-[3px] z-2 shadow-lg"
        />

        {/* Card 1 (Front) */}
        <div 
          className="absolute w-[90px] h-[58px] bg-gradient-to-br from-[#1e1e1e] to-[#111111] border-1.5 border-[#F5E000]/60 rounded-md rotate-0 z-3 shadow-[0_8px_24px_rgba(245,224,0,0.15)] p-1.5 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            {/* Smart Chip */}
            <div className="w-3.5 h-2.5 rounded-[2px] bg-gradient-to-br from-[#F5E000] to-[#F5E000]/60 flex flex-col justify-center gap-[1px] p-[1.5px] relative">
              <div className="w-full h-[1px] bg-[#000000]/30" />
              <div className="w-full h-[1px] bg-[#000000]/30" />
            </div>
            
            {/* Contactless wave */}
            <svg className="w-3 h-3 text-[#FFFFFF]/30" fill="none" stroke="currentColor" strokeWidth="0.8" viewBox="0 0 24 24">
              <path d="M12 3a9 9 0 019 9m-9-6a6 6 0 016 6m-6-3a3 3 0 013 3" />
            </svg>
          </div>

          <div className="flex justify-between items-end">
            <span className="font-display text-[8px] text-[#F5E000] tracking-wider font-bold leading-none">K2 VIZAG</span>
            <span className="font-mono text-[5px] text-[#FFFFFF]/25 leading-none">ID CARD</span>
          </div>
        </div>

      </div>

      <MockLabel />
    </div>
  );
}

export function PrintMockup() {
  return (
    <div className="relative w-full h-[180px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <TextureOverlay />
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none font-display text-[72px] text-[#F5E000]/4">
        PRINT
      </div>

      <div className="relative z-10 flex flex-col items-center h-[130px] justify-end">
        {/* Paper coming out */}
        <motion.div 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="w-[48px] h-[50px] bg-[#FFFFFF] rounded-t border border-[#F5E000]/30 shadow-md p-1.5 flex flex-col justify-between -mb-[3px] relative z-0"
        >
          {/* Custom graphic details lines */}
          <div className="flex flex-col gap-1">
            <div className="w-[80%] h-[3px] bg-[#F5E000]" />
            <div className="w-[60%] h-[3px] bg-[#000000]/25" />
            <div className="w-[70%] h-[3px] bg-[#F5E000]/50" />
            <div className="w-[45%] h-[3px] bg-[#000000]/15" />
          </div>
          <div className="font-display text-[8px] text-[#F5E000] font-bold self-end leading-none">K2</div>
        </motion.div>

        {/* Printer Slot Body */}
        <div className="w-[80px] h-[40px] bg-[#1a1a1a] border border-[#F5E000]/30 rounded shadow-lg relative z-10 flex flex-col justify-between p-2">
          {/* Paper slot lines */}
          <div className="w-[50px] h-[3px] bg-[#FFFFFF]/15 mx-auto rounded-full" />
          {/* Printer LED dots */}
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5E000] animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]/20" />
          </div>
        </div>
      </div>

      <MockLabel />
    </div>
  );
}

export function PassportPhotoMockup() {
  return (
    <div className="relative w-full h-[180px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <TextureOverlay />
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none font-display text-[72px] text-[#F5E000]/4">
        PHOTO
      </div>

      {/* Scissors Icon */}
      <div className="absolute top-3 right-3 text-[#FFFFFF]/25 pointer-events-none">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
        </svg>
      </div>

      {/* Layered Strip Cards */}
      <div className="relative z-10 flex items-center justify-center w-[120px] h-[140px]">
        {/* Back Photo strip */}
        <div className="absolute w-[30px] h-[120px] bg-[#F5E000]/15 border border-[#F5E000]/25 rounded -translate-x-3.5 rotate-[-5deg]" />

        {/* Front Photo strip */}
        <div className="absolute w-[30px] h-[130px] bg-[#FFFFFF] border border-[#F5E000]/50 rounded shadow-2xl rotate-[3deg] p-1 flex flex-col justify-between">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-[20px] h-[24px] bg-[#e8e8e8] border border-[#000000]/5 rounded-sm flex items-center justify-center overflow-hidden">
              {/* Silhouette */}
              <svg className="w-4.5 h-4.5 text-[#999999]/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <MockLabel />
    </div>
  );
}

export function SpiralBindingMockup() {
  return (
    <div className="relative w-full h-[180px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <TextureOverlay />
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none font-display text-[80px] text-[#F5E000]/4">
        BIND
      </div>

      {/* Notebook Wrapper tilted */}
      <div className="relative z-10 w-[80px] h-[100px] rotate-[-5deg]">
        {/* Book sheet */}
        <div className="w-[75px] h-[95px] bg-[#FFFFFF] border border-[#F5E000]/30 rounded-r-md ml-[5px] shadow-[3px_6px_20px_rgba(0,0,0,0.5)] p-2 flex flex-col justify-between">
          {/* Header ribbon */}
          <div className="w-full flex flex-col gap-1.5">
            <div className="w-[50%] h-[4px] bg-[#F5E000]" />
            <span className="font-mono text-[4px] text-[#999999] tracking-wider leading-none">DOCUMENT</span>
          </div>
          
          {/* Ruled lines */}
          <div className="flex flex-col gap-1.5 my-3">
            {[...Array(5)].map((_, idx) => (
              <div key={idx} className="w-full h-[1px] bg-[#e0e0e0]" />
            ))}
          </div>

          <div className="w-[30%] h-[2px] bg-[#e0e0e0] self-end" />
        </div>

        {/* Spiral Binder Circles Overlapping Left Edge */}
        <div className="absolute top-[8px] -left-[2px] flex flex-col gap-[3.5px] z-20">
          {[...Array(8)].map((_, idx) => (
            <div
              key={idx}
              className="w-2.5 h-2.5 rounded-full border-[1.5px] border-[#F5E000] bg-transparent"
            />
          ))}
        </div>
      </div>

      <MockLabel />
    </div>
  );
}

export function LaminationMockup() {
  return (
    <div className="relative w-full h-[180px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <TextureOverlay />
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none font-display text-[80px] text-[#F5E000]/4">
        SEAL
      </div>

      <div className="relative z-10 w-[95px] h-[95px] flex items-center justify-center">
        {/* Document sheet */}
        <div className="w-[74px] h-[78px] bg-[#FFFFFF] border border-[#000000]/10 rounded shadow-md p-2 flex flex-col justify-between relative z-0">
          <div className="flex justify-between items-start">
            {/* Small ID Photo */}
            <div className="w-4.5 h-[22px] bg-[#e8e8e8] border border-[#000000]/5 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-[#999999]/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            
            <div className="flex-1 flex flex-col gap-1 ml-2">
              <div className="w-full h-[1.5px] bg-[#e0e0e0]" />
              <div className="w-[80%] h-[1.5px] bg-[#e0e0e0]" />
            </div>
          </div>
          
          <div className="flex flex-col gap-1">
            <div className="w-full h-[1.5px] bg-[#e0e0e0]" />
            <div className="w-[60%] h-[1.5px] bg-[#e0e0e0]" />
          </div>
        </div>

        {/* Lamination Layer on top */}
        <div 
          className="absolute w-[80px] h-[84px] rounded border border-[#FFFFFF]/25 shadow-[0_0_0_2px_rgba(245,224,0,0.4)] flex items-center justify-center overflow-hidden z-10 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(245,224,0,0.06) 0%, rgba(255,255,255,0.15) 40%, rgba(245,224,0,0.04) 60%, rgba(255,255,255,0.10) 100%)"
          }}
        >
          {/* Gloss/Plastic shine lines */}
          <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-[#FFFFFF]/20 skew-x-[-30deg] translate-x-12 animate-pulse" />
        </div>

        {/* Laminated Text Tag */}
        <span className="absolute right-0 text-[5px] text-[#F5E000]/60 font-mono tracking-widest uppercase rotate-90 leading-none mr-[2px]">
          LAMINATED
        </span>
      </div>

      <MockLabel />
    </div>
  );
}

export function DocumentMockup() {
  return (
    <div className="relative w-full h-[180px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <TextureOverlay />
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none font-display text-[72px] text-[#F5E000]/4">
        DOCS
      </div>

      {/* Cursor Icon overlay */}
      <div className="absolute top-4 right-8 z-20 text-[#FFFFFF]/45 pointer-events-none">
        <svg className="w-6.5 h-6.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A11.25 11.25 0 1120.488 9h-2.12" />
        </svg>
      </div>

      {/* Stack of Sheets */}
      <div className="relative z-10 w-[110px] h-[110px] flex items-center justify-center">
        {/* Sheet 3 (Back) */}
        <div className="absolute w-[68px] h-[82px] bg-[#FFFFFF]/10 border border-[#FFFFFF]/10 rounded rotate-[8deg] shadow" />

        {/* Sheet 2 (Middle) */}
        <div className="absolute w-[68px] h-[82px] bg-[#FFFFFF]/20 border border-[#FFFFFF]/15 rounded rotate-[4deg] shadow-md" />

        {/* Sheet 1 (Front) */}
        <div className="absolute w-[68px] h-[82px] bg-[#FFFFFF] border border-[#F5E000]/30 rounded rotate-0 shadow-lg p-2 flex flex-col justify-between">
          <div className="flex flex-col gap-1.5">
            {/* Header bar */}
            <div className="w-full h-[5px] bg-[#F5E000] rounded-sm" />
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="w-[85%] h-[1.5px] bg-[#000000]/20" />
            ))}
          </div>

          {/* K2 stamp seal */}
          <div className="w-4 h-4 rounded-full border border-[#F5E000]/60 flex items-center justify-center text-[5px] text-[#F5E000]/70 font-display font-bold self-end leading-none">
            K2
          </div>
        </div>
      </div>

      <MockLabel />
    </div>
  );
}
