"use client";

import { useLanguage } from "@/components/layout/language-context";

export function JsonLd() {
  const { language } = useLanguage();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zybiov Multi-Activities Limited",
    "alternateName": ["Zybiov", "زيبوف"],
    "url": "https://www.zybiov.com",
    "logo": "https://www.zybiov.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/in/zybiov-co-ltd-976298421",
      "https://www.instagram.com/zybiov.ltd",
      "https://www.facebook.com/share/18tCP3Y4zr/",
      "https://www.youtube.com/@Zybiov"
    ],
    "description": language === "ar"
      ? "شركة زيبوف للأنشطة المتعددة المحدودة هي شركة سودانية رائدة متخصصة في استيراد وتوزيع الأدوية والمستلزمات الطبية من مصادر عالمية تشمل الهند (مومباي) والسودان."
      : "Zybiov Multi-Activities Limited is a premier pharmaceutical and medical supplies importer and distributor, bridging global manufacturing in India (Mumbai) with regional networks in Sudan.",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+249-111-909-092",
        "contactType": "customer service",
        "areaServed": ["SD", "IN", "Global"],
        "availableLanguage": ["Arabic", "English"]
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Khartoum",
        "addressCountry": "Sudan",
        "contactType": "Headquarters"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "India",
        "contactType": "Liaison & Sourcing Office"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "name": "Zybiov Multi-Activities Limited",
    "image": "https://www.zybiov.com/logo.png",
    "telephone": "+249-111-909-092",
    "url": "https://www.zybiov.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Khartoum Al-Riyadh",
      "addressLocality": "Khartoum",
      "addressCountry": "SD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "15.5007",
      "longitude": "32.5599"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
