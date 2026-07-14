import { HomeClientPage } from "./home-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zybiov Multi-Activities Limited | Premium Pharmaceutical Distribution — Sudan",
  description:
    "Zybiov Multi-Activities Limited is a leading Sudanese company specializing in the importation and distribution of pharmaceuticals and medical supplies. Quality in Every Step Toward Better Healthcare.",
  keywords: [
    "Zybiov Multi-Activities Limited",
    "Zybiov Sudan",
    "Sudan pharmaceutical distributor",
    "Medical equipment Sudan",
    "Nutritional supplements Sudan",
    "Sudan medicine import",
  ],
  openGraph: {
    title: "Zybiov Multi-Activities Limited | Premium Pharmaceutical Distribution",
    description:
      "Zybiov Multi-Activities Limited is a leading Sudanese company specializing in the importation and distribution of pharmaceuticals and medical supplies.",
    url: "https://www.zybiov.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zybiov Multi-Activities Limited | Premium Pharmaceutical Distribution",
    description:
      "Zybiov Multi-Activities Limited is a leading Sudanese company specializing in the importation and distribution of pharmaceuticals and medical supplies.",
  },
};

export default function HomePage() {
  return <HomeClientPage />;
}
