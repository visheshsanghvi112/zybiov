import { ReviewsClientPage } from "./reviews-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Zybiov Multi-Activities Limited",
  description:
    "Discover why Zybiov is the preferred pharmaceutical distributor. Driven by global manufacturer partnerships, strict GMP standards compliance, and an optimized logistics network bridging India (Mumbai) and Sudan.",
  keywords: [
    "Zybiov Reviews",
    "Pharmaceutical distribution standards Sudan",
    "GMP compliance Sudan",
    "Cold chain logistics Sudan",
    "Reliable medical distributor",
    "Indian manufacturer partnerships pharma",
    "Mumbai liaison sourcing standards",
  ],
  alternates: {
    canonical: "https://www.zybiov.com/reviews",
  },
  openGraph: {
    title: "Reviews | Zybiov Multi-Activities Limited",
    description:
      "Discover why Zybiov is the preferred pharmaceutical distributor bridging global manufacturing in India (Mumbai) and Sudan.",
    url: "https://www.zybiov.com/reviews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reviews | Zybiov Multi-Activities Limited",
    description:
      "Discover why Zybiov is the preferred pharmaceutical distributor bridging global manufacturing in India (Mumbai) and Sudan.",
  },
};

export default function ReviewsPage() {
  return <ReviewsClientPage />;
}
