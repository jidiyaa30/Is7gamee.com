import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";

export const metadata: Metadata = {
  title: "Is7 Game Rewards & Bonuses – Maximize Your Earnings in 2026",
  description:
    "Discover every Is7 Game reward and bonus available in 2026. Learn about daily login bonuses, VIP tiers, referral commissions, tournament prizes, and proven tips to maximize your earnings.",
  keywords: [
    "Is7 rewards",
    "Is7 bonuses",
    "Is7 daily bonus",
    "Is7 VIP program",
    "Is7 game rewards",
  ],
  openGraph: {
    title: "Is7 Game Rewards & Bonuses – Maximize Your Earnings in 2026",
    description:
      "Complete breakdown of Is7 Game rewards, bonuses, VIP tiers, and referral commissions. Maximize your earnings with proven strategies.",
    url: "https://Is7gamee.com/blog/is7-game-rewards-and-bonuses",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Rewards & Bonuses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is7 Game Rewards & Bonuses 2026",
    description: "Complete breakdown of Is7 Game rewards, bonuses, VIP tiers, and referral commissions.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://Is7gamee.com/blog/is7-game-rewards-and-bonuses" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is7 Game Rewards & Bonuses – Maximize Your Earnings in 2026",
  description:
    "Discover every Is7 Game reward and bonus available in 2026. Learn about daily login bonuses, VIP tiers, referral commissions, tournament prizes, and tips to maximize earnings.",
  url: "https://Is7gamee.com/blog/is7-game-rewards-and-bonuses",
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
  author: { "@type": "Organization", name: "Is7 Gaming", url: "https://Is7gamee.com" },
  publisher: { "@type": "Organization", name: "Is7 Gaming", url: "https://Is7gamee.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://Is7gamee.com/blog/is7-game-rewards-and-bonuses" },
  keywords: "Is7 rewards, Is7 bonuses, Is7 daily bonus, Is7 VIP program, Is7 game rewards",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://Is7gamee.com/blog" },
    { "@type": "ListItem", position: 3, name: "Rewards & Bonuses", item: "https://Is7gamee.com/blog/is7-game-rewards-and-bonuses" },
  ],
};

export default function Is7RewardsAndBonusesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Rewards &amp; Bonuses</span>
          </nav>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4 text-sm">
            <span className="bg-primary-50 text-primary px-3 py-1 rounded-full font-medium">Guide</span>
            <span className="text-gray-400">June 5, 2026</span>
            <span className="text-gray-400">&#8226;</span>
            <span className="text-gray-400">7 min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Is7 Game <span className="gradient-text">Rewards &amp; Bonuses</span> – Maximize Your Earnings
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive guide to every reward, bonus, and earnings opportunity available on Is7 Game in 2026 — from daily logins to VIP perks and tournament prize pools.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full"><path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="white" /></svg>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container max-w-6xl mx-auto px-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 space-y-12">
              {/* TOC */}
              <nav className="card-static p-6 rounded-xl">
                <h2 className="text-lg font-bold mb-4 text-text-primary">Table of Contents</h2>
                <ol className="space-y-2 list-decimal list-inside text-sm text-primary">
                  <li><a href="#types-of-bonuses" className="hover:underline">Types of Bonuses on Is7 Game</a></li>
                  <li><a href="#daily-login" className="hover:underline">Daily Login Rewards</a></li>
                  <li><a href="#vip-tiers" className="hover:underline">VIP Tiers Explained</a></li>
                  <li><a href="#referral-program" className="hover:underline">Referral Program</a></li>
                  <li><a href="#tournament-prizes" className="hover:underline">Tournament Prizes</a></li>
                  <li><a href="#maximize-tips" className="hover:underline">Tips to Maximize Your Rewards</a></li>
                </ol>
              </nav>

              {/* Types of Bonuses */}
              <article id="types-of-bonuses">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">Types of Bonuses on Is7 Game</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Is7 Game offers a layered bonus system designed to reward both new and returning players. Understanding each bonus type is the first step to building a strategy that compounds your earnings over time. Here is a breakdown of every bonus category currently active on the platform.
                </p>
                <ul className="space-y-3">
                  {[
                    { title: "Welcome Bonus", desc: "New players receive a one-time welcome bonus upon completing registration and making their first deposit. This bonus typically matches your initial deposit up to a set limit, giving you double the starting balance to explore games and features." },
                    { title: "Daily Login Bonus", desc: "Log in every day to claim escalating rewards. The bonus resets on a 7-day cycle, with the highest payouts reserved for consecutive day-7 logins. Missing a day resets the cycle to day one." },
                    { title: "Deposit Bonus", desc: "Periodic promotions offer percentage-based bonuses on deposits made during specific windows — for example, a 50% bonus on weekend deposits or a 100% match during special events." },
                    { title: "Referral Commission", desc: "Invite friends using your unique referral link and earn a commission on their activity. The more active referrals you bring, the higher your commission tier climbs." },
                    { title: "VIP Loyalty Rewards", desc: "As you accumulate play volume, you advance through VIP tiers that unlock exclusive bonuses, faster withdrawals, personal account managers, and cashback on net losses." },
                    { title: "Tournament Prize Pools", desc: "Compete in scheduled tournaments with prize pools that can reach significant amounts. Top finishers earn cash rewards, bonus credits, and leaderboard recognition." },
                  ].map((b) => (
                    <li key={b.title} className="bg-primary-50 p-4 rounded-lg">
                      <span className="font-semibold text-text-primary">{b.title}:</span>{" "}
                      <span className="text-sm text-text-secondary">{b.desc}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Daily Login Rewards */}
              <article id="daily-login">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Daily Login Rewards</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  The daily login system is the simplest and most consistent way to earn free rewards on Is7 Game. Every calendar day you open the app and claim your bonus, the reward value increases. The system operates on a 7-day cycle, and maintaining a perfect streak across the full week unlocks the premium day-7 reward, which is worth more than the previous six days combined.
                </p>
                <div className="overflow-x-auto">
                  <table className="info-table w-full text-sm">
                    <thead>
                      <tr className="bg-primary-100">
                        <th className="text-left p-3 font-semibold text-text-primary">Day</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Reward Type</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Estimated Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        ["Day 1", "Bonus Credits", "Small"],
                        ["Day 2", "Bonus Credits", "Small"],
                        ["Day 3", "Spin Token", "Medium"],
                        ["Day 4", "Bonus Credits", "Medium"],
                        ["Day 5", "Mystery Box", "Medium–High"],
                        ["Day 6", "Bonus Credits", "High"],
                        ["Day 7", "Premium Chest", "Very High"],
                      ].map(([day, type, value]) => (
                        <tr key={day} className="hover:bg-gray-50">
                          <td className="p-3 font-medium text-text-primary">{day}</td>
                          <td className="p-3 text-text-secondary">{type}</td>
                          <td className="p-3 text-text-secondary">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary leading-relaxed mt-4">
                  If you miss a day, the cycle resets to Day 1. Setting a daily reminder or enabling push notifications ensures you never break your streak. Over the course of a month, consistent daily logins can accumulate rewards worth significantly more than sporadic play sessions.
                </p>
              </article>

              {/* VIP Tiers */}
              <article id="vip-tiers">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">VIP Tiers Explained</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Is7 Game features a structured VIP program that rewards long-term loyalty. Every action on the platform — deposits, gameplay, and participation in events — earns VIP points that push you toward the next tier. Each tier unlocks increasingly valuable perks that are not available to standard accounts.
                </p>
                <div className="overflow-x-auto">
                  <table className="info-table w-full text-sm">
                    <thead>
                      <tr className="bg-primary-100">
                        <th className="text-left p-3 font-semibold text-text-primary">Tier</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Points Required</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Key Perks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        ["Bronze", "0 – 999", "Daily login bonus, basic support"],
                        ["Silver", "1,000 – 4,999", "5% cashback, priority support, weekly bonus"],
                        ["Gold", "5,000 – 19,999", "10% cashback, exclusive tournaments, faster withdrawals"],
                        ["Platinum", "20,000 – 49,999", "15% cashback, personal account manager, birthday bonus"],
                        ["Diamond", "50,000+", "20% cashback, highest withdrawal limits, VIP-only events, custom promotions"],
                      ].map(([tier, points, perks]) => (
                        <tr key={tier} className="hover:bg-gray-50">
                          <td className="p-3 font-medium text-text-primary">{tier}</td>
                          <td className="p-3 text-text-secondary">{points}</td>
                          <td className="p-3 text-text-secondary">{perks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary leading-relaxed mt-4">
                  VIP points never expire as long as your account remains active. However, tier status is re-evaluated quarterly — if your activity drops significantly, you may be moved down one tier. Maintaining consistent play volume is the key to holding your VIP rank and the perks that come with it.
                </p>
              </article>

              {/* Referral Program */}
              <article id="referral-program">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Referral Program</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  The Is7 Game referral program turns your network into a passive income stream. Every registered player receives a unique referral link and code that can be shared via social media, messaging apps, or any other channel. When someone registers through your link, they become your referral, and you earn a commission based on their platform activity.
                </p>
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Share Your Unique Link", desc: "Find your referral link in the \"Invite Friends\" section of your Is7 Game dashboard. Copy it and share it on WhatsApp, Telegram, Facebook, or any platform where potential players are active. The link automatically tracks sign-ups back to your account." },
                    { step: 2, title: "Your Friend Registers & Deposits", desc: "When a new user clicks your link and completes registration followed by their first deposit, they are permanently tagged as your referral. Both of you receive a sign-up bonus — the referrer gets a commission credit, and the new user gets a welcome bonus." },
                    { step: 3, title: "Earn Ongoing Commissions", desc: "You earn a percentage-based commission on your referral's ongoing activity. The commission is credited to your account automatically and can be withdrawn or used for gameplay. Active referrals continue generating commissions indefinitely." },
                    { step: 4, title: "Climb Commission Tiers", desc: "As your referral count grows, you unlock higher commission rates. Players with 10+ active referrals earn a higher percentage than those with fewer. Top referrers may receive additional incentives such as bonus multipliers and exclusive promotions." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="step-number flex-shrink-0">{s.step}</div>
                      <div>
                        <h3 className="font-semibold text-text-primary mb-1">{s.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* Tournament Prizes */}
              <article id="tournament-prizes">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Tournament Prizes</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Is7 Game hosts regular tournaments that give players the chance to compete for substantial prize pools. Tournaments vary in format — some are free to enter, while others require a small buy-in. The leaderboard-style format rewards the top performers over a fixed time period, usually ranging from a few hours to a full week.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Daily Mini Tournaments", desc: "Free-entry competitions that run every 24 hours. Prize pools are smaller but accessible to every player regardless of account level. These are ideal for new players looking to practice competitive play without financial risk." },
                    { title: "Weekend Showdowns", desc: "Larger-scale events held every Saturday and Sunday with boosted prize pools. Entry may require a modest buy-in, but the reward-to-cost ratio is typically favorable. Leaderboard positions are determined by cumulative performance across both days." },
                    { title: "Monthly Grand Tournament", desc: "The flagship competitive event on Is7 Game, held on the last weekend of each month. Prize pools are the largest available on the platform, and top finishers receive cash rewards plus VIP points that can accelerate tier progression." },
                    { title: "VIP-Only Invitational", desc: "Exclusive tournaments reserved for Gold-tier VIP members and above. These events feature smaller player pools and higher average payouts, making them one of the most lucrative opportunities on the platform for dedicated players." },
                  ].map((item) => (
                    <div key={item.title} className="card-static p-5 rounded-xl">
                      <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* Tips to Maximize */}
              <article id="maximize-tips">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Tips to Maximize Your Rewards</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Earning rewards on Is7 Game is straightforward, but maximizing them requires a deliberate approach. These six strategies will help you extract the most value from every bonus and promotion the platform offers.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Never Break Your Daily Login Streak", desc: "The day-7 reward is worth more than days 1 through 6 combined. Set a phone alarm or enable push notifications to ensure you claim your bonus every single day, even if you do not plan to play that day." },
                    { title: "Time Your Deposits to Match Promotions", desc: "Is7 Game frequently runs deposit bonus events during weekends, holidays, and platform milestones. Instead of depositing on random days, wait for an active promotion to get 50–100% extra value on the same deposit amount." },
                    { title: "Focus on VIP Point Accumulation", desc: "Every tier upgrade permanently improves your cashback rate and unlocks new perks. Concentrate your play during double-point events to accelerate progression. Even small gains in cashback compound significantly over months of play." },
                    { title: "Build an Active Referral Network", desc: "Referral commissions are passive and ongoing. Sharing your link consistently — even just once a week on social media — can build a referral base that generates steady income without additional effort on your part." },
                    { title: "Enter Every Free Tournament", desc: "Daily mini tournaments cost nothing to enter but offer real rewards. Even if you do not finish first, consistent participation improves your competitive skills and occasionally yields unexpected top-3 finishes." },
                    { title: "Read Promotion Terms Carefully", desc: "Every bonus comes with specific terms — wagering requirements, expiration dates, eligible games. Understanding these conditions before you claim a bonus ensures you can actually convert it into withdrawable funds rather than forfeiting it to unmet requirements." },
                  ].map((tip) => (
                    <div key={tip.title} className="bg-accent/10 p-5 rounded-xl">
                      <h3 className="font-semibold text-accent-dark mb-1">{tip.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{tip.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <TrackedCTALink location="is7_rewards_bonuses_cta" className="btn-cta inline-block">
                    Start Earning on Is7 Game
                  </TrackedCTALink>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="card p-6 rounded-xl text-center sticky top-24">
                <h3 className="text-lg font-bold text-text-primary mb-2">Join Is7 Game</h3>
                <p className="text-sm text-text-secondary mb-4">
                  Claim your welcome bonus and start earning rewards from day one.
                </p>
                <TrackedCTALink location="is7_rewards_bonuses_cta" className="btn-cta w-full block mb-4">
                  Get Started Now
                </TrackedCTALink>
                <p className="text-xs text-text-muted">Free to join &bull; Instant bonus &bull; 24/7 support</p>
              </div>

              <div className="card-static p-6 rounded-xl">
                <h3 className="text-lg font-bold text-text-primary mb-4">Related Articles</h3>
                <ul className="space-y-3">
                  <li><Link href="/blog/is7-game-complete-guide" className="text-sm text-primary hover:underline">Is7 Game Complete Guide 2026</Link></li>
                  <li><Link href="/blog/is7-game-tips-and-tricks" className="text-sm text-primary hover:underline">Is7 Game Tips and Tricks</Link></li>
                  <li><Link href="/blog/is7-game-register-login" className="text-sm text-primary hover:underline">How to Register &amp; Login on Is7</Link></li>
                  <li><Link href="/blog/is7-game-for-beginners" className="text-sm text-primary hover:underline">Is7 Game for Beginners</Link></li>
                  <li><Link href="/blog/is7-vs-other-gaming-platforms" className="text-sm text-primary hover:underline">Is7 vs Other Gaming Platforms</Link></li>
                  <li><Link href="/download" className="text-sm font-semibold text-accent-dark hover:underline">Download Is7 APK Now</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
