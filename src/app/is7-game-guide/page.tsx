import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Guide – Beginner to Advanced Strategies",
  description: "The ultimate Is7 Game guide. Learn how to play, master strategies, manage your bankroll, climb VIP tiers, and maximize your rewards from beginner to advanced level.",
  keywords: ["Is7 Game guide", "Is7 guide", "how to play Is7 Game", "Is7 Game strategy", "Is7 Game tips", "Is7 Game beginner guide"],
  openGraph: {
    title: "Is7 Game Guide – Beginner to Advanced Strategies",
    description: "Master Is7 Game with this complete guide covering gameplay, strategies, and advanced tips.",
    url: "https://Is7gamee.com/is7-game-guide",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Guide" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game Guide", description: "Complete Is7 Game guide from beginner to advanced.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-guide" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game Guide", item: "https://Is7gamee.com/is7-game-guide" },
  ],
};

export default function Is7GameGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game Guide</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Game Guide</span> – From Beginner to Pro
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Whether you have just discovered Is7 Game or you have been playing for months, this comprehensive guide will help you sharpen your skills and maximize your returns. We cover everything from creating your first account to advanced bankroll management techniques used by the platform&apos;s top players.
          </p>
          <TrackedCTALink location="is7_game_guide_cta" className="btn-cta text-lg px-10 py-4">
            Start Playing Is7 Game
          </TrackedCTALink>
        </div>
      </section>

      {/* Beginner Section */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Beginner&apos;s Guide: Getting Started</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { title: "Step 1: Download the APK", detail: "Visit the official Is7 Game website and download the latest APK file. The file is small (under 30MB) and works on any Android device running version 5.0 or later. Enable 'Unknown Sources' in your settings before installing." },
                { title: "Step 2: Create Your Account", detail: "Open the app and tap 'Register.' Enter your phone number, create a secure password, and input your referral code if you have one. Verification takes less than a minute via SMS." },
                { title: "Step 3: Make Your First Deposit", detail: "Navigate to the wallet section and select your preferred payment method. UPI is the fastest option. Your first deposit qualifies for a welcome bonus that boosts your starting balance significantly." },
                { title: "Step 4: Choose a Game Mode", detail: "Start with Color Prediction in the 1-minute lobby. This is the simplest mode and gives you time to observe patterns before each round. Place small amounts initially while you learn the rhythm." },
                { title: "Step 5: Place Your First Prediction", detail: "Select a color (red, green, or violet) and enter your amount. Wait for the round timer to complete. If your prediction is correct, winnings are credited to your account instantly." },
              ].map((step, i) => (
                <div key={i} className="card-static flex items-center gap-4 p-4">
                  <div className="step-number flex-shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intermediate Strategies */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Intermediate Strategies</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Pattern Observation", desc: "Before placing any prediction, watch at least five to ten rounds in a given lobby. Note which colors appear most frequently and look for streaks or alternating patterns. While past results do not guarantee future outcomes, experienced players find that observation significantly improves their timing and confidence." },
              { title: "Bankroll Management", desc: "Divide your total balance into at least twenty equal units. Never risk more than one unit on a single prediction. This ensures you can withstand losing streaks without depleting your balance. If you lose five rounds in a row, take a break and return with a clear mind rather than chasing losses." },
              { title: "Leveraging Multiple Lobbies", desc: "Is7 Game offers lobbies with different round durations — one minute, three minutes, and five minutes. Each lobby has its own result sequence. Diversifying your play across lobbies reduces your exposure to any single streak and gives you more opportunities per session." },
              { title: "Using Referral Income Strategically", desc: "The referral program generates passive income from your network's activity. Instead of withdrawing referral commissions immediately, many intermediate players reinvest a portion into their gameplay balance, effectively playing with house money while keeping their original deposit safe." },
            ].map((item, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Tips */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Advanced Tips for Experienced Players</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { tip: "Set Daily Profit Targets", detail: "Decide on a realistic daily profit goal before you start playing. Once you reach that target, stop for the day. Discipline is what separates consistent winners from players who give back their profits by overplaying." },
              { tip: "Track Your Results", detail: "Keep a simple spreadsheet or note tracking your daily deposits, withdrawals, wins, and losses. Reviewing your data weekly reveals patterns in your own behavior — like times of day when you perform better or game modes where your win rate is highest." },
              { tip: "Participate in Tournaments", detail: "Tournament Mode offers the highest potential payouts on Is7 Game. Study the format, understand the bracket structure, and practice in regular lobbies before entering paid tournaments. The competition is tougher, but the rewards justify the effort." },
              { tip: "Maximize VIP Benefits", detail: "As you advance through VIP tiers, your bonus multipliers and withdrawal limits increase. Plan your deposit schedule to maintain VIP status consistently rather than making sporadic large deposits. Steady activity earns VIP points more efficiently." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-primary-100 rounded-lg">
                <span className="text-primary font-bold text-lg flex-shrink-0">&#9733;</span>
                <div>
                  <h3 className="font-semibold">{item.tip}</h3>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_guide_cta" className="btn-primary px-8 py-3">
              Apply These Strategies on Is7 Game
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related Pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-game" className="btn-outline">Is7 Game</Link>
            <Link href="/is7-game-features" className="btn-outline">Features</Link>
            <Link href="/is7-gamers" className="btn-outline">Is7 Gamers</Link>
            <Link href="/is7-game-signup" className="btn-outline">Sign Up</Link>
            <Link href="/is7-game-bonus" className="btn-outline">Bonuses</Link>
          </div>
        </div>
      </section>
    </>
  );
}
