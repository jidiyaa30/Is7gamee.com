import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game APK – Download the Full Gaming Package for Android",
  description: "Download the Is7 Game APK and access 500+ premium games on your Android device. Step-by-step guide, system requirements, and troubleshooting tips included.",
  keywords: ["Is7 Game APK", "Is7 Game APK download", "Is7 Game APK Android", "Is7 Game APK free", "Is7 Game APK 2026"],
  openGraph: {
    title: "Is7 Game APK – Download the Full Gaming Package for Android",
    description: "Download the Is7 Game APK and access 500+ premium games on your Android device.",
    url: "https://Is7gamee.com/is7-game-apk",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game APK" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game APK – Full Gaming Package for Android", description: "Download Is7 Game APK for 500+ premium games.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-apk" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game APK", item: "https://Is7gamee.com/is7-game-apk" },
  ],
};

export default function Is7GameApkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game APK</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Download <span className="gradient-text">Is7 Game APK</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The Is7 Game APK bundles the entire gaming platform into a single, lightweight Android package. One download gives you access to slots, live tables, sports, arcade, and more — no separate installs needed.
          </p>
          <TrackedCTALink location="is7_game_apk_cta" className="btn-cta text-lg px-10 py-4">
            Download Is7 Game APK
          </TrackedCTALink>
        </div>
      </section>

      {/* Why Is7 Game APK */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose the Is7 Game APK?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3">All-in-One Package</h3>
              <p className="text-gray-700 mb-4">
                Unlike other platforms that require multiple app downloads for different game categories, the Is7 Game APK contains everything. Slots, live casino, sports betting, arcade games, and lottery — all accessible from a single, unified interface. This saves storage space and simplifies your gaming experience.
              </p>
              <h3 className="text-xl font-semibold mb-3">Optimized for Performance</h3>
              <p className="text-gray-700">
                The Is7 Game APK uses lazy loading and dynamic asset delivery. Games load their resources on demand, meaning the initial APK stays small while the platform scales to hundreds of titles. Your device never feels sluggish because only the assets you need are kept in memory.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Regular Updates</h3>
              <p className="text-gray-700 mb-4">
                The Is7 development team pushes APK updates every 1–2 weeks. These updates include new games, security patches, performance improvements, and feature additions. The app notifies you when an update is available, and installing it takes under a minute.
              </p>
              <h3 className="text-xl font-semibold mb-3">Backward Compatible</h3>
              <p className="text-gray-700">
                The Is7 Game APK supports Android 5.0 all the way up to the latest Android 16. Whether you are on a budget phone or a flagship device, the APK adapts its rendering quality and feature set to deliver the best possible experience on your hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Steps */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How to Download Is7 Game APK</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { step: "1", title: "Tap the Download Button", desc: "Click the download button above to visit the official Is7 distribution page." },
              { step: "2", title: "Allow Unknown Sources", desc: "Go to Settings > Security > enable 'Install from Unknown Sources' for your browser." },
              { step: "3", title: "Save the APK", desc: "The Is7 Game APK file (71 MB) will download to your device in under a minute." },
              { step: "4", title: "Install & Launch", desc: "Open the file, tap Install, wait a few seconds, then launch Is7 Game from your home screen." },
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
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_apk_cta" className="btn-primary px-8 py-3">
              Get Is7 Game APK
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Troubleshooting Common Issues</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "\"App not installed\" error", a: "This usually means unknown sources is not enabled. Go to Settings > Security and toggle the option on for your browser or file manager." },
              { q: "Download keeps failing", a: "Switch to a Wi-Fi connection and clear your browser cache. If using Chrome, try downloading with a different browser like Firefox." },
              { q: "Play Protect warning appears", a: "This is normal for sideloaded APKs. Tap 'Install Anyway' — the Is7 Game APK is verified safe and does not contain malware." },
              { q: "App crashes on launch", a: "Ensure your device meets the minimum requirements (Android 5.0+, 2 GB RAM). If the issue persists, reinstall the APK or contact Is7 support." },
            ].map((item, i) => (
              <div key={i} className="card-static p-4">
                <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">More Resources</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-apk" className="btn-outline">Is7 APK Info</Link>
            <Link href="/is7-apk-download" className="btn-outline">APK Download</Link>
            <Link href="/is7-game-install" className="btn-outline">Install Guide</Link>
            <Link href="/is7-game-latest-version" className="btn-outline">Latest Version</Link>
            <Link href="/is7-game-register" className="btn-outline">Register</Link>
          </div>
        </div>
      </section>
    </>
  );
}
