import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game APK Download – Full Version History, Changelog & Rollback Guide",
  description: "Complete Is7 Game APK version history from v1.0 to v2.1.5. See what changed in every release, how to roll back to older versions, how auto-updates work, and how to join the beta testing program.",
  keywords: ["Is7 Game APK download", "Is7 Game APK download free", "Is7 Game APK download Android", "Is7 Game APK download 2026", "Is7 Game APK safe download"],
  openGraph: {
    title: "Is7 Game APK Download – Full Version History & Changelog",
    description: "Every Is7 Game APK version from v1.0 to v2.1.5 — changelogs, rollback guide, beta program, and auto-update details.",
    url: "https://Is7gamee.com/is7-game-apk-download",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game APK Download" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game APK Download – Version History & Changelog", description: "Full Is7 version history, rollback instructions, and beta testing program.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-apk-download" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game APK Download", item: "https://Is7gamee.com/is7-game-apk-download" },
  ],
};

export default function Is7GameApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game APK Download</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Game APK Download</span> – Version History & Changelog
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Is7 Game has evolved significantly since its initial release. This page documents the complete version history from v1.0 through the current v2.1.5, including every major feature addition, bug fix, and security patch. You will also find instructions for rolling back to a previous version, details on how auto-updates work, and information about joining the Is7 beta testing program to get new features before the public release.
          </p>
          <TrackedCTALink location="is7_game_apk_download_cta" className="btn-cta text-lg px-10 py-4">
            Download Is7 Game APK
          </TrackedCTALink>
        </div>
      </section>

      {/* Version History */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Complete Version History – v1.0 to v2.1.5</h2>
          <div className="max-w-3xl mx-auto">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left font-semibold p-3">Version</th>
                  <th className="text-left font-semibold p-3">Release Date</th>
                  <th className="text-left font-semibold p-3">Key Changes</th>
                  <th className="text-left font-semibold p-3">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>v2.1.5</td><td>Jun 28, 2026</td><td>Performance boost, 12 new slot games, notification bug fix</td><td>Feature + Fix</td></tr>
                <tr><td>v2.1.0</td><td>Jun 14, 2026</td><td>New tournament system, improved live dealer UI, leaderboard redesign</td><td>Major Feature</td></tr>
                <tr><td>v2.0.3</td><td>May 30, 2026</td><td>Security patch, Thai language update, crash fix on Android 14</td><td>Security + Fix</td></tr>
                <tr><td>v2.0.1</td><td>May 15, 2026</td><td>Added esports betting section, faster login flow, token refresh fix</td><td>Feature + Fix</td></tr>
                <tr><td>v2.0.0</td><td>Apr 28, 2026</td><td>Major UI refresh, dark mode support, 20 new games, architecture upgrade</td><td>Major Release</td></tr>
                <tr><td>v1.5.2</td><td>Mar 12, 2026</td><td>Payment gateway update, deposit bonus automation, Vietnamese language added</td><td>Feature + Fix</td></tr>
                <tr><td>v1.5.0</td><td>Feb 20, 2026</td><td>Live casino expansion (15 new tables), biometric login, referral system</td><td>Major Feature</td></tr>
                <tr><td>v1.3.1</td><td>Jan 08, 2026</td><td>Crash fix for Samsung Galaxy A-series, loading speed improvement</td><td>Bug Fix</td></tr>
                <tr><td>v1.3.0</td><td>Dec 18, 2025</td><td>Arcade game category added, push notification redesign, 8 new slots</td><td>Feature</td></tr>
                <tr><td>v1.1.0</td><td>Nov 02, 2025</td><td>Sports betting integration, odds display, multi-bet support</td><td>Major Feature</td></tr>
                <tr><td>v1.0.1</td><td>Oct 14, 2025</td><td>Login stability fix, OTP delivery improvement, minor UI corrections</td><td>Bug Fix</td></tr>
                <tr><td>v1.0.0</td><td>Oct 01, 2025</td><td>Initial public release — slots, basic live casino, account system</td><td>Initial Release</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Rollback Instructions */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How to Roll Back to a Previous Version</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              Most users should always run the latest version of Is7 Game for the best performance and security. However, occasionally a new update may introduce a bug that specifically affects your device model or Android version. If you experience a regression after updating, here is how to roll back safely:
            </p>
            <div className="space-y-4">
              {[
                { step: "1", title: "Uninstall the Current Version", desc: "Go to Settings > Apps > Is7 Game and tap Uninstall. This removes the current APK and all cached session data. Your account data is stored server-side, so you will not lose your balance, game history, or bonuses." },
                { step: "2", title: "Request the Previous Version APK", desc: "Contact Is7 support via the official Telegram channel or live chat on Is7gamee.com. Specify which version you need (e.g., v2.0.3) and your device model. The support team will provide a direct download link for that specific APK within a few hours." },
                { step: "3", title: "Install the Older APK", desc: "Download and install the older APK file following the standard sideloading process. Ensure 'Install from Unknown Sources' is enabled for your file manager. The older APK will install without issues because Android does not enforce version downgrades for sideloaded apps." },
                { step: "4", title: "Disable Auto-Update Until Fixed", desc: "After rolling back, turn off auto-update in the Is7 app settings so you are not automatically upgraded back to the problematic version. Report the specific bug to Is7 support so it can be resolved in the next patch release." },
              ].map((s, i) => (
                <div key={i} className="card-static flex items-center gap-4 p-4">
                  <div className="step-number flex-shrink-0">{s.step}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                    <p className="text-gray-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Auto-Updates & Beta Program */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Auto-Updates & Beta Testing Program</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-static p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">How Auto-Updates Work</h3>
              <p className="text-gray-700 mb-3">
                Is7 Game checks for new APK versions each time the app launches. If a new version is available, a non-intrusive banner appears at the top of the home screen showing the version number and a brief changelog summary. Tapping the banner takes you directly to the download page for the new APK.
              </p>
              <p className="text-gray-700">
                Updates are never installed automatically without your permission — Is7 always requires a manual tap to begin the download. This design choice respects users with limited data plans and prevents unexpected interruptions during gaming sessions. Critical security updates show a more prominent prompt, but installation is still always your choice.
              </p>
            </div>
            <div className="card-static p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Join the Beta Testing Program</h3>
              <p className="text-gray-700 mb-3">
                Is7 runs a structured beta testing program where volunteer players get access to new versions 1–2 weeks before public release. Beta testers receive exclusive early-access rewards and a special "Beta Tester" badge visible on their profile. In exchange, they submit bug reports and feedback through a dedicated in-app channel.
              </p>
              <p className="text-gray-700">
                To join the beta program, register your interest through the Is7 Telegram community or contact customer support. Beta APKs are distributed through a separate, clearly labeled download link. Beta builds may contain bugs — they are intended for users comfortable with early-access software. A stable production APK is always available as a fallback.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_apk_download_cta" className="btn-cta text-lg px-10 py-4">
              Download Is7 Game APK Now
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">See Also</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-apk" className="btn-outline">Is7 APK</Link>
            <Link href="/is7-game-apk" className="btn-outline">Is7 Game APK</Link>
            <Link href="/is7-game-latest-version" className="btn-outline">Latest Version</Link>
            <Link href="/is7-game-update" className="btn-outline">Update Guide</Link>
            <Link href="/is7-game-install" className="btn-outline">Install Guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}
