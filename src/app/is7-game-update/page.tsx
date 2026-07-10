import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Update – Auto-Update System, Patch Notes & Troubleshooting",
  description: "Learn how Is7 Game's auto-update system works, the Tuesday release schedule, the difference between hotfixes and major updates, data usage during downloads, and how to fix stuck or failed updates.",
  keywords: ["Is7 Game update", "Is7 Game auto-update", "Is7 Game patch notes", "Is7 update schedule", "Is7 Game update failed", "Is7 update troubleshooting"],
  openGraph: {
    title: "Is7 Game Update – Auto-Update System & Patch Notes",
    description: "How Is7 Game auto-updates work, Tuesday patch schedule, and fix guides for stuck downloads.",
    url: "https://Is7gamee.com/is7-game-update",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Update System" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game Auto-Update & Patch Notes", description: "Update schedule, hotfix vs major release, and troubleshooting guide.", images: ["/og-image.png"] },
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
            <span className="gradient-text">Is7 Game Update</span> – Auto-Update System &amp; Patch Notes
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Is7 Game ships updates on a predictable schedule, but the update system itself has layers most players never think about. This page explains exactly how the auto-update notification triggers, what happens in the background when a download starts, how hotfixes differ from full releases, and gives you a practical fix for every common update failure — from a stuck download to an &quot;insufficient storage&quot; error.
          </p>
          <TrackedCTALink location="is7_game_update_cta" className="btn-cta text-lg px-10 py-4">
            Get Latest Update
          </TrackedCTALink>
        </div>
      </section>

      {/* How Auto-Update Works */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How the Auto-Update Notification Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Version Check on Launch", desc: "Every time you open Is7 Game, the app silently pings the update server and compares your installed build number against the latest available. This check takes under 200 milliseconds and has zero impact on your game experience. If a new version exists, a banner appears within five seconds of the home screen loading." },
              { title: "Background Download", desc: "Once you tap 'Update Now,' the download runs in the background so you can keep playing your current session. A small progress indicator in the status bar shows download progress. The app does not force a restart until the download is 100% complete — you choose when to apply it." },
              { title: "Silent Install & Restart", desc: "The installer applies the update package over the existing installation. No data is deleted. After the install completes, Is7 Game prompts you to restart the app — a process that takes roughly eight seconds. Your session, balance, and active bonuses are fully restored on the next launch." },
            ].map((item, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Update Schedule */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">The Tuesday Update Schedule</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Is7 Game follows a structured release calendar. Standard feature updates and minor patches ship every Tuesday at 02:00 UTC, a low-traffic window chosen to minimise disruption for players in Southeast Asian time zones. Understanding the release types helps you know what to expect each week.
          </p>
          <div className="max-w-2xl mx-auto">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left font-semibold p-3">Release Type</th>
                  <th className="text-left font-semibold p-3">Frequency</th>
                  <th className="text-left font-semibold p-3">Typical Size</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Security Hotfix</td><td>Within 24 h of discovery</td><td>2–5 MB patch</td></tr>
                <tr><td className="font-semibold">Bug-Fix Minor</td><td>Every Tuesday (alternate weeks)</td><td>5–15 MB delta</td></tr>
                <tr><td className="font-semibold">Feature Update</td><td>Every Tuesday (primary weeks)</td><td>15–30 MB delta</td></tr>
                <tr><td className="font-semibold">Major Version</td><td>Quarterly (March, June, Sept, Dec)</td><td>Full APK ~71 MB</td></tr>
                <tr><td className="font-semibold">Push Notification Sent</td><td>All release types</td><td>—</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mt-8">
            Delta updates — the small patch files sent for minor and feature releases — only contain the files that changed. This is why a feature update that adds three new games might only be 18 MB even though the full app is 71 MB. Major version updates ship a fresh APK because enough files have changed that a delta would be no smaller than the full package.
          </p>
        </div>
      </section>

      {/* Hotfix vs Major Update */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Hotfix vs Major Update – What Is the Difference?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Security Hotfix</h3>
              <p className="text-gray-600 mb-3">A hotfix targets a single specific vulnerability or crash. It is the smallest possible change — sometimes just one or two patched files — and is deployed outside the Tuesday schedule whenever a critical issue is confirmed. Hotfixes do not add features or change the UI. They are applied automatically if auto-update is enabled, and most players will not notice anything beyond a brief restart prompt.</p>
              <p className="text-gray-600 text-sm">Example: The December 2025 hotfix patched a notification handler edge case that could cause a crash on Android 14 devices. It was 3.1 MB and deployed within 11 hours of discovery.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Major Version Update</h3>
              <p className="text-gray-600 mb-3">Major updates (e.g., v1.x to v2.x) involve significant architecture changes, new engine components, or substantial UI redesigns. They ship as a full APK rather than a delta patch and may change minimum device requirements. Major updates always include a migration step that runs on first launch to bring your local settings in line with the new format.</p>
              <p className="text-gray-600 text-sm">Major updates are always announced at least two weeks in advance via push notification and in-app banner, giving players time to free up storage and read the change notes.</p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-6">
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">How to Enable or Disable Auto-Updates</h3>
              <p className="text-gray-600 mb-3">Auto-updates are enabled by default. To manage them: open Is7 Game → Profile → Settings → App Updates. You can choose from three modes: <strong>Auto (default)</strong> — downloads and installs updates automatically on Wi-Fi; <strong>Notify Only</strong> — sends a push notification when an update is ready but waits for you to tap Install; or <strong>Manual</strong> — no notifications, you check for updates yourself from the Settings screen. Disabling auto-updates does not affect security hotfixes, which are always applied to protect your account and financial data.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_update_cta" className="btn-primary px-8 py-3">
              Update Is7 Game Now
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* Data Usage & Troubleshooting */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Data Usage &amp; Update Troubleshooting</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Is7 Game auto-updates default to Wi-Fi only to protect your mobile data allowance. A typical Tuesday feature update uses between 15 and 30 MB. If you need to update on mobile data, go to Settings → App Updates → Allow Mobile Data. Below are fixes for the most common update problems.
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "Download stuck at 0% or freezes mid-way", a: "The most common cause is a dropped connection. Switch between Wi-Fi and mobile data, then tap Retry in the update banner. If the download is stuck above 50%, do not cancel — wait two minutes as the CDN may be recovering. Cancelling and restarting at this point causes the full file to re-download from the beginning." },
              { q: "Update failed — installation error", a: "This usually means a previous version's files are partially corrupted. Go to Settings → Apps → Is7 Game → Storage → Clear Cache (not Clear Data). Then download the APK manually from this page and install it. The manual APK performs a full integrity check before writing any files." },
              { q: "Insufficient storage — cannot install update", a: "Is7 Game v2.1.5 needs at least 150 MB free. Clear the app cache first (Settings → Apps → Is7 Game → Clear Cache), which frees 30–80 MB immediately. If you still need space, delete offline media files from your gallery or other apps. You do not need to uninstall Is7 Game — the update installs over the existing version." },
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
