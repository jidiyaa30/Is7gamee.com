import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game APK Download – Verified File, Zero Malware, Instant Access",
  description: "Download the Is7 Game APK safely. Verified checksum, zero malware, and compatible with all Android 5.0+ devices. Includes version comparison and changelog.",
  keywords: ["Is7 Game APK download", "Is7 Game APK download free", "Is7 Game APK download Android", "Is7 Game APK download 2026", "Is7 Game APK safe download"],
  openGraph: {
    title: "Is7 Game APK Download – Verified & Safe",
    description: "Download the verified Is7 Game APK. Zero malware, instant access.",
    url: "https://Is7gamee.com/is7-game-apk-download",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game APK Download" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game APK Download", description: "Verified, safe Is7 Game APK download.", images: ["/og-image.png"] },
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
            <span className="gradient-text">Is7 Game APK Download</span> – Verified & Secure
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Download the authentic Is7 Game APK with verified integrity. Every release on this page has been scanned, tested, and confirmed safe by the Is7 security team. No adware, no trackers, no compromises.
          </p>
          <TrackedCTALink location="is7_game_apk_download_cta" className="btn-cta text-lg px-10 py-4">
            Download Is7 Game APK
          </TrackedCTALink>
        </div>
      </section>

      {/* Version History */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Recent Version History</h2>
          <div className="max-w-3xl mx-auto">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left font-semibold p-3">Version</th>
                  <th className="text-left font-semibold p-3">Date</th>
                  <th className="text-left font-semibold p-3">Key Changes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>v2.1.5</td><td>Jun 28, 2026</td><td>Performance boost, 12 new slot games, bug fixes</td></tr>
                <tr><td>v4.2.0</td><td>Jun 14, 2026</td><td>New tournament system, improved live dealer UI</td></tr>
                <tr><td>v4.1.3</td><td>May 30, 2026</td><td>Security patch, Thai language update, crash fix on Android 14</td></tr>
                <tr><td>v4.1.2</td><td>May 15, 2026</td><td>Added esports betting, faster login flow</td></tr>
                <tr><td>v4.1.0</td><td>Apr 28, 2026</td><td>Major UI refresh, dark mode support, 20 new games</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How We Verify Each APK Release</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3">Automated Security Pipeline</h3>
              <p className="text-gray-700 mb-4">
                Every Is7 Game APK build goes through a multi-stage automated security pipeline. First, the source code is scanned for vulnerabilities using static analysis tools. Then the compiled APK is submitted to VirusTotal, which checks it against 70+ antivirus engines simultaneously. Only builds with zero detections are published.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Manual QA Testing</h3>
              <p className="text-gray-700 mb-4">
                After automated checks pass, the Is7 QA team manually tests the APK on at least 15 different Android devices spanning various manufacturers, screen sizes, and OS versions. They verify that every feature works correctly, no crashes occur, and the user experience meets Is7 standards before the release goes live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto text-center mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Download?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Tap the button below to download the latest verified Is7 Game APK. The file is 71 MB and installs in seconds. Your gaming adventure starts now.
          </p>
          <TrackedCTALink location="is7_game_apk_download_cta" className="btn-cta text-lg px-10 py-4">
            Download Is7 Game APK Now
          </TrackedCTALink>
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
