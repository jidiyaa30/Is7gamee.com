import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 APK Download – Step-by-Step Guide for All Android Devices",
  description: "Complete Is7 APK download guide with device-specific instructions for Samsung, Xiaomi, Oppo, Vivo, and more. Safe, fast, and free.",
  keywords: ["Is7 APK download", "download Is7 APK", "Is7 APK download guide", "Is7 APK Samsung", "Is7 APK Xiaomi", "Is7 APK free download"],
  openGraph: {
    title: "Is7 APK Download – Step-by-Step Guide for All Android Devices",
    description: "Complete Is7 APK download guide for Samsung, Xiaomi, Oppo, Vivo, and more.",
    url: "https://Is7gamee.com/is7-apk-download",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 APK Download Guide" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 APK Download Guide", description: "Device-specific Is7 APK download instructions.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-apk-download" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 APK Download", item: "https://Is7gamee.com/is7-apk-download" },
  ],
};

const deviceGuides = [
  { brand: "Samsung Galaxy", path: "Settings → Biometrics & Security → Install Unknown Apps → select your browser → Allow", note: "On One UI 6+, you may also find this under Settings → Apps → Special Access → Install Unknown Apps." },
  { brand: "Xiaomi / Redmi / POCO", path: "Settings → Privacy Protection → Special Permissions → Install Unknown Apps → select browser → Allow", note: "MIUI may show an additional \"Security scan\" dialog — tap 'Install Anyway' after the scan completes." },
  { brand: "Oppo / Realme", path: "Settings → Privacy / Safety → Install Unknown Apps → enable for your browser", note: "ColorOS may block sideloading by default. You might need to disable 'Pure Mode' first in Settings → App Management." },
  { brand: "Vivo / iQOO", path: "Settings → Security → More Security Settings → Install from Unknown Sources → enable for browser", note: "Funtouch OS users should also check Settings → Apps & Permissions → Special App Access." },
  { brand: "Huawei / Honor (HMS)", path: "Settings → Security → More Settings → Install Apps from External Sources → enable", note: "Since HMS devices lack Google Play Protect, the APK installs directly without additional warnings." },
];

export default function Is7ApkDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 APK Download</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 APK Download</span> – Device-Specific Guide
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Different Android brands handle APK installation differently. This guide provides exact navigation paths for Samsung, Xiaomi, Oppo, Vivo, Huawei, and other popular brands so you can download and install the Is7 APK without confusion.
          </p>
          <TrackedCTALink location="is7_apk_download_cta" className="btn-cta text-lg px-10 py-4">
            Download Is7 APK
          </TrackedCTALink>
        </div>
      </section>

      {/* Device-Specific Guides */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Enable Unknown Sources by Device Brand</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {deviceGuides.map((g, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-xl font-semibold mb-2 text-primary">{g.brand}</h3>
                <p className="text-gray-700 mb-2"><strong>Path:</strong> {g.path}</p>
                <p className="text-gray-600 text-sm">{g.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Download Steps */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Universal Download Steps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Enable Sideloading", desc: "Follow the device-specific instructions above to allow APK installations from your browser." },
              { step: "2", title: "Download the APK", desc: "Tap the download button on this page. The Is7 APK (71 MB) will save to your Downloads folder." },
              { step: "3", title: "Install & Play", desc: "Open the APK from your notifications or file manager, tap Install, and launch Is7 Game." },
            ].map((s, i) => (
              <div key={i} className="card-static text-center p-4">
                <div className="step-number mx-auto">{s.step}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_apk_download_cta" className="btn-primary px-8 py-3">
              Download Now
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Download Safety Tips</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex gap-3"><span className="text-primary font-bold">✓</span><span className="text-gray-700">Always download the Is7 APK from <strong>Is7gamee.com</strong> or the official link provided on this page. Avoid third-party mirror sites.</span></li>
              <li className="flex gap-3"><span className="text-primary font-bold">✓</span><span className="text-gray-700">Verify the file size is approximately 71 MB. Significantly larger or smaller files may indicate a modified package.</span></li>
              <li className="flex gap-3"><span className="text-primary font-bold">✓</span><span className="text-gray-700">Use a stable Wi-Fi connection to prevent partial downloads that can corrupt the APK file.</span></li>
              <li className="flex gap-3"><span className="text-primary font-bold">✓</span><span className="text-gray-700">After installation, re-disable unknown sources for your browser to maintain device security.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related Pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-apk" className="btn-outline">Is7 APK Info</Link>
            <Link href="/is7-game-apk" className="btn-outline">Is7 Game APK</Link>
            <Link href="/is7-game-install" className="btn-outline">Install Guide</Link>
            <Link href="/is7-game-android" className="btn-outline">Android Guide</Link>
            <Link href="/download" className="btn-outline">Main Download</Link>
          </div>
        </div>
      </section>
    </>
  );
}
