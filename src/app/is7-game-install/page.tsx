import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Install – Complete Installation Guide & Troubleshooting",
  description: "Step-by-step Is7 Game installation guide for Android. Covers permissions, storage setup, common errors, and post-install optimization tips.",
  keywords: ["Is7 Game install", "install Is7 Game", "Is7 installation guide", "Is7 install Android", "Is7 Game setup", "Is7 install help"],
  openGraph: {
    title: "Is7 Game Install – Complete Installation Guide",
    description: "Step-by-step Is7 Game installation guide with troubleshooting tips.",
    url: "https://Is7gamee.com/is7-game-install",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Install" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game Install Guide", description: "Install Is7 Game on Android with our step-by-step guide.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-install" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game Install", item: "https://Is7gamee.com/is7-game-install" },
  ],
};

export default function Is7GameInstallPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game Install</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How to <span className="gradient-text">Install Is7 Game</span> on Android
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Already downloaded the Is7 APK? This guide covers everything from locating the file to completing the installation, granting permissions, and resolving common issues that might pop up along the way.
          </p>
          <TrackedCTALink location="is7_game_install_cta" className="btn-cta text-lg px-10 py-4">
            Download Is7 First
          </TrackedCTALink>
        </div>
      </section>

      {/* Installation Steps */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Installation Steps</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { step: "1", title: "Locate the Downloaded APK", desc: "Open your device's file manager app and navigate to the Downloads folder. The file is typically named 'is7game-latest.apk' or similar. Alternatively, pull down your notification shade and tap the completed download notification." },
              { step: "2", title: "Tap the APK File", desc: "Tapping the file triggers the Android package installer. If this is your first time sideloading an app, Android will prompt you to enable installation from unknown sources for the app that opened the file (usually your file manager or browser)." },
              { step: "3", title: "Grant Installation Permission", desc: "When prompted, toggle on 'Allow from this source' and tap Back. Then tap the APK file again. This time, Android will show the installation confirmation dialog with the app name and requested permissions." },
              { step: "4", title: "Review Permissions & Install", desc: "The Is7 Game app requests Internet, Storage, and optional Notification permissions. Review these and tap 'Install.' The installation process takes 5-10 seconds depending on your device speed." },
              { step: "5", title: "Handle Play Protect Warnings", desc: "Google Play Protect may show a warning for apps installed outside the Play Store. This is standard behavior for all sideloaded APKs. Tap 'Install Anyway' — the Is7 APK is safe and digitally signed." },
              { step: "6", title: "Open Is7 Game", desc: "Once installation completes, tap 'Open' to launch Is7 Game immediately, or find the Is7 icon on your home screen. The app will initialize on first launch, which may take a few extra seconds." },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="step-number flex-shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Errors */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Common Installation Errors & Fixes</h2>
          <div className="max-w-3xl mx-auto">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left font-semibold p-3">Error</th>
                  <th className="text-left font-semibold p-3">Cause</th>
                  <th className="text-left font-semibold p-3">Fix</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>&quot;App not installed&quot;</td><td>Unknown sources disabled</td><td>Enable in Settings → Security</td></tr>
                <tr><td>&quot;Parse error&quot;</td><td>Corrupted or incomplete download</td><td>Delete file and re-download</td></tr>
                <tr><td>&quot;Not enough storage&quot;</td><td>Insufficient free space</td><td>Free up 100+ MB and retry</td></tr>
                <tr><td>&quot;Package appears to be corrupt&quot;</td><td>Partial download</td><td>Use Wi-Fi and re-download</td></tr>
                <tr><td>&quot;Blocked by Play Protect&quot;</td><td>Standard sideload warning</td><td>Tap &quot;Install Anyway&quot;</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Post-Install Tips */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">After Installation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Re-disable Unknown Sources", desc: "For ongoing security, go back to Settings and disable 'Install from Unknown Sources' for your browser or file manager." },
              { title: "Pin Is7 to Home Screen", desc: "Long-press the Is7 icon and add it to your home screen for one-tap access to your games." },
              { title: "Enable Auto-Updates", desc: "Inside the Is7 app, go to Settings → Updates and enable auto-update notifications so you never miss a new version." },
            ].map((tip, i) => (
              <div key={i} className="card-static p-4">
                <h3 className="text-lg font-semibold mb-2 text-primary">{tip.title}</h3>
                <p className="text-gray-600">{tip.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_install_cta" className="btn-primary px-8 py-3">
              Get Is7 Game
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">More Help</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-apk-download" className="btn-outline">APK Download</Link>
            <Link href="/is7-game-apk" className="btn-outline">Is7 Game APK</Link>
            <Link href="/is7-game-update" className="btn-outline">Update Guide</Link>
            <Link href="/is7-game-android" className="btn-outline">Android Guide</Link>
            <Link href="/is7-game-register" className="btn-outline">Register</Link>
          </div>
        </div>
      </section>
    </>
  );
}
