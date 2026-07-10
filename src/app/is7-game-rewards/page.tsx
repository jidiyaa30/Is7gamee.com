import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Rewards – VIP Tiers, Loyalty Points & Exclusive Perks",
  description: "Discover the Is7 Game rewards program. Earn loyalty points, climb VIP tiers from Bronze to Platinum, and unlock exclusive perks including cashback, priority support, and birthday bonuses.",
  keywords: ["Is7 Game rewards", "Is7 rewards program", "Is7 VIP", "Is7 loyalty points", "Is7 Game perks", "Is7 Game rewards 2026"],
  openGraph: {
    title: "Is7 Game Rewards – VIP Tiers & Loyalty Points",
    description: "Earn loyalty points and climb VIP tiers on Is7 Game.",
    url: "https://Is7gamee.com/is7-game-rewards",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Rewards" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game Rewards Program", description: "VIP tiers, loyalty points, and exclusive perks.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-rewards" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game Rewards", item: "https://Is7gamee.com/is7-game-rewards" },
  ],
};

const vipTiers = [
  { name: "Bronze", points: "0 – 999", cashback: "3%", perks: "Daily check-in, welcome bonus, basic support" },
  { name: "Silver", points: "1,000 – 4,999", cashback: "5%", perks: "Everything in Bronze + weekly bonus spins, faster withdrawals" },
  { name: "Gold", points: "5,000 – 19,999", cashback: "7%", perks: "Everything in Silver + monthly bonus credits, birthday bonus" },
  { name: "Platinum", points: "20,000 – 49,999", cashback: "10%", perks: "Everything in Gold + dedicated account manager, exclusive tournaments" },
  { name: "Diamond", points: "50,000+", cashback: "15%", perks: "Everything in Platinum + lifetime VIP status, custom promotions, private events" },
];

export default function Is7GameRewardsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game Rewards</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Game Rewards</span> – Loyalty That Pays
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Every game you play on Is7 earns loyalty points that unlock increasingly valuable rewards. The more you play, the more you earn — from higher cashback rates to a dedicated personal account manager and invitations to exclusive events.
          </p>
          <TrackedCTALink location="is7_game_rewards_cta" className="btn-cta text-lg px-10 py-4">
            Start Earning Rewards
          </TrackedCTALink>
        </div>
      </section>

      {/* How It Works */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How the Rewards Program Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Play Any Game", desc: "Every wager you make on Is7 Game earns loyalty points. The rate varies by game type — live tables earn the most points per unit wagered, while slots earn a steady baseline rate." },
              { step: "2", title: "Accumulate Points", desc: "Points accumulate over the lifetime of your account. Unlike some platforms, Is7 never expires or resets your points. Your lifetime total determines your VIP tier." },
              { step: "3", title: "Unlock Tiers & Perks", desc: "As your point total crosses tier thresholds, you automatically unlock new perks. Each tier comes with better cashback, exclusive bonuses, and enhanced platform features." },
            ].map((s, i) => (
              <div key={i} className="card-static text-center p-4">
                <div className="step-number mx-auto">{s.step}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Tiers */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">VIP Tier Breakdown</h2>
          <div className="max-w-4xl mx-auto">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left font-semibold p-3">Tier</th>
                  <th className="text-left font-semibold p-3">Points Required</th>
                  <th className="text-left font-semibold p-3">Cashback</th>
                  <th className="text-left font-semibold p-3">Key Perks</th>
                </tr>
              </thead>
              <tbody>
                {vipTiers.map((tier, i) => (
                  <tr key={i}>
                    <td className="font-semibold text-primary">{tier.name}</td>
                    <td>{tier.points}</td>
                    <td>{tier.cashback}</td>
                    <td>{tier.perks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Point Earning Rates */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Point Earning Rates</h2>
          <div className="max-w-2xl mx-auto">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-100">
                  <th className="text-left font-semibold p-3">Game Category</th>
                  <th className="text-left font-semibold p-3">Points per ₹100 Wagered</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Live Tables</td><td>15 points</td></tr>
                <tr><td>Sports Betting</td><td>12 points</td></tr>
                <tr><td>Card Games</td><td>10 points</td></tr>
                <tr><td>Slots</td><td>8 points</td></tr>
                <tr><td>Arcade / Crash</td><td>8 points</td></tr>
                <tr><td>Lottery</td><td>5 points</td></tr>
              </tbody>
            </table>
            <p className="text-gray-600 text-sm mt-4 text-center">
              Points are awarded in real-time and reflected in your profile immediately. Bonus credits do not earn points — only real-money wagers count.
            </p>
          </div>
        </div>
      </section>

      {/* Exclusive Perks Detail */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Exclusive VIP Perks</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Dedicated Account Manager", desc: "Gold tier and above receive a personal account manager available via direct message. They handle your queries, process special requests, and ensure you get the best possible experience on Is7." },
              { title: "Birthday Bonus", desc: "Gold+ members receive a special birthday bonus credited to their account on their birthday. The bonus amount scales with your VIP tier — Diamond members receive the largest birthday reward." },
              { title: "Priority Withdrawals", desc: "Silver tier and above enjoy faster withdrawal processing. While standard withdrawals take 5-15 minutes, VIP withdrawals are processed in under 5 minutes, even during peak hours." },
              { title: "Exclusive Tournament Access", desc: "Platinum and Diamond members get invitations to exclusive high-stakes tournaments with larger prize pools and fewer participants — dramatically better odds of winning." },
            ].map((perk, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-xl font-semibold mb-2 text-primary">{perk.title}</h3>
                <p className="text-gray-600">{perk.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_rewards_cta" className="btn-primary px-8 py-3">
              Join Is7 & Earn Rewards
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-game-bonus" className="btn-outline">Bonuses</Link>
            <Link href="/is7-game-play" className="btn-outline">How to Play</Link>
            <Link href="/is7-gaming" className="btn-outline">Is7 Gaming</Link>
            <Link href="/is7-game-register" className="btn-outline">Register</Link>
            <Link href="/is7-game" className="btn-outline">Is7 Game</Link>
          </div>
        </div>
      </section>
    </>
  );
}
