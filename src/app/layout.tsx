import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K2 Vizag Net Center & Customized Gifts | Aadhar, PAN, Prints & Personalized Gifts in Vizag",
  description: "Get fast same-day printing, Aadhar/PAN card assistance, voter documents, passport support, lamination, and premium customized gift photo frames, mugs & pillows in Madhavadhara, Visakhapatnam. Krishna and the K2 Vizag team are ready to assist you!",
  keywords: "K2 Vizag, Net Center Vizag, Customized Gifts Visakhapatnam, Photo Frame Mug Printing, Aadhar PAN Card Visakhapatnam, Xerox DTP Madhavadhara, Madhavadhara, Muralinagar, Visakhapatnam",
  openGraph: {
    title: "K2 Vizag Net Center & Customized Gifts",
    description: "Your local net center, documentation hub, and personalized gifting studio in Visakhapatnam. Same-day printing and premium personalized mugs, frames & pillows.",
    type: "website",
    locale: "en_IN",
  }
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
    "telephone": "+919441756509",
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
