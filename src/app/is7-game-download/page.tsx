import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Download – Complete Hub: All Methods, Stats & Verification",
  description: "The complete Is7 Game download hub. Compare direct link, QR code, Telegram bot, and friend share methods. 2M+ downloads, SHA-256 verified APK, and trust indicators from the Is7 team.",
  keywords: ["Is7 Game download", "Is7 Game download free", "Is7 Game download Android", "Is7 Game download 2026", "get Is7 Game"],
  openGraph: {
    title: "Is7 Game Download – Complete Hub: All Methods, Stats & Verification",
    description: "2M+ downloads. Download Is7 Game via direct link, QR code, Telegram bot, or friend share. SHA-256 verified.",
    url: "https://Is7gamee.com/is7-game-download",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Download" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game Download – 2M+ Players, All Methods Covered", description: "Pick your download method: direct, QR code, Telegram, or friend share. All verified.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-download" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game Download", item: "https://Is7gamee.com/is7-game-download" },
  ],
};

export default function Is7GameDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game Download</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Game Download</span> – Complete Hub
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Over 2 million players have downloaded Is7 Game since launch. This page is your single source of truth for every download method available — direct APK link, QR code scan, Telegram bot delivery, and peer-to-peer friend sharing. Every method delivers the same SHA-256 verified file, so you can choose the one that best fits your situation.
          </p>
          <TrackedCTALink location="is7_game_download_cta" className="btn-cta text-lg px-10 py-4">
            Download Is7 Game
          </TrackedCTALink>
        </div>
      </section>

      {/* Download Methods Comparison */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">All Download Methods – Compared in Detail</h2>
          <div className="max-w-3xl mx-auto mb-8">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left font-semibold p-3">Method</th>
                  <th className="text-left font-semibold p-3">Speed</th>
                  <th className="text-left font-semibold p-3">Best For</th>
                  <th className="text-left font-semibold p-3">Verified</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Direct APK Link</td><td>Fastest</td><td>All users — recommended default</td><td>Yes — SHA-256</td></tr>
                <tr><td>QR Code Scan</td><td>Fast</td><td>Desktop users switching to mobile</td><td>Yes — SHA-256</td></tr>
                <tr><td>Telegram Bot</td><td>Fast</td><td>Users who prefer Telegram for file delivery</td><td>Yes — SHA-256</td></tr>
                <tr><td>Friend Share (APK file)</td><td>Varies</td><td>Offline transfers, no internet needed</td><td>Verify manually</td></tr>
              </tbody>
            </table>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-2 text-primary">Direct APK Link</h3>
              <p className="text-gray-700">The direct link method connects you straight to the Is7 CDN, which automatically routes your request to the closest regional server. This is the fastest and most reliable method for the vast majority of users. Your browser downloads the APK in seconds, and you can install it immediately from the notifications tray or your Downloads folder.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-2 text-primary">QR Code Scan</h3>
              <p className="text-gray-700">If you discovered Is7 on a desktop browser and want to install it on your phone without typing a long URL, the QR code method is ideal. Open your phone camera or any QR scanner app, point it at the code displayed on this page, and you will be taken directly to the download link on your mobile device. The QR code is regenerated with each new APK release to always point to the latest version.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-2 text-primary">Telegram Bot Delivery</h3>
              <p className="text-gray-700">Is7 maintains an official Telegram bot that delivers the APK file directly to your Telegram chat. This method is popular among users who share the app with friends through Telegram groups, as the bot can send the file to multiple recipients at once. Search for the official Is7 bot on Telegram and type /download to receive the latest APK. Telegram also shows a file integrity check, giving you an additional layer of confidence.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-2 text-primary">Friend Share (APK File Transfer)</h3>
              <p className="text-gray-700">In areas with limited internet, players often share the Is7 APK directly between devices using Bluetooth, WiFi Direct, or file transfer apps like SHAREit and Xender. This works well but requires you to verify the file yourself. After receiving the APK from a friend, compare its SHA-256 checksum with the official one published on this page before installing. This ensures the file has not been tampered with during transfer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Stats & Trust */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Platform Trust Indicators</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {[
              { stat: "2M+", label: "Total Downloads", desc: "More than 2 million successful installs since the platform launched, across 30+ countries." },
              { stat: "4.8★", label: "User Rating", desc: "Average rating from verified player reviews collected over the past 12 months of operation." },
              { stat: "99.97%", label: "Install Success Rate", desc: "Nearly all downloads complete without errors when the official link and instructions are followed." },
            ].map((item, i) => (
              <div key={i} className="card-static text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <div className="font-semibold text-lg mb-2">{item.label}</div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">SHA-256 Checksum Verification</h3>
            <p className="text-gray-700 mb-4">
              Every Is7 Game APK release is published alongside its SHA-256 checksum — a unique 64-character fingerprint of the file. If even a single byte in the APK changes (for example, if someone injects malware or the file is corrupted during download), the checksum will not match. You can verify the checksum on Android using apps like HashDroid or MT Manager. Simply compute the SHA-256 hash of the downloaded file and compare it to the value published here. A matching checksum means you have an authentic, unmodified Is7 Game APK.
            </p>
            <p className="text-gray-700">
              The current SHA-256 for Is7 Game v2.1.5 is published in our security notes, updated with every release. This practice is standard in open-source software and is now adopted by Is7 to give players maximum confidence in every download.
            </p>
          </div>
        </div>
      </section>

      {/* After Download */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">After Downloading Is7 Game</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { title: "Create Your Account", desc: "Register with your phone number or email. Verification takes under 30 seconds via OTP." },
              { title: "Claim Your Welcome Bonus", desc: "New players receive a generous welcome package including bonus credits and free spins." },
              { title: "Explore the Game Library", desc: "Browse 500+ games across slots, live tables, sports, arcade, and more. Use filters to find your favorites." },
              { title: "Set Up Notifications", desc: "Enable push notifications to stay informed about new games, promotions, and tournament schedules." },
            ].map((item, i) => (
              <div key={i} className="card-static flex items-center gap-4 p-4">
                <div className="step-number flex-shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_download_cta" className="btn-primary px-8 py-3">
              Download Is7 Game Now
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Explore More</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-apk" className="btn-outline">Is7 APK</Link>
            <Link href="/is7-game-install" className="btn-outline">Install Guide</Link>
            <Link href="/is7-game-latest-version" className="btn-outline">Latest Version</Link>
            <Link href="/is7-game-register" className="btn-outline">Register</Link>
            <Link href="/is7-game-login" className="btn-outline">Login</Link>
            <Link href="/is7-game-free" className="btn-outline">Free Download</Link>
          </div>
        </div>
      </section>
    </>
  );
}
