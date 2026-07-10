import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Online – Play 500+ Games Anywhere, Anytime",
  description: "Is7 Game Online lets you play 500+ premium games from any location with an internet connection. Learn about online features, multiplayer modes, and connection requirements.",
  keywords: ["Is7 Game online", "Is7 online gaming", "Is7 play online", "Is7 Game internet", "Is7 multiplayer", "Is7 Game online 2026"],
  openGraph: {
    title: "Is7 Game Online – Play 500+ Games Anywhere",
    description: "Play Is7 Game online from any location. 500+ games, multiplayer, live dealers.",
    url: "https://Is7gamee.com/is7-game-online",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Online" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game Online", description: "Play 500+ games anywhere, anytime.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-online" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game Online", item: "https://Is7gamee.com/is7-game-online" },
  ],
};

export default function Is7GameOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game Online</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Game Online</span> – Play From Anywhere
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Is7 Game is a fully online platform — all 500+ games stream directly to your device in real time. Whether you are at home, commuting, or traveling, your favorite games and your account balance are always just a tap away.
          </p>
          <TrackedCTALink location="is7_game_online_cta" className="btn-cta text-lg px-10 py-4">
            Play Is7 Online
          </TrackedCTALink>
        </div>
      </section>

      {/* Online Features */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Online Gaming Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Live Dealer Games", desc: "Connect to professional studios streaming baccarat, roulette, blackjack, and poker in HD. Interact with real dealers and other players in real time through the chat interface." },
              { title: "Real-Time Sports Betting", desc: "Place live bets on ongoing football, basketball, cricket, and esports matches. Odds update in real time based on match events, giving you dynamic betting opportunities." },
              { title: "Multiplayer Tables", desc: "Join multiplayer card games and compete against real opponents from around the world. Poker, teen patti, and rummy tables support 2-8 simultaneous players with voice and text chat." },
              { title: "Cloud Sync", desc: "Your game progress, balance, preferences, and history are stored securely in the cloud. Log in from any device and everything is exactly where you left it — no manual syncing required." },
              { title: "Global Leaderboards", desc: "Compete for rankings on global and regional leaderboards. Leaderboard data updates in real time so you can track your position relative to other online players throughout the day." },
              { title: "In-App Chat", desc: "Community chat rooms are always active with Is7 players sharing tips, celebrating wins, and coordinating for multiplayer sessions. Moderated 24/7 for a safe, positive environment." },
            ].map((feat, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-xl font-semibold mb-3 text-primary">{feat.title}</h3>
                <p className="text-gray-600">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection Requirements */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Internet Connection Requirements</h2>
          <div className="max-w-2xl mx-auto">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left font-semibold p-3">Game Type</th>
                  <th className="text-left font-semibold p-3">Min. Speed</th>
                  <th className="text-left font-semibold p-3">Recommended</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Slots & Arcade</td><td>256 Kbps</td><td>1 Mbps</td></tr>
                <tr><td>Card Games</td><td>512 Kbps</td><td>2 Mbps</td></tr>
                <tr><td>Sports Betting</td><td>512 Kbps</td><td>2 Mbps</td></tr>
                <tr><td>Live Dealer (SD)</td><td>1 Mbps</td><td>3 Mbps</td></tr>
                <tr><td>Live Dealer (HD)</td><td>3 Mbps</td><td>5 Mbps</td></tr>
              </tbody>
            </table>
            <p className="text-gray-600 text-sm mt-4 text-center">
              4G and 5G mobile data connections are fully supported. Wi-Fi is recommended for live dealer games to minimize latency.
            </p>
          </div>
        </div>
      </section>

      {/* Offline Mode */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">What About Offline?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              While Is7 Game requires an internet connection for gameplay (to ensure fairness and real-time synchronization), certain features remain accessible offline. You can browse your game history, review past transactions, check your bonus tracker, and adjust app settings without an active connection.
            </p>
            <p className="text-gray-700">
              The moment your device reconnects to the internet, the app syncs any offline changes and resumes full functionality. If your connection drops during a game, Is7 automatically saves your session state and restores it when connectivity returns.
            </p>
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_online_cta" className="btn-primary px-8 py-3">
              Play Is7 Online Now
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-game-play" className="btn-outline">How to Play</Link>
            <Link href="/is7-game" className="btn-outline">Is7 Game</Link>
            <Link href="/is7-gaming" className="btn-outline">Is7 Gaming</Link>
            <Link href="/download" className="btn-outline">Download</Link>
            <Link href="/is7-game-app" className="btn-outline">Is7 App</Link>
          </div>
        </div>
      </section>
    </>
  );
}
