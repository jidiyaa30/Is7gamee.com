import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 App Download – Get the Official Is7 Gaming App on Android",
  description: "Download the Is7 app for Android. Lightweight, secure, and feature-rich. Learn about app permissions, data usage, and how Is7 compares to other gaming apps.",
  keywords: ["Is7 App download", "Is7 app", "Is7 app Android", "Is7 app free", "download Is7 app", "Is7 gaming app"],
  openGraph: {
    title: "Is7 App Download – Get the Official Is7 Gaming App",
    description: "Download the Is7 app for Android. Lightweight, secure, and feature-rich.",
    url: "https://Is7gamee.com/is7-app-download",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 App Download" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 App Download", description: "Get the official Is7 gaming app for Android.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-app-download" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 App Download", item: "https://Is7gamee.com/is7-app-download" },
  ],
};

export default function Is7AppDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 App Download</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 App Download</span> – Your Gaming Companion
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The Is7 app is more than just a game launcher — it is a complete gaming ecosystem packed into a single lightweight application. Download the Is7 app and carry 500+ premium games in your pocket.
          </p>
          <TrackedCTALink location="is7_app_download_cta" className="btn-cta text-lg px-10 py-4">
            Download Is7 App
          </TrackedCTALink>
        </div>
      </section>

      {/* App vs Browser */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Is7 App vs. Mobile Browser</h2>
          <div className="max-w-3xl mx-auto">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left font-semibold p-3">Feature</th>
                  <th className="text-left font-semibold p-3">Is7 App</th>
                  <th className="text-left font-semibold p-3">Browser</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Load Speed</td><td>Instant (cached)</td><td>Depends on connection</td></tr>
                <tr><td>Push Notifications</td><td>Yes</td><td>Limited</td></tr>
                <tr><td>Offline Access</td><td>Partial (menus & history)</td><td>No</td></tr>
                <tr><td>Game Performance</td><td>Optimized native rendering</td><td>Standard WebView</td></tr>
                <tr><td>Biometric Login</td><td>Fingerprint & Face ID</td><td>Not available</td></tr>
                <tr><td>Auto-Updates</td><td>Yes (in-app prompt)</td><td>N/A</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* App Permissions */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">App Permissions Explained</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              The Is7 app requests only the permissions it genuinely needs to function. Here is a transparent breakdown of each permission and why it is required:
            </p>
            <div className="space-y-4">
              {[
                { perm: "Internet Access", why: "Required to connect to game servers, process transactions, and sync your account data in real-time." },
                { perm: "Storage (Read/Write)", why: "Used to save the APK file during download, cache game assets for faster loading, and store offline data like settings and game history." },
                { perm: "Notifications", why: "Optional permission that enables push alerts for bonuses, tournament reminders, and important account updates. You can decline or revoke this at any time." },
                { perm: "Camera (Optional)", why: "Only requested if you choose to upload a profile photo or scan a QR code for login. Never activated in the background." },
              ].map((p, i) => (
                <div key={i} className="card-static p-4">
                  <h3 className="font-semibold text-primary mb-1">{p.perm}</h3>
                  <p className="text-gray-600">{p.why}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Usage */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Data Usage & Performance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-static text-center p-4">
              <h3 className="text-3xl font-bold text-primary mb-2">71 MB</h3>
              <p className="text-gray-600">Initial app size — smaller than most social media apps</p>
            </div>
            <div className="card-static text-center p-4">
              <h3 className="text-3xl font-bold text-primary mb-2">~5 MB/hr</h3>
              <p className="text-gray-600">Average data consumption during active gameplay</p>
            </div>
            <div className="card-static text-center p-4">
              <h3 className="text-3xl font-bold text-primary mb-2">&lt;3% / hr</h3>
              <p className="text-gray-600">Battery drain — optimized for extended gaming sessions</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_app_download_cta" className="btn-primary px-8 py-3">
              Get the Is7 App
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related Pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-game-app" className="btn-outline">Is7 Game App</Link>
            <Link href="/is7-apk" className="btn-outline">Is7 APK</Link>
            <Link href="/download" className="btn-outline">Download</Link>
            <Link href="/is7-game-android" className="btn-outline">Android Guide</Link>
            <Link href="/is7-game-register" className="btn-outline">Register</Link>
          </div>
        </div>
      </section>
    </>
  );
}
