import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#FFFFFF] py-20 px-6 font-body flex items-center justify-center">
      <div className="max-w-[800px] w-full bg-[#000000] border border-[#F5E000]/20 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
        {/* Background shape */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#F5E000]/5 rounded-full filter blur-2xl pointer-events-none" />

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F5E000] hover:text-[#FFE500] transition-colors uppercase tracking-widest mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-[#F5E000]" />
          <h1 className="font-display text-3xl md:text-4xl uppercase tracking-wider text-[#FFFFFF]">
            Privacy Policy
          </h1>
        </div>

        <p className="text-xs text-[#FFFFFF]/45 font-mono uppercase tracking-widest mb-8">
          Last Updated: June 2026
        </p>

        <div className="space-y-6 text-sm text-[#FFFFFF]/65 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-lg uppercase tracking-wider text-[#F5E000] mt-4">
              1. Information We Collect
            </h2>
            <p className="text-[#FFFFFF]/65">
              We operate K2 Vizag Net Center & Customized Gifts in Visakhapatnam. We do not host databases or run registration accounts online on this website. The information we receive is limited to details you proactively share with us when clicking click-to-chat links to start conversations on WhatsApp.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg uppercase tracking-wider text-[#F5E000] mt-4">
              2. Document Handling Policy
            </h2>
            <p className="text-[#FFFFFF]/65">
              For digital café services (like Aadhar updates, PAN card filings, prints, and custom gift photo transfers):
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#FFFFFF]/45">
              <li>All document files, identification papers, and photo uploads sent to our primary WhatsApp number are treated with high confidentiality.</li>
              <li>Files and sensitive documents are processed on local computers inside our Visakhapatnam store and are only uploaded to authorized government/identity verification portals.</li>
              <li>We securely delete files or log off local systems once document actions are completed.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg uppercase tracking-wider text-[#F5E000] mt-4">
              3. Payments & Gifting Files
            </h2>
            <p className="text-[#FFFFFF]/65">
              All online payment details are handled via peer-to-peer UPI transfer gateways (GPay, PhonePe, UPI apps). We do not record or collect bank transactions or financial identifiers through this static web server.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg uppercase tracking-wider text-[#F5E000] mt-4">
              4. Contact Us
            </h2>
            <p className="text-[#FFFFFF]/45">
              If you have any questions or require direct support regarding document processing or your customized orders:
            </p>
            <p className="text-[#FFFFFF]/45">
              Owner: Krishna <br />
              Address: PR Gardens, 37-11-42, Industrial Estate, Pattabhi Reddy Thota, Madhavadhara, Visakhapatnam, Andhra Pradesh 530007 <br />
              WhatsApp / Call Support: +91 79896 15350
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
