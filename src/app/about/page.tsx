import { AboutClientPage } from "./about-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Zybiov Multi-Activities Limited",
  description:
    "Discover Zybiov Multi-Activities Limited, a premier importer and distributor of pharmaceuticals and medical supplies in Sudan. Learn about our mission, vision, core values, and corporate standards.",
  keywords: [
    "About Zybiov",
    "Zybiov Multi-Activities Limited",
    "Pharmaceutical importer Sudan",
    "Medical supply chain Sudan",
    "Sudan healthcare distribution",
  ],
  openGraph: {
    title: "About Us | Zybiov Multi-Activities Limited",
    description:
      "Discover Zybiov Multi-Activities Limited, a premier importer and distributor of pharmaceuticals and medical supplies in Sudan.",
    url: "https://www.zybiov.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Zybiov Multi-Activities Limited",
    description:
      "Discover Zybiov Multi-Activities Limited, a premier importer and distributor of pharmaceuticals and medical supplies in Sudan.",
  },
};

export default function AboutPage() {
  return <AboutClientPage />;
}
