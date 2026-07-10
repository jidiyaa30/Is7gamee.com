import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Latest Version – v2.1.5 (July 2026) What's New",
  description: "Get the latest version of Is7 Game (v2.1.5). See the full changelog, new features, performance improvements, and download the most recent APK build.",
  keywords: ["Is7 Game latest version", "Is7 Game new version", "Is7 Game v2.1.5", "Is7 Game changelog", "Is7 Game update 2026", "Is7 latest APK"],
  openGraph: {
    title: "Is7 Game Latest Version – v2.1.5 What's New",
    description: "See the full changelog and download the latest Is7 Game APK.",
    url: "https://Is7gamee.com/is7-game-latest-version",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Latest Version" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game Latest Version v2.1.5", description: "Full changelog and download link.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-latest-version" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game Latest Version", item: "https://Is7gamee.com/is7-game-latest-version" },
  ],
};

export default function Is7GameLatestVersionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Latest Version</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Is7 Game <span className="gradient-text">Latest Version</span> – v2.1.5
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay ahead with the newest Is7 Game release. Version 2.1.5 brings 12 new games, faster loading times, and important security enhancements. Always keep your Is7 app up to date for the best experience.
          </p>
          <TrackedCTALink location="is7_game_latest_version_cta" className="btn-cta text-lg px-10 py-4">
            Get Latest Version
          </TrackedCTALink>
        </div>
      </section>

      {/* What's New */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">What&apos;s New in v2.1.5</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">12 New Game Titles</h3>
              <p className="text-gray-600">This release adds 12 fresh games from top providers including 5 new slot titles from PG Soft, 3 live table variations from Evolution, and 4 arcade/crash games from Jili. Browse the &quot;New&quot; tab in the app to find them all.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">30% Faster Load Times</h3>
              <p className="text-gray-600">The engineering team optimized the asset loading pipeline, reducing average game launch time by 30%. Games now preload critical assets during idle time, so when you tap play, the action starts almost instantly.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Enhanced Security</h3>
              <p className="text-gray-600">Updated SSL certificate pinning, improved session management, and patched a low-severity vulnerability in the notification handler. All user data remains fully protected with industry-leading encryption.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Bug Fixes</h3>
              <p className="text-gray-600">Resolved a crash affecting Samsung devices on Android 14 during live dealer sessions. Fixed incorrect balance display after network reconnection. Addressed minor UI glitches in the tournament bracket view.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Version Comparison */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Version Comparison</h2>
          <div className="max-w-3xl mx-auto">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left font-semibold p-3">Feature</th>
                  <th className="text-left font-semibold p-3">v4.1.x</th>
                  <th className="text-left font-semibold p-3">v2.1.5 (Latest)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Total Games</td><td>488</td><td>500+</td></tr>
                <tr><td>Avg. Load Time</td><td>3.2 seconds</td><td>2.2 seconds</td></tr>
                <tr><td>Dark Mode</td><td>Beta</td><td>Stable</td></tr>
                <tr><td>Tournament System</td><td>Basic</td><td>Enhanced with brackets</td></tr>
                <tr><td>Esports Betting</td><td>Not available</td><td>Live</td></tr>
                <tr><td>APK Size</td><td>71 MB</td><td>71 MB</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Update */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How to Update to the Latest Version</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { step: "1", desc: "Open the Is7 app. If an update is available, you will see a banner at the top of the home screen." },
              { step: "2", desc: "Tap 'Update Now' to download the new APK directly within the app." },
              { step: "3", desc: "The new version installs over the old one. Your account, balance, and settings are preserved." },
              { step: "4", desc: "Alternatively, visit this page and tap the download button to get the latest APK manually." },
            ].map((s, i) => (
              <div key={i} className="card-static flex items-center gap-4 p-4">
                <div className="step-number flex-shrink-0">{s.step}</div>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_latest_version_cta" className="btn-primary px-8 py-3">
              Download v2.1.5
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-game-update" className="btn-outline">Update Guide</Link>
            <Link href="/is7-game-apk-download" className="btn-outline">APK Download</Link>
            <Link href="/is7-game-2026" className="btn-outline">Is7 in 2026</Link>
            <Link href="/is7-game" className="btn-outline">Is7 Game</Link>
            <Link href="/download" className="btn-outline">Download</Link>
          </div>
        </div>
      </section>
    </>
  );
}
