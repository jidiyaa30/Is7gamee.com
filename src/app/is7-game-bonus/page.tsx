import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Bonus – Welcome Bonus, Daily Rewards & Promotions",
  description: "Explore all Is7 Game bonuses: welcome package, daily check-in, deposit matches, cashback, referral commissions, and VIP rewards. Maximize your Is7 earnings.",
  keywords: ["Is7 Game bonus", "Is7 bonus", "Is7 welcome bonus", "Is7 Game promotions", "Is7 daily bonus", "Is7 Game bonus 2026"],
  openGraph: {
    title: "Is7 Game Bonus – Welcome Bonus, Daily Rewards & More",
    description: "All Is7 Game bonuses explained: welcome, daily, deposit, referral, VIP.",
    url: "https://Is7gamee.com/is7-game-bonus",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Bonus" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game Bonus Guide", description: "Maximize your Is7 Game bonuses.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-bonus" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game Bonus", item: "https://Is7gamee.com/is7-game-bonus" },
  ],
};

export default function Is7GameBonusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game Bonus</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Game Bonus</span> – Earn More, Play More
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Is7 Game has one of the most generous bonus systems in mobile gaming. From your very first registration to your hundredth day on the platform, there is always something extra waiting for you. Here is the complete breakdown.
          </p>
          <TrackedCTALink location="is7_game_bonus_cta" className="btn-cta text-lg px-10 py-4">
            Claim Your Bonus
          </TrackedCTALink>
        </div>
      </section>

      {/* Bonus Types */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">All Is7 Game Bonuses Explained</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Welcome Bonus</h3>
              <p className="text-gray-600 mb-2">Awarded instantly upon registration. New players receive free credits to explore the platform without any deposit. This is Is7&apos;s way of saying &quot;welcome&quot; and giving you a risk-free introduction to the game library.</p>
              <p className="text-sm text-gray-500">Credited automatically • No deposit required • One-time offer</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">First Deposit Bonus</h3>
              <p className="text-gray-600 mb-2">Make your first deposit and Is7 matches a percentage of it as bonus credits. The match rate and maximum bonus amount vary by current promotion — check the Promotions tab for the latest offer.</p>
              <p className="text-sm text-gray-500">Percentage match • Minimum deposit applies • Wagering requirements</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Daily Check-In Bonus</h3>
              <p className="text-gray-600 mb-2">Open the Is7 app every day and tap the Check-In button to receive free credits, spins, or other rewards. Consecutive day streaks unlock escalating bonuses — day 7 rewards are significantly larger than day 1.</p>
              <p className="text-sm text-gray-500">Available daily • Streak multiplier • No deposit required</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Referral Commission</h3>
              <p className="text-gray-600 mb-2">Invite friends using your unique referral code. When they register and become active, you earn a commission. The Is7 referral program is multi-tier, meaning you also benefit from your referrals&apos; referrals.</p>
              <p className="text-sm text-gray-500">Multi-tier program • Recurring income • No cap on earnings</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Cashback Bonus</h3>
              <p className="text-gray-600 mb-2">Is7 returns a percentage of your net losses as cashback every week. This safety net means you always get something back, even during losing streaks. The cashback rate increases with your VIP tier.</p>
              <p className="text-sm text-gray-500">Weekly payout • Percentage of net losses • No wagering on cashback</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">VIP Rewards</h3>
              <p className="text-gray-600 mb-2">As you play, you earn VIP points that elevate your tier from Bronze to Platinum and beyond. Higher tiers unlock exclusive bonuses, higher cashback rates, priority support, birthday bonuses, and invitations to private events.</p>
              <p className="text-sm text-gray-500">5 VIP tiers • Exclusive perks • Lifetime status for top tier</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Table */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Bonus Quick Reference</h2>
          <div className="max-w-3xl mx-auto">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left font-semibold p-3">Bonus Type</th>
                  <th className="text-left font-semibold p-3">Frequency</th>
                  <th className="text-left font-semibold p-3">Deposit Needed?</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Welcome Bonus</td><td>One-time</td><td>No</td></tr>
                <tr><td>First Deposit Match</td><td>One-time</td><td>Yes</td></tr>
                <tr><td>Daily Check-In</td><td>Every day</td><td>No</td></tr>
                <tr><td>Referral Commission</td><td>Ongoing</td><td>No</td></tr>
                <tr><td>Weekly Cashback</td><td>Every week</td><td>Activity-based</td></tr>
                <tr><td>VIP Rewards</td><td>Tier milestones</td><td>Activity-based</td></tr>
                <tr><td>Tournament Prizes</td><td>Daily/Weekly/Monthly</td><td>Entry varies</td></tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_bonus_cta" className="btn-primary px-8 py-3">
              Start Earning Bonuses
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-game-rewards" className="btn-outline">Rewards Program</Link>
            <Link href="/is7-game-free" className="btn-outline">Free Download</Link>
            <Link href="/is7-game-register" className="btn-outline">Register</Link>
            <Link href="/is7-game-play" className="btn-outline">How to Play</Link>
            <Link href="/is7-gaming" className="btn-outline">Is7 Gaming</Link>
          </div>
        </div>
      </section>
    </>
  );
}
