import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game App – Complete Mobile Gaming Experience for Android",
  description: "The Is7 Game App delivers a full-featured gaming experience on Android. Explore the app interface, navigation, built-in tools, and customization options.",
  keywords: ["Is7 Game App", "Is7 app features", "Is7 Game mobile app", "Is7 app interface", "Is7 Game app review", "Is7 app 2026"],
  openGraph: {
    title: "Is7 Game App – Complete Mobile Gaming Experience",
    description: "Explore the Is7 Game App: interface, features, and customization.",
    url: "https://Is7gamee.com/is7-game-app",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game App" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game App Overview", description: "Full-featured mobile gaming on Android.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-app" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game App", item: "https://Is7gamee.com/is7-game-app" },
  ],
};

export default function Is7GameAppPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game App</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Inside the <span className="gradient-text">Is7 Game App</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The Is7 Game App is not just a container for games — it is an intelligently designed platform that makes discovering, playing, and managing your gaming experience effortless. Let us take you on a tour.
          </p>
          <TrackedCTALink location="is7_game_app_cta" className="btn-cta text-lg px-10 py-4">
            Get Is7 Game App
          </TrackedCTALink>
        </div>
      </section>

      {/* App Interface Tour */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">App Interface Tour</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Home Screen</h3>
              <p className="text-gray-600">The home screen surfaces trending games, active promotions, and your recently played titles. A smart carousel at the top highlights featured events and new releases. Below that, category quick-links let you jump straight to slots, live tables, sports, or any other section with a single tap.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Game Browser</h3>
              <p className="text-gray-600">Browse all 500+ games with powerful filters. Sort by provider, category, popularity, or RTP. Use the search bar for instant results. Each game card shows a preview image, provider name, and a favorite button. Tap to launch any game in seconds.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Wallet & Transactions</h3>
              <p className="text-gray-600">The integrated wallet shows your real-time balance, pending transactions, and full transaction history. Deposit and withdraw directly within the app using bank transfer, e-wallets, or cryptocurrency. All transactions are secured with end-to-end encryption.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Profile & Settings</h3>
              <p className="text-gray-600">Manage your account details, security preferences, notification settings, and app appearance from the profile section. Enable dark mode, set your preferred language, configure biometric login, and view your achievement badges all in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Built-in Tools */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Built-in Tools</h2>
          <div className="grid md:grid-cols-4 gap-6 p-4">
            {[
              { title: "Game History", desc: "Review every game session with detailed stats including bets placed, wins, and duration." },
              { title: "Budget Manager", desc: "Set daily, weekly, or monthly spending limits. The app enforces them automatically to help you play responsibly." },
              { title: "Bonus Tracker", desc: "See all active bonuses, their wagering requirements, progress, and expiration dates in one dashboard." },
              { title: "Referral Dashboard", desc: "Track your referral network, commissions earned, and payout history. Share your unique code directly from the app." },
            ].map((tool, i) => (
              <div key={i} className="card-static text-center p-4">
                <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Personalize Your Is7 Game App</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">The Is7 Game App adapts to your preferences:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Dark mode or light mode toggle",
                "Custom notification preferences per category",
                "Favorite games for quick access",
                "Language selection (5 languages supported)",
                "Sound and vibration controls per game type",
                "Home screen widget for balance and quick launch",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_app_cta" className="btn-primary px-8 py-3">
              Download Is7 Game App
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related Pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-app-download" className="btn-outline">App Download</Link>
            <Link href="/is7-game" className="btn-outline">Is7 Game</Link>
            <Link href="/is7-game-android" className="btn-outline">Android Guide</Link>
            <Link href="/is7-game-play" className="btn-outline">How to Play</Link>
            <Link href="/features" className="btn-outline">Features</Link>
          </div>
        </div>
      </section>
    </>
  );
}
