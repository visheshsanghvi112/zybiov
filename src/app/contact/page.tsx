import { ContactClientPage } from "./contact-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Zybiov Multi-Activities Limited",
  description:
    "Get in touch with Zybiov Multi-Activities Limited. Contact us for distribution inquiries, partnership opportunities, or medical supply sourcing in Sudan.",
  keywords: [
    "Contact Zybiov",
    "Zybiov Sudan Phone Number",
    "Zybiov email",
    "Partner with Zybiov",
    "Pharmaceutical sourcing inquiry",
  ],
  openGraph: {
    title: "Contact Us | Zybiov Multi-Activities Limited",
    description:
      "Get in touch with Zybiov Multi-Activities Limited. Contact us for distribution inquiries, partnership opportunities, or medical supply sourcing in Sudan.",
    url: "https://www.zybiov.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Zybiov Multi-Activities Limited",
    description:
      "Get in touch with Zybiov Multi-Activities Limited. Contact us for distribution inquiries, partnership opportunities, or medical supply sourcing in Sudan.",
  },
};

export default function ContactPage() {
  return <ContactClientPage />;
}
