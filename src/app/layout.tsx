import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://Is7gamee.com"),
  title: {
    default: "Is7 Game – Download APK, Login, Register & Complete Guide 2026",
    template: "%s | Is7 Game",
  },
  description:
    "Is7 Game is a premium Android gaming platform with 500+ games. Download the latest Is7 APK, register your account, login securely, and explore exclusive rewards. The ultimate Is7 Gaming guide for 2026.",
  keywords: [
    "Is7 Game",
    "Is7",
    "Is7 APK",
    "Is7 App",
    "Is7 Game Download",
    "Is7 Game APK",
    "Download Is7",
    "Is7 Game Login",
    "Is7 Game Register",
    "Is7 Game Features",
    "Is7 Game 2026",
    "Is7 Android",
    "Is7 Gaming",
    "Is7 Download APK",
    "is7game",
    "is7gamess",
  ],
  authors: [{ name: "Is7gamee.com" }],
  creator: "Is7gamee.com",
  publisher: "Is7gamee.com",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Is7gamee.com",
    siteName: "Is7 Game",
    title: "Is7 Game – Download APK, Login, Register & Complete Guide 2026",
    description:
      "Is7 Game is a premium Android gaming platform. Download the latest Is7 APK, register, login, and explore features & exclusive rewards.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Is7 Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is7 Game – Download APK, Login, Register & Complete Guide 2026",
    description:
      "Is7 Game is a premium Android gaming platform. Download the latest Is7 APK, register, login, and explore features & exclusive rewards.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "tkGjSFwQ7d_fU5V8vLiKvdsjeNB_JmW2bsU_PVZr578",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://Is7gamee.com/#website",
      url: "https://Is7gamee.com",
      name: "Is7 Game",
      description:
        "Is7 Game is a premium Android gaming platform. Download APK, register, login, and explore features.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://Is7gamee.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://Is7gamee.com/#organization",
      name: "Is7 Game",
      url: "https://Is7gamee.com",
      logo: "https://Is7gamee.com/logo.webp",
      sameAs: [
        "https://www.facebook.com/is7game",
        "https://t.me/is7game"
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Is7 Game",
      operatingSystem: "Android",
      applicationCategory: "GameApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "12547",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
