import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Latest Version – Compatibility & Migration Guide (v2.1.5)",
  description: "Check device compatibility for Is7 Game v2.1.5, learn how to migrate data from older versions, free up storage before updating, and compare v1.x vs v2.x features.",
  keywords: ["Is7 Game latest version", "Is7 Game compatibility", "Is7 Game migration", "Is7 Game v2.1.5", "Is7 Game device support", "Is7 Game upgrade guide"],
  openGraph: {
    title: "Is7 Game Latest Version – Compatibility & Migration Guide",
    description: "Full device compatibility list and data migration guide for Is7 Game v2.1.5.",
    url: "https://Is7gamee.com/is7-game-latest-version",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Latest Version Compatibility" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game v2.1.5 Compatibility & Migration", description: "Device support list, migration steps, and feature comparison.", images: ["/og-image.png"] },
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
            Is7 Game <span className="gradient-text">v2.1.5</span> – Compatibility &amp; Migration Guide
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Before you tap &quot;Update,&quot; know exactly what to expect. This guide covers which Android devices fully support v2.1.5, how to safely migrate your settings and history from older builds, how much storage to clear in advance, and a detailed feature comparison between the v1.x and v2.x generations so you understand what has changed and why.
          </p>
          <TrackedCTALink location="is7_game_latest_version_cta" className="btn-cta text-lg px-10 py-4">
            Get Latest Version
          </TrackedCTALink>
        </div>
      </section>

      {/* Device Compatibility */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Device Compatibility for v2.1.5</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Is7 Game v2.1.5 raises the minimum requirements slightly compared to v1.x to support the new rendering pipeline and live-dealer HD streams. Check the table below before updating.
          </p>
          <div className="max-w-3xl mx-auto">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left font-semibold p-3">Requirement</th>
                  <th className="text-left font-semibold p-3">Minimum (v2.1.5)</th>
                  <th className="text-left font-semibold p-3">Recommended</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Android Version</td><td>Android 8.0 (Oreo)</td><td>Android 12 or higher</td></tr>
                <tr><td>RAM</td><td>2 GB</td><td>4 GB or more</td></tr>
                <tr><td>Free Storage</td><td>150 MB</td><td>300 MB (for cache)</td></tr>
                <tr><td>Processor</td><td>Octa-core 1.8 GHz</td><td>Snapdragon 700 / Dimensity 800+</td></tr>
                <tr><td>Screen Resolution</td><td>720p (HD)</td><td>1080p (FHD) or higher</td></tr>
                <tr><td>Internet Speed</td><td>2 Mbps stable</td><td>5 Mbps+ for live tables</td></tr>
              </tbody>
            </table>
          </div>
          <div className="max-w-3xl mx-auto mt-8 grid md:grid-cols-3 gap-6">
            <div className="card p-4">
              <h3 className="text-lg font-semibold mb-2 text-primary">Fully Supported Brands</h3>
              <p className="text-gray-600 text-sm">Samsung Galaxy (A and S series, 2019 onwards), Xiaomi Redmi Note 8+, OPPO A74/A95, Vivo Y series (2020+), Realme 7 and above, OnePlus 7T and above. These devices receive full feature support including HD live streams and haptic feedback.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-lg font-semibold mb-2 text-primary">Limited Support</h3>
              <p className="text-gray-600 text-sm">Devices running Android 8 or 9 with 2 GB RAM will run v2.1.5 but live dealer games are capped at 480p to maintain stability. Some advanced animations are reduced. The core slots and sports betting experience remains unchanged.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-lg font-semibold mb-2 text-primary">Unsupported Devices</h3>
              <p className="text-gray-600 text-sm">Android 7.x (Nougat) and older are no longer supported from v2.0 onwards. If your device cannot upgrade to Android 8, we recommend staying on Is7 Game v1.9.4 which remains functional and receives security patches only.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Guide */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How to Migrate Your Data from Older Versions</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Is7 Game stores most of your data — account balance, transaction history, bonuses — on the server, so it automatically follows you across updates. However, a few local settings need attention during major version jumps.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { step: "1", title: "Back Up Local Preferences", desc: "Before updating, screenshot your notification settings and custom game filter presets. These are stored locally and may reset during a major version migration (v1.x to v2.x). Server-side data like balance, history, and bonuses are never affected." },
              { step: "2", title: "Clear Stale Cache", desc: "Go to Settings → Apps → Is7 Game → Storage → Clear Cache. Removing the old cache frees the 150 MB minimum space v2.1.5 needs and prevents conflicts between old cached assets and the new rendering engine. Do not tap Clear Data — that removes your local login session." },
              { step: "3", title: "Install the Update", desc: "Tap the in-app Update banner or download the v2.1.5 APK from this page. The installer performs a delta migration, preserving your locally stored favorites list and biometric login configuration wherever possible." },
              { step: "4", title: "Re-Apply Settings", desc: "After the first launch of v2.1.5, visit Profile → Settings to re-enable any notification preferences or custom filters that did not carry over. The new settings panel has additional options not available in v1.x." },
            ].map((s, i) => (
              <div key={i} className="card-static flex items-start gap-4 p-4">
                <div className="step-number flex-shrink-0">{s.step}</div>
                <div>
                  <p className="font-semibold mb-1">{s.title}</p>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison v1.x vs v2.x */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">v1.x vs v2.x – What Actually Changed</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            The jump from v1.x to the v2.x generation was not just cosmetic. The core engine was rewritten, backend communication was overhauled, and several features that were experimental in v1.x became stable and permanent in v2.x. Here is the full comparison.
          </p>
          <div className="max-w-3xl mx-auto">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left font-semibold p-3">Feature</th>
                  <th className="text-left font-semibold p-3">v1.x (Legacy)</th>
                  <th className="text-left font-semibold p-3">v2.x / v2.1.5 (Current)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Rendering Engine</td><td>WebView hybrid</td><td>Native Android (Kotlin-based)</td></tr>
                <tr><td>Game Load Time</td><td>4–6 seconds average</td><td>2.2 seconds average</td></tr>
                <tr><td>Offline Cache</td><td>None</td><td>Smart pre-cache for favorite games</td></tr>
                <tr><td>Dark Mode</td><td>Not available</td><td>Full system-level dark mode</td></tr>
                <tr><td>Esports Betting</td><td>Not available</td><td>Live esports markets</td></tr>
                <tr><td>Biometric Login</td><td>PIN only</td><td>Fingerprint + Face ID</td></tr>
                <tr><td>Push Notifications</td><td>Basic (promotions only)</td><td>Granular per-category control</td></tr>
                <tr><td>Tournament System</td><td>Simple leaderboard</td><td>Bracket-style with live updates</td></tr>
                <tr><td>Min. Android Version</td><td>Android 6.0</td><td>Android 8.0</td></tr>
                <tr><td>APK Size</td><td>48 MB</td><td>71 MB (includes native libs)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mt-8">
            The increased APK size in v2.x is a direct result of bundling native libraries that previously required server-side rendering. While the download is larger, in-session performance, battery usage, and game stability are all significantly improved as a result.
          </p>
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
