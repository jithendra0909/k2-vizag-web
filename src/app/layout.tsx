import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K2 Vizag Net Center & Customized Gifts | Aadhar, PAN, Prints & Personalized Gifts in Vizag",
  description: "Documents, prints & personalized gifts in Vizag. Aadhar, PAN, Voter ID, Passport assistance, color prints, photo frames, custom mugs & pillows. Fast, fair-priced, WhatsApp us today.",
  keywords: "K2 Vizag, Net Center Vizag, Customized Gifts Visakhapatnam, Photo Frame Mug Printing, Aadhar PAN Card Visakhapatnam, Xerox DTP Madhavadhara, Madhavadhara, Muralinagar, Visakhapatnam",
  metadataBase: new URL("https://k2-vizag-web.vercel.app"),
  openGraph: {
    title: "K2 Vizag Net Center & Customized Gifts",
    description: "Documents, prints & personalized gifts in Vizag — Aadhar, PAN, Voter ID, Passport, color prints, photo frames, custom mugs & pillows.",
    url: "https://k2-vizag-web.vercel.app",
    siteName: "K2 Vizag",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K2 Vizag Net Center & Customized Gifts",
    description: "Documents, prints & personalized gifts in Vizag — Aadhar, PAN, Voter ID, Passport, color prints, photo frames, custom mugs & pillows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "K2 Vizag Net Center & Customized Gifts",
    "image": "/logo.png",
    "telephone": "+917989615350",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "PR Gardens, 37-11-42, Industrial Estate, Pattabhi Reddy Thota, Madhavadhara",
      "addressLocality": "Visakhapatnam",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "530007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.7496739",
      "longitude": "83.2646698"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "400"
    }
  };

  return (
    <html
      lang="en"
      className="scroll-smooth h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#000000] text-[--k2-white]">
        {children}
      </body>
    </html>
  );
}
