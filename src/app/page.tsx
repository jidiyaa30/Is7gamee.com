import HomePage from "@/components/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is7 Game – Download APK, Register, Login & Play 500+ Games on Android 2026",
  description: "Is7 Game is the ultimate Android gaming platform with 500+ premium games. Download the latest Is7 APK for free, create your account in 60 seconds, and unlock daily rewards. Your complete Is7 Gaming guide for 2026.",
  keywords: ["Is7 Game", "Is7", "is7game", "is7gamess", "Is7 APK", "Is7 App", "Is7 Download", "Is7 Game Download", "Is7 Game APK", "Is7 Game Login", "Is7 Game Register", "Is7 Game Android", "Is7 Game 2026", "Is7 Gaming"],
  openGraph: {
    title: "Is7 Game – Download APK, Register & Play 500+ Games | Complete Guide 2026",
    description: "Your complete guide to Is7 Game. Download the latest Is7 APK for free, register in 60 seconds, and explore 500+ premium games on Android.",
    url: "https://Is7gamee.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game – Premium Android Gaming Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is7 Game – Download APK, Register & Play 500+ Games | Complete Guide 2026",
    description: "Your complete guide to Is7 Game. Download the latest Is7 APK for free, register in 60 seconds, and explore 500+ premium games on Android.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://Is7gamee.com" },
};

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Is7 Game",
  operatingSystem: "Android",
  applicationCategory: "GameApplication",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "12547",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    { "@type": "Review", author: { "@type": "Person", name: "Rahul K." }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "The Is7 Apk is small in size, easy to download, and runs smoothly on my device." },
    { "@type": "Review", author: { "@type": "Person", name: "Priya S." }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "I loved the Is7 Yono integration. The ₹500 sign-up bonus is amazing and really got me started." },
    { "@type": "Review", author: { "@type": "Person", name: "Amit R." }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Referral program works really well. I invited 3 friends and started getting rewards immediately." },
    { "@type": "Review", author: { "@type": "Person", name: "Sneha M." }, reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" }, reviewBody: "The Is7 Wheel keeps me engaged every day. Simple yet entertaining with real rewards." },
    { "@type": "Review", author: { "@type": "Person", name: "Vikram J." }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Withdrawal process is super fast. I received my money within hours of requesting it." },
    { "@type": "Review", author: { "@type": "Person", name: "Neha T." }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "The variety of games is impressive. I never get bored as there's always something new to try." },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is Is7 Game and how does it work?", acceptedAnswer: { "@type": "Answer", text: "Is7 Game is a premium Android gaming platform offering 500+ games across categories like slots, live tables, sports, and arcade. Download the APK, create a free account, and start playing instantly." } },
    { "@type": "Question", name: "Is Is7 Game free to download and use?", acceptedAnswer: { "@type": "Answer", text: "Yes, the Is7 Game APK is completely free to download and install. Creating an account costs nothing, and new players receive a welcome bonus to get started." } },
    { "@type": "Question", name: "How do I create an Is7 Game account?", acceptedAnswer: { "@type": "Answer", text: "Open the Is7 app, tap Register, enter your mobile number or email, set a password, verify via OTP, and your account is ready in under 60 seconds." } },
    { "@type": "Question", name: "Is my personal information safe on Is7 Game?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Is7 Game uses 256-bit SSL encryption, secure servers, and multi-factor authentication to protect all user data and transactions." } },
    { "@type": "Question", name: "What devices are compatible with Is7 Game?", acceptedAnswer: { "@type": "Answer", text: "Is7 Game runs on any Android device with Android 5.0 or higher, at least 2GB RAM, and 71 MB of free storage." } },
    { "@type": "Question", name: "How do I login to Is7 Game?", acceptedAnswer: { "@type": "Answer", text: "Use your registered mobile number and password to login. Is7 Game also supports OTP-based login for quick access. If you forget your password, use the forgot password option to reset it." } },
    { "@type": "Question", name: "Can I withdraw my bonus money from Is7 Game?", acceptedAnswer: { "@type": "Answer", text: "Bonus usage depends on the app terms. Usually, bonus amounts must be wagered before withdrawal. Check the Is7 Game app for current bonus terms and withdrawal requirements." } },
    { "@type": "Question", name: "Is Is7 Game available on the Play Store?", acceptedAnswer: { "@type": "Answer", text: "Currently, Is7 Game is available via direct APK download from the official website. This allows faster updates and the full feature set without Play Store restrictions." } },
    { "@type": "Question", name: "What payment methods does Is7 Game support?", acceptedAnswer: { "@type": "Answer", text: "Is7 Game supports UPI (PhonePe, GPay, Paytm), Net Banking, and IMPS for both deposits and withdrawals. Transactions are fast, secure, and have no hidden charges." } },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }} />
      <HomePage />
    </>
  );
}
