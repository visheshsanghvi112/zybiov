import { ExpertiseClientPage } from "./expertise-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas of Expertise | Zybiov Multi-Activities Limited",
  description:
    "Explore Zybiov's core areas of expertise in Sudan: Sourcing and importation of pharmaceuticals, advanced medical equipment procurement, and premium nutritional supplements distribution.",
  keywords: [
    "Zybiov expertise",
    "Pharmaceutical products Sudan",
    "Medical equipment procurement Sudan",
    "Nutritional supplements supply Sudan",
    "Sudan hospital equipment",
  ],
  openGraph: {
    title: "Areas of Expertise | Zybiov Multi-Activities Limited",
    description:
      "Explore Zybiov's core areas of expertise in Sudan: Sourcing and importation of pharmaceuticals, advanced medical equipment procurement, and premium nutritional supplements distribution.",
    url: "https://www.zybiov.com/expertise",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Areas of Expertise | Zybiov Multi-Activities Limited",
    description:
      "Explore Zybiov's core areas of expertise in Sudan: Sourcing and importation of pharmaceuticals, advanced medical equipment procurement, and premium nutritional supplements distribution.",
  },
};

export default function ExpertisePage() {
  return <ExpertiseClientPage />;
}
