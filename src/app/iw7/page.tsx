import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 – The Ultimate Gaming Platform for Android Players",
  description: "Discover Is7, the premier Android gaming platform with 500+ games, daily bonuses, and a thriving community. Learn what makes Is7 the top choice for mobile gamers in 2026.",
  keywords: ["Is7", "Is7 platform", "Is7 gaming platform", "Is7 mobile gaming", "Is7 Android", "Is7 2026"],
  openGraph: {
    title: "Is7 – The Ultimate Gaming Platform for Android Players",
    description: "Discover Is7, the premier Android gaming platform with 500+ games, daily bonuses, and a thriving community.",
    url: "https://Is7gamee.com/is7",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Gaming Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is7 – The Ultimate Gaming Platform for Android Players",
    description: "Discover Is7, the premier Android gaming platform with 500+ games, daily bonuses, and a thriving community.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://Is7gamee.com/is7" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7", item: "https://Is7gamee.com/is7" },
  ],
};

export default function Is7Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="gradient-text">Is7</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Is7 is the next-generation mobile gaming platform that brings together hundreds of premium titles, robust security, and a passionate community — all in one lightweight Android app.
          </p>
          <TrackedCTALink location="is7_cta" className="btn-cta text-lg px-10 py-4">
            Join Is7 Today
          </TrackedCTALink>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">The Is7 Story</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            How a bold idea became one of the fastest-growing gaming platforms in Asia.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Is7 was founded with a single mission: make premium gaming accessible to everyone with a smartphone. While console and PC platforms dominate headlines, billions of players worldwide rely on mobile devices as their primary gaming hardware. Is7 bridges the gap by delivering console-quality experiences on Android — no expensive hardware required.
              </p>
              <p className="text-gray-700">
                Since its launch, Is7 has grown to serve players across Southeast Asia, South Asia, and beyond. The platform now hosts over 500 curated games spanning slots, live tables, sports simulations, arcade classics, and card games. Every title undergoes rigorous fairness testing before it reaches the Is7 library.
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                What truly sets Is7 apart is its commitment to player satisfaction. The platform invests heavily in 24/7 customer support, instant withdrawals, and a reward system that gives back to loyal players every single day. Security is paramount — 256-bit SSL encryption and multi-factor authentication protect every account.
              </p>
              <p className="text-gray-700">
                In 2026, Is7 continues to push boundaries with new game integrations, a refreshed user interface, and expanded language support. Whether you are a casual player or a competitive gamer, Is7 has something built specifically for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Is7 Stands Out */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why Is7 Stands Out</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "500+ Premium Games", desc: "From slots to live tables, sports to arcade — Is7 offers the broadest selection on any mobile platform. New titles are added weekly." },
              { title: "Lightning-Fast Payouts", desc: "Withdrawals are processed in minutes, not days. Is7 supports multiple payment methods including bank transfer, e-wallets, and crypto." },
              { title: "Military-Grade Security", desc: "256-bit SSL encryption, two-factor authentication, and regular security audits keep your data and funds safe at all times." },
              { title: "Generous Bonus System", desc: "Welcome bonuses, daily check-in rewards, referral commissions, and VIP perks ensure you always get more value from Is7." },
              { title: "24/7 Live Support", desc: "Real human agents are available around the clock via in-app chat, Telegram, and email. Average response time: under 2 minutes." },
              { title: "Ultra-Lightweight App", desc: "The Is7 APK is 71 MB and runs smoothly on devices with just 2 GB RAM. No lag, no bloat — just pure gaming." },
            ].map((item, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Getting Started with Is7</h2>
          <div className="grid md:grid-cols-4 gap-6 p-4">
            {[
              { step: "1", title: "Download", desc: "Grab the free Is7 APK from our official link. It takes under a minute on most connections." },
              { step: "2", title: "Install", desc: "Enable unknown sources in your Android settings, then tap the APK to install." },
              { step: "3", title: "Register", desc: "Create your account with a phone number or email. Verify via OTP and set a secure password." },
              { step: "4", title: "Play & Win", desc: "Browse 500+ games, claim your welcome bonus, and start playing immediately." },
            ].map((item, i) => (
              <div key={i} className="card-static text-center p-4">
                <div className="step-number">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_cta" className="btn-primary px-8 py-3">
              Get Is7 Now
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions about Is7</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "What exactly is Is7?", a: "Is7 is a mobile-first gaming platform for Android devices. It offers 500+ premium games across multiple genres, combined with a robust reward system, secure transactions, and 24/7 support." },
              { q: "Is Is7 safe to use?", a: "Absolutely. Is7 employs 256-bit SSL encryption, two-factor authentication, and undergoes regular third-party security audits. Your personal data and funds are fully protected." },
              { q: "Does Is7 cost money?", a: "The Is7 app is 100% free to download and install. Account registration is also free, and new players receive a generous welcome bonus upon signing up." },
              { q: "Which devices can run Is7?", a: "Any Android device running Android 5.0 or higher with at least 2 GB RAM and 71 MB of free storage. The app adapts to all screen sizes automatically." },
              { q: "How do I contact Is7 support?", a: "You can reach the Is7 support team 24/7 via the in-app live chat, through the official Telegram channel, or by email. Most queries are resolved within 2 minutes." },
            ].map((item, i) => (
              <div key={i} className="card-static p-4">
                <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-primary-100">
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Explore More</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-game" className="btn-outline">Is7 Game</Link>
            <Link href="/is7-gaming" className="btn-outline">Is7 Gaming</Link>
            <Link href="/download" className="btn-outline">Download APK</Link>
            <Link href="/is7-game-login" className="btn-outline">Login</Link>
            <Link href="/is7-game-register" className="btn-outline">Register</Link>
            <Link href="/is7-game-bonus" className="btn-outline">Bonuses</Link>
            <Link href="/is7-game-rewards" className="btn-outline">Rewards</Link>
          </div>
        </div>
      </section>
    </>
  );
}
