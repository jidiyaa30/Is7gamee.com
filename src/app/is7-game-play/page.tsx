import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Play – Complete How-to-Play Guide for Beginners",
  description: "Learn how to play on Is7 Game step by step. From navigating the app to choosing games, placing bets, and withdrawing winnings — this beginner guide covers it all.",
  keywords: ["Is7 Game play", "how to play Is7 Game", "Is7 Game guide", "Is7 Game beginner", "Is7 Game tutorial", "play Is7 Game"],
  openGraph: {
    title: "Is7 Game Play – How-to-Play Guide for Beginners",
    description: "Complete beginner's guide to playing on Is7 Game.",
    url: "https://Is7gamee.com/is7-game-play",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Play Guide" }],
  },
  twitter: { card: "summary_large_image", title: "How to Play Is7 Game", description: "Beginner's guide to Is7 Game.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-play" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game Play", item: "https://Is7gamee.com/is7-game-play" },
  ],
};

export default function Is7GamePlayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">How to Play</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How to <span className="gradient-text">Play Is7 Game</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            New to Is7 Game? This comprehensive guide walks you through everything — from opening the app for the first time to placing your first bet, collecting rewards, and withdrawing your winnings.
          </p>
          <TrackedCTALink location="is7_game_play_cta" className="btn-cta text-lg px-10 py-4">
            Start Playing Is7
          </TrackedCTALink>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Your First Session – Step by Step</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { step: "1", title: "Download & Install", desc: "Get the Is7 APK from our official link. It is free, 71 MB, and installs in seconds. See our download guide for detailed instructions." },
              { step: "2", title: "Register Your Account", desc: "Open Is7, tap Register, enter your phone number, create a password, and verify via OTP. Your account is ready in under a minute." },
              { step: "3", title: "Claim Your Welcome Bonus", desc: "After registration, check the Promotions tab. Your welcome bonus is waiting — it includes free credits you can use to explore games without any deposit." },
              { step: "4", title: "Browse the Game Library", desc: "Tap the Games icon on the bottom navigation bar. You will see 500+ games organized by category: Slots, Live Tables, Sports, Arcade, Cards, and Lottery. Use filters to narrow results." },
              { step: "5", title: "Choose a Game & Play", desc: "Tap any game card to launch it. Most games load within 2 seconds. Read the in-game help section to understand rules, paylines, or betting options before placing your first wager." },
              { step: "6", title: "Manage Your Balance", desc: "Monitor your balance in the top-right corner of the app. You can deposit anytime via bank transfer, e-wallet, or crypto. Set daily limits in the Budget Manager for responsible play." },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="step-number flex-shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Type Guides */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Quick Guide by Game Type</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Slots</h3>
              <p className="text-gray-600">Select your bet amount using the +/- buttons, choose the number of paylines (some are fixed), and tap Spin. Wins are calculated based on symbol combinations across active paylines. Look for wild and scatter symbols that trigger bonus rounds and free spins.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Live Tables</h3>
              <p className="text-gray-600">Join a live-streamed table with a real dealer. Place chips on the virtual betting areas before each round. In baccarat, bet on Player, Banker, or Tie. In blackjack, decide Hit, Stand, Double, or Split. The dealer manages the game — you just make decisions.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Sports Betting</h3>
              <p className="text-gray-600">Browse upcoming and live matches in the Sports section. Tap a match to see available markets (winner, over/under, handicap, etc.). Add selections to your bet slip, set your stake, and confirm. Live betting markets update in real time during matches.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Arcade & Crash Games</h3>
              <p className="text-gray-600">Arcade games are fast-paced and simple. In crash games, place your bet and watch the multiplier rise. Cash out before the crash to lock in your winnings. The longer you wait, the higher the potential payout — but crash too late and you lose your bet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Withdrawals */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How to Withdraw Winnings</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { step: "1", title: "Go to Wallet", desc: "Tap the Wallet icon and select 'Withdraw'" },
                { step: "2", title: "Choose Method", desc: "Select bank transfer, e-wallet, or crypto" },
                { step: "3", title: "Enter Amount & Confirm", desc: "Set your withdrawal amount and submit" },
              ].map((s, i) => (
                <div key={i} className="card-static text-center p-4">
                  <div className="step-number mx-auto">{s.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-center">
              Most withdrawals are processed within 5-15 minutes. Is7 does not charge withdrawal fees for standard transactions. Minimum withdrawal amount varies by payment method.
            </p>
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_play_cta" className="btn-primary px-8 py-3">
              Start Playing Now
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-game" className="btn-outline">Is7 Game</Link>
            <Link href="/is7-game-bonus" className="btn-outline">Bonuses</Link>
            <Link href="/is7-game-online" className="btn-outline">Online Features</Link>
            <Link href="/is7-game-register" className="btn-outline">Register</Link>
            <Link href="/download" className="btn-outline">Download</Link>
          </div>
        </div>
      </section>
    </>
  );
}
