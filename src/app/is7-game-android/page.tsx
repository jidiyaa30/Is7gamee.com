import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Android – Optimized for Every Android Device",
  description: "Is7 Game is built for Android from the ground up. Learn about device compatibility, performance optimization, Android-specific features, and how to get the best experience.",
  keywords: ["Is7 Game Android", "Is7 Android app", "Is7 Android compatibility", "Is7 Android optimization", "Is7 Game Android 2026", "Is7 for Android"],
  openGraph: {
    title: "Is7 Game Android – Optimized for Every Device",
    description: "Is7 Game is built for Android. Device compatibility, optimization, and tips.",
    url: "https://Is7gamee.com/is7-game-android",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Android" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game for Android", description: "Built for Android from the ground up.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-android" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game Android", item: "https://Is7gamee.com/is7-game-android" },
  ],
};

export default function Is7GameAndroidPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game Android</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Game</span> for Android
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Is7 Game is engineered exclusively for Android, taking full advantage of the platform&apos;s hardware acceleration, notification system, and security features. Whether you have a flagship or a budget device, Is7 delivers a premium experience.
          </p>
          <TrackedCTALink location="is7_game_android_cta" className="btn-cta text-lg px-10 py-4">
            Download for Android
          </TrackedCTALink>
        </div>
      </section>

      {/* Compatibility */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Android Compatibility</h2>
          <div className="max-w-3xl mx-auto">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left font-semibold p-3">Android Version</th>
                  <th className="text-left font-semibold p-3">Support Level</th>
                  <th className="text-left font-semibold p-3">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Android 16 (2025)</td><td>Full</td><td>Latest features, best performance</td></tr>
                <tr><td>Android 14-15</td><td>Full</td><td>Excellent compatibility</td></tr>
                <tr><td>Android 12-13</td><td>Full</td><td>All features supported</td></tr>
                <tr><td>Android 10-11</td><td>Full</td><td>Stable, tested extensively</td></tr>
                <tr><td>Android 8-9</td><td>Supported</td><td>Minor UI differences</td></tr>
                <tr><td>Android 5-7</td><td>Basic</td><td>Core functions work, reduced visual effects</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Android-Specific Features */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Android-Specific Features</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Hardware Acceleration", desc: "Is7 Game leverages Android's GPU rendering pipeline for smooth animations and instant game transitions. OpenGL ES 3.0 support ensures high-quality graphics even on mid-range chipsets like Snapdragon 600 series and MediaTek Helio G-series." },
              { title: "Adaptive UI", desc: "The interface automatically adjusts to your screen size, resolution, and orientation. Whether you play on a 5-inch phone or a 12-inch tablet, Is7 Game uses every pixel effectively. Split-screen mode is also supported for multitasking." },
              { title: "Smart Notifications", desc: "Is7 uses Android's notification channels to categorize alerts into promotions, tournaments, account updates, and system messages. You can enable or disable each category independently from Android Settings without opening the app." },
              { title: "Biometric Integration", desc: "Deep integration with Android's BiometricPrompt API supports fingerprint scanners, face recognition, and iris scanning. Your login is as secure as your device's own lock screen — no separate biometric enrollment needed." },
            ].map((feat, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-xl font-semibold mb-3 text-primary">{feat.title}</h3>
                <p className="text-gray-600">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Tips */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Optimize Is7 Game on Your Android</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Close background apps before launching Is7 to free up RAM for smoother gameplay",
              "Enable 'Performance Mode' or 'Game Mode' in your phone settings if available (Samsung, Xiaomi, OnePlus)",
              "Connect to 5 GHz Wi-Fi for lowest latency in live table games",
              "Keep your Android OS updated — newer versions include performance and security improvements",
              "Clear Is7 app cache monthly (Settings → Apps → Is7 Game → Clear Cache) to prevent bloat",
              "Set Is7's graphics quality to 'Auto' to let the app detect your hardware capabilities",
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <span className="text-primary font-bold">→</span>
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_android_cta" className="btn-primary px-8 py-3">
              Get Is7 for Android
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-apk" className="btn-outline">Is7 APK</Link>
            <Link href="/is7-app-download" className="btn-outline">App Download</Link>
            <Link href="/is7-game-app" className="btn-outline">Is7 Game App</Link>
            <Link href="/is7-game-install" className="btn-outline">Install Guide</Link>
            <Link href="/download" className="btn-outline">Download</Link>
          </div>
        </div>
      </section>
    </>
  );
}
