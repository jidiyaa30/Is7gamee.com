import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Update – How to Update & Why It Matters",
  description: "Learn how to update Is7 Game to the latest version. Understand the update process, benefits of staying current, and how to fix update-related issues.",
  keywords: ["Is7 Game update", "update Is7 Game", "Is7 Game update 2026", "Is7 Game new update", "Is7 update guide", "Is7 update problems"],
  openGraph: {
    title: "Is7 Game Update – How to Update & Why It Matters",
    description: "Complete guide to updating Is7 Game on Android.",
    url: "https://Is7gamee.com/is7-game-update",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Update" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game Update Guide", description: "Keep Is7 Game up to date.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-update" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game Update", item: "https://Is7gamee.com/is7-game-update" },
  ],
};

export default function Is7GameUpdatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game Update</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Game Update</span> – Stay Current, Stay Ahead
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Regular updates keep Is7 Game fast, secure, and packed with fresh content. This page explains how updates work, why they matter, and what to do if an update does not go smoothly.
          </p>
          <TrackedCTALink location="is7_game_update_cta" className="btn-cta text-lg px-10 py-4">
            Get Latest Update
          </TrackedCTALink>
        </div>
      </section>

      {/* Why Update */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why You Should Always Update Is7 Game</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "New Games & Features", desc: "Every update adds new game titles, UI improvements, and platform features. Running an outdated version means missing out on the latest content and innovations the Is7 team has built for you." },
              { title: "Security Patches", desc: "Cybersecurity threats evolve constantly. Is7 Game updates include patches that protect your account, personal information, and financial data against newly discovered vulnerabilities." },
              { title: "Performance Gains", desc: "Each release optimizes code, reduces memory usage, and improves loading speeds. Updating ensures you get the smoothest, most responsive experience your device can deliver." },
            ].map((item, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Update Methods */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How to Update Is7 Game</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Method 1: In-App Update</h3>
              <p className="text-gray-600 mb-3">The easiest way. When a new version is available, Is7 Game displays a notification banner on the home screen. Tap &quot;Update Now&quot; and the app downloads and installs the update automatically. Your account data, balance, and settings are fully preserved during the process.</p>
              <p className="text-gray-600 text-sm">This method requires an active internet connection and approximately 71 MB of temporary storage for the download.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Method 2: Manual APK Download</h3>
              <p className="text-gray-600 mb-3">If in-app updates are not working, download the latest APK from Is7gamee.com. Install it over the existing version — Android will recognize it as an update and preserve all your data. No need to uninstall the old version first.</p>
              <p className="text-gray-600 text-sm">Useful when you have limited in-app connectivity or want to share the update file with friends offline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Update Schedule */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Is7 Game Update Schedule</h2>
          <div className="max-w-2xl mx-auto">
            <table className="info-table w-full">
              <tbody>
                <tr><td className="font-semibold">Minor Updates (bug fixes)</td><td>Every 1–2 weeks</td></tr>
                <tr><td className="font-semibold">Feature Updates</td><td>Monthly</td></tr>
                <tr><td className="font-semibold">Major Version Updates</td><td>Quarterly</td></tr>
                <tr><td className="font-semibold">Security Hotfixes</td><td>As needed (within 24 hours of discovery)</td></tr>
                <tr><td className="font-semibold">Notification Method</td><td>In-app banner + push notification</td></tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_update_cta" className="btn-primary px-8 py-3">
              Update Is7 Game Now
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Update Troubleshooting</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "Update download stuck at 0%", a: "Check your internet connection. Switch between Wi-Fi and mobile data. If the issue persists, clear the Is7 app cache from Settings → Apps → Is7 Game → Storage → Clear Cache, then try again." },
              { q: "Installation failed after download", a: "Ensure you have at least 100 MB of free storage. If storage is not the issue, try downloading the APK manually from this website and installing it directly." },
              { q: "Lost my data after update", a: "This should not happen with standard updates. If you notice missing data, log out and log back in — your account data syncs from the server. If the issue continues, contact Is7 support via in-app chat." },
            ].map((item, i) => (
              <div key={i} className="card-static p-4">
                <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-game-latest-version" className="btn-outline">Latest Version</Link>
            <Link href="/is7-game-apk-download" className="btn-outline">APK Download</Link>
            <Link href="/is7-game-install" className="btn-outline">Install Guide</Link>
            <Link href="/is7-game-2026" className="btn-outline">Is7 in 2026</Link>
            <Link href="/is7" className="btn-outline">About Is7</Link>
          </div>
        </div>
      </section>
    </>
  );
}
