import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Download Is7 – Official Link & Complete Setup Walkthrough",
  description: "Download Is7 from the official source. This walkthrough covers everything from pre-download checks to your first game session. Compatible with all Android 5.0+ devices.",
  keywords: ["download Is7", "download Is7 game", "download Is7 APK", "get Is7", "Is7 official download", "Is7 setup"],
  openGraph: {
    title: "Download Is7 – Official Link & Complete Setup Walkthrough",
    description: "Download Is7 from the official source. Complete setup walkthrough included.",
    url: "https://Is7gamee.com/download-is7",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Download Is7" }],
  },
  twitter: { card: "summary_large_image", title: "Download Is7 – Official Link & Setup Guide", description: "Download Is7 and set up your account in minutes.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/download-is7" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Download Is7", item: "https://Is7gamee.com/download-is7" },
  ],
};

export default function DownloadIs7Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Download Is7</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Download Is7</span> – Start Your Gaming Journey
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            This page is your complete walkthrough for downloading Is7, setting up the app, and launching your first gaming session. Follow along step by step and you will be playing within five minutes.
          </p>
          <TrackedCTALink location="download_is7_cta" className="btn-cta text-lg px-10 py-4">
            Download Is7
          </TrackedCTALink>
        </div>
      </section>

      {/* Pre-Download Checklist */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Pre-Download Checklist</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">Before you download Is7, run through this quick checklist to ensure a smooth experience:</p>
            <div className="space-y-3">
              {[
                "Android version is 5.0 or higher (Settings → About Phone → Android Version)",
                "At least 100 MB of free storage available",
                "Stable internet connection (Wi-Fi recommended)",
                "Battery level above 20%",
                "Browser or file manager has 'Install Unknown Apps' permission enabled",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-primary-50 rounded-lg">
                  <span className="text-primary font-bold text-lg">☐</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Walkthrough */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Complete Setup Walkthrough</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3"><span className="text-primary mr-2">Phase 1:</span>Download</h3>
              <p className="text-gray-700 mb-2">Tap the download button at the top of this page. You will be taken to the official Is7 distribution portal where the APK file (71 MB) begins downloading automatically. On most connections, this takes 30–60 seconds.</p>
              <p className="text-gray-600 text-sm">If the download does not start automatically, look for a manual download link on the portal page.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3"><span className="text-primary mr-2">Phase 2:</span>Install</h3>
              <p className="text-gray-700 mb-2">Once the APK has finished downloading, tap the notification or navigate to your Downloads folder. Tap the Is7 APK file and select &quot;Install&quot; when prompted. Android will verify the package signature and complete the installation in a few seconds.</p>
              <p className="text-gray-600 text-sm">If you see a Play Protect warning, tap &quot;Install Anyway.&quot; The Is7 APK is safe and verified.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3"><span className="text-primary mr-2">Phase 3:</span>Register & Configure</h3>
              <p className="text-gray-700 mb-2">Open Is7 from your home screen. Tap &quot;Register&quot; and enter your phone number or email address. You will receive an OTP within seconds — enter it to verify your account. Set a strong password, choose your preferred language, and optionally enable biometric login.</p>
              <p className="text-gray-600 text-sm">Already have an account? Tap &quot;Login&quot; instead and enter your credentials.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3"><span className="text-primary mr-2">Phase 4:</span>Play</h3>
              <p className="text-gray-700 mb-2">You are in! Browse the game library, claim your welcome bonus from the Promotions tab, and start playing any of the 500+ available titles. Use the search bar to find specific games or explore curated collections on the home screen.</p>
              <p className="text-gray-600 text-sm">Pro tip: Favorite your top games for quick access from the sidebar menu.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="download_is7_cta" className="btn-primary px-8 py-3">
              Download Is7 Now
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Download Is7 – Common Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "Is Is7 available on iOS?", a: "Currently, Is7 is optimized for Android. iOS support is planned for late 2026. In the meantime, iOS users can access a limited web version through their mobile browser." },
              { q: "Do I need to pay to download Is7?", a: "No. The Is7 download is completely free. There are no hidden charges, subscription fees, or paywalls to access the app itself." },
              { q: "How often should I re-download Is7?", a: "You do not need to re-download. The app includes an auto-update feature that pushes the latest version directly to your device. Just tap 'Update' when prompted." },
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
          <h2 className="text-2xl font-bold text-center mb-8">More Pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-download" className="btn-outline">Is7 Download</Link>
            <Link href="/is7-apk" className="btn-outline">Is7 APK</Link>
            <Link href="/is7-game-install" className="btn-outline">Install Guide</Link>
            <Link href="/is7-register" className="btn-outline">Register</Link>
            <Link href="/is7-login" className="btn-outline">Login</Link>
            <Link href="/is7-game" className="btn-outline">Is7 Game</Link>
          </div>
        </div>
      </section>
    </>
  );
}
