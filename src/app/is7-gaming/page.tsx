import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Gaming – Community, Tournaments & Social Gaming Hub",
  description: "Is7 Gaming brings together a vibrant community of mobile gamers. Join tournaments, compete on leaderboards, connect with friends, and win exclusive prizes on the Is7 platform.",
  keywords: ["Is7 Gaming", "Is7 Gaming community", "Is7 tournaments", "Is7 leaderboard", "Is7 social gaming", "Is7 Gaming 2026"],
  openGraph: {
    title: "Is7 Gaming – Community, Tournaments & Social Gaming Hub",
    description: "Join the Is7 Gaming community. Compete in tournaments, climb leaderboards, and win exclusive prizes.",
    url: "https://Is7gamee.com/is7-gaming",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Gaming Community" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is7 Gaming – Community, Tournaments & Social Gaming Hub",
    description: "Join the Is7 Gaming community. Compete in tournaments, climb leaderboards, and win exclusive prizes.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://Is7gamee.com/is7-gaming" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Gaming", item: "https://Is7gamee.com/is7-gaming" },
  ],
};

export default function Is7GamingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Gaming</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Gaming</span> – More Than Just Games
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Is7 Gaming is a thriving ecosystem where players connect, compete, and celebrate. From daily tournaments to community events, discover why thousands of gamers call Is7 their home.
          </p>
          <TrackedCTALink location="is7_gaming_cta" className="btn-cta text-lg px-10 py-4">
            Join Is7 Gaming
          </TrackedCTALink>
        </div>
      </section>

      {/* Community Features */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">The Is7 Gaming Community</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Player Forums & Chat</h3>
              <p className="text-gray-600 mb-3">
                Is7 Gaming includes built-in chat rooms and community forums where players share strategies, celebrate wins, and build friendships. Each game category has its own dedicated channel, so you can connect with like-minded players instantly.
              </p>
              <p className="text-gray-600">
                Community moderators ensure a positive environment around the clock, and top contributors earn special badges and recognition on their profiles.
              </p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Referral Network</h3>
              <p className="text-gray-600 mb-3">
                Invite friends to Is7 Gaming and earn commissions on their activity — not just once, but as a recurring passive income stream. The multi-tier referral system rewards you for building a network of active players.
              </p>
              <p className="text-gray-600">
                Top referrers earn VIP status, exclusive bonuses, and invitations to private Is7 Gaming events held throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Tournaments & Competitions</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Is7 Gaming hosts daily, weekly, and monthly tournaments across all game categories. Here is a snapshot of what is running right now.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Daily Slot Showdown", freq: "Every day, 8 PM", prize: "₹50,000 prize pool", desc: "Compete for the highest multiplier in featured slot games. Top 20 players split the pot." },
              { name: "Weekend Live Table Championship", freq: "Saturday & Sunday", prize: "₹200,000 prize pool", desc: "Baccarat and blackjack face-offs with live dealers. Points based on win streaks and total hands played." },
              { name: "Monthly Mega Tournament", freq: "Last week of each month", prize: "₹1,000,000+ prize pool", desc: "The biggest Is7 Gaming event. All games contribute points. Top 100 players win cash, bonuses, and VIP upgrades." },
            ].map((t, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-xl font-semibold mb-2 text-primary">{t.name}</h3>
                <p className="text-sm text-gray-500 mb-1">{t.freq}</p>
                <p className="text-sm font-bold text-primary mb-3">{t.prize}</p>
                <p className="text-gray-600">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Features */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Social Features in Is7 Gaming</h2>
          <div className="grid md:grid-cols-4 gap-6 p-4">
            {[
              { title: "Friend Lists", desc: "Add friends, see who is online, and challenge them to head-to-head matches." },
              { title: "Leaderboards", desc: "Global and category-specific rankings updated in real-time. Climb the ladder and earn recognition." },
              { title: "Achievement Badges", desc: "Unlock collectible badges for milestones like first win, 100-game streak, and tournament victories." },
              { title: "Gift System", desc: "Send bonus credits, free spins, or cosmetic items to friends directly through the Is7 Gaming app." },
            ].map((f, i) => (
              <div key={i} className="card-static text-center p-4">
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_gaming_cta" className="btn-primary px-8 py-3">
              Join the Community
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Explore Is7</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7" className="btn-outline">About Is7</Link>
            <Link href="/is7-game" className="btn-outline">Is7 Game Library</Link>
            <Link href="/download" className="btn-outline">Download APK</Link>
            <Link href="/is7-game-bonus" className="btn-outline">Bonuses</Link>
            <Link href="/is7-game-rewards" className="btn-outline">Rewards</Link>
            <Link href="/is7-game-register" className="btn-outline">Register</Link>
          </div>
        </div>
      </section>
    </>
  );
}
