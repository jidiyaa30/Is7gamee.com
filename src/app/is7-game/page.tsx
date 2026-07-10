import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game – 500+ Premium Games on One Android Platform",
  description: "Is7 Game offers a massive library of 500+ premium Android games including slots, live tables, sports, and arcade. Explore features, categories, and start playing today.",
  keywords: ["Is7 Game", "Is7 Game platform", "Is7 Game library", "Is7 Game features", "Is7 Game categories", "Is7 Game 2026"],
  openGraph: {
    title: "Is7 Game – 500+ Premium Games on One Android Platform",
    description: "Explore the Is7 Game library with 500+ premium titles across every genre. Download free and start playing today.",
    url: "https://Is7gamee.com/is7-game",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Library" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is7 Game – 500+ Premium Games on One Android Platform",
    description: "Explore the Is7 Game library with 500+ premium titles across every genre.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://Is7gamee.com/is7-game" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game", item: "https://Is7gamee.com/is7-game" },
  ],
};

const categories = [
  { name: "Slots & Jackpots", count: "200+", desc: "Classic reels, video slots, and progressive jackpots with stunning graphics and high RTP rates." },
  { name: "Live Tables", count: "80+", desc: "Real-time baccarat, roulette, blackjack, and poker streamed from professional studios with live dealers." },
  { name: "Sports & Esports", count: "100+", desc: "Pre-match and live odds on football, basketball, cricket, tennis, DOTA 2, and more." },
  { name: "Arcade & Casual", count: "60+", desc: "Fishing games, crash games, dice, and quick-play titles perfect for short gaming sessions." },
  { name: "Card & Board", count: "50+", desc: "Poker variants, teen patti, rummy, and board game adaptations with multiplayer support." },
  { name: "Lottery & Number Games", count: "30+", desc: "Keno, bingo, scratch cards, and lottery draws running every few minutes throughout the day." },
];

export default function Is7GamePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Game</span> – Your Gateway to Premium Gaming
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover a world-class game library with over 500 handpicked titles across six major categories. Is7 Game delivers the variety, quality, and fairness that serious gamers demand — all on your Android device.
          </p>
          <TrackedCTALink location="is7_game_cta" className="btn-cta text-lg px-10 py-4">
            Explore Is7 Game
          </TrackedCTALink>
        </div>
      </section>

      {/* Game Categories */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Game Library Overview</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Is7 Game partners with top-tier game providers to bring you a diverse, constantly expanding catalog. Here is what awaits you inside the app.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="card p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-primary">{cat.name}</h3>
                  <span className="bg-primary-50 text-primary text-sm font-bold px-3 py-1 rounded-full">{cat.count}</span>
                </div>
                <p className="text-gray-600">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Platform Features That Set Is7 Game Apart</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Provably Fair Gaming</h3>
              <p className="text-gray-700 mb-6">
                Every game on Is7 Game uses certified Random Number Generators (RNGs) audited by independent testing labs. Players can verify outcomes, ensuring complete transparency and fairness across every spin, deal, and match.
              </p>
              <h3 className="text-xl font-semibold mb-3">Multi-Provider Ecosystem</h3>
              <p className="text-gray-700">
                Is7 Game integrates content from more than 30 leading game studios including Pragmatic Play, PG Soft, Jili, Evolution, and Spadegaming. This multi-provider approach guarantees variety and lets you find your favorite style of play.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Smart Game Recommendations</h3>
              <p className="text-gray-700 mb-6">
                The Is7 Game engine learns your preferences over time and surfaces titles you are most likely to enjoy. Combined with trending lists and curated collections, you will never run out of things to play.
              </p>
              <h3 className="text-xl font-semibold mb-3">Seamless Cross-Device Experience</h3>
              <p className="text-gray-700">
                Your Is7 Game progress, balance, and preferences sync instantly across devices. Switch between your phone and tablet without missing a beat. The responsive UI adapts perfectly to any screen size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Table */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Is7 Game at a Glance</h2>
          <div className="max-w-2xl mx-auto">
            <table className="info-table w-full">
              <tbody>
                <tr><td className="font-semibold">Total Games</td><td>500+</td></tr>
                <tr><td className="font-semibold">Game Providers</td><td>30+ studios</td></tr>
                <tr><td className="font-semibold">New Releases</td><td>10–15 titles per week</td></tr>
                <tr><td className="font-semibold">Supported Languages</td><td>English, Hindi, Filipino, Thai, Vietnamese</td></tr>
                <tr><td className="font-semibold">Minimum Bet</td><td>As low as ₹10 / $0.10</td></tr>
                <tr><td className="font-semibold">App Size</td><td>71 MB</td></tr>
                <tr><td className="font-semibold">Compatibility</td><td>Android 5.0+</td></tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_cta" className="btn-primary px-8 py-3">
              Start Playing Is7 Game
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related Pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7" className="btn-outline">About Is7</Link>
            <Link href="/is7-gaming" className="btn-outline">Is7 Gaming Community</Link>
            <Link href="/download" className="btn-outline">Download APK</Link>
            <Link href="/is7-game-play" className="btn-outline">How to Play</Link>
            <Link href="/is7-game-bonus" className="btn-outline">Bonuses</Link>
            <Link href="/is7-game-online" className="btn-outline">Online Features</Link>
          </div>
        </div>
      </section>
    </>
  );
}
