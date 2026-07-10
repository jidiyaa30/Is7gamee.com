import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Features – Complete Platform Feature Breakdown",
  description: "Explore every Is7 Game feature in detail. From color prediction games and referral rewards to instant withdrawals and VIP tiers — discover what makes Is7 Game stand out.",
  keywords: ["Is7 Game features", "Is7 features", "Is7 Game color prediction", "Is7 Game rewards", "Is7 Game VIP", "Is7 Game referral program"],
  openGraph: {
    title: "Is7 Game Features – Complete Platform Feature Breakdown",
    description: "Deep dive into every feature Is7 Game offers — games, rewards, security, and more.",
    url: "https://Is7gamee.com/is7-game-features",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Features" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game Features", description: "Everything Is7 Game has to offer — a full feature breakdown.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-features" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game Features", item: "https://Is7gamee.com/is7-game-features" },
  ],
};

export default function Is7GameFeaturesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game Features</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Game Features</span> – Everything the Platform Offers
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Is7 Game is packed with features designed to deliver an exceptional gaming experience. From multiple game modes and a lucrative referral system to instant payouts and a VIP rewards program, every aspect of the platform has been built with the player in mind. This page covers every major feature so you know exactly what to expect when you join.
          </p>
          <TrackedCTALink location="is7_game_features_cta" className="btn-cta text-lg px-10 py-4">
            Explore Is7 Game Features
          </TrackedCTALink>
        </div>
      </section>

      {/* Game Modes */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Game Modes Available on Is7</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Color Prediction", desc: "The flagship game mode of Is7. Players predict whether the next result will be a specific color — red, green, or violet. Each round lasts between one and three minutes depending on the lobby, and correct predictions are rewarded with multiplied returns. The simplicity of the concept combined with the strategic depth of pattern observation makes this mode endlessly engaging." },
              { title: "Number Prediction", desc: "A step beyond color prediction, this mode asks players to predict exact numbers from 0 to 9. Higher risk means higher reward — correctly guessing the exact number pays out at significantly higher multipliers than color predictions. This mode appeals to players who enjoy calculated risk and deeper analysis." },
              { title: "Dice Games", desc: "Is7 Game includes classic dice-based games where players predict outcomes like high-low, odd-even, or specific totals. The dice engine uses provably fair algorithms, and each roll is independently verifiable. Rounds are fast, making dice games ideal for players who prefer rapid gameplay." },
              { title: "Tournament Mode", desc: "Introduced in 2026, Tournament Mode lets players compete head-to-head in bracket-style competitions. Entry fees vary by tier, and prize pools can be substantial. Tournaments run on a scheduled basis, and leaderboards track the top performers across the community." },
            ].map((mode, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-xl font-semibold mb-3 text-primary">{mode.title}</h3>
                <p className="text-gray-600">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Features */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Financial Features</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { feature: "Instant Deposits", detail: "Fund your Is7 Game account in seconds using UPI, bank transfer, or supported e-wallets. There are no processing delays — your balance updates immediately so you can start playing without waiting." },
              { feature: "Fast Withdrawals", detail: "Request a withdrawal and receive your funds within minutes. Is7 Game processes payouts around the clock, including weekends and holidays. Minimum withdrawal amounts are kept low to accommodate players of all levels." },
              { feature: "Multi-Tier Referral Commissions", detail: "Earn commissions not just from players you refer directly, but also from players they refer. The Is7 referral system supports multiple levels, creating a passive income stream that grows as your network expands." },
              { feature: "Daily Login Bonuses", detail: "Every day you log in to Is7 Game, you receive a bonus added to your account. Consecutive login streaks increase the bonus amount, rewarding loyal players who return regularly." },
              { feature: "First Deposit Rewards", detail: "New players receive a generous bonus on their first deposit, effectively doubling their starting balance. This gives newcomers a comfortable cushion to explore the platform and learn the games without excessive risk." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg">
                <span className="text-primary font-bold text-lg flex-shrink-0">&#9679;</span>
                <div>
                  <h3 className="font-semibold">{item.feature}</h3>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP & Security */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">VIP Program & Security</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">VIP Tiers</h3>
              <p className="text-gray-600 mb-4">Is7 Game rewards its most active players with a VIP program that unlocks exclusive benefits as you advance through tiers. Higher VIP levels grant increased withdrawal limits, priority customer support, exclusive tournament access, and bonus multipliers on daily rewards. VIP status is earned through consistent play and deposit activity.</p>
              <p className="text-gray-600">The program has five tiers: Bronze, Silver, Gold, Platinum, and Diamond. Each tier brings measurably better perks, giving dedicated players concrete incentives to stay engaged with the platform over time.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Platform Security</h3>
              <p className="text-gray-600 mb-4">Every transaction on Is7 Game is protected by AES-256 encryption, the same standard used by major banks. Player data is stored on secure servers with redundant backups, and all game outcomes use provably fair algorithms that can be independently verified.</p>
              <p className="text-gray-600">Two-factor authentication, biometric login support, and session monitoring ensure that your account stays safe. If suspicious activity is detected, the system automatically locks the account and alerts you via SMS and email.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_features_cta" className="btn-primary px-8 py-3">
              Experience Is7 Game Features
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related Pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-game" className="btn-outline">Is7 Game</Link>
            <Link href="/is7-game-review" className="btn-outline">Review</Link>
            <Link href="/is7-gamers" className="btn-outline">Is7 Gamers</Link>
            <Link href="/is7-game-guide" className="btn-outline">Game Guide</Link>
            <Link href="/download" className="btn-outline">Download</Link>
          </div>
        </div>
      </section>
    </>
  );
}
