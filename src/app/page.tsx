import React from "react";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesGovernment from "@/components/sections/ServicesGovernment";
import ServicesPrinting from "@/components/sections/ServicesPrinting";
import GiftsShowcase from "@/components/sections/GiftsShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import LocationHours from "@/components/sections/LocationHours";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="relative bg-[#000000] overflow-x-hidden min-h-screen">
        <Hero />
        <TrustStrip />
        <ServicesGovernment />
        <ServicesPrinting />
        <GiftsShowcase />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <Gallery />
        <LocationHours />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
