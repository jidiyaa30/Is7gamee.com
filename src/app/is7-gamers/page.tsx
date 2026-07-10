import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Gamers – Join the Community of Skilled Players",
  description: "Meet the Is7 Gamers community. Discover player stories, winning strategies, tips from top players, and why thousands choose Is7 Game as their go-to gaming platform.",
  keywords: ["Is7 Gamers", "Is7 Game community", "Is7 players", "Is7 Game tips", "Is7 gaming community", "Is7 Gamers 2026"],
  openGraph: {
    title: "Is7 Gamers – Join the Community of Skilled Players",
    description: "Join the Is7 Gamers community. Player stories, strategies, and tips from top players.",
    url: "https://Is7gamee.com/is7-gamers",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Gamers Community" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Gamers", description: "Join the Is7 Gamers community and learn from top players.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-gamers" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Gamers", item: "https://Is7gamee.com/is7-gamers" },
  ],
};

export default function Is7GamersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Gamers</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Gamers</span> – A Thriving Community of Players
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Is7 Gamers are more than just players — they are a passionate community united by the thrill of competition, the pursuit of rewards, and the love of quality gaming. Whether you are a casual player unwinding after a long day or a dedicated strategist chasing the leaderboard, Is7 Game welcomes you with open arms.
          </p>
          <TrackedCTALink location="is7_gamers_cta" className="btn-cta text-lg px-10 py-4">
            Join the Is7 Gamers Community
          </TrackedCTALink>
        </div>
      </section>

      {/* Player Stories */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">What Is7 Gamers Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Ravi M.", location: "Mumbai", story: "I started playing Is7 Game six months ago with no real strategy. After joining community channels and reading tips from experienced Is7 Gamers, I improved my approach dramatically. The daily bonuses and referral rewards helped me grow my balance steadily. Now I play every evening as my main source of entertainment." },
              { name: "Priya S.", location: "Delhi", story: "What drew me to Is7 Game was the simplicity. I downloaded the APK, signed up in two minutes, and was playing within five. The Is7 Gamers community on social media is incredibly supportive — people share predictions, discuss strategies, and celebrate each other's wins. It feels like a real team." },
              { name: "Arjun K.", location: "Bangalore", story: "As a competitive gamer, I appreciate platforms that reward skill and consistency. Is7 Game delivers on both counts. The color prediction games require genuine pattern recognition, and the rewards system is transparent. I have recommended Is7 to over twenty friends, and every one of them is still active." },
            ].map((player, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-xl font-semibold mb-2 text-primary">{player.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{player.location}</p>
                <p className="text-gray-600">{player.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips from Top Gamers */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Pro Tips from Experienced Is7 Gamers</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { tip: "Start Small and Learn the Patterns", detail: "Seasoned Is7 Gamers recommend beginning with smaller amounts while you learn the rhythm of the games. Observe patterns over multiple rounds before committing larger stakes. Patience separates consistent winners from impulsive players." },
              { tip: "Claim Every Bonus Available", detail: "Is7 Game offers daily login bonuses, first-deposit rewards, and referral commissions. Top gamers never miss a day — they log in, claim their bonus, and use it strategically. Over time these bonuses add up to a significant advantage." },
              { tip: "Set a Budget and Stick to It", detail: "Responsible gaming is a hallmark of the Is7 Gamers community. Decide how much you are comfortable spending each day and never exceed that limit. Winning streaks feel great, but discipline during losing streaks is what keeps you in the game long-term." },
              { tip: "Use the Referral System Wisely", detail: "The Is7 referral program rewards you for every friend who joins. Share your unique referral link on social media, messaging groups, and with family. Each successful referral earns you a commission on their activity — it is a reliable way to grow your balance without any risk." },
              { tip: "Stay Updated on New Features", detail: "Is7 Game regularly releases updates with new game modes, improved interfaces, and enhanced rewards. Follow the official channels and update your APK promptly to access the latest features before other players catch on." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg">
                <span className="text-primary font-bold text-lg flex-shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-semibold">{item.tip}</h3>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gamers Choose Is7 */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why Gamers Choose Is7 Over Other Platforms</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Instant Withdrawals", desc: "Is7 Gamers enjoy fast payouts processed within minutes, not days. When you win, you get your money quickly — no hidden delays or complicated verification loops." },
              { title: "Fair and Transparent Gameplay", desc: "Every round on Is7 Game uses verifiable algorithms. The community trusts the platform because results are consistent and auditable, unlike many competitors." },
              { title: "Active Social Community", desc: "Is7 Gamers connect through Telegram groups, WhatsApp channels, and in-app chat features. Strategy discussions, win celebrations, and mutual support make the experience social and engaging." },
              { title: "Generous Reward Structure", desc: "From sign-up bonuses to daily rewards and multi-tier referral commissions, Is7 Game gives back more to its players than any comparable platform in the market." },
            ].map((item, i) => (
              <div key={i} className="card-static p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_gamers_cta" className="btn-primary px-8 py-3">
              Become an Is7 Gamer Today
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related Pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-game" className="btn-outline">Is7 Game</Link>
            <Link href="/is7-game-signup" className="btn-outline">Sign Up</Link>
            <Link href="/is7-game-features" className="btn-outline">Features</Link>
            <Link href="/is7-game-guide" className="btn-outline">Game Guide</Link>
            <Link href="/is7-game-bonus" className="btn-outline">Bonuses</Link>
          </div>
        </div>
      </section>
    </>
  );
}
