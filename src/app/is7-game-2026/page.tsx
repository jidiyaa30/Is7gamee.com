import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game 2026 – What's New This Year on the Is7 Platform",
  description: "Is7 Game in 2026 brings esports betting, dark mode, a refreshed UI, 500+ games, and faster performance. See the full 2026 roadmap and new features.",
  keywords: ["Is7 Game 2026", "Is7 2026 update", "Is7 new features 2026", "Is7 Game roadmap", "Is7 2026 review", "Is7 Game this year"],
  openGraph: {
    title: "Is7 Game 2026 – What's New This Year",
    description: "All the new features and improvements coming to Is7 Game in 2026.",
    url: "https://Is7gamee.com/is7-game-2026",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game 2026" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game 2026 – New Features", description: "What's new on Is7 Game in 2026.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-2026" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game 2026", item: "https://Is7gamee.com/is7-game-2026" },
  ],
};

export default function Is7Game2026Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game 2026</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Game 2026</span> – Bigger, Better, Faster
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            2026 is Is7&apos;s most ambitious year yet. From a complete UI overhaul to esports betting, expanded language support, and a 30% performance boost — here is everything that makes Is7 Game the platform to watch this year.
          </p>
          <TrackedCTALink location="is7_game_2026_cta" className="btn-cta text-lg px-10 py-4">
            Experience Is7 2026
          </TrackedCTALink>
        </div>
      </section>

      {/* 2026 Highlights */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">2026 Highlights So Far</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "UI 3.0 Redesign", desc: "A ground-up interface redesign with smoother animations, better information hierarchy, and a modern card-based layout. Navigation is faster and more intuitive than ever before." },
              { title: "Esports Betting", desc: "Brand new in 2026 — live betting on DOTA 2, CS2, League of Legends, Mobile Legends, and Valorant matches. Real-time odds with in-play markets and match statistics." },
              { title: "Dark Mode", desc: "Finally stable after months in beta. True dark mode reduces eye strain during night sessions and saves battery on OLED screens. Toggle it in Settings → Appearance." },
              { title: "30% Performance Boost", desc: "Rewritten asset pipeline delivers 30% faster game loading times. The app uses less RAM and CPU, meaning smoother gameplay even on budget Android devices." },
              { title: "5 Languages Supported", desc: "Is7 Game now supports English, Hindi, Filipino, Thai, and Vietnamese — with more languages planned for Q3 and Q4 2026." },
              { title: "Enhanced Tournament System", desc: "New bracket-style tournaments with real-time standings, elimination rounds, and tiered prize pools. Participate in daily, weekly, and monthly competitions." },
            ].map((item, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Roadmap */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">2026 Roadmap – What&apos;s Coming Next</h2>
          <div className="max-w-3xl mx-auto">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left font-semibold p-3">Quarter</th>
                  <th className="text-left font-semibold p-3">Planned Features</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Q1 (Done)</td><td>UI 3.0 redesign, dark mode stable, esports betting launch</td></tr>
                <tr><td className="font-semibold">Q2 (Done)</td><td>Performance optimization, tournament brackets, 500th game milestone</td></tr>
                <tr><td className="font-semibold">Q3 (Current)</td><td>iOS web app, cryptocurrency deposits, 3 new languages</td></tr>
                <tr><td className="font-semibold">Q4 (Planned)</td><td>Social gaming features, VR game previews, loyalty tier expansion</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Year-over-Year Growth */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Is7 Game: Year-over-Year Growth</h2>
          <div className="grid md:grid-cols-4 gap-6 p-4">
            {[
              { metric: "Total Games", value2025: "350", value2026: "500+", growth: "+43%" },
              { metric: "Active Players", value2025: "300K", value2026: "500K+", growth: "+67%" },
              { metric: "Countries", value2025: "8", value2026: "15", growth: "+88%" },
              { metric: "Avg. Load Time", value2025: "3.5s", value2026: "2.2s", growth: "-37%" },
            ].map((stat, i) => (
              <div key={i} className="card-static text-center p-4">
                <h3 className="text-sm text-gray-500 mb-1">{stat.metric}</h3>
                <p className="text-2xl font-bold text-primary">{stat.value2026}</p>
                <p className="text-sm text-gray-600">from {stat.value2025}</p>
                <p className="text-sm font-semibold text-green-600">{stat.growth}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_2026_cta" className="btn-primary px-8 py-3">
              Join Is7 in 2026
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-game-latest-version" className="btn-outline">Latest Version</Link>
            <Link href="/is7-game-update" className="btn-outline">Updates</Link>
            <Link href="/is7-game" className="btn-outline">Is7 Game</Link>
            <Link href="/is7" className="btn-outline">About Is7</Link>
            <Link href="/download" className="btn-outline">Download</Link>
          </div>
        </div>
      </section>
    </>
  );
}
