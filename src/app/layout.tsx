import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/layout/language-context";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5B43D6",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zybiov.com"),
  title: {
    default: "Zybiov Multi-Activities Limited | Premium Pharmaceutical Distribution — Sudan",
    template: "%s | Zybiov Multi-Activities Limited",
  },
  description:
    "Zybiov Multi-Activities Limited is a leading Sudanese company specializing in the importation and distribution of pharmaceuticals and medical supplies. Delivering integrated healthcare solutions through the highest standards of quality, compliance, and operational excellence.",
  keywords: [
    "Zybiov",
    "pharmaceutical distribution Sudan",
    "medical supplies Sudan",
    "healthcare solutions",
    "pharmaceutical import",
    "Zybiov Multi-Activities Limited",
    "pharmaceutical company Sudan",
    "medical supply chain",
  ],
  authors: [{ name: "Zybiov Multi-Activities Limited" }],
  creator: "Zybiov Multi-Activities Limited",
  publisher: "Zybiov Multi-Activities Limited",
  openGraph: {
    type: "website",
    url: "https://www.zybiov.com",
    title: "Zybiov Multi-Activities Limited | Premium Pharmaceutical Distribution",
    description:
      "Quality in Every Step Toward Better Healthcare. A leading Sudanese company specializing in the importation and distribution of pharmaceuticals and medical supplies.",
    siteName: "Zybiov Multi-Activities Limited",
    images: [
      {
        url: "/logo.png",
        width: 1080,
        height: 1080,
        alt: "Zybiov Multi-Activities Limited Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zybiov Multi-Activities Limited | Pharmaceutical Distribution",
    description:
      "Quality in Every Step Toward Better Healthcare. Leading pharmaceutical & medical supply distribution in Sudan.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
