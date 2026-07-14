import { WhyZybiovClientPage } from "./why-zybiov-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Zybiov | Zybiov Multi-Activities Limited",
  description:
    "Discover why Zybiov is Sudan's preferred pharmaceutical distributor. Driven by global manufacturer partnerships, strict GMP standards compliance, and an optimized cold-chain logistics network.",
  keywords: [
    "Why Zybiov",
    "Pharmaceutical distribution standards Sudan",
    "GMP compliance Sudan",
    "Cold chain logistics Sudan",
    "Reliable medical distributor",
  ],
  openGraph: {
    title: "Why Choose Zybiov | Zybiov Multi-Activities Limited",
    description:
      "Discover why Zybiov is Sudan's preferred pharmaceutical distributor. Driven by global manufacturer partnerships, strict GMP standards compliance, and an optimized cold-chain logistics network.",
    url: "https://www.zybiov.com/why-zybiov",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Zybiov | Zybiov Multi-Activities Limited",
    description:
      "Discover why Zybiov is Sudan's preferred pharmaceutical distributor. Driven by global manufacturer partnerships, strict GMP standards compliance, and an optimized cold-chain logistics network.",
  },
};

export default function WhyZybiovPage() {
  return <WhyZybiovClientPage />;
}
